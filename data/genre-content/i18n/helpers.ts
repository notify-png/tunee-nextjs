import type { GenreData } from "../types";
import { getGenreData } from "../index";

/* ── Language config type ── */
export interface LangConfig {
  names: Record<string, string>;
  seoTitle: (name: string) => string;
  seoDesc: (name: string) => string;
  heroTitle: (name: string) => string;
  heroSub: (name: string) => string;
  badges: [string, string, string];
  dnaTitle: (name: string) => string;
  dnaSub: (name: string) => string;
  dnaSectionTitles: [string, string, string, string];
  /** Optional: translated DNA card descriptions (4 templates) */
  dnaDescs?: [(name: string) => string, (name: string) => string, (name: string) => string, (name: string) => string];
  subgenreTitle: (name: string) => string;
  subgenreSub: (name: string) => string;
  /** Optional: translated subgenre card description template */
  subgenreDesc?: (subName: string, name: string) => string;
  comparisonTitle: (name: string) => string;
  comparisonSub: (name: string) => string;
  compFeatureLabel: string;
  /** Optional: translated comparison row labels (first column) */
  compRowLabels?: string[];
  promptTitle: (name: string) => string;
  promptSub: (name: string) => string;
  /** Optional: 8 unique translated prompt card descriptions */
  promptDescs?: ((name: string) => string)[];
  useCaseTitle: (name: string) => string;
  useCaseSub: (name: string) => string;
  useCases: { title: string; desc: (name: string) => string }[];
  faqs: { q: (name: string) => string; a: (name: string) => string }[];
  chatUser: (name: string) => string;
  chatAi: (name: string) => string;
  finalCtaTitle: (name: string) => string;
  finalCtaSub: (name: string) => string;
  finalCtaButton: string;
  /** Per-slug faithful translations of genre-specific content */
  slugData?: Record<string, {
    dnaDescs?: string[];
    subgenreDescs?: string[];
    promptTitles?: string[];
    promptTexts?: string[];
  }>;
}

/* ── The 100 landing-page slugs ── */
export const LANDING_SLUGS = [
  "pop","hip-hop","rock","edm","country","kpop","latin","rnb","lofi","jazz",
  "classical","cinematic","phonk","afrobeats","amapiano","synthwave","indie-pop",
  "ambient","jpop","drill","house","metal","blues","reggae","folk","gospel",
  "bollywood","dubstep","trance","funk","arabic","hindustani","celtic","flamenco",
  "vaporwave","hyperpop","acoustic-guitar","bagpipes","bass","cello","drums",
  "electric-guitar","erhu","flute","guitar","harp","instrumental","organ","oud",
  "pan-flute","piano","saxophone","sitar","synth","trumpet","ukulele","violin",
  "calm","chillout","dark","dramatic","dreamy","energetic","epic","majestic",
  "nostalgic","romantic","solemn","triumphant","60s","70s","80s","90s","2000s",
  "2010s","ads","background","corporate","film","gaming","meditation","podcast",
  "sleep","streaming","study","tiktok","video","wedding","workout","youtube",
  "cyberpunk","dandd","final-fantasy","genshin","mario","minecraft","persona",
  "silent-hill","studio-ghibli","zelda",
];

/* ── Factory: create translated GenreData from config ── */
export function buildTranslations(config: LangConfig): Record<string, GenreData> {
  const result: Record<string, GenreData> = {};

  for (const slug of LANDING_SLUGS) {
    const en = getGenreData(slug);
    if (!en) continue;

    const name = config.names[slug] || en.displayName;
    const sd = config.slugData?.[slug];

    result[slug] = {
      ...en,
      displayName: name,
      seo: {
        title: config.seoTitle(name),
        description: config.seoDesc(name),
      },
      hero: {
        title: config.heroTitle(name),
        subtitle: config.heroSub(name),
        badges: config.badges,
      },
      chatDemo: {
        ...en.chatDemo,
        userMessage: config.chatUser(name),
        aiReply: config.chatAi(name),
      },
      dnaTitle: config.dnaTitle(name),
      dnaSub: config.dnaSub(name),
      dna: en.dna.map((d, i) => ({
        ...d,
        title: config.dnaSectionTitles[i] ?? d.title,
        desc: sd?.dnaDescs?.[i] ?? config.dnaDescs?.[i]?.(name) ?? d.desc,
      })),
      subgenreTitle: config.subgenreTitle(name),
      subgenreSub: config.subgenreSub(name),
      subgenres: en.subgenres.map((sg, i) => ({
        ...sg,
        name: config.names[sg.slug] || sg.name,
        desc: sd?.subgenreDescs?.[i]
          ?? (config.subgenreDesc ? config.subgenreDesc(config.names[sg.slug] || sg.name, name) : sg.desc),
      })),
      comparisonTitle: config.comparisonTitle(name),
      comparisonSub: config.comparisonSub(name),
      comparison: {
        headers: [config.compFeatureLabel, ...en.comparison.headers.slice(1)],
        rows: config.compRowLabels
          ? en.comparison.rows.map((row, i) => [
              config.compRowLabels![i] ?? row[0],
              ...row.slice(1),
            ])
          : en.comparison.rows,
      },
      promptTitle: config.promptTitle(name),
      promptSub: config.promptSub(name),
      prompts: en.prompts.map((p, i) => ({
        ...p,
        title: sd?.promptTitles?.[i] ?? p.title,
        text: sd?.promptTexts?.[i] ?? config.promptDescs?.[i]?.(name) ?? p.text,
      })),
      useCaseTitle: config.useCaseTitle(name),
      useCaseSub: config.useCaseSub(name),
      useCases: en.useCases.map((uc, i) => ({
        icon: uc.icon,
        title: config.useCases[i]?.title ?? uc.title,
        desc: config.useCases[i]?.desc(name) ?? uc.desc,
      })),
      related: en.related.map((r) => ({
        ...r,
        name: config.names[r.slug] || r.name,
      })),
      faqs: config.faqs.map((f) => ({
        q: f.q(name),
        a: f.a(name),
      })),
      finalCta: {
        title: config.finalCtaTitle(name),
        subtitle: config.finalCtaSub(name),
        buttonText: config.finalCtaButton,
      },
    };
  }

  return result;
}
