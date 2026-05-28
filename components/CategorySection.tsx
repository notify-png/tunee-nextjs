"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Category } from "@/data/landingPages";

interface Props {
  category: Category;
  index: number;
  onTagClick?: (item: string) => void;
  isActive?: boolean;
}

const CategorySection = ({ category, index }: Props) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="relative border border-border/40 rounded-lg p-8 md:p-10 overflow-hidden group hover:border-border/80 hover:shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.1)] transition-all duration-300 h-full"
    >
      <span className="absolute -right-3 -top-6 text-[120px] md:text-[160px] font-heading font-bold text-foreground/[0.04] leading-none select-none pointer-events-none">
        {num}
      </span>
      <p className="font-body text-sm text-muted-foreground/60 mb-5">{num}</p>
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight mb-4">
        {category.label}
      </h2>
      <p className="font-body text-sm text-muted-foreground mb-6">
        {category.items.length} styles available
      </p>
      <div className="flex flex-wrap gap-1.5">
        {category.items.map((item) => (
          <Link
            key={item.slug}
            href={item.url}
            className="inline-flex items-center px-4 py-2 rounded-full border border-border/60 font-body text-[15px] text-foreground/60 hover:text-foreground hover:border-foreground/30 hover:bg-foreground/[0.03] hover:shadow-sm transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default CategorySection;
