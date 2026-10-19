function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

// 走 www.tunee.ai 同源转发（next.config 的 _public rewrite），不暴露 vercel 域名；须为绝对地址，og:image、JSON-LD 要用
const DEFAULT_PUBLIC_ASSET_PREFIX = "https://www.tunee.ai/music-generator/_public";

/** Prefix for files served from `public/` when using a CDN / absolute asset host (matches `assetPrefix`). */
export function publicAssetUrl(path: string): string {
  const prefix = trimTrailingSlash(
    process.env.NEXT_PUBLIC_ASSET_PREFIX || DEFAULT_PUBLIC_ASSET_PREFIX,
  );
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return prefix ? `${prefix}${normalized}` : normalized;
}
