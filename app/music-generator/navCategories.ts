import type { DBCategory } from "@/lib/landing-types";

interface PageItem {
  name: string;
  slug: string;
  url: string;
  category: string;
}

function slug(name: string) {
  return name
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function makePages(items: { name: string; category: string; slug?: string }[]): PageItem[] {
  return items.map((p) => ({
    ...p,
    slug: p.slug ?? slug(p.name),
    url: `/music-generator/${p.slug ?? slug(p.name)}`,
  }));
}

export const genrePages: PageItem[] = [
  { name: "Pop", slug: "pop", url: "/music-generator/pop", category: "Genre" },
  { name: "Hip-Hop", slug: "hip-hop", url: "/music-generator/hip-hop", category: "Genre" },
  { name: "Rock", slug: "rock", url: "/music-generator/rock", category: "Genre" },
  { name: "EDM", slug: "edm", url: "/music-generator/edm", category: "Genre" },
  { name: "Country", slug: "country", url: "/music-generator/country", category: "Genre" },
  { name: "K-Pop", slug: "k-pop", url: "/music-generator/k-pop", category: "Genre" },
  { name: "Latin", slug: "latin", url: "/music-generator/latin", category: "Genre" },
  { name: "R&B", slug: "rnb", url: "/music-generator/rnb", category: "Genre" },
  { name: "Lofi", slug: "lofi", url: "/music-generator/lofi", category: "Genre" },
  { name: "Jazz", slug: "jazz", url: "/music-generator/jazz", category: "Genre" },
  { name: "Classical", slug: "classical", url: "/music-generator/classical", category: "Genre" },
  { name: "Cinematic", slug: "cinematic", url: "/music-generator/cinematic", category: "Genre" },
  { name: "Phonk", slug: "phonk", url: "/music-generator/phonk", category: "Genre" },
  { name: "Afrobeats", slug: "afrobeats", url: "/music-generator/afrobeats", category: "Genre" },
  { name: "Amapiano", slug: "amapiano", url: "/music-generator/amapiano", category: "Genre" },
  { name: "Synthwave", slug: "synthwave", url: "/music-generator/synthwave", category: "Genre" },
  { name: "Indie Pop", slug: "indie-pop", url: "/music-generator/indie-pop", category: "Genre" },
  { name: "Ambient", slug: "ambient", url: "/music-generator/ambient", category: "Genre" },
  { name: "J-Pop", slug: "j-pop", url: "/music-generator/j-pop", category: "Genre" },
  { name: "Drill", slug: "drill", url: "/music-generator/drill", category: "Genre" },
  { name: "House", slug: "house", url: "/music-generator/house", category: "Genre" },
  { name: "Metal", slug: "metal", url: "/music-generator/metal", category: "Genre" },
  { name: "Blues", slug: "blues", url: "/music-generator/blues", category: "Genre" },
  { name: "Reggae", slug: "reggae", url: "/music-generator/reggae", category: "Genre" },
  { name: "Folk", slug: "folk", url: "/music-generator/folk", category: "Genre" },
  { name: "Gospel", slug: "gospel", url: "/music-generator/gospel", category: "Genre" },
  { name: "Bollywood", slug: "bollywood", url: "/music-generator/bollywood", category: "Genre" },
  { name: "Dubstep", slug: "dubstep", url: "/music-generator/dubstep", category: "Genre" },
  { name: "Trance", slug: "trance", url: "/music-generator/trance", category: "Genre" },
  { name: "Funk", slug: "funk", url: "/music-generator/funk", category: "Genre" },
  { name: "Arabic", slug: "arabic", url: "/music-generator/arabic", category: "Genre" },
  { name: "Hindustani", slug: "hindustani", url: "/music-generator/hindustani", category: "Genre" },
  { name: "Celtic", slug: "celtic", url: "/music-generator/celtic", category: "Genre" },
  { name: "Flamenco", slug: "flamenco", url: "/music-generator/flamenco", category: "Genre" },
  { name: "Vaporwave", slug: "vaporwave", url: "/music-generator/vaporwave", category: "Genre" },
  { name: "Hyperpop", slug: "hyperpop", url: "/music-generator/hyperpop", category: "Genre" },
];

const instrumentPages = makePages([
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
]);

const moodPages = makePages([
  { name: "Calm", category: "Mood" },
  { name: "Chillout", category: "Mood" },
  { name: "Dark", category: "Mood" },
  { name: "Dramatic", category: "Mood" },
  { name: "Dreamy", category: "Mood" },
  { name: "Energetic", category: "Mood" },
  { name: "Epic", category: "Mood" },
  { name: "Majestic", category: "Mood" },
  { name: "Nostalgic", category: "Mood" },
  { name: "Romantic Mood", slug: "romantic-mood", category: "Mood" },
  { name: "Solemn", category: "Mood" },
  { name: "Triumphant", category: "Mood" },
]);

const eraPages = makePages([
  { name: "60s", category: "Era" },
  { name: "70s", category: "Era" },
  { name: "80s", category: "Era" },
  { name: "90s", category: "Era" },
  { name: "2000s", category: "Era" },
  { name: "2010s", category: "Era" },
]);

const usecasePages = makePages([
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
]);

const inspiredByPages = makePages([
  { name: "Cyberpunk", slug: "cyberpunk-style", category: "Inspired By" },
  { name: "D&D", slug: "dnd-style", category: "Inspired By" },
  { name: "Final Fantasy", slug: "final-fantasy-style", category: "Inspired By" },
  { name: "Genshin", slug: "genshin-style", category: "Inspired By" },
  { name: "Mario", slug: "mario-style", category: "Inspired By" },
  { name: "Minecraft", slug: "minecraft-style", category: "Inspired By" },
  { name: "Persona", slug: "persona-style", category: "Inspired By" },
  { name: "Silent Hill", slug: "silent-hill-style", category: "Inspired By" },
  { name: "Studio Ghibli", slug: "studio-ghibli-style", category: "Inspired By" },
  { name: "Zelda", slug: "zelda-style", category: "Inspired By" },
]);

export const allCategories = [
  { key: "genre", label: "Genre", pages: genrePages },
  { key: "instrument", label: "Instrument", pages: instrumentPages },
  { key: "mood", label: "Mood", pages: moodPages },
  { key: "era", label: "Era", pages: eraPages },
  { key: "usecase", label: "Use Case", pages: usecasePages },
  { key: "inspired", label: "Inspired By", pages: inspiredByPages },
];

export const navCategories: DBCategory[] = allCategories.map((cat, ci) => ({
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
