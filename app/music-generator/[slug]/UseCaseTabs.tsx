"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import s from "./page.module.css";

interface UseCase {
  icon: string;
  title: string;
  desc: string;
}

interface UseCaseTabsProps {
  useCases: UseCase[];
  sectionTitle: string;
  sectionSub: string;
}

export default function UseCaseTabs({
  useCases,
  sectionTitle,
  sectionSub,
}: UseCaseTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <section className={s.sectionGrey}>
      <div className={s.wrap}>
        <h2 className={s.sectionTitle}>{sectionTitle}</h2>
        <p className={s.sectionSub}>{sectionSub}</p>

        <div className={s.tabRow}>
          {useCases.map((uc, i) => (
            <button
              key={i}
              className={`${s.tab} ${i === active ? s.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              <span className={s.tabIcon}>{uc.icon}</span>
              <span className={s.tabLabel}>{uc.title}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className={s.tabPanel}
        >
          <span className={s.tabPanelIcon}>{useCases[active].icon}</span>
          <h3 className={s.tabPanelTitle}>{useCases[active].title}</h3>
          <p className={s.tabPanelDesc}>{useCases[active].desc}</p>
        </motion.div>
      </div>
    </section>
  );
}
