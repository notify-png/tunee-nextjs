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
    subgenreNames?: string[];
    dnaDescs?: string[];
    subgenreDescs?: string[];
    promptTitles?: string[];
    promptTexts?: string[];
  }>;
}

/* ── Landing-page slugs：决定哪些 slug 进多语言流程 ──
   不在此表的 slug，所有语言版本都回落到英文页（lang="en"），
   在非英语 SERP 里几乎拿不到展示。新增页面别忘了登记。 */
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
  // 2026-10 批次：补齐高流量但未进多语言流程的 slug
  "orchestral",
  "professional","choir","duet","chinese-traditional","mexican","ai-music-agent","acapella","chant","anime","boss-battle-music","african","mix","trailer-music","japanese","dance","vocal","memphis","slow","8-bit",
  "gamelan","psytrance","hardcore","medieval","spanish","sonata","trap","gregorian-chant","balkan","future-bass","for-meditation-creators","brass","brazilian","indonesian","horror","symphony","fantasy-music","witch-house","tropical","glitch","opera","overture","salsa","tibetan","shoegaze","symphonic-metal","middle-eastern","irish","film-score","string","techno","swing","gothic","bossa-nova","cumbia","psychedelic","epic-orchestral-music","for-tiktok-creators",
  "grime","menu-music","bach","music-creation","mariachi","city-pop","string-quartet","reggaeton","metalcore","nordic-folk","bluegrass","for-djs","retrowave","emotional","allegro","rpg-music","japanese-traditional","for-teachers","upbeat","percussion","ballroom","for-small-businesses","industrial","chillwave","bebop","smooth-jazz","chiptune","spiritual","vintage-production","future-funk","vlog","indie","rap","baroque","renaissance","lute","grunge","jrpg-music","analog","disco","electro","waltz","hypnagogic-pop","for-content-creators","alternative","world-music","polynesian","minimalist-classical","korean",
  "nature","c-pop","for-dancers","quartet","mallsoft","prelude","highlife","for-songwriters","commercial-music","neoclassical","adagio","for-advertisers","for-producers","zen","for-video-editors","slushwave","punk","experimental","concerto","scottish","nocturne","andean","space","singer-songwriter","for-students","dungeon-music","largo","eccojams","k-rnb","appalachian","dreampunk","contemporary-classical","documentary-music","lo-fi-production","arpeggio-production","chamber-music","mandopop","hard-bop","for-app-developers","for-singers","koto","for-wedding-creators",
  "warm","hawaiian","electronic","for-musicians","romantic-mood","for-indie-game-developers","dream-pop","for-composers","modern","ui-sound","fast","jazz-funk","polished-production","atmospheric-production","ethnic","intimate","reverb-production","beat","viral","for-marketers","open-world-music","sci-fi-horror-music","acoustic-production","for-podcasters","urban","cuban","for-filmmakers","for-game-developers","soul","minimal-production","for-social-media-managers","for-youtubers","raw-production","eastern-european","exploration-music","for-video-creators","glo-fi","for-streamers","chinese","english","instrumental-language","k-hip-hop",
];

/* ── Factory: create translated GenreData from config ── */
export function buildTranslations(config: LangConfig): Record<string, GenreData> {
  const result: Record<string, GenreData> = {};

  for (const slug of LANDING_SLUGS) {
    const en = getGenreData(slug);
    if (!en) continue;

    const name = config.names[slug] || en.displayName;
    const sd = config.slugData?.[slug];
    const subgenreSlugCounts = new Map();
    for (const sg of en.subgenres) {
      subgenreSlugCounts.set(sg.slug, (subgenreSlugCounts.get(sg.slug) ?? 0) + 1);
    }

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
        // config.names 按 slug 索引，而 slug 是「链到哪个页」、name 是「显示什么」。
        // 同一页里多个子流派链到同一个页是合理的（acapella 有 5 个子流派都指向
        // a-cappella），但那时用 names[slug] 会让它们塌缩成同一个名字——翻译前
        // 各自显示英文原名反而是对的。所以 slug 在本页重复时回落到 sg.name。
        name:
          sd?.subgenreNames?.[i] ??
          (subgenreSlugCounts.get(sg.slug) === 1 ? config.names[sg.slug] : undefined) ??
          sg.name,
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
