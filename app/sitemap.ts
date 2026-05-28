import type { MetadataRoute } from "next";
import { categories, externalSlugs } from "@/data/landingPages";
import { slugData as i18nSlugs } from "@/data/genre-content/i18n/ja/slug-data";

const BASE_URL = "https://www.tunee.ai";

const LANGS = ["en", "ja", "es", "pt", "fr", "de", "it", "ko", "ru", "zh-CN", "zh-HK"] as const;
const NON_EN_LANGS = LANGS.filter((l) => l !== "en");

// 有真实多语言翻译的 slug 集合（100 个）
const translatedSlugs = new Set(Object.keys(i18nSlugs));

const langUrl = (lang: string, path: string) =>
  lang === "en" ? `${BASE_URL}${path}` : `${BASE_URL}/${lang}${path}`;

const langAlternates = (path: string) =>
  Object.fromEntries(LANGS.map((lang) => [lang, langUrl(lang, path)]));

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Index pages: one entry per language (12 条) ──
  const indexEntries: MetadataRoute.Sitemap = LANGS.map((lang) => ({
    url: langUrl(lang, "/music-generator"),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
    alternates: { languages: langAlternates("/music-generator") },
  }));

  // ── 所有 slug（305 个） ──
  const allItems = categories
    .flatMap((category) => category.items)
    .concat(
      externalSlugs.map((slug) => ({
        label: slug,
        slug,
        url: `/music-generator/${slug}`,
      })),
    );

  const slugEntries: MetadataRoute.Sitemap = allItems.flatMap((item) => {
    const path = item.url;
    const hasTranslation = translatedSlugs.has(item.slug);

    if (hasTranslation) {
      // 有翻译：每种语言单独一条，附带完整 alternates
      return LANGS.map((lang) => ({
        url: langUrl(lang, path),
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: { languages: langAlternates(path) },
      }));
    } else {
      // 无翻译：只收录英文版，不生成多语言条目
      return [
        {
          url: `${BASE_URL}${path}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        },
      ];
    }
  });

  return [...indexEntries, ...slugEntries];
}
