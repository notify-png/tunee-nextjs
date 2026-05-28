import type { Metadata } from "next";
import { Poppins, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

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
  title: "Tunee – AI Music Generator",
  description:
    "Chat your way to great music. Tunee's AI music agent creates royalty-free tracks in any style — no experience required.",
  metadataBase: new URL("https://www.tunee.ai"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${barlowCondensed.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
