"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const languages = [
  ["English", "/music-generator/suno-alternative"],
  ["日本語", "/ja/music-generator/suno-alternative"],
  ["Español", "/es/music-generator/suno-alternative"],
  ["Português", "/pt/music-generator/suno-alternative"],
  ["Français", "/fr/music-generator/suno-alternative"],
  ["Deutsch", "/de/music-generator/suno-alternative"],
  ["Italiano", "/it/music-generator/suno-alternative"],
  ["한국어", "/ko/music-generator/suno-alternative"],
  ["Русский", "/ru/music-generator/suno-alternative"],
  ["简体中文", "/zh-CN/music-generator/suno-alternative"],
  ["繁體中文", "/zh-HK/music-generator/suno-alternative"],
];

export default function StickyTryCta({ ctaLabel = "Try Tunee for free" }: { ctaLabel?: string }) {
  const [visible, setVisible] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const languageButton = document.querySelector<HTMLButtonElement>('[aria-label="change-language-button"]');

    const update = () => {
      const header = document.querySelector<HTMLElement>('[data-sentry-component="Header"]');
      header?.classList.toggle(styles.headerScrolled, window.scrollY > 8);

      const hero = document.getElementById("suno-hero");
      const finalCta = document.getElementById("suno-final-cta");
      if (!hero || !finalCta) return;
      setVisible(hero.getBoundingClientRect().bottom <= 0 && finalCta.getBoundingClientRect().top > window.innerHeight);
    };

    const toggleLanguageMenu = () => setLanguageOpen((open) => !open);
    const closeLanguageMenu = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!languageButton?.contains(target) && !languageMenuRef.current?.contains(target)) setLanguageOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLanguageOpen(false);
    };

    update();
    languageButton?.addEventListener("click", toggleLanguageMenu);
    document.addEventListener("mousedown", closeLanguageMenu);
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      document.querySelector<HTMLElement>('[data-sentry-component="Header"]')?.classList.remove(styles.headerScrolled);
      languageButton?.removeEventListener("click", toggleLanguageMenu);
      document.removeEventListener("mousedown", closeLanguageMenu);
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const languageButton = document.querySelector<HTMLButtonElement>('[aria-label="change-language-button"]');
    languageButton?.setAttribute("aria-expanded", String(languageOpen));
    languageButton?.setAttribute("data-state", languageOpen ? "open" : "closed");
  }, [languageOpen]);

  return (
    <>
      {languageOpen && (
        <div className={styles.languageMenu} ref={languageMenuRef} role="menu" aria-label="Languages">
          {languages.map(([label, href]) => (
            <a key={label} href={href} role="menuitem" onClick={() => setLanguageOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
      <div className={`${styles.stickyCta}${visible ? ` ${styles.stickyCtaVisible}` : ""}`}>
        <a className={styles.primaryCta} href="https://www.tunee.ai/">
          {ctaLabel} <b>→</b>
        </a>
      </div>
    </>
  );
}
