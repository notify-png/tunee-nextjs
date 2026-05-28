"use client";

import { useState } from "react";
import s from "./page.module.css";

interface Props {
  faqs: { q: string; a: string }[];
}

export default function FaqAccordion({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={s.faqList}>
      {faqs.map((f, i) => (
        <div key={i} className={`${s.faqItem} ${i === faqs.length - 1 ? s.faqLast : ""}`}>
          <button
            className={s.faqQ}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{f.q}</span>
            <svg
              className={`${s.faqIcon} ${open === i ? s.faqOpen : ""}`}
              width="16" height="16" viewBox="0 0 16 16" fill="none"
            >
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className={s.faqA} style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}>
            <div className={s.faqAInner}><p>{f.a}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}
