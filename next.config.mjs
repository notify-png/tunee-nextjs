import { DUPLICATE_SLUG_REDIRECTS } from "./lib/musicRoutes.aliases.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 经 www.tunee.ai 的 /music-generator/* 转发访问，JS/CSS 挂在该路径下同源加载，不暴露 vercel 域名；
  // Next 会为相对 assetPrefix 自动加 /music-generator/_next/:path+ → /_next/:path+ 的 rewrite
  assetPrefix: process.env.NODE_ENV === "development" ? "" : "/music-generator",
  // public/ 下的文件经 /music-generator/_public/* 同源访问（主站只转发 /music-generator/*），见 lib/publicAssetUrl.ts
  async rewrites() {
    return {
      beforeFiles: [{ source: "/music-generator/_public/:path*", destination: "/:path*" }],
    };
  },
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
