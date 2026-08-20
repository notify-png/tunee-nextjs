import type { GenreData } from "../types";
import { getGenreData } from "../index";

/* ── Per-language registries ── */
const langRegistries: Record<string, Record<string, GenreData>> = {};

export function registerLang(lang: string, registry: Record<string, GenreData>) {
  langRegistries[lang] = registry;
}

/**
 * Return GenreData for a slug in a given language.
 * Falls back to the English base data when no translation exists.
 */
export function getI18nGenreData(slug: string, lang: string): GenreData | null {
  if (lang === "en") return getGenreData(slug);
  const translated = langRegistries[lang]?.[slug];
  if (translated) return translated;
  return getGenreData(slug); // fallback to English
}

/** True only when this locale has its own translated content (no EN fallback). */
export function hasI18nGenreData(slug: string, lang: string): boolean {
  if (lang === "en") return getGenreData(slug) !== null;
  return Boolean(langRegistries[lang]?.[slug]);
}
