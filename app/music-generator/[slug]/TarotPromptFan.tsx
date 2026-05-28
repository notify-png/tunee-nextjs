"use client";

import { useState, useRef } from "react";
import s from "./page.module.css";

interface Prompt {
  title: string;
  text: string;
  tags: string[];
}

export default function TarotPromptFan({
  prompts,
  sectionTitle,
  sectionSub,
}: {
  prompts: Prompt[];
  sectionTitle: string;
  sectionSub: string;
}) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCopy = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1500);
    } catch {
      // fallback: silently fail
    }
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section className={s.section} id="prompts">
      <div className={s.wrap}>
        <h2 className={s.sectionTitle}>{sectionTitle}</h2>
        <p className={s.sectionSub}>{sectionSub}</p>
      </div>
      <div className={s.carouselOuter}>
        <button
          className={`${s.carouselBtn} ${s.carouselBtnLeft}`}
          onClick={() => scroll("left")}
          aria-label="Previous"
        >
          ‹
        </button>
        <div className={s.carouselTrack} ref={scrollRef}>
          {prompts.map((p, i) => (
            <div
              key={p.title}
              className={s.carouselCard}
              onClick={() => handleCopy(p.text, i)}
            >
              <span className={s.tarotNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={s.cardTitle}>{p.title}</h3>
              <p className={s.tarotText}>{p.text}</p>
              <div className={s.tarotFoot}>
                {p.tags.map((tag) => (
                  <span key={tag} className={s.badge}>{tag}</span>
                ))}
              </div>
              <span className={s.tarotCopy}>
                {copiedIdx === i ? "Copied!" : "Click to copy"}
              </span>
            </div>
          ))}
        </div>
        <button
          className={`${s.carouselBtn} ${s.carouselBtnRight}`}
          onClick={() => scroll("right")}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  );
}
