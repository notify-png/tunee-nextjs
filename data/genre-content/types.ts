export interface GenreData {
  slug: string;
  published?: boolean;
  indexable?: boolean;
  updatedAt?: string;
  displayName: string;
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

export interface ColorScheme {
  bgBase: string;
  accent: string;
  accentGlow: string;
  accentRgb: string;
  accentGlowRgb: string;
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
