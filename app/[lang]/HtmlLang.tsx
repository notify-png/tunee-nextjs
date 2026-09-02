"use client";

import { useLayoutEffect } from "react";

export default function HtmlLang({ lang }: { lang: string }) {
  useLayoutEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
