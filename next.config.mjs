import { DUPLICATE_SLUG_REDIRECTS } from "./lib/musicRoutes.aliases.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only the re-export duplicates are redirected. DISTINCT_CONTENT_ALIASES is
  // deliberately absent: those slugs are separate articles that must stay
  // reachable, and they are in the sitemap.
  async redirects() {
    return DUPLICATE_SLUG_REDIRECTS.flatMap(([source, destination]) => [
      {
        source: `/music-generator/${source}`,
        destination: `/music-generator/${destination}`,
        statusCode: 301,
      },
      {
        source: `/:lang/music-generator/${source}`,
        destination: `/:lang/music-generator/${destination}`,
        statusCode: 301,
      },
    ]);
  },
};

export default nextConfig;
