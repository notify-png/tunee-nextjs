import type { MetadataRoute } from "next";
import { getIndexableGenreEntries } from "@/data/genre-content";
import { hasI18nGenreData } from "@/data/genre-content/i18n";
import { SUPPORTED_LANGS } from "@/app/[lang]/music-generator/translations";
import { canonicalMusicSlug } from "@/lib/musicRoutes";

const BASE_URL = "https://www.tunee.ai";

const LANGS = SUPPORTED_LANGS;

const langUrl = (lang: string, path: string) =>
  lang === "en" ? `${BASE_URL}${path}` : `${BASE_URL}/${lang}${path}`;

const langAlternates = (path: string, langs: readonly string[]) => ({
  "x-default": langUrl("en", path),
  ...Object.fromEntries(langs.map((lang) => [lang, langUrl(lang, path)])),
});

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Index pages: one entry per language (12 条) ──
  const indexEntries: MetadataRoute.Sitemap = LANGS.map((lang) => ({
    url: langUrl(lang, "/music-generator"),
    changeFrequency: "weekly",
    priority: 0.9,
    alternates: { languages: langAlternates("/music-generator", LANGS) },
  }));

  // Use the same content registry as page generation. A locale is included
  // only when it has its own translation rather than an English fallback.
  const slugEntries: MetadataRoute.Sitemap = getIndexableGenreEntries()
    .filter(({ slug }) => canonicalMusicSlug(slug) === slug)
    .flatMap(({ slug, data }) => {
      const path = `/music-generator/${slug}`;
      const availableLangs = LANGS.filter(lang => hasI18nGenreData(slug, lang));
      const alternates = langAlternates(path, availableLangs);

      return availableLangs.map((lang) => ({
        url: langUrl(lang, path),
        ...(data.updatedAt ? { lastModified: data.updatedAt } : {}),
        changeFrequency: "monthly" as const,
        priority: lang === "en" ? 0.7 : 0.6,
        alternates: { languages: alternates },
      }));
    });

  return [...indexEntries, ...slugEntries];
}
