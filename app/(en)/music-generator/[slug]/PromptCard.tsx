"use client";

import { useState } from "react";
import s from "./page.module.css";

interface Props {
  num: string;
  title: string;
  text: string;
  tags: string[];
}

export default function PromptCard({ num, title, text, tags }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={s.card}>
      <span className={s.cardNum}>{num}</span>
      <h3 className={s.cardTitle}>{title}</h3>
      <p className={s.cardDesc}>{text}</p>
      <div className={s.promptFoot}>
        <div className={s.tagRow}>
          {tags.map((t) => (
            <span key={t} className={s.badgeSm}>{t}</span>
          ))}
        </div>
        <button
          className={`${s.copyBtn} ${copied ? s.copied : ""}`}
          onClick={copy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
