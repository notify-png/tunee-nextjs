import type { GenreData } from "../types";
import { getGenreData } from "../index";
import { ROW_LABELS, type RowLabelLang } from "./row-labels";

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
  /** 人群类页（category === "creator-type"）专用的标题句式。

      常规模板的语法前提是 name 为**曲风名词**——zh 是 `${name}风格AI音乐生成器`、
      ja 是 `${name}系AI…`、ru 是 `${name} музыка`。人群名填进去就碎：
      2026-10 线上实测 for-djs 的中文标题是「DJ专用风格AI音乐生成器」、
      日文「DJ向け系AI…」、俄文「Для диджеев музыка」，都是病句。

      前四个字段（seoTitle / seoDesc / heroTitle / heroSub）决定 SERP 上看到的
      那两行与首屏第一眼，必填；其余都是可选，不填即回落常规模板——回落的结果
      就是现状，不会更糟。所以各语言可以按自己的语法需要逐步补，不必一次补齐。 */
  audience?: {
    seoTitle: (name: string) => string;
    seoDesc: (name: string) => string;
    heroTitle: (name: string) => string;
    heroSub: (name: string) => string;

    /* 页内小标题。只有把 name 当名词用的语言才需要覆盖——
       ru 的属格位（«Для диджеев» 读作「风格 为了DJ们」）、de 的连字符构词
       （Für DJs-DNA，连字符前必须是名词）、es 的 de + Para 两个介词连用。
       ja「DJ向けのサウンドを分析」、ko「DJ용 사운드 분석」、it、zh 本来就通顺，
       不填即回落常规模板。 */
    dnaTitle?: (name: string) => string;
    subgenreTitle?: (name: string) => string;
    comparisonTitle?: (name: string) => string;
    promptTitle?: (name: string) => string;
    useCaseTitle?: (name: string) => string;
    finalCtaTitle?: (name: string) => string;

    /* 正文层。标题修好了而正文没修，页面读起来一样碎——2026-11-17 线上
       es/for-djs 的小标题已是「El ADN de la música para DJs」，同一屏的正文
       却还是「el sonido de Para DJs」，往下 6 条用例、5 条 FAQ、聊天演示
       和底部 CTA 全中，一页 20 多处。
       与标题字段同理：不填即回落常规模板，不会比现状更糟。 */
    dnaSub?: (name: string) => string;
    subgenreSub?: (name: string) => string;
    comparisonSub?: (name: string) => string;
    promptSub?: (name: string) => string;
    useCaseSub?: (name: string) => string;
    finalCtaSub?: (name: string) => string;
    /** 只替描述，用例标题（「Redes Sociales」等）与 name 无关，照用常规的。 */
    useCaseDescs?: ((name: string) => string)[];
    faqs?: { q: (name: string) => string; a: (name: string) => string }[];
    chatUser?: (name: string) => string;
    chatAi?: (name: string) => string;
  };

  /** 人群页名称的句中形态，按 slug 索引。

      names 里的是标题形态（「Para Autores de Canciones」），用在正文句子里
      就成了句中大写。哪个语言需要句中形态，自己在这里声明；不声明的语言
      所有取值与声明前逐字相同。声明之后，audience 的所有模板函数拿到的
      name 就是这个句中形态（标题模板也一起——西语标题本来就不用 Title Case）。 */
  sentenceNames?: Record<string, string>;

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
  // 2026-10-09：与 acapella / rnb 是两篇独立手写文章，aliases.mjs 声明两边都要可索引
  // （DISTINCT_CONTENT_ALIASES）。但它们一直不在这张表里，所有语言都回落英文——
  // 声明与实现对不上。译名复用孪生页的，内容本来就是同一个流派。
  "a-cappella", "r-and-b",
];

/** 首字母小写。西方语言的人群译名是「Für DJs」「Para DJs」这类前置介词短语，
    句首保持大写，嵌进句中则要小写——德语的 für、意语的 per 在句中不大写。 */
export const lowerFirst = (value: string) => value.charAt(0).toLowerCase() + value.slice(1);


/* ── Factory: create translated GenreData from config ── */
export function buildTranslations(
  config: LangConfig,
  /**
   * 语言码。用联合类型而不是 string：写错一个字母（"zh-hk"、"jp"）时，
   * ROW_LABELS 查不到就会静默回落英文，整个语言的对比表全部露英文，
   * 而 tsc 和 check:row-labels 都不会报——后者只核表，不核谁来取。
   */
  lang: RowLabelLang,
): Record<string, GenreData> {
  const result: Record<string, GenreData> = {};

  for (const slug of LANDING_SLUGS) {
    const en = getGenreData(slug);
    if (!en) continue;

    const name = config.names[slug] || en.displayName;
    const sd = config.slugData?.[slug];
    // 人群页有专用句式就用，没有就回落常规模板
    const au = en.category === "creator-type" ? config.audience : undefined;
    // audience 的模板一律收句中形态；没声明就还是 name，与声明前完全一致
    const sentenceName = au ? config.sentenceNames?.[slug] : undefined;
    const auName = sentenceName ?? name;
    result[slug] = {
      ...en,
      displayName: name,
      sentenceName,
      seo: {
        title: (au?.seoTitle ?? config.seoTitle)(auName),
        description: (au?.seoDesc ?? config.seoDesc)(auName),
      },
      hero: {
        title: (au?.heroTitle ?? config.heroTitle)(auName),
        subtitle: (au?.heroSub ?? config.heroSub)(auName),
        badges: config.badges,
      },
      chatDemo: {
        ...en.chatDemo,
        userMessage: (au?.chatUser ?? config.chatUser)(auName),
        aiReply: (au?.chatAi ?? config.chatAi)(auName),
      },
      dnaTitle: (au?.dnaTitle ?? config.dnaTitle)(auName),
      dnaSub: (au?.dnaSub ?? config.dnaSub)(auName),
      dna: en.dna.map((d, i) => ({
        ...d,
        title: config.dnaSectionTitles[i] ?? d.title,
        desc: sd?.dnaDescs?.[i] ?? config.dnaDescs?.[i]?.(name) ?? d.desc,
      })),
      subgenreTitle: (au?.subgenreTitle ?? config.subgenreTitle)(auName),
      subgenreSub: (au?.subgenreSub ?? config.subgenreSub)(auName),
      subgenres: en.subgenres.map((sg, i) => {
        // config.names 按 slug 索引，而 slug 是「链到哪个页」、name 是「显示什么」，
        // 两者常常不是一回事：alternative 页的 { name: "Shoegaze", slug: "dream-pop" }
        // 用 names[slug] 会把卡片标题显示成「Dream Pop」的译名；for-djs 页的
        // { name: "Techno", slug: "trance" } 会显示成「Trance」配 Techno 的描述。
        // 2026-11-16 实测：438 个指向真实页的子流派里，338 个是这种情况。
        //
        // 所以只在「这个子流派的名字就是目标页的英文名」时才用译名，否则保留
        // 英文原名。英文名看得懂，错名看不出错。
        // （这同时覆盖了同一页多个子流派指向同一个 slug 的情况——acapella 有
        // 5 个子流派都指向 a-cappella，它们的名字各不相同，不会再塌缩成一个。）
        const sgName =
          sd?.subgenreNames?.[i] ??
          (getGenreData(sg.slug)?.displayName === sg.name
            ? config.names[sg.slug]
            : undefined) ??
          sg.name;
        return {
          ...sg,
          name: sgName,
          desc:
            sd?.subgenreDescs?.[i] ??
            (config.subgenreDesc ? config.subgenreDesc(sgName, name) : sg.desc),
        };
      }),
      comparisonTitle: (au?.comparisonTitle ?? config.comparisonTitle)(auName),
      comparisonSub: (au?.comparisonSub ?? config.comparisonSub)(auName),
      comparison: {
        headers: [config.compFeatureLabel, ...en.comparison.headers.slice(1)],
        rows: en.comparison.rows.map((row) => [
          // 查不到就露出英文原文。check:row-labels 会在构建前拦下漏配的标签，
          // 所以线上不该出现这种回落；留着是为了让漏配时页面还能渲染。
          ROW_LABELS[row[0]]?.[lang] ?? row[0],
          ...row.slice(1),
        ]),
      },
      promptTitle: (au?.promptTitle ?? config.promptTitle)(auName),
      promptSub: (au?.promptSub ?? config.promptSub)(auName),
      prompts: en.prompts.map((p, i) => ({
        ...p,
        title: sd?.promptTitles?.[i] ?? p.title,
        text: sd?.promptTexts?.[i] ?? config.promptDescs?.[i]?.(name) ?? p.text,
      })),
      useCaseTitle: (au?.useCaseTitle ?? config.useCaseTitle)(auName),
      useCaseSub: (au?.useCaseSub ?? config.useCaseSub)(auName),
      useCases: en.useCases.map((uc, i) => ({
        icon: uc.icon,
        title: config.useCases[i]?.title ?? uc.title,
        desc: (au?.useCaseDescs?.[i] ?? config.useCases[i]?.desc)?.(auName) ?? uc.desc,
      })),
      // 和上面 subgenres 同一个判据，理由见那里：names 按 slug 索引，而 slug 是
      // 「点进去看哪个页」、name 才是「显示什么」。原来这里直接用 names[r.slug]，
      // 后果比 subgenres 更明显——同一页里多张卡片指向同一个 slug 是常事
      // （alternative 页有 Indie / Britpop / Emo 三张都指向 alternative），
      // 于是译文版里塌缩成三张「另类」，React 还会因 key 重复告警。
      related: en.related.map((r) => ({
        ...r,
        name:
          (getGenreData(r.slug)?.displayName === r.name
            ? config.names[r.slug]
            : undefined) ?? r.name,
      })),
      // 注意 faqs 是整组替换不是逐条回落：audience 声明了就整组用它的，
      // 条数也跟着变（会进 FAQPage 结构化数据）。补语言时别只写两三条。
      faqs: (au?.faqs ?? config.faqs).map((f) => ({
        q: f.q(auName),
        a: f.a(auName),
      })),
      finalCta: {
        title: (au?.finalCtaTitle ?? config.finalCtaTitle)(auName),
        subtitle: (au?.finalCtaSub ?? config.finalCtaSub)(auName),
        buttonText: config.finalCtaButton,
      },
    };
  }

  return result;
}
