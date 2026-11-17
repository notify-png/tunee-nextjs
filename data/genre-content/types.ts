export interface GenreData {
  slug: string;
  published?: boolean;
  indexable?: boolean;
  updatedAt?: string;
  displayName: string;
  /** 句中形态的名称。只有声明了 sentenceNames 的语言 + 人群页才有。

      displayName 是标题形态（es「Para Autores de Canciones」），直接塞进正文
      句子里就是一串句中大写；而降首字母这种机械规则既救不了它，又会把
      ja「TikTok向け」毁成「tikTok向け」。所以句中怎么写由各语言自己给。 */
  sentenceName?: string;
  category: string;
  colors: ColorScheme;
  svgType: SvgBgType;
  seo: { title: string; description: string };
  hero: {
    title: string;
    subtitle: string;
    badges: string[];
  };
  chatDemo: {
    userMessage: string;
    aiReply: string;
    trackName: string;
    artistName: string;
    tags: string[];
  };
  dna: { num: string; title: string; desc: string }[];
  dnaTitle: string;
  dnaSub: string;
  subgenres: {
    name: string;
    bpmRange: string;
    era: string;
    desc: string;
    slug: string;
  }[];
  subgenreTitle: string;
  subgenreSub: string;
  comparison: {
    headers: string[];
    rows: string[][];
  };
  comparisonTitle: string;
  comparisonSub: string;
  prompts: {
    title: string;
    text: string;
    tags: string[];
  }[];
  promptTitle: string;
  promptSub: string;
  useCases: { icon: string; title: string; desc: string }[];
  useCaseTitle: string;
  useCaseSub: string;
  related: { name: string; slug: string }[];
  faqs: { q: string; a: string }[];
  finalCta: { title: string; subtitle: string; buttonText: string };
}

/** 页面背景色。
 *
 *  只有这两个值真的进 DOM。强调色（accent / accent-glow）在两个 page.tsx 里
 *  硬编码成品牌橙紫，page.module.css 的渐变也直接写死同一对颜色——
 *  曾经每页一个 accent 的设计在样式层被统一掉了，数据层那四个字段
 *  293 个文件填了 30 种颜色，一个都到不了页面。2026-10-09 删除。 */
export interface ColorScheme {
  bgBase: string;
  bgBaseRgb: string;
}

export type SvgBgType =
  | "retroGrid"
  | "jazzSmoke"
  | "rockWave"
  | "electroPulse"
  | "hipHopBeat"
  | "classicalScore"
  | "folkTree"
  | "worldPattern"
  | "ambient"
  | "lofiRain"
  | "pianoKeys"
  | "stringWave"
  | "windBreath"
  | "drumCircle"
  | "moodAbstract"
  | "eraTimeline"
  | "useCaseGrid"
  | "inspiredStar"
  | "creatorDesk"
  | "productionKnob";
