"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Feature {
  title: string;
  desc: string;
}

interface FeatureTabsProps {
  features: Feature[];
  name: string;
  signInUrl: string;
}

export default function FeatureTabs({ features, name, signInUrl }: FeatureTabsProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <h2
          className="leading-[1.08] tracking-tight text-center mb-10 text-[#191919]"
          style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
        >
          Why You Need a {name} Music Generator?
        </h2>

        <div className="flex flex-wrap gap-2.5 mb-8">
          {features.map((f, i) => (
            <button
              key={i}
              onClick={() => setActiveFeature(i)}
              className="px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200 border"
              style={{
                background: activeFeature === i ? "#4D46FE" : "transparent",
                color: activeFeature === i ? "#fff" : "#555",
                borderColor: activeFeature === i ? "#4D46FE" : "#ddd",
              }}
            >
              {f.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl p-8 md:p-10"
          style={{ background: "#F7F7F9", border: "1px solid #EDEDEF" }}
        >
          <div className="flex items-start gap-5">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold"
              style={{ background: "#4D46FE" }}
            >
              {activeFeature + 1}
            </div>
            <div>
              <h3 className="text-[24px] mb-3 text-[#191919]">
                {features[activeFeature].title}
              </h3>
              <p className="text-[16px] leading-[1.75] text-[#555]">
                {features[activeFeature].desc}
              </p>
              <a
                href={signInUrl}
                className="inline-flex items-center gap-1.5 mt-6 text-[14px] font-semibold transition-colors hover:opacity-80 text-[#4D46FE]"
              >
                Try it now <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
