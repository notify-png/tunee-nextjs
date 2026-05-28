import { translations } from "./translations";
import { getPageName } from "./pageNameTranslations";
import type { DBCategory } from "@/lib/landing-types";

interface PageItem {
  name: string;
  slug: string;
  url: string;
  category: string;
}

const GENRE_ITEMS = [
  { en: "Pop", slug: "pop" }, { en: "Hip-Hop", slug: "hip-hop" },
  { en: "Rock", slug: "rock" }, { en: "EDM", slug: "edm" },
  { en: "Country", slug: "country" }, { en: "K-Pop", slug: "kpop" },
  { en: "Latin", slug: "latin" }, { en: "R&B", slug: "rnb" },
  { en: "Lofi", slug: "lofi" }, { en: "Jazz", slug: "jazz" },
  { en: "Classical", slug: "classical" }, { en: "Cinematic", slug: "cinematic" },
  { en: "Phonk", slug: "phonk" }, { en: "Afrobeats", slug: "afrobeats" },
  { en: "Amapiano", slug: "amapiano" }, { en: "Synthwave", slug: "synthwave" },
  { en: "Indie Pop", slug: "indie-pop" }, { en: "Ambient", slug: "ambient" },
  { en: "J-Pop", slug: "jpop" }, { en: "Drill", slug: "drill" },
  { en: "House", slug: "house" }, { en: "Metal", slug: "metal" },
  { en: "Blues", slug: "blues" }, { en: "Reggae", slug: "reggae" },
  { en: "Folk", slug: "folk" }, { en: "Gospel", slug: "gospel" },
  { en: "Bollywood", slug: "bollywood" }, { en: "Dubstep", slug: "dubstep" },
  { en: "Trance", slug: "trance" }, { en: "Funk", slug: "funk" },
  { en: "Arabic", slug: "arabic" }, { en: "Hindustani", slug: "hindustani" },
  { en: "Celtic", slug: "celtic" }, { en: "Flamenco", slug: "flamenco" },
  { en: "Vaporwave", slug: "vaporwave" }, { en: "Hyperpop", slug: "hyperpop" },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/[&]/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function prefixedGenrePages(lang: string): PageItem[] {
  return GENRE_ITEMS.map((g) => ({
    name: getPageName(lang, g.en),
    slug: g.slug,
    url: `/${lang}/music-generator/${g.slug}`,
    category: "Genre",
  }));
}

function makePrefixed(lang: string, items: { name: string; category: string }[]): PageItem[] {
  return items.map((p) => ({
    name: getPageName(lang, p.name),
    slug: slugify(p.name),
    url: `/${lang}/music-generator/${slugify(p.name)}`,
    category: p.category,
  }));
}

export function buildCategories(lang: string, t: (typeof translations)["en"]) {
  return [
    { key: "genre", label: t.categoryLabels.genre, pages: prefixedGenrePages(lang) },
    { key: "instrument", label: t.categoryLabels.instrument, pages: makePrefixed(lang, [
      { name: "Acoustic Guitar", category: "Instrument" },
      { name: "Bagpipes", category: "Instrument" },
      { name: "Bass", category: "Instrument" },
      { name: "Cello", category: "Instrument" },
      { name: "Drums", category: "Instrument" },
      { name: "Electric Guitar", category: "Instrument" },
      { name: "Erhu", category: "Instrument" },
      { name: "Flute", category: "Instrument" },
      { name: "Guitar", category: "Instrument" },
      { name: "Harp", category: "Instrument" },
      { name: "Instrumental", category: "Instrument" },
      { name: "Organ", category: "Instrument" },
      { name: "Oud", category: "Instrument" },
      { name: "Pan Flute", category: "Instrument" },
      { name: "Piano", category: "Instrument" },
      { name: "Saxophone", category: "Instrument" },
      { name: "Sitar", category: "Instrument" },
      { name: "Synth", category: "Instrument" },
      { name: "Trumpet", category: "Instrument" },
      { name: "Ukulele", category: "Instrument" },
      { name: "Violin", category: "Instrument" },
    ]) },
    { key: "mood", label: t.categoryLabels.mood, pages: makePrefixed(lang, [
      { name: "Calm", category: "Mood" },
      { name: "Chillout", category: "Mood" },
      { name: "Dark", category: "Mood" },
      { name: "Dramatic", category: "Mood" },
      { name: "Dreamy", category: "Mood" },
      { name: "Energetic", category: "Mood" },
      { name: "Epic", category: "Mood" },
      { name: "Majestic", category: "Mood" },
      { name: "Nostalgic", category: "Mood" },
      { name: "Romantic", category: "Mood" },
      { name: "Solemn", category: "Mood" },
      { name: "Triumphant", category: "Mood" },
    ]) },
    { key: "era", label: t.categoryLabels.era, pages: makePrefixed(lang, [
      { name: "60s", category: "Era" },
      { name: "70s", category: "Era" },
      { name: "80s", category: "Era" },
      { name: "90s", category: "Era" },
      { name: "2000s", category: "Era" },
      { name: "2010s", category: "Era" },
    ]) },
    { key: "usecase", label: t.categoryLabels.usecase, pages: makePrefixed(lang, [
      { name: "Ads", category: "Use Case" },
      { name: "Background", category: "Use Case" },
      { name: "Corporate", category: "Use Case" },
      { name: "Film", category: "Use Case" },
      { name: "Gaming", category: "Use Case" },
      { name: "Meditation", category: "Use Case" },
      { name: "Podcast", category: "Use Case" },
      { name: "Sleep", category: "Use Case" },
      { name: "Streaming", category: "Use Case" },
      { name: "Study", category: "Use Case" },
      { name: "TikTok", category: "Use Case" },
      { name: "Video", category: "Use Case" },
      { name: "Wedding", category: "Use Case" },
      { name: "Workout", category: "Use Case" },
      { name: "YouTube", category: "Use Case" },
    ]) },
    { key: "inspired", label: t.categoryLabels.inspired, pages: makePrefixed(lang, [
      { name: "Cyberpunk", category: "Inspired By" },
      { name: "D&D", category: "Inspired By" },
      { name: "Final Fantasy", category: "Inspired By" },
      { name: "Genshin", category: "Inspired By" },
      { name: "Mario", category: "Inspired By" },
      { name: "Minecraft", category: "Inspired By" },
      { name: "Persona", category: "Inspired By" },
      { name: "Silent Hill", category: "Inspired By" },
      { name: "Studio Ghibli", category: "Inspired By" },
      { name: "Zelda", category: "Inspired By" },
    ]) },
  ];
}

export function buildNavCategories(lang: string, t: (typeof translations)["en"]): DBCategory[] {
  const cats = buildCategories(lang, t);
  return cats.map((cat, ci) => ({
    id: `nav-${ci}`,
    slug: cat.key,
    label: cat.label,
    icon: "",
    sort_order: ci,
    items: cat.pages.map((p, pi) => ({
      id: `nav-${ci}-${pi}`,
      category_id: `nav-${ci}`,
      label: p.name,
      slug: p.slug,
      url: p.url,
      sort_order: pi,
    })),
  }));
}
