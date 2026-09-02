import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/musicSeo";
import { SunoAlternativePage } from "./SunoAlternativePage";
import { sunoAlternativeTranslations } from "./translations";

const copy = sunoAlternativeTranslations.en;
const pageUrl = "https://www.tunee.ai/music-generator/suno-alternative";

export const metadata: Metadata = {
  title: copy.metadata.title,
  description: copy.metadata.description,
  keywords: copy.metadata.keywords,
  alternates: { canonical: pageUrl },
  ...buildSocialMetadata(copy.metadata.title, copy.metadata.description, pageUrl),
};

export default function SunoAlternativeEnglishPage() {
  return <SunoAlternativePage locale="en" />;
}
