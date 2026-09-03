import { publicAssetUrl } from "@/lib/publicAssetUrl";
import styles from "./page.module.css";
import StickyTryCta from "./StickyTryCta";
import SourceSectionInteractions from "./SourceSectionInteractions";
import {
  localizeSourceHtml,
  sunoAlternativeTranslations,
  type SunoLocale,
} from "./translations";
import {
  CommunitySectionHtml,
  FooterHtml,
  HeaderHtml,
  HowItWorksSectionHtml,
} from "./sourceSections.generated";

const pageUrl = "https://www.tunee.ai/music-generator/suno-alternative";

const tuneeHome = "https://www.tunee.ai/";
const sunoSource = "https://about.suno.com/blog/suno-updates-tos";

function PrimaryCta({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <a className={`${styles.primaryCta} ${light ? styles.lightCta : ""}`} href={tuneeHome}>
      {label} <b>→</b>
    </a>
  );
}

function SourceMarkup({ html }: { html: string }) {
  return <div className={styles.sourceMarkup} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function SunoAlternativePage({ locale = "en" }: { locale?: SunoLocale }) {
  const copy = sunoAlternativeTranslations[locale];
  const usesWidePlanIntro = locale !== "en";
  const planTitleSeparator = locale === "zh-CN" || locale === "zh-HK" ? "" : " ";
  const localizedPageUrl = locale === "en" ? pageUrl : `https://www.tunee.ai/${locale}/music-generator/suno-alternative`;
  const localizedHeader = localizeSourceHtml(HeaderHtml, copy.sourceReplacements);
  const localizedHow = localizeSourceHtml(HowItWorksSectionHtml, copy.sourceReplacements);
  const localizedCommunity = localizeSourceHtml(CommunitySectionHtml, copy.sourceReplacements);
  const localizedFooter = localizeSourceHtml(FooterHtml, copy.sourceReplacements);
  const jsonLdSoftwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tunee AI Music Agent",
    description: copy.metadata.description,
    url: localizedPageUrl,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "Tunee", url: "https://www.tunee.ai" },
  };
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map(([question, answer], index) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: index === copy.faq.items.length - 1
          ? `${copy.faq.sourceBeforeLink} ${copy.faq.sourceLink} ${copy.faq.sourceAfterLink}`
          : answer,
      },
    })),
  };

  return (
    <main className={styles.page} lang={copy.lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <SourceMarkup html={localizedHeader} />

      <section className={styles.hero} id="suno-hero">
        <div className={styles.heroMain}>
          <div className={styles.heroCopy}>
            <h1>
              <span className={styles.heroFirstLine}>{copy.hero.line1}</span>
              <span className={styles.heroSecondLine}>{copy.hero.line2}</span>
            </h1>
            <p className={styles.heroLead}>{copy.hero.lead}</p>
            <div className={styles.heroActions}>
              <PrimaryCta label={copy.hero.primaryCta} />
              <a
                className={styles.secondaryCta}
                href="#compare"
              >
                {copy.hero.secondaryCta}
              </a>
            </div>
            <p className={styles.microcopy}>{copy.hero.microcopy}</p>
          </div>

          <div className={styles.videoShell}>
            <span className={styles.toast}><b>♪</b> {copy.hero.toast}</span>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={publicAssetUrl("/assets/music-agent-hero-scroll-preview-2s-0902.jpg")}
              aria-label={copy.hero.videoLabel}
            >
              <source src={publicAssetUrl("/assets/music-agent-hero-scroll-0-11s-0902.mp4")} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className={styles.benefits} aria-label="Tunee benefits">
          {copy.benefits.map(([icon, title, note]) => (
            <article key={title}>
              <span>{icon}</span>
              <div><strong>{title}</strong><small>{note}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.comparison} id="compare">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{copy.comparison.eyebrow}</p>
          <h2>{copy.comparison.title}</h2>
          <p>{copy.comparison.intro}</p>
        </div>

        <div className={styles.comparisonCard}>
          <div className={styles.comparisonHead}>
            <span>{copy.comparison.rule}</span><strong>{copy.comparison.tunee}</strong><strong>{copy.comparison.suno}</strong>
          </div>
          {copy.comparison.rows.map(([label, tunee, suno]) => (
            <div className={styles.comparisonRow} key={label}>
              <strong>{label}</strong><span className={styles.tuneeValue}><i>✓</i>{tunee}</span><span>{suno}</span>
            </div>
          ))}
          <p className={styles.comparisonNote}>
            <b>{copy.comparison.exceptionLabel}</b> {copy.comparison.exceptionBeforePolicy}{" "}
            <a href={sunoSource} target="_blank" rel="noreferrer">{copy.comparison.policy}</a>{" "}
            {copy.comparison.exceptionAfterPolicy}
          </p>
        </div>
      </section>

      <section className={styles.plans} id="plans">
        <div className={`${styles.planLayout}${usesWidePlanIntro ? ` ${styles.planLayoutWide}` : ""}`}>
          <div className={styles.planIntro}>
            <p className={styles.eyebrow}>{copy.plans.eyebrow}</p>
            <h2>
              {usesWidePlanIntro
                ? copy.plans.titleLines.join(planTitleSeparator)
                : <>{copy.plans.titleLines[0]}<br />{copy.plans.titleLines[1]}<br />{copy.plans.titleLines[2]}</>}
            </h2>
            <p>{copy.plans.intro}</p>
          </div>

          <div className={styles.planCards}>
            <article className={styles.planCard}>
              <em>{copy.plans.freeLabel}</em>
              <h3>{copy.plans.freeTitle}</h3>
              <ul>
                {copy.plans.freeFeatures.map(({ title, note, emphasized }) => (
                  <li key={title}>{emphasized ? <strong>{title}</strong> : title}{note && <small>{note}</small>}</li>
                ))}
              </ul>
            </article>
            <article className={`${styles.planCard} ${styles.memberCard}`}>
              <em>{copy.plans.memberLabel}</em>
              <h3>{copy.plans.memberTitle}</h3>
              <ul>
                {copy.plans.memberFeatures.map(({ title, note, emphasized }) => (
                  <li key={title}>{emphasized ? <strong>{title}</strong> : title}{note && <small>{note}</small>}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <div className={styles.sourceHowBackground}>
        <SourceMarkup html={localizedHow} />
      </div>
      <SourceMarkup html={localizedCommunity} />

      <section className={styles.faq} id="faq">
        <p className={styles.eyebrow}>{copy.faq.eyebrow}</p>
        <h2>{copy.faq.title}</h2>
        <div className={styles.faqList}>
          {copy.faq.items.map(([question, answer], index) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              {index === copy.faq.items.length - 1 ? (
                <p>
                  {copy.faq.sourceBeforeLink}{" "}
                  <a href={sunoSource} target="_blank" rel="noreferrer">
                    {copy.faq.sourceLink}
                  </a>{" "}
                  {copy.faq.sourceAfterLink}
                </p>
              ) : <p>{answer}</p>}
            </details>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} id="suno-final-cta">
        <p className={styles.lightEyebrow}>{copy.final.eyebrow}</p>
        <h2>{copy.final.title}</h2>
        <p>{copy.final.intro}</p>
        <PrimaryCta label={copy.hero.primaryCta} />
        <div className={styles.finalBenefits}>
          {copy.final.benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
        </div>
      </section>

      <SourceMarkup html={localizedFooter} />
      <SourceSectionInteractions locale={locale} />
      <StickyTryCta ctaLabel={copy.hero.primaryCta} />
    </main>
  );
}
