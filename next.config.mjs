/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "https://tunee-nextjs-main.vercel.app",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
