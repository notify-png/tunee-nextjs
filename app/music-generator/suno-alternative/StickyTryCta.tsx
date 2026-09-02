"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function StickyTryCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("suno-hero");
      const finalCta = document.getElementById("suno-final-cta");
      if (!hero || !finalCta) return;
      setVisible(hero.getBoundingClientRect().bottom <= 0 && finalCta.getBoundingClientRect().top > window.innerHeight);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className={`${styles.stickyCta}${visible ? ` ${styles.stickyCtaVisible}` : ""}`}>
      <a className={styles.primaryCta} href="https://www.tunee.ai/">
        Try Tunee for free <b>→</b>
      </a>
    </div>
  );
}
