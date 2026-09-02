"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const languages = [
  ["English", "/music-generator/suno-alternative"],
  ["日本語", "https://www.tunee.ai/ja"],
  ["Español", "https://www.tunee.ai/es"],
  ["Português", "https://www.tunee.ai/pt"],
  ["Français", "https://www.tunee.ai/fr"],
  ["Deutsch", "https://www.tunee.ai/de"],
  ["Italiano", "https://www.tunee.ai/it"],
  ["한국어", "https://www.tunee.ai/ko"],
  ["Русский", "https://www.tunee.ai/ru"],
  ["简体中文", "https://www.tunee.ai/zh-CN"],
  ["繁體中文", "https://www.tunee.ai/zh-HK"],
];

export default function StickyTryCta() {
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
          Try Tunee for free <b>→</b>
        </a>
      </div>
    </>
  );
}
