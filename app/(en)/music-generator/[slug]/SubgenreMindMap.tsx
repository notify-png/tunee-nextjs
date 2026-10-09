/**
 * 子流派关系图——**写好了但从未接入**，git 历史里 page.tsx 一次都没 import 过它。
 *
 * 留着是因为它代表一个有价值的想法：GenreData 的 subgenres[].slug 共 5,096 条
 * 唯一引用，其中 3,635 条指向真实存在的页，接上就是 3,635 条主题相关的内链。
 * 子页现在用纯 <div> 渲染 subgenre，那个 slug 字段整个没人消费。
 *
 * 接回去之前必须先处理：剩下 1,461 条（28.7%）指向不存在的内容文件，
 * 例如 koto.ts 的 classical-koto / gagaku-koto / modern-koto 一条都没有对应页。
 * 这个组件把 slug 渲染成 <Link>，而站点是 dynamicParams = false，
 * 所以一接回来就是上千条 404 内链。
 *
 * 没人消费 = 没有任何机制校验这个字段，所以死链是悄悄积累的。
 * 新页那一侧已经加了护栏：tunee-seo-pipeline 的 `node src/cli.mjs verify`
 * 会检测 subgenre slug 是否存在，不让存量继续变大。
 */
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
