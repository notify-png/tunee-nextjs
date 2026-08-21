import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getGenreData, getAllSlugs, hasGenreData } from "@/data/genre-content";
import { hasI18nGenreData } from "@/data/genre-content/i18n";
import { categories, externalSlugs } from "@/data/landingPages";
import type { GenreData } from "@/data/genre-content/types";
import { buildAlternates } from "@/lib/musicSeo";
import s from "./page.module.css";
import NavBar from "@/components/NavBar";
import { navCategories } from "../navCategories";
import GenreBg from "./GenreBg";
import FaqAccordion from "./FaqAccordion";
import UseCaseTabs from "./UseCaseTabs";
import TarotPromptFan from "./TarotPromptFan";
import { SUPPORTED_LANGS } from "@/app/[lang]/music-generator/translations";

export const dynamicParams = false;

/* For slugs that have local genre data, we use the new dark template.
   For slugs that DON'T yet have data, we still generate a page using
   generateStaticParams so the build doesn't break — but they'll 404
   until their data file is created. */
export function generateStaticParams() {
  const localSlugs = getAllSlugs();
  // For now, only generate pages for slugs that have data
  return localSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getGenreData(slug);
  if (!data) return {};
  const engPath = `/music-generator/${slug}`;
  const availableLangs = SUPPORTED_LANGS.filter((lang) =>
    hasI18nGenreData(slug, lang),
  );
  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: buildAlternates(engPath, "en", availableLangs),
  };
}

const STEPS = [
  { num: "01", title: "Describe Your Vision", desc: "Tell Music Agent what kind of track you want — reference a mood, artist, or scene. No jargon needed." },
  { num: "02", title: "Refine Through Chat", desc: "Fine-tune BPM, key, instruments, and structure through natural conversation. Iterate until it's perfect." },
  { num: "03", title: "Export & Use", desc: "Download your track in high-quality audio. Fully cleared for commercial use — games, videos, ads, and more." },
];

const WAVE_HEIGHTS = [58,32,71,45,80,28,65,50,73,38,82,42,68,55,76,30,62,48,70,35];

export default async function GenreLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getGenreData(slug);
  if (!data) notFound();

  const { colors } = data;
  const cssVars = {
    "--bg-base": colors.bgBase,
    "--accent": "#FF6B35",
    "--accent-glow": "#7C3AED",
    "--accent-rgb": "255,107,53",
    "--glow-rgb": "124,58,237",
    "--bg-base-rgb": colors.bgBaseRgb,
  } as React.CSSProperties;

  const nameLower = data.displayName.toLowerCase();
  const validRelated = data.related.filter((g) => hasGenreData(g.slug));

  const genre = data.displayName;
  const engPath = `/music-generator/${slug}`;
  const pageCanonical = `https://www.tunee.ai${engPath}`;

  const jsonLdSoftwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Tunee ${genre} Music Generator`,
    description: data.seo.description,
    url: pageCanonical,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "Tunee", url: "https://www.tunee.ai" },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tunee.ai" },
      { "@type": "ListItem", position: 2, name: "AI Music Generator", item: "https://www.tunee.ai/music-generator" },
      { "@type": "ListItem", position: 3, name: `${genre} Music Generator`, item: pageCanonical },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to create ${genre} music with AI`,
    description: `Generate ${genre} music using Tunee's AI music generator in 3 steps.`,
    step: STEPS.map((st, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: st.title,
      text: st.desc,
    })),
  };

  const hasFaqs = Array.isArray(data.faqs) && data.faqs.length > 0;
  const jsonLdFaq = hasFaqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <div className={s.page} style={cssVars}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
      {jsonLdFaq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />}
      <GenreBg />
      <div className={s.pageContent}>
        <NavBar categories={navCategories} variant="genre-dark" />
        <main>
          {/* ── Hero ── */}
          <section className={s.hero}>
            <div className={s.wrap}>
              <div className={s.heroGrid}>
                <div className={s.heroLeft}>
                  <nav className={s.breadcrumb}>
                    <a href="https://www.tunee.ai">Home</a>
                    <span className={s.sep}>&rsaquo;</span>
                    <Link href="/music-generator">Music Generator</Link>
                    <span className={s.sep}>&rsaquo;</span>
                    <span className={s.current}>{data.displayName} Music Generator</span>
                  </nav>
                  <h1 className={s.heroTitle}>
                    {data.hero.title.split("\n").map((line, i) => (
                      <span key={i}>{i > 0 && <br />}{line}</span>
                    ))}
                  </h1>
                  <p className={s.heroSub}>{data.hero.subtitle}</p>
                  <div className={s.heroCtas}>
                    <a href="https://www.tunee.ai" className={s.btnPrimary}>
                      Create {data.displayName} Music
                    </a>
                    <a href="#prompts" className={s.btnGhost}>Browse Prompts &darr;</a>
                  </div>
                  <div className={s.heroBadges}>
                    {data.hero.badges.map((b) => (
                      <span key={b} className={s.badge}>{b}</span>
                    ))}
                  </div>
                </div>
                <div>
                  {/* ChatDemo */}
                  <div className={s.chatDemo}>
                    <div className={s.chatTopbar}>
                      <span className={s.chatDot} />
                      <span className={s.chatDot} />
                      <span className={s.chatDot} />
                      <span className={s.chatTopTitle}>Tunee Music Agent</span>
                    </div>
                    <div className={s.chatBody}>
                      <div className={`${s.chatRow} ${s.chatRowUser}`}>
                        <div className={s.chatBubbleUser}>{data.chatDemo.userMessage}</div>
                      </div>
                      <div className={`${s.chatRow} ${s.chatRowAi}`}>
                        <div className={s.chatAvatar}>T</div>
                        <div className={s.chatBubbleAi}>{data.chatDemo.aiReply}</div>
                      </div>
                      <div className={`${s.chatRow} ${s.chatRowAi}`}>
                        <div className={s.chatAvatar} style={{ visibility: "hidden" }} />
                        <div className={s.chatPlayer}>
                          <div className={s.chatPlayerCover} />
                          <div>
                            <p className={s.chatPlayerTrack}>{data.chatDemo.trackName}</p>
                            <p className={s.chatPlayerArtist}>{data.chatDemo.artistName}</p>
                            <div className={s.chatPlayerWave}>
                              {WAVE_HEIGHTS.map((h, i) => (
                                <div key={i} className={s.chatPlayerBar} style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} />
                              ))}
                            </div>
                          </div>
                          <button className={s.chatPlayerBtn} type="button">
                            <span aria-hidden="true">&#9654;</span>
                            <span className="sr-only">Play</span>
                          </button>
                          <div className={s.chatPlayerTags}>
                            {data.chatDemo.tags.map((t) => (
                              <span key={t} className={s.chatBadge}>{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.chatInput}>
                      <span className={s.chatInputField}>Chat with Tunee to create music...</span>
                      <button className={s.chatSendBtn} aria-label="Send">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── DNA ── */}
          <section className={s.sectionGrey}>
            <div className={s.wrap}>
              <h2 className={s.sectionTitle}>{data.dnaTitle}</h2>
              <p className={s.sectionSub}>{data.dnaSub}</p>
              <div className={s.dnaGrid}>
                {data.dna.map((d) => (
                  <div key={d.num} className={s.card}>
                    <span className={s.cardNum}>{d.num}</span>
                    <h3 className={s.cardTitle}>{d.title}</h3>
                    <p className={s.cardDesc}>{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Subgenres ── */}
          <section className={s.section}>
            <div className={s.wrap}>
              <h2 className={s.sectionTitle}>{data.subgenreTitle}</h2>
              <p className={s.sectionSub}>{data.subgenreSub}</p>
              <div className={s.subGrid}>
                {data.subgenres.map((sg) => (
                  <div key={sg.name} className={s.card}>
                    <h3 className={s.cardTitle}>{sg.name}</h3>
                    <div className={s.tagRow}>
                      <span className={s.badge}>{sg.bpmRange}</span>
                      <span className={s.badge}>{sg.era}</span>
                    </div>
                    <p className={s.cardDesc}>{sg.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Comparison Table ── */}
          <section className={s.sectionGrey}>
            <div className={s.wrap}>
              <h2 className={s.sectionTitle}>{data.comparisonTitle}</h2>
              <p className={s.sectionSub}>{data.comparisonSub}</p>
              <div className={s.tableScroll}>
                <table className={s.table}>
                  <thead>
                    <tr>{data.comparison.headers.map((h) => <th key={h}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {data.comparison.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, i) => (
                          <td key={i} className={i === 1 ? s.highlight : undefined}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── Prompt Tarot Fan ── */}
          <TarotPromptFan
            prompts={data.prompts}
            sectionTitle={data.promptTitle}
            sectionSub={data.promptSub}
          />

          {/* ── Use Cases ── */}
          <UseCaseTabs
            useCases={data.useCases}
            sectionTitle={data.useCaseTitle}
            sectionSub={data.useCaseSub}
          />

          {/* ── Steps ── */}
          <section className={s.section}>
            <div className={s.wrap}>
              <h2 className={s.sectionTitle}>Three Simple Steps</h2>
              <p className={s.sectionSub}>From idea to finished track — describe, refine, and export your {nameLower} music.</p>
              <div className={s.stepsGrid}>
                {STEPS.map((st) => (
                  <div key={st.num} className={s.stepCard}>
                    <span className={s.stepNum}>{st.num}</span>
                    <h3 className={s.cardTitle}>{st.title}</h3>
                    <p className={s.cardDesc}>{st.desc}</p>
                  </div>
                ))}
              </div>
              <div className={s.stepsCta}>
                <a href="https://www.tunee.ai" className={s.btnPrimary}>
                  Start Creating {data.displayName} Music
                </a>
              </div>
            </div>
          </section>

          {/* ── Related Genres ── */}
          <section className={s.sectionGrey}>
            <div className={s.wrap}>
              <h2 className={s.sectionTitle}>Explore More Genres</h2>
              <p className={s.sectionSub}>Discover related genres and expand your sonic palette.</p>
              <div className={s.relatedRow}>
                {validRelated.map((g) => (
                  <Link key={g.name} href={`/music-generator/${g.slug}`} className={s.relatedTag}>
                    {g.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className={s.section}>
            <div className={s.wrap}>
              <h2 className={s.sectionTitle}>Frequently Asked Questions</h2>
              <p className={s.sectionSub}>Everything you need to know about creating {nameLower} music with Tunee.</p>
              <FaqAccordion faqs={data.faqs} />
            </div>
          </section>

          {/* ── Final CTA ── */}
          <section className={s.finalCta}>
            <div className={s.wrap}>
              <h2 className={s.finalTitle}>
                {data.finalCta.title.split("\n").map((line, i) => (
                  <span key={i}>{i > 0 && <br />}{line}</span>
                ))}
              </h2>
              <p className={s.finalSub}>{data.finalCta.subtitle}</p>
              <a href="https://www.tunee.ai" className={s.btnPrimary}>
                {data.finalCta.buttonText}
              </a>
            </div>
          </section>
        </main>

        {/* ── Footer ── */}
        <footer className={s.footer}>
          <div className={s.footerInner}>
            <div className={s.footerBrand}>
              <div className={s.footerLogo}>Tunee</div>
              <p className={s.footerTagline}>Create music with AI — any genre, any style, any mood.</p>
            </div>
            <div className={s.footerGrid}>
              <div>
                <h4 className={s.footerColTitle}>Resource</h4>
                <div className={s.footerLinks}>
                  <a href="https://www.tunee.ai/about-us">About Us</a>
                  <a href="https://www.tunee.ai/customer-stories">Customer Stories</a>
                  <a href="https://www.tunee.ai/creator-program">Creator Program</a>
                  <a href="https://www.tunee.ai/affiliate">Affiliate</a>
                  <a href="https://www.tunee.ai/events">Events</a>
                </div>
              </div>
              <div>
                <h4 className={s.footerColTitle}>Features</h4>
                <div className={s.footerLinks}>
                  <a href="https://www.tunee.ai/music-agent">AI Music Agent</a>
                  <a href="https://www.tunee.ai/features/music-video-generator">Music Video</a>
                  <a href="https://www.tunee.ai/features/lip-sync">Lip Sync</a>
                  <a href="https://www.tunee.ai/features/ai-dancing">AI Dancing</a>
                  <a href="https://www.tunee.ai/features/motion-control">Motion Control</a>
                </div>
              </div>
              <div>
                <h4 className={s.footerColTitle}>Policy</h4>
                <div className={s.footerLinks}>
                  <a href="https://www.tunee.ai/terms-of-service">Terms of Service</a>
                  <a href="https://www.tunee.ai/privacy-policy">Privacy Policy</a>
                </div>
              </div>
              <div>
                <h4 className={s.footerColTitle}>Other</h4>
                <div className={s.footerLinks}>
                  <a href="https://www.tunee.ai/feedback">Feedback</a>
                  <a href="https://www.tunee.ai/faq">FAQ</a>
                </div>
              </div>
              <div>
                <div className={s.footerSocials}>
                  <a href="https://www.youtube.com/@tunee_aiagent" className={s.socialIcon} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" /></svg>
                  </a>
                  <a href="https://x.com/tunee_ai" className={s.socialIcon} aria-label="X" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.instagram.com/tunee_aiagent" className={s.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </a>
                  <a href="https://www.tiktok.com/@tunee_ai" className={s.socialIcon} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.81.12v-3.5a6.37 6.37 0 0 0-.81-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.24 8.24 0 0 0 3.76.97V6.27a4.83 4.83 0 0 1-1-.01z" /></svg>
                  </a>
                  <a href="https://discord.com/invite/zxCyCmUWC3" className={s.socialIcon} aria-label="Discord" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.32 4.37a19.8 19.8 0 0 0-4.93-1.51.07.07 0 0 0-.08.04c-.21.38-.45.87-.61 1.26a18.27 18.27 0 0 0-5.4 0 12.6 12.6 0 0 0-.63-1.26.08.08 0 0 0-.08-.04 19.74 19.74 0 0 0-4.93 1.51.07.07 0 0 0-.03.03C1.16 8.28.34 12.04.76 15.75a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.11 13.09 13.09 0 0 1-1.87-.9.08.08 0 0 1 0-.13c.13-.09.25-.19.37-.29a.08.08 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.07 0a.08.08 0 0 1 .08.01c.12.1.25.2.37.29a.08.08 0 0 1 0 .13c-.6.35-1.22.65-1.87.9a.08.08 0 0 0-.04.11c.36.7.77 1.37 1.22 2a.08.08 0 0 0 .08.03 19.83 19.83 0 0 0 6-3.03.08.08 0 0 0 .03-.06c.5-5.18-.84-9.68-3.55-13.35a.06.06 0 0 0-.03-.03zM8.02 13.57c-1.15 0-2.1-1.06-2.1-2.37 0-1.3.93-2.36 2.1-2.36 1.18 0 2.12 1.07 2.1 2.36 0 1.31-.93 2.37-2.1 2.37zm7.77 0c-1.15 0-2.1-1.06-2.1-2.37 0-1.3.93-2.36 2.1-2.36 1.18 0 2.12 1.07 2.1 2.36 0 1.31-.92 2.37-2.1 2.37z" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className={s.footerBottom}>
              <span>&copy; {new Date().getFullYear()} Tunee. All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
