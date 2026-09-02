"use client";

import { useEffect } from "react";
import type { SunoLocale } from "./translations";

const cdnBase = "https://res-cdn.tunee.ai/web_static_res/agent/images";

const typingText: Record<SunoLocale, string> = {
  en: "Create a warm cinematic track for a late-night drive.",
  ja: "夜のドライブに合う、温かく映画的な曲を作って。",
  es: "Crea una canción cinematográfica para conducir de noche.",
  pt: "Crie uma faixa cinematográfica para uma viagem noturna.",
  fr: "Créez un morceau cinématographique pour une virée nocturne.",
  de: "Erstelle einen warmen, filmischen Song für eine Nachtfahrt.",
  it: "Crea un brano cinematografico per un viaggio notturno.",
  ko: "늦은 밤 드라이브에 어울리는 따뜻한 영화풍 곡을 만들어 줘.",
  ru: "Создай тёплый кинематографичный трек для ночной поездки.",
  "zh-CN": "创作一首适合深夜开车的温暖电影感歌曲。",
  "zh-HK": "創作一首適合深夜駕車的溫暖電影感歌曲。",
};

const tracks = [
  ["It's Louder When It's Quiet", "R&B", "landing-community-1.webp", "landing-its-louder-when-its-quiet.mp4"],
  ["Look at This", "K-POP", "landing-community-2.webp", "landing-look-at-this.mp3"],
  ["Quite", "JAZZ", "landing-community-3.webp", "landing-quiet.mp4"],
  ["Je n'ose pas", "REGGAETON", "landing-community-4.webp", "landing-je-nose-pas.mp3"],
  ["Gibraltar Love Groove", "SOUL", "landing-community-9.webp", "landing-gibraltar-love-groove.mp4"],
  ["ミッドナイト Loveンダー", "NEO-CITY POP", "landing-community-6.webp", "landing-midnight-lavender.mp4"],
  ["Tunee's Self-Portrait Song", "JAPANESE CITY POP", "landing-community-7.jpg", "landing-tunees-self-portrait-song.mp3"],
  ["Heartbreak", "ALTERNATIVE R&B", "landing-community-8.jpg", "landing-heartbreak.mp3"],
  ["Titans of the Groove", "SOUL FUNK", "landing-community-5.webp", "landing-titans-of-the-groove.mp3"],
  ["Siren's Call", "DREAM POP", "landing-community-10.webp", "landing-sirens-call.mp3"],
] as const;

export default function SourceSectionInteractions({ locale }: { locale: SunoLocale }) {
  useEffect(() => {
    const controller = new AbortController();
    const timers: number[] = [];
    const intervals: number[] = [];
    const later = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(callback, delay);
      timers.push(timer);
      return timer;
    };

    const chat = document.querySelector<HTMLElement>('[data-sentry-component="ChatVisual"]');
    if (chat) {
      const input = chat.querySelector<HTMLParagraphElement>("p");
      const action = chat.querySelector<HTMLButtonElement>("button");
      if (input) {
        const cursor = document.createElement("span");
        cursor.className = "inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle";
        const textNode = document.createTextNode("");
        input.replaceChildren(textNode, cursor);
        let character = 0;

        const startTyping = () => {
          character = 0;
          textNode.data = "";
          cursor.style.visibility = "visible";
          const interval = window.setInterval(() => {
            character += 1;
            textNode.data = typingText[locale].slice(0, character);
            if (character >= typingText[locale].length) {
              window.clearInterval(interval);
              cursor.style.visibility = "hidden";
              action?.animate(
                [{ transform: "scale(1)" }, { transform: "scale(.94)" }, { transform: "scale(1.03)" }, { transform: "scale(1)" }],
                { duration: 420 },
              );
              later(startTyping, 2200);
            }
          }, 70);
          intervals.push(interval);
        };

        startTyping();
        const cursorInterval = window.setInterval(() => {
          if (character < typingText[locale].length) {
            cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
          }
        }, 520);
        intervals.push(cursorInterval);
      }
    }

    const directions = document.querySelector<HTMLElement>('[data-sentry-component="DirectionsVisual"]');
    if (directions) {
      const directionButton = directions.querySelector<HTMLElement>("div.bg-secondary");
      const cards = Array.from(directions.querySelectorAll<HTMLElement>("div.text-center"));
      const runDirections = () => {
        directionButton?.style.setProperty("opacity", ".35", "important");
        directionButton?.style.setProperty("transform", "translateY(-10px) scale(.96)", "important");
        cards.forEach((card) => {
          card.style.setProperty("opacity", ".18", "important");
          card.style.setProperty("transform", "translateY(20px) scale(.9)", "important");
        });
        later(() => {
          directionButton?.style.setProperty("opacity", "1", "important");
          directionButton?.style.setProperty("transform", "translateY(0) scale(1)", "important");
        }, 250);
        cards.forEach((card, index) => {
          later(() => {
            card.style.transition = "opacity .4s ease, transform .4s ease";
            card.style.setProperty("opacity", "1", "important");
            card.style.setProperty("transform", "translateY(0) scale(1)", "important");
          }, 650 + index * 600);
        });
        later(runDirections, 4500);
      };
      runDirections();
    }

    const deliver = document.querySelector<HTMLElement>('[data-sentry-component="DeliverVisual"]');
    if (deliver) {
      const video = deliver.querySelector<HTMLVideoElement>("video");
      const playButton = deliver.querySelector<HTMLButtonElement>('[aria-label="Play video preview"]');
      const overlay = playButton?.parentElement;
      const showOverlay = () => overlay?.style.removeProperty("display");
      const hideOverlay = () => overlay?.style.setProperty("display", "none");
      playButton?.addEventListener("click", () => {
        video?.play().then(hideOverlay).catch(showOverlay);
      }, { signal: controller.signal });
      video?.addEventListener("click", () => {
        if (video.paused) video.play().then(hideOverlay).catch(showOverlay);
        else {
          video.pause();
          showOverlay();
        }
      }, { signal: controller.signal });
      video?.addEventListener("ended", showOverlay, { signal: controller.signal });
    }

    const community = document.querySelector<HTMLElement>('[data-sentry-component="CommunitySection"]');
    let communityAudio: HTMLAudioElement | null = null;
    if (community) {
      const carousel = community.querySelector<HTMLElement>('div[style*="perspective:1000px"]');
      const cards = carousel
        ? Array.from(carousel.children).filter((element): element is HTMLElement => element instanceof HTMLElement && Boolean(element.querySelector("img")))
        : [];
      const previous = community.querySelector<HTMLButtonElement>('[aria-label="Previous"]');
      const next = community.querySelector<HTMLButtonElement>('[aria-label="Next"]');
      const play = community.querySelector<HTMLButtonElement>('[aria-label="Play audio"]');
      const background = community.querySelector<HTMLImageElement>("div.absolute.inset-0.z-0 img");
      let activeIndex = 7;

      const stopAudio = () => {
        communityAudio?.pause();
        communityAudio = null;
        if (play) {
          play.textContent = "▶";
          play.style.fontSize = "22px";
          play.setAttribute("aria-label", "Play audio");
        }
      };

      const renderTrack = () => {
        stopAudio();
        cards.forEach((card, position) => {
          const trackIndex = (activeIndex + position - 2 + tracks.length) % tracks.length;
          const track = tracks[trackIndex];
          const image = card.querySelector<HTMLImageElement>("img");
          if (image) {
            image.src = `${cdnBase}/${track[2]}`;
            image.alt = track[0];
          }
          card.onclick = () => {
            activeIndex = trackIndex;
            renderTrack();
          };
        });
        const activeTrack = tracks[activeIndex];
        const title = cards[2]?.querySelector<HTMLElement>("h3");
        const genre = cards[2]?.querySelector<HTMLElement>("p.text-xs");
        if (title) title.textContent = activeTrack[0];
        if (genre) genre.textContent = activeTrack[1];
        if (background) {
          background.src = `${cdnBase}/${activeTrack[2]}`;
          background.alt = activeTrack[0];
        }
      };

      previous?.addEventListener("click", () => {
        activeIndex = (activeIndex - 1 + tracks.length) % tracks.length;
        renderTrack();
      }, { signal: controller.signal });
      next?.addEventListener("click", () => {
        activeIndex = (activeIndex + 1) % tracks.length;
        renderTrack();
      }, { signal: controller.signal });
      play?.addEventListener("click", (event) => {
        event.stopPropagation();
        if (communityAudio && !communityAudio.paused) {
          stopAudio();
          return;
        }
        const activeTrack = tracks[activeIndex];
        communityAudio = new Audio(`${cdnBase}/${activeTrack[3]}`);
        communityAudio.addEventListener("ended", stopAudio, { once: true });
        communityAudio.play().then(() => {
          if (play) {
            play.textContent = "❚❚";
            play.style.fontSize = "18px";
            play.setAttribute("aria-label", "Pause audio");
          }
        }).catch(stopAudio);
      }, { signal: controller.signal });
      renderTrack();
    }

    return () => {
      controller.abort();
      timers.forEach(window.clearTimeout);
      intervals.forEach(window.clearInterval);
      communityAudio?.pause();
    };
  }, [locale]);

  return null;
}
