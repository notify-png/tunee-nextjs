/**
 * Slug alias tables, shared by lib/musicRoutes.ts and next.config.mjs.
 *
 * Lives in .mjs rather than .ts because next.config.mjs cannot import
 * TypeScript. Both consumers import from here so the two use sites cannot
 * drift apart.
 *
 * The two tables look alike but mean different things — see each one.
 */

/**
 * Pairs where the first slug's data module only re-exports the second's, so
 * both URLs served byte-identical pages. The first is 301'd away and never
 * enters the sitemap.
 *
 * The compact spelling wins because that is where the search demand is: GSC
 * shows "kpop" taking 96.8% of impressions and 99.4% of clicks against
 * "k-pop"/"k pop", and the same pattern holds for minecraft, dnd, mario and
 * studio-ghibli. The "-style" spellings draw close to nothing.
 *
 * Heads-up when editing page copy: the filenames are the other way round. The
 * article lives in the `from` file (data/genre-content/k-pop.ts) and the `to`
 * file is the two-line re-export stub — so /music-generator/kpop is written in
 * k-pop.ts, not kpop.ts. Renaming them to match the indexed URL is a pending
 * cleanup, not a rule.
 *
 * @type {[from: string, to: string][]}
 */
export const DUPLICATE_SLUG_REDIRECTS = [
  ["cyberpunk-style", "cyberpunk"],
  ["dnd-style", "dandd"],
  ["final-fantasy-style", "final-fantasy"],
  ["genshin-style", "genshin"],
  ["j-pop", "jpop"],
  ["k-pop", "kpop"],
  ["mario-style", "mario"],
  ["minecraft-style", "minecraft"],
  ["persona-style", "persona"],
  ["silent-hill-style", "silent-hill"],
  ["studio-ghibli-style", "studio-ghibli"],
  ["zelda-style", "zelda"],
];

/**
 * Near-duplicate spellings backed by two separate hand-written articles. These
 * are NOT redirected and both sides stay indexable — collapsing them would
 * throw away written content, and picking a survivor is a human call.
 *
 * They are listed only so internal links converge on one of the two rather
 * than splitting link equity across both.
 *
 * @type {[from: string, to: string][]}
 */
export const DISTINCT_CONTENT_ALIASES = [
  ["acapella", "a-cappella"],
  ["r-and-b", "rnb"],
];
