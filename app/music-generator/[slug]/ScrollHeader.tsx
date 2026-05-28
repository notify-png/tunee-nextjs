"use client";

import { useState, useEffect } from "react";
import s from "./page.module.css";

export default function ScrollHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${s.header} ${scrolled ? s.headerScrolled : ""}`}>
      <div className={s.headerInner}>
        <a href="https://www.tunee.ai" className={s.headerLogo}>Tunee</a>
        <nav className={s.headerNav}>
          <a href="https://www.tunee.ai">Home</a>
          <a href="https://www.tunee.ai/music-agent">Music Agent</a>
          <a href="https://www.tunee.ai/mv-studio">MV Studio</a>
          <a href="https://www.tunee.ai/pricing">Pricing</a>
        </nav>
        <div className={s.headerActions}>
          <a href="https://www.tunee.ai/sign-in" className={s.btnLogin}>Log in</a>
          <a href="https://www.tunee.ai" className={s.btnSignup}>Sign up</a>
        </div>
      </div>
    </header>
  );
}
