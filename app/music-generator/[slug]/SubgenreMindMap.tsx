"use client";

import Link from "next/link";
import { canonicalMusicSlug } from "@/lib/musicRoutes";
import s from "./page.module.css";

interface Subgenre {
  name: string;
  slug: string;
  bpmRange: string;
  era: string;
  desc: string;
}

export default function SubgenreMindMap({
  genreName,
  subgenres,
  linkPrefix,
  sectionTitle,
  sectionSub,
}: {
  genreName: string;
  subgenres: Subgenre[];
  linkPrefix: string;
  sectionTitle: string;
  sectionSub: string;
}) {
  const count = subgenres.length;
  const RADIUS = 38; // % from center
  const CX = 50;
  const CY = 50;

  return (
    <section className={s.section}>
      <div className={s.wrap}>
        <h2 className={s.sectionTitle}>{sectionTitle}</h2>
        <p className={s.sectionSub}>{sectionSub}</p>

        {/* Desktop: radial mind map */}
        <div className={s.mindMapContainer}>
          <svg className={s.mindMapSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
            {subgenres.map((_, i) => {
              const angle = (2 * Math.PI * i) / count - Math.PI / 2;
              const x2 = CX + RADIUS * Math.cos(angle);
              const y2 = CY + RADIUS * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={CX}
                  y1={CY}
                  x2={x2}
                  y2={y2}
                  className={s.mindMapLine}
                />
              );
            })}
          </svg>

          {/* Center node */}
          <div className={s.mindMapCenterDesktop}>
            {genreName}
          </div>

          {/* Radial cards */}
          {subgenres.map((sg, i) => {
            const angle = (2 * Math.PI * i) / count - Math.PI / 2;
            const left = CX + RADIUS * Math.cos(angle);
            const top = CY + RADIUS * Math.sin(angle);
            return (
              <Link
                key={sg.slug}
                href={`${linkPrefix}/${canonicalMusicSlug(sg.slug)}`}
                className={s.mindMapCardDesktop}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
              >
                <span className={s.mindMapCardTitle}>{sg.name}</span>
                <span className={s.mindMapCardDesc}>{sg.bpmRange} &middot; {sg.era}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile: 2-col grid fallback */}
        <div className={s.mindMapMobile}>
          <div className={s.mindMapCenter}>{genreName}</div>
          <div className={s.mindMapMobileList}>
            {subgenres.map((sg) => (
              <Link key={sg.slug} href={`${linkPrefix}/${canonicalMusicSlug(sg.slug)}`} className={s.mindMapCard}>
                <span className={s.mindMapCardTitle}>{sg.name}</span>
                <span className={s.mindMapCardDesc}>{sg.bpmRange} &middot; {sg.era}</span>
                <p className={s.cardDesc}>{sg.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
