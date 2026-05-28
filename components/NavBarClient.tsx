"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, X } from "lucide-react";
import type { DBCategory } from "@/lib/landing-types";

const LANG_KEYS = ["en", "ja", "es", "pt", "fr", "de", "it", "ko", "ru", "zh-CN", "zh-HK"];

const CTA_TEXT: Record<string, string> = {
  en:      "Start Free Trial",
  ja:      "無料で始める",
  es:      "Comenzar gratis",
  pt:      "Começar grátis",
  fr:      "Commencer gratuitement",
  de:      "Kostenlos starten",
  it:      "Inizia gratis",
  ko:      "무료로 시작하기",
  ru:      "Начать бесплатно",
  "zh-CN": "免费开始",
  "zh-HK": "免費開始",
};

const LANGUAGE_OPTIONS = [
  { key: "en",    name: "English" },
  { key: "ja",    name: "日本語" },
  { key: "es",    name: "Español" },
  { key: "pt",    name: "Português" },
  { key: "fr",    name: "Français" },
  { key: "de",    name: "Deutsch" },
  { key: "it",    name: "Italiano" },
  { key: "ko",    name: "한국어" },
  { key: "ru",    name: "Русский" },
  { key: "zh-CN", name: "简体中文" },
  { key: "zh-HK", name: "繁體中文" },
];

export default function NavBarClient({
  categories,
  variant,
}: {
  categories: DBCategory[];
  variant?: "default" | "genre-dark";
}) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileCat, setOpenMobileCat] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout>>();
  const langRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const navCats = categories.slice(0, 8);

  // Strip known lang prefix → base path (e.g. "/music-generator/pop")
  const basePath = (() => {
    for (const lang of LANG_KEYS) {
      if (pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)) {
        return pathname.slice(lang.length + 1);
      }
    }
    return pathname;
  })();

  const getLangUrl = (langKey: string) => `/${langKey}${basePath}`;

  const currentLang = (() => {
    for (const lang of LANG_KEYS) {
      if (pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)) return lang;
    }
    return "en";
  })();

  const ctaText = CTA_TEXT[currentLang] ?? "Start Free Trial";
  const ctaUrl  = currentLang === "en" ? "https://www.tunee.ai" : `https://www.tunee.ai/${currentLang}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    if (langOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [langOpen]);

  const handleMouseEnter = (slug: string) => {
    clearTimeout(hoverTimeout.current);
    setHoveredCat(slug);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setHoveredCat(null), 150);
  };

  return (
    <div data-variant={variant}>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_1px_3px_0_hsl(var(--foreground)/0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto h-14 flex items-center justify-between px-8">
          <Link
            href="https://www.tunee.ai"
            target="_blank"
            className="font-body text-2xl font-semibold text-foreground tracking-wide shrink-0"
          >
            Tunee
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navCats.map((cat) => (
              <div
                key={cat.slug}
                className="relative"
                onMouseEnter={() => handleMouseEnter(cat.slug)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`font-body text-[13px] px-2 py-1.5 rounded-md whitespace-nowrap transition-colors duration-200 flex items-center gap-0.5 ${
                    hoveredCat === cat.slug
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      hoveredCat === cat.slug ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
                aria-label="Change language"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-44 bg-background border border-border rounded-xl shadow-lg z-50 overflow-hidden py-1"
                  >
                    {LANGUAGE_OPTIONS.map((lang) => (
                      <a
                        key={lang.key}
                        href={getLangUrl(lang.key)}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => setLangOpen(false)}
                      >
                        {lang.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={ctaUrl}
              target="_blank"
              className="hidden sm:inline-flex items-center px-5 py-2 rounded-full font-body text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--gradient-cta)" }}
            >
              {ctaText}
            </a>

            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {navCats.map(
          (cat) =>
            cat.items.length > 0 && (
              <motion.div
                key={cat.slug}
                initial={false}
                animate={{
                  opacity: hoveredCat === cat.slug ? 1 : 0,
                  y: hoveredCat === cat.slug ? 0 : -4,
                }}
                transition={{ duration: 0.15 }}
                aria-hidden={hoveredCat !== cat.slug}
                className={`absolute left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-[0_8px_30px_-8px_hsl(var(--foreground)/0.08)] ${
                  hoveredCat === cat.slug
                    ? "pointer-events-auto z-10"
                    : "pointer-events-none z-0"
                }`}
                onMouseEnter={() => handleMouseEnter(cat.slug)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-[1200px] mx-auto px-8 py-6">
                  <p className="font-body text-xs font-semibold text-muted-foreground/60 uppercase tracking-[0.15em] mb-4">
                    {cat.label}
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-2">
                    {cat.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={item.url}
                        tabIndex={hoveredCat === cat.slug ? 0 : -1}
                        className="font-body text-sm text-foreground/80 hover:text-primary transition-colors duration-150 py-1.5 truncate"
                        onClick={() => setHoveredCat(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-50 w-[300px] bg-background border-l border-border overflow-y-auto lg:hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="font-body text-xl font-semibold text-foreground">
                  Tunee
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-md text-foreground hover:bg-muted"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {categories.map((cat) => (
                  <div key={cat.slug}>
                    <button
                      onClick={() =>
                        setOpenMobileCat(
                          openMobileCat === cat.slug ? null : cat.slug,
                        )
                      }
                      className="w-full flex items-center justify-between font-body text-sm text-foreground py-3 border-b border-border/40"
                    >
                      {cat.label}
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                          openMobileCat === cat.slug ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openMobileCat === cat.slug && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1 pl-2 py-2">
                            {cat.items.map((item) => (
                              <Link
                                key={item.slug}
                                href={item.url}
                                className="font-body text-sm text-muted-foreground hover:text-primary py-1.5 transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/40">
                <p className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-[0.12em] mb-3">Language</p>
                <div className="grid grid-cols-2 gap-1">
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <a
                      key={lang.key}
                      href={getLangUrl(lang.key)}
                      className="text-sm text-foreground/80 hover:text-foreground py-1.5 px-2 rounded-md hover:bg-muted transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {lang.name}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-body text-sm font-medium text-white"
                style={{ background: "var(--gradient-cta)" }}
              >
                {ctaText}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
