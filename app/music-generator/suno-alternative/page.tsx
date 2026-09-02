import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/musicSeo";
import { publicAssetUrl } from "@/lib/publicAssetUrl";
import styles from "./page.module.css";
import StickyTryCta from "./StickyTryCta";
import {
  CommunitySectionHtml,
  FooterHtml,
  HeaderHtml,
  HowItWorksSectionHtml,
} from "./sourceSections.generated";

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
  { title: "Unlimited track downloads", note: "", emphasized: true },
  { title: "Unlimited song generation", note: "Limited music models · Generation uses credits", emphasized: true },
  { title: "Edit lyrics, prompts & song details", note: "", emphasized: true },
  { title: "Mix & voice change", note: "", emphasized: false },
  { title: "2-source & 4-source stem separation", note: "", emphasized: false },
  { title: "1 trial each", note: "6-source stem separation and Audio-to-MIDI", emphasized: true },
];

const memberFeatures = [
  { title: "Everything in Free", note: "", emphasized: true },
  { title: "Unlock all music models", note: "", emphasized: true },
  { title: "Smart Mastering", note: "", emphasized: true },
  { title: "6-source stem separation", note: "", emphasized: false },
  { title: "Audio-to-MIDI conversion", note: "", emphasized: false },
  { title: "Full commercial rights", note: "Includes a copyright certificate", emphasized: true },
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

function SourceMarkup({ html }: { html: string }) {
  return <div className={styles.sourceMarkup} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function SunoAlternativeDemo() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <SourceMarkup html={HeaderHtml} />

      <section className={styles.hero} id="suno-hero">
        <div className={styles.heroMain}>
          <div className={styles.heroCopy}>
            <h1>A Suno alternative.<span>Download without limits.</span></h1>
            <p className={styles.heroLead}>
              Create original songs through conversation with Tunee’s AI Music Agent—then download every version
              you make, whether you use a free or paid account.
            </p>
            <div className={styles.heroActions}>
              <PrimaryCta />
              <a
                className={styles.secondaryCta}
                href="https://www.tunee.ai/music-generator/suno-alternative#compare"
              >
                Compare download access ↓
              </a>
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
            Suno facts reflect its{" "}
            <a href={sunoSource} target="_blank" rel="noreferrer">policy</a> announced for September 3, 2026 and may
            change.
          </p>
        </div>
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
                {freeFeatures.map(({ title, note, emphasized }) => (
                  <li key={title}>{emphasized ? <strong>{title}</strong> : title}{note && <small>{note}</small>}</li>
                ))}
              </ul>
            </article>
            <article className={`${styles.planCard} ${styles.memberCard}`}>
              <em>MEMBER</em>
              <h3>For publishing & production</h3>
              <ul>
                {memberFeatures.map(({ title, note, emphasized }) => (
                  <li key={title}>{emphasized ? <strong>{title}</strong> : title}{note && <small>{note}</small>}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <div className={styles.sourceHowBackground}>
        <SourceMarkup html={HowItWorksSectionHtml} />
      </div>
      <SourceMarkup html={CommunitySectionHtml} />

      <section className={styles.faq} id="faq">
        <p className={styles.eyebrow}>QUESTIONS</p>
        <h2>Good to know.</h2>
        <div className={styles.faqList}>
          {faqs.map(([question, answer], index) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              {index === faqs.length - 1 ? (
                <p>
                  The comparison uses Suno&apos;s{" "}
                  <a href={sunoSource} target="_blank" rel="noreferrer">
                    official August 10, 2026 announcement
                  </a>{" "}
                  describing download rules beginning September 3, 2026. Suno&apos;s terms may change, so check its
                  official notice for the latest details.
                </p>
              ) : <p>{answer}</p>}
            </details>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} id="suno-final-cta">
        <p className={styles.lightEyebrow}>TRY TUNEE MUSIC AGENT</p>
        <h2>Ready to create without worrying about download counts?</h2>
        <p>Start with free daily credits. Download every version you create.</p>
        <PrimaryCta />
        <div className={styles.finalBenefits}>
          <span>Unlimited downloads</span><span>Free daily credits</span><span>Full commercial rights</span><span>Advanced editing</span>
        </div>
      </section>

      <SourceMarkup html={FooterHtml} />
      <StickyTryCta />
    </main>
  );
}
