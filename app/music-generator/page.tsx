import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SearchableCategoriesI18n from "../[lang]/music-generator/SearchableCategoriesI18n";
import { publicAssetUrl } from "@/lib/publicAssetUrl";
import { allCategories, navCategories } from "./navCategories";
import { buildAlternates } from "@/lib/musicSeo";

const SIGN_IN = "https://www.tunee.ai";

const faqItems = [
  {
    q: "What is Tunee Music Generator?",
    a: "Tunee Music Generator is an AI-powered platform that creates original music from simple text descriptions. Whether you need a lo-fi beat, cinematic score, or pop track, just describe it in a chat and Tunee generates production-ready music instantly.",
  },
  {
    q: "How does Tunee Music Generator work?",
    a: "Simply type a description of the music you want — genre, mood, instruments, tempo, or even upload an image or video for inspiration. Tunee's multi-model AI engine analyzes your input and generates a full track, complete with melody, harmony, and production.",
  },
  {
    q: "Is Tunee Music Generator free?",
    a: "Yes! Tunee offers free credits when you sign up — no credit card required. Generate multiple tracks for free, and upgrade to a paid plan when you need more.",
  },
  {
    q: "What genres can Tunee create?",
    a: "Tunee supports pop, hip-hop, lo-fi, EDM, jazz, classical, cinematic, ambient, R&B, rock, country, and many more. You can also blend genres or create entirely new styles.",
  },
  {
    q: "Can I use the music commercially?",
    a: "Yes. Music you generate is yours for personal and commercial projects — YouTube, podcasts, ads, games, streaming, subject to our terms of service.",
  },
  {
    q: "What makes Tunee different?",
    a: "Tunee combines multiple top AI music models into one conversational interface. Chat naturally instead of tweaking parameters. Plus, features like virtual artists, stem separation, and music video generation make it a complete creative suite.",
  },
];

const ctaCards = [
  { title: "About Us", desc: "Learn who we are and why we built Tunee.", link: "Learn More", href: "https://www.tunee.ai/about-us" },
  { title: "Customer Stories", desc: "See how creators and businesses use Tunee.", link: "Read Stories", href: "https://www.tunee.ai/customer-stories" },
  { title: "Music Agent", desc: "Meet our AI music agent — your creative co-pilot.", link: "Try It Now", href: "https://www.tunee.ai/music-agent" },
];

const footerLinks = {
  Resources: [
    { label: "About Us", href: "https://www.tunee.ai/about-us" },
    { label: "Customer Stories", href: "https://www.tunee.ai/customer-stories" },
    { label: "Creator Program", href: "https://www.tunee.ai/creator-program" },
    { label: "Affiliate", href: "https://www.tunee.ai/affiliate" },
  ],
  Features: [
    { label: "AI Music Agent", href: "https://www.tunee.ai/music-agent" },
    { label: "AI Character", href: "https://www.tunee.ai/virtual-artist" },
    { label: "Music Video", href: "https://www.tunee.ai/features/music-video-generator" },
    { label: "Lip Sync", href: "https://www.tunee.ai/features/lip-sync" },
  ],
  Policy: [
    { label: "Terms of Use", href: "https://www.tunee.ai/terms-of-service" },
    { label: "Privacy Policy", href: "https://www.tunee.ai/privacy-policy" },
  ],
  Connect: [
    { label: "Discord", href: "https://discord.com/invite/zxCyCmUWC3" },
    { label: "X / Twitter", href: "https://x.com/tunee_ai" },
    { label: "YouTube", href: "https://www.youtube.com/@tunee_aiagent" },
    { label: "TikTok", href: "https://www.tiktok.com/@tunee_ai" },
  ],
};

const { canonical, languages } = buildAlternates("/music-generator");

export const metadata: Metadata = {
  alternates: {
    canonical,
    languages,
  },
};

const totalPages = allCategories.reduce((s, c) => s + c.pages.length, 0);

const jsonLdSoftwareApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tunee AI Music Generator",
  description: "AI-powered music generator that creates original tracks from text descriptions. Supports pop, hip-hop, EDM, jazz, classical, and 100+ styles.",
  url: "https://www.tunee.ai/music-generator",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: "Tunee", url: "https://www.tunee.ai" },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MusicGeneratorIndexPage() {
  return (
    <div className="min-h-screen font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <NavBar categories={navCategories} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={publicAssetUrl("/images/hero-bg-abstract.jpg")} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto w-full px-6 md:px-10 pt-[100px] pb-[80px] text-center">
          <h1 className="mb-5">
            <span
              className="block leading-[1.08] tracking-tight text-[#191919] whitespace-nowrap"
              style={{ fontSize: "clamp(14px, 2.8vw, 36px)" }}
            >
              Discover Tunee Music Generator
            </span>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[1.65] max-w-[640px] mx-auto mb-8 text-[#666666]">
            Use our AI music generator to turn ideas into tracks. No prompts. No skills required. Free to start.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] relative mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={publicAssetUrl("/images/video-poster.png")}
              alt="Tunee demo"
              className="w-full absolute inset-0 h-full object-cover"
              id="video-poster"
            />
            <video
              src={publicAssetUrl("/videos/tunee-agent-how-to-use.mp4")}
              autoPlay
              loop
              muted
              playsInline
              className="w-full relative z-10"
            />
          </div>
          <a
            href={SIGN_IN}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-[16px] text-white transition-all duration-200 hover:opacity-90 hover:shadow-[0_4px_18px_rgba(77,70,254,0.38)]"
            style={{ background: "var(--gradient-cta)" }}
          >
            Chat with Tunee
          </a>
        </div>
      </section>

      {/* ── Categories ── */}
      <SearchableCategoriesI18n
        categories={allCategories}
        labels={{
          browseLabel: "",
          browseTitle: "Explore all styles",
          searchPlaceholder: "Search...",
          allTab: "All",
          noResults: 'No styles found for "{query}"',
        }}
      />

      {/* ── Catalog ── */}
      <section className="py-[80px] md:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="overflow-hidden rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.1)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&h=500&fit=crop"
                alt="AI Music Catalog"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2
                className="leading-[1.08] tracking-tight text-[#191919] mb-6"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                Find any style you need.
              </h2>
              <div className="text-[16px] leading-[1.65] text-[#666666] mb-8">
                <p>
                  Tunee combines 100+ AI music styles in one conversational interface. From orchestral
                  soundtracks to lofi beats, EDM, jazz, and beyond — describe what you need and Tunee
                  creates production-ready music instantly.
                </p>
                <p className="mt-4">
                  More than a catalog, Tunee is an AI Music Agent. Choose a style, refine the mood,
                  and generate custom music for your video, game, podcast, or commercial project.
                </p>
              </div>
              <a
                href={SIGN_IN}
                className="inline-flex text-[15px] font-bold text-[#4D46FE] border-b-2 border-[#4D46FE]/50 pb-1 hover:text-[#191919] hover:border-[#191919]/40 transition-colors duration-300"
              >
                Start Creating Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Royalty-free ── */}
      <section className="py-[80px] md:py-[100px] bg-[#F4F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2
                className="leading-[1.08] tracking-tight text-[#191919] mb-6"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                Use it anywhere.
              </h2>
              <div className="text-[16px] leading-[1.65] text-[#666666] mb-8 max-w-[480px]">
                <p>
                  Tunee is the ultimate solution for content creators looking to add music to their projects.
                  Our vast catalog of AI-generated music tracks can be used on all major platforms, including
                  YouTube, TikTok, Instagram, podcasts, games, films, and more.
                </p>
                <p className="mt-4">
                  With the ability to use music on such a diverse range of platforms, you&apos;ll never have to
                  worry about licensing or copyright issues again.
                </p>
              </div>
              <a
                href={SIGN_IN}
                className="inline-flex text-[15px] font-bold text-[#4D46FE] border-b-2 border-[#4D46FE]/50 pb-1 hover:text-[#191919] hover:border-[#191919]/40 transition-colors duration-300"
              >
                Start Creating Free
              </a>
            </div>
            <div className="order-1 md:order-2 overflow-hidden rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.1)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&h=500&fit=crop"
                alt="Music for all platforms"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-[80px] md:py-[100px] bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <h2
            className="leading-[1.08] tracking-tight text-center text-[#191919] mb-14"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-[#E8E8EA] group"
              >
                <AccordionTrigger className="text-left text-[16px] md:text-[18px] py-6 hover:no-underline text-[#191919]/70 group-hover:text-[#191919] transition-colors duration-200 [&[data-state=open]]:text-[#4D46FE]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-[1.75] pb-6 text-[#666666]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA Cards ── */}
      <section className="py-[80px] md:py-[100px] bg-[#F4F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h2
            className="leading-[1.08] tracking-tight text-center text-[#191919] mb-12"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            Discover More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ctaCards.map((card, i) => (
              <a
                key={i}
                href={card.href}
                className="group block bg-white rounded-2xl border border-[#E8E8EA] p-8 md:p-10 transition-all duration-300 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                <h3 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-[#191919] mb-3">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-[#666] mb-6">
                  {card.desc}
                </p>
                <span className="inline-flex items-center text-[14px] font-medium text-[#4D46FE] group-hover:gap-2 transition-all duration-300">
                  {card.link}
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#191919] pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={publicAssetUrl("/logo-white.png")} alt="Tunee" className="h-32 mx-auto mb-4" />
            <p className="text-[15px] text-white/60">Get your music done, with doing nothing more.</p>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 mb-8"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
          >
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="text-[11px] uppercase tracking-[1.5px] mb-4 text-white/40">{title}</p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] text-white/75 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-white/40 text-center">
            &copy; {new Date().getFullYear()} Tunee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
