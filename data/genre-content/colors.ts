import type { ColorScheme } from "./types";

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  return `${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)}`;
}

function makeScheme(bgBase: string, accent: string, accentGlow: string): ColorScheme {
  return { bgBase, accent, accentGlow, accentRgb: hexToRgb(accent), accentGlowRgb: hexToRgb(accentGlow), bgBaseRgb: hexToRgb(bgBase) };
}

/** Per-slug color overrides */
export const SLUG_COLORS: Record<string, ColorScheme> = {
  synthwave:  makeScheme("#0D0221", "#FF6EC7", "#7B68EE"),
  lofi:       makeScheme("#0E1118", "#A78BFA", "#6366F1"),
  jazz:       makeScheme("#0A0E1A", "#D4A855", "#8B6914"),
  rock:       makeScheme("#120808", "#E84545", "#FF6B6B"),
  "hip-hop":  makeScheme("#0D0A15", "#FFD700", "#FF8C00"),
  classical:  makeScheme("#080D14", "#5BA8C8", "#3B82F6"),
  latin:      makeScheme("#1A0A08", "#FF7043", "#F44336"),
  rnb:        makeScheme("#0F0A14", "#E879F9", "#A855F7"),
  edm:        makeScheme("#050A12", "#22D3EE", "#06B6D4"),
  pop:        makeScheme("#0C0818", "#F472B6", "#EC4899"),
  country:    makeScheme("#141008", "#D97706", "#B45309"),
  folk:       makeScheme("#0A100A", "#34D399", "#059669"),
  blues:      makeScheme("#08101A", "#60A5FA", "#3B82F6"),
  funk:       makeScheme("#140A10", "#FB923C", "#EA580C"),
  ambient:    makeScheme("#080E14", "#67E8F9", "#22D3EE"),
  metal:      makeScheme("#100808", "#DC2626", "#991B1B"),
  reggae:     makeScheme("#081008", "#84CC16", "#65A30D"),
  soul:       makeScheme("#120A08", "#FBBF24", "#D97706"),
};

/** Category-level default colors (fallback) */
const CATEGORY_DEFAULTS: Record<string, ColorScheme> = {
  genre:      makeScheme("#0a0a1a", "#8B5CF6", "#7C3AED"),
  style:      makeScheme("#0a0a1a", "#A78BFA", "#7C3AED"),
  instrument: makeScheme("#0a0f1a", "#3B82F6", "#2563EB"),
  era:        makeScheme("#0f0a08", "#F59E0B", "#D97706"),
  mood:       makeScheme("#0f0a1a", "#EC4899", "#DB2777"),
  "use-case": makeScheme("#080a14", "#6366F1", "#4F46E5"),
  tempo:      makeScheme("#0a080f", "#A855F7", "#9333EA"),
  production: makeScheme("#08100a", "#10B981", "#059669"),
  context:    makeScheme("#0a0814", "#818CF8", "#6366F1"),
  form:       makeScheme("#100a0a", "#F87171", "#EF4444"),
  inspired:   makeScheme("#0a0a14", "#C084FC", "#A855F7"),
  creator:    makeScheme("#0a0f14", "#38BDF8", "#0EA5E9"),
  external:   makeScheme("#0a0a1a", "#8B5CF6", "#7C3AED"),
};

const FALLBACK: ColorScheme = makeScheme("#0a0a1a", "#8B5CF6", "#7C3AED");

export function getColorScheme(slug: string, category: string): ColorScheme {
  return SLUG_COLORS[slug] ?? CATEGORY_DEFAULTS[category] ?? FALLBACK;
}
