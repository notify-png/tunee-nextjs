"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

interface PageItem {
  name: string;
  slug: string;
  url: string;
  category: string;
}

interface Category {
  key: string;
  label: string;
  pages: PageItem[];
}

export default function SearchableCategories({
  categories,
}: {
  categories: Category[];
}) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const q = query.toLowerCase();

  const filtered = categories
    .map((cat) => ({
      ...cat,
      pages: q
        ? cat.pages.filter((p) => p.name.toLowerCase().includes(q))
        : cat.pages,
    }))
    .filter((cat) => cat.pages.length > 0)
    .filter((cat) => !activeTab || cat.key === activeTab);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        {/* section header */}
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[3px] text-white/20 mb-4">Browse</p>
          <h2
            className="font-heading font-black uppercase leading-[0.95] tracking-tight text-white"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Explore all styles
          </h2>
        </div>

        {/* tabs + search row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-12">
          {/* category tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab(null)}
              className={`text-[13px] uppercase tracking-[1.5px] px-4 py-2 rounded-full transition-all duration-200 ${
                !activeTab
                  ? "bg-white text-[#050505] font-semibold"
                  : "text-white/30 hover:text-white/60"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(activeTab === cat.key ? null : cat.key)}
                className={`text-[13px] uppercase tracking-[1.5px] px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTab === cat.key
                    ? "bg-white text-[#050505] font-semibold"
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* search */}
          <div className="relative w-full md:w-[280px] flex-shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-11 pr-4 py-3 rounded-full text-[14px] bg-white/[0.04] border border-white/[0.06] text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/40 transition-all duration-300"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* category blocks */}
        {filtered.map((cat) => {
          // group by sub-category
          const groups = new Map<string, PageItem[]>();
          cat.pages.forEach((p) => {
            const key = p.category;
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key)!.push(p);
          });

          return (
            <div key={cat.key} className="mb-16 last:mb-0">
              {/* category header */}
              <div className="flex items-baseline gap-4 mb-8">
                <h3 className="text-[20px] md:text-[24px] font-heading font-bold uppercase tracking-wide text-white/80">
                  {cat.label}
                </h3>
                <span className="text-[13px] text-white/15">{cat.pages.length}</span>
                <div className="flex-1 h-px bg-white/[0.04]" />
              </div>

              {/* sub-groups */}
              {Array.from(groups).map(([groupName, items]) => (
                <div key={groupName} className="mb-8 last:mb-0">
                  {groups.size > 1 && (
                    <p className="text-[11px] uppercase tracking-[2px] text-violet-400/50 mb-4 ml-1">
                      {groupName}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-x-1 gap-y-1">
                    {items
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((item) => (
                        <Link
                          key={item.slug}
                          href={item.url}
                          className="inline-block text-[14px] md:text-[15px] text-white/30 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <p className="text-center text-white/20 text-[15px] py-20">
            No styles found for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>
    </section>
  );
}
