const SITE = "https://www.tunee.ai"
const LANGS = ["en","ja","es","pt","fr","de","it","ko","ru","zh-CN","zh-HK"] as const

export function langUrl(lang: string, path: string): string {
  return lang === "en" ? `${SITE}${path}` : `${SITE}/${lang}${path}`
}

/** Returns { canonical, languages } ready to drop into Metadata.alternates */
export function buildAlternates(engPath: string, currentLang = "en") {
  const languages: Record<string, string> = { "x-default": `${SITE}${engPath}` }
  for (const lang of LANGS) {
    languages[lang] = langUrl(lang, engPath)
  }
  return {
    canonical: langUrl(currentLang, engPath),
    languages,
  }
}
