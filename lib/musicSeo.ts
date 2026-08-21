export const SITE = "https://www.tunee.ai"
export const MUSIC_GENERATOR_SOCIAL_IMAGE = `${SITE}/images/music-generator-og.jpg`
const LANGS = ["en","ja","es","pt","fr","de","it","ko","ru","zh-CN","zh-HK"] as const

export function normalizeMetaDescription(value: string, maxLength = 155): string {
  const compact = value.replace(/\s+/g, " ").trim()
  if (compact.length <= maxLength) return compact

  const candidate = compact.slice(0, maxLength + 1)
  const lastSpace = candidate.lastIndexOf(" ")
  const trimmed = candidate
    .slice(0, lastSpace > 100 ? lastSpace : maxLength)
    .replace(/[\s,;:—-]+$/g, "")

  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`
}

export function buildSocialMetadata(
  title: string,
  description: string,
  url: string,
) {
  return {
    openGraph: {
      type: "website" as const,
      siteName: "Tunee",
      title,
      description,
      url,
      images: [
        {
          url: MUSIC_GENERATOR_SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: "Tunee AI Music Generator",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [MUSIC_GENERATOR_SOCIAL_IMAGE],
    },
  }
}

export function langUrl(lang: string, path: string): string {
  return lang === "en" ? `${SITE}${path}` : `${SITE}/${lang}${path}`
}

/** Returns { canonical, languages } ready to drop into Metadata.alternates */
export function buildAlternates(
  engPath: string,
  currentLang = "en",
  availableLangs: readonly string[] = LANGS,
) {
  const languages: Record<string, string> = { "x-default": `${SITE}${engPath}` }
  for (const lang of availableLangs) {
    languages[lang] = langUrl(lang, engPath)
  }
  return {
    canonical: langUrl(currentLang, engPath),
    languages,
  }
}
