import type { MetadataRoute } from "next";
import { getIndexableGenreEntries } from "@/data/genre-content";
import { hasI18nGenreData } from "@/data/genre-content/i18n";
import { SUPPORTED_LANGS } from "@/app/[lang]/music-generator/translations";

const BASE_URL = "https://www.tunee.ai";

/**
 * 翻译内容的最后实质更新日期。
 *
 * 多语言页的文案由 i18n/ 下的 names 与模板决定，与英文源文件的 updatedAt 无关，
 * 所以英文页用 data.updatedAt、多语言页用这里。翻译有实质更新时改这个日期。
 *
 * 不要改成构建时间：每次构建都变的 lastmod 与实际内容变化不符，Google 会直接
 * 忽略整站的 lastmod，比没有更糟。
 */
const I18N_LAST_UPDATED = "2026-10-08";

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

  const sunoAlternativePath = "/music-generator/suno-alternative";
  const eventEntries: MetadataRoute.Sitemap = LANGS.map((lang) => ({
    url: langUrl(lang, sunoAlternativePath),
    lastModified: "2026-09-02",
    changeFrequency: "daily",
    priority: 0.8,
    alternates: { languages: langAlternates(sunoAlternativePath, LANGS) },
  }));

  // Use the same content registry as page generation. A locale is included
  // only when it has its own translation rather than an English fallback.
  const slugEntries: MetadataRoute.Sitemap = getIndexableGenreEntries()
    .flatMap(({ slug, data }) => {
      const path = `/music-generator/${slug}`;
      const availableLangs = LANGS.filter(lang => hasI18nGenreData(slug, lang));
      const alternates = langAlternates(path, availableLangs);

      return availableLangs.map((lang) => ({
        url: langUrl(lang, path),
        ...(lang === "en"
          ? data.updatedAt
            ? { lastModified: data.updatedAt }
            : {}
          : {
              lastModified:
                data.updatedAt && data.updatedAt > I18N_LAST_UPDATED
                  ? data.updatedAt
                  : I18N_LAST_UPDATED,
            }),
        changeFrequency: "monthly" as const,
        priority: lang === "en" ? 0.7 : 0.6,
        alternates: { languages: alternates },
      }));
    });

  return [...indexEntries, ...eventEntries, ...slugEntries];
}
