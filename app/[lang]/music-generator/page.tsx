import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import { buildAlternates } from "@/lib/musicSeo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { publicAssetUrl } from "@/lib/publicAssetUrl";
import { translations, SUPPORTED_LANGS } from "./translations";
import SearchableCategoriesI18n from "./SearchableCategoriesI18n";
import { buildCategories, buildNavCategories } from "./buildCategories";

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang];
  if (!t) return {};
  return {
    title: `Tunee – AI Music Generator`,
    description: t.heroSub.replace("\n", " "),
    alternates: buildAlternates("/music-generator", lang),
  };
}

const SIGN_IN = "https://www.tunee.ai";

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

export default async function I18nMusicGeneratorPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = translations[lang];
  if (!t) notFound();

  const cats = buildCategories(lang, t);
  const totalPages = cats.reduce((n, c) => n + c.pages.length, 0);
  const navCategories = buildNavCategories(lang, t);

  const jsonLdSoftwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tunee AI Music Generator",
    description: t.heroSub.replace("\n", " "),
    url: "https://www.tunee.ai/music-generator",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "Tunee", url: "https://www.tunee.ai" },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

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
              style={{ fontSize: "clamp(14px, 3.8vw, 48px)" }}
            >
              {t.heroLine1}
            </span>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[1.65] max-w-[640px] mx-auto mb-8 text-[#666666]">
            {t.heroSub.replace("\n", " ")}
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
            {t.heroCta}
          </a>
        </div>
      </section>

      {/* ── Categories ── */}
      <SearchableCategoriesI18n
        categories={cats}
        labels={{
          browseLabel: t.browseLabel,
          browseTitle: t.browseTitle,
          searchPlaceholder: t.searchPlaceholder,
          allTab: t.allTab,
          noResults: t.noResults,
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
              {t.catalogOverline && (
                <p className="text-[11px] uppercase tracking-[3px] text-[#4D46FE] mb-5">{t.catalogOverline}</p>
              )}
              <h2
                className="leading-[1.08] tracking-tight text-[#191919] mb-6"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                {t.catalogTitle}
              </h2>
              <div className="text-[16px] leading-[1.65] text-[#666666] mb-8">
                {t.catalogDesc.replace("198+", `${totalPages}+`).split("\n\n").map((para, i) => (
                  <p key={i} className={i > 0 ? "mt-4" : ""}>
                    {para}
                  </p>
                ))}
              </div>
              <a
                href={SIGN_IN}
                className="inline-flex text-[15px] font-bold text-[#4D46FE] border-b-2 border-[#4D46FE]/50 pb-1 hover:text-[#191919] hover:border-[#191919]/40 transition-colors duration-300"
              >
                {t.catalogLink}
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
              {t.royaltyOverline && (
                <p className="text-[11px] uppercase tracking-[3px] text-[#4D46FE] mb-5">{t.royaltyOverline}</p>
              )}
              <h2
                className="leading-[1.08] tracking-tight text-[#191919] mb-6"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                {t.royaltyTitle}
              </h2>
              <div className="text-[16px] leading-[1.65] text-[#666666] mb-8 max-w-[480px]">
                {t.royaltyDesc.split("\n\n").map((para, i) => (
                  <p key={i} className={i > 0 ? "mt-4" : ""}>{para}</p>
                ))}
              </div>
              <a
                href={SIGN_IN}
                className="inline-flex text-[15px] font-bold text-[#4D46FE] border-b-2 border-[#4D46FE]/50 pb-1 hover:text-[#191919] hover:border-[#191919]/40 transition-colors duration-300"
              >
                {t.royaltyLink}
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
          {t.faqOverline && (
            <p className="text-[11px] uppercase tracking-[3px] text-[#999] text-center mb-4">{t.faqOverline}</p>
          )}
          <h2
            className="leading-[1.08] tracking-tight text-center text-[#191919] mb-14"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            {t.faqTitle}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {t.faqs.map((item, i) => (
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
            {t.ctaCards.map((card, i) => (
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
            <p className="text-[15px] text-white/60">{t.footerTagline}</p>
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
            &copy; {new Date().getFullYear()} Tunee. {t.footerCopyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
