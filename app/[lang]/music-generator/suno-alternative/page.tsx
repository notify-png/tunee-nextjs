import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { buildSocialMetadata } from "@/lib/musicSeo";
import { SunoAlternativePage } from "@/app/music-generator/suno-alternative/SunoAlternativePage";
import {
  sunoAlternativeTranslations,
  type SunoLocale,
} from "@/app/music-generator/suno-alternative/translations";

const localizedLocales = ["ja", "es", "pt", "fr", "de", "it", "ko", "ru", "zh-CN", "zh-HK"] as const;
const allLocales: SunoLocale[] = ["en", ...localizedLocales];
const basePath = "/music-generator/suno-alternative";

function isSunoLocale(value: string): value is SunoLocale {
  return allLocales.includes(value as SunoLocale);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isSunoLocale(lang) || lang === "en") return {};

  const copy = sunoAlternativeTranslations[lang];
  const canonical = `https://www.tunee.ai/${lang}${basePath}`;
  const languages = Object.fromEntries(
    [
      ["x-default", `https://www.tunee.ai${basePath}`],
      ...allLocales.map((locale) => [
        locale,
        locale === "en"
          ? `https://www.tunee.ai${basePath}`
          : `https://www.tunee.ai/${locale}${basePath}`,
      ]),
    ],
  );

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    keywords: copy.metadata.keywords,
    alternates: { canonical, languages },
    ...buildSocialMetadata(copy.metadata.title, copy.metadata.description, canonical),
  };
}

export default async function LocalizedSunoAlternativePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang === "en") permanentRedirect(basePath);
  if (!isSunoLocale(lang)) notFound();

  return <SunoAlternativePage locale={lang} />;
}
