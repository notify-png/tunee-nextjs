import type { Metadata } from "next";
import { Poppins, Barlow_Condensed } from "next/font/google";
import "../globals.css";
import { Providers } from "@/components/Providers";
import { buildSocialMetadata, SITE } from "@/lib/musicSeo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Music Generator: Create Original Songs Online | Tunee",
  description:
    "Create original music from text with Tunee's AI music generator. Choose any genre, mood, or style, refine your track through chat, and start for free.",
  metadataBase: new URL(SITE),
  icons: { icon: "/favicon.ico" },
  ...buildSocialMetadata(
    "AI Music Generator: Create Original Songs Online | Tunee",
    "Create original music from text with Tunee's AI music generator. Choose any genre, mood, or style, refine your track through chat, and start for free.",
    `${SITE}/music-generator`,
  ),
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={`${poppins.variable} ${barlowCondensed.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/video-poster.jpg" type="image/jpeg" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
