import { unstable_cache } from "next/cache";
import { fetchLandingCategories } from "@/lib/fetch-landing-categories";
import type { DBCategory } from "@/lib/landing-types";

async function fetchLandingCategoriesSafe(): Promise<DBCategory[]> {
  try {
    return await fetchLandingCategories();
  } catch {
    return [];
  }
}

const getCategoriesCached = unstable_cache(fetchLandingCategoriesSafe, ["landing-nav-categories"], {
  revalidate: 3600,
});

/** Server-only: cached category tree for nav SEO + RSC. */
export async function getCategories(): Promise<DBCategory[]> {
  return getCategoriesCached();
}
