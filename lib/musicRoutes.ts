import {
  DISTINCT_CONTENT_ALIASES,
  DUPLICATE_SLUG_REDIRECTS,
} from "./musicRoutes.aliases.mjs";

/**
 * Normalizes a music-generator slug onto the spelling internal links should
 * use. Covers both alias tables: the redirected duplicates and the two
 * near-duplicate pairs that stay separately indexable.
 *
 * This is about link targets, not indexability — for the latter see
 * canonicalGenreSlug() in data/genre-content, which only collapses the
 * redirected duplicates.
 */
const MUSIC_SLUG_ALIASES: Record<string, string> = Object.fromEntries([
  ...DUPLICATE_SLUG_REDIRECTS,
  ...DISTINCT_CONTENT_ALIASES,
]);

export function canonicalMusicSlug(slug: string): string {
  return MUSIC_SLUG_ALIASES[slug] ?? slug;
}
