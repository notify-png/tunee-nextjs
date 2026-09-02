import type { Metadata } from "next";
import Link from "next/link";
import { buildSocialMetadata } from "@/lib/musicSeo";
import { publicAssetUrl } from "@/lib/publicAssetUrl";
import styles from "./page.module.css";

const pageTitle = "Suno Alternative: Unlimited AI Music Downloads | Tunee";
const pageDescription =
  "Try Tunee's free AI Music Agent. Create original songs through chat and download every version without monthly or lifetime download-count limits.";
const pageUrl = "https://www.tunee.ai/music-generator/suno-alternative";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  ...buildSocialMetadata(pageTitle, pageDescription, pageUrl),
};

const tuneeHome = "https://www.tunee.ai/";
const sunoSource = "https://about.suno.com/blog/suno-updates-tos";

const benefits = [
  ["∞", "Unlimited downloads", "Free and paid users"],
  ["↓", "Download every version", "Review, compare, archive"],
  ["✓", "Commercial use", "Available on paid plans"],
  ["✦", "Advanced editing", "Available to members"],
];

const comparisonRows = [
  ["Free downloads", "Unlimited", "Up to 7 lifetime trial downloads"],
  ["Paid downloads", "Unlimited", "Pro: 20/month · Premier: 60/month"],
  ["Songs created earlier", "Download without a count limit", "Limits apply to downloads after Sep 3"],
  ["Beyond the allowance", "No download pack needed", "Additional downloads available to purchase"],
];

const freeFeatures = [
  ["Unlimited track downloads", ""],
  ["Unlimited song generation", "Limited music models · Generation uses credits"],
  ["Edit lyrics, prompts & song details", ""],
  ["Mix & voice change", ""],
  ["2-source & 4-source stem separation", ""],
  ["1 trial each", "6-source stem separation and Audio-to-MIDI"],
];

const memberFeatures = [
  ["Everything in Free", ""],
  ["Unlock all music models", ""],
  ["Smart Mastering", ""],
  ["6-source stem separation", ""],
  ["Audio-to-MIDI conversion", ""],
  ["Full commercial rights", "Includes a copyright certificate"],
];

const faqs = [
  [
    "Is Tunee a Suno alternative with unlimited downloads?",
    "Yes. Tunee combines conversational AI music creation with unlimited track downloads for free and paid users. Song generation uses credits and is separate from downloading.",
  ],
  [
    "Can free Tunee users download every generated track?",
    "Yes. Free users can download every version they create without a monthly or lifetime download-count limit. Free downloads are for personal use.",
  ],
  [
    "Do unlimited downloads mean unlimited free song generation?",
    "No. Downloads do not use a download allowance, but creating music uses credits. Free accounts have daily credits and access to a selected set of music models.",
  ],
  [
    "Can I use Tunee music commercially?",
    "Eligible paid plans include commercial use rights and a copyright certificate, subject to Tunee's current plan terms.",
  ],
  [
    "What do members unlock besides commercial rights?",
    "Members unlock all music models, Smart Mastering, 6-source stem separation, Audio-to-MIDI conversion, and the features included in Free.",
  ],
  [
    "Where do the Suno download numbers come from?",
    "The comparison uses Suno's official August 10, 2026 announcement describing download rules beginning September 3, 2026. Suno's terms may change, so check its official notice for the latest details.",
  ],
];

const jsonLdSoftwareApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tunee AI Music Agent",
  description: pageDescription,
  url: pageUrl,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: "Tunee", url: "https://www.tunee.ai" },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function PrimaryCta({ light = false }: { light?: boolean }) {
  return (
    <a className={`${styles.primaryCta} ${light ? styles.lightCta : ""}`} href={tuneeHome}>
      Try Tunee for free <b>→</b>
    </a>
  );
}

export default function SunoAlternativeDemo() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <header className={styles.header}>
        <Link className={styles.wordmark} href="/music-generator" aria-label="Tunee home">
          tunee
        </Link>
        <nav aria-label="Page navigation">
          <a href="#compare">Tunee vs Suno</a>
          <a href="#plans">Plans</a>
          <a href="#faq">FAQ</a>
        </nav>
        <PrimaryCta />
      </header>

      <section className={styles.hero}>
        <div className={styles.heroMain}>
          <div className={styles.heroCopy}>
            <p className={styles.policyTag}><span>POLICY UPDATE</span> Suno download limits begin Sep 3, 2026</p>
            <h1>A Suno alternative.<span>Download without limits.</span></h1>
            <p className={styles.heroLead}>
              Create original songs through conversation with Tunee’s AI Music Agent—then download every version
              you make, whether you use a free or paid account.
            </p>
            <div className={styles.heroActions}>
              <PrimaryCta />
              <a className={styles.secondaryCta} href="#compare">Compare download access ↓</a>
            </div>
            <p className={styles.microcopy}>No credit card required · Generation uses credits</p>
          </div>

          <div className={styles.videoShell}>
            <span className={styles.toast}><b>♪</b> Chat to create your track!</span>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={publicAssetUrl("/assets/music-agent-hero-scroll-preview-2s-0902.jpg")}
              aria-label="Tunee AI Music Agent product walkthrough"
            >
              <source src={publicAssetUrl("/assets/music-agent-hero-scroll-0-11s-0902.mp4")} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className={styles.benefits} aria-label="Tunee benefits">
          {benefits.map(([icon, title, note]) => (
            <article key={title}>
              <span>{icon}</span>
              <div><strong>{title}</strong><small>{note}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.comparison} id="compare">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>DOWNLOAD ACCESS, SIDE BY SIDE</p>
          <h2>Tunee vs Suno</h2>
          <p>Compare what happens after you create—not only how many songs a plan lets you generate.</p>
        </div>

        <div className={styles.comparisonCard}>
          <div className={styles.comparisonHead}>
            <span>Download rule</span><strong>Tunee</strong><strong>Suno</strong>
          </div>
          {comparisonRows.map(([label, tunee, suno]) => (
            <div className={styles.comparisonRow} key={label}>
              <strong>{label}</strong><span className={styles.tuneeValue}><i>✓</i>{tunee}</span><span>{suno}</span>
            </div>
          ))}
          <p className={styles.comparisonNote}>
            <b>Important exception:</b> Suno Premier subscribers can download without limits when using Suno Studio.
            Suno facts reflect its policy announced for September 3, 2026 and may change.
          </p>
        </div>
        <a className={styles.sourceLink} href={sunoSource} target="_blank" rel="noreferrer">
          Read Suno’s official announcement ↗
        </a>
      </section>

      <section className={styles.plans} id="plans">
        <div className={styles.planLayout}>
          <div className={styles.planIntro}>
            <p className={styles.eyebrow}>CLEAR PLAN BOUNDARIES</p>
            <h2>Download freely.<br />Upgrade for<br />professional use.</h2>
            <p>
              Downloads stay unlimited on every plan. Start free with core creation and editing tools, then upgrade
              when you need professional production and publishing features.
            </p>
          </div>

          <div className={styles.planCards}>
            <article className={styles.planCard}>
              <em>FREE</em>
              <h3>For creating & exploring</h3>
              <ul>
                {freeFeatures.map(([title, note]) => (
                  <li key={title}><strong>{title}</strong>{note && <small>{note}</small>}</li>
                ))}
              </ul>
            </article>
            <article className={`${styles.planCard} ${styles.memberCard}`}>
              <em>MEMBER</em>
              <h3>For publishing & production</h3>
              <ul>
                {memberFeatures.map(([title, note]) => (
                  <li key={title}><strong>{title}</strong>{note && <small>{note}</small>}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.workflow} id="how">
        <div className={styles.centerIntro}>
          <p className={styles.eyebrow}>MORE THAN A DOWNLOAD POLICY</p>
          <h2>From an idea to a track you can keep.</h2>
          <p>Tunee is a conversational music workspace for creating, refining, and finishing your sound.</p>
        </div>
        <div className={styles.steps}>
          <article><span>01</span><h3>Chat to create</h3><p>Describe your idea, mood, reference, or use case in everyday language.</p></article>
          <article><span>02</span><h3>Refine your track</h3><p>Edit lyrics and song details, mix, change voices, or separate stems.</p></article>
          <article><span>03</span><h3>Download every version</h3><p>Review outside the app, listen offline, and keep a complete creative archive.</p></article>
        </div>
      </section>

      <section className={styles.useCases}>
        <div className={styles.centerIntro}>
          <p className={styles.eyebrow}>WHY UNLIMITED DOWNLOADS MATTER</p>
          <h2>Keep your creative process moving.</h2>
        </div>
        <div className={styles.caseGrid}>
          <article><span>↓</span><h3>Compare every version</h3><p>Listen away from the editor and choose the strongest take.</p></article>
          <article><span>◉</span><h3>Build your archive</h3><p>Keep a local copy of the songs and ideas you created.</p></article>
          <article><span>▶</span><h3>Create for video</h3><p>Test different tracks against YouTube, ads, and social edits.</p></article>
          <article><span>☾</span><h3>Listen offline</h3><p>Take your work anywhere, even when you are not connected.</p></article>
        </div>
      </section>

      <section className={styles.faq} id="faq">
        <p className={styles.eyebrow}>QUESTIONS</p>
        <h2>Good to know.</h2>
        <div className={styles.faqList}>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} id="create">
        <p className={styles.lightEyebrow}>TRY TUNEE MUSIC AGENT</p>
        <h2>Ready to create without worrying about download counts?</h2>
        <p>Start with free daily credits. Download every version you create.</p>
        <PrimaryCta light />
        <div className={styles.finalBenefits}>
          <span>Unlimited downloads</span><span>Free daily credits</span><span>Full commercial rights</span><span>Advanced editing</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <span className={styles.footerMark}>tunee</span>
        <p>Create, refine, and download with Tunee.</p>
        <span>© 2026 Tunee</span>
      </footer>
    </main>
  );
}
