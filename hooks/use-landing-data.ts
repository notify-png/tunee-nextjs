"use client";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { fetchLandingCategories } from "@/lib/fetch-landing-categories";
import type { DBCategory, DBCategoryItem } from "@/lib/landing-types";

export type { DBCategory, DBCategoryItem };

export interface DBLandingPageDetail {
  id: string;
  slug: string;
  display_name: string;
  related: { id: string; label: string; slug: string; sort_order: number }[];
  subgenres: { id: string; name: string; description: string; sort_order: number }[];
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchLandingCategories,
    staleTime: 1000 * 60 * 60,
  });
}

export function usePageDetail(slug: string | undefined) {
  return useQuery({
    queryKey: ["page-detail", slug],
    queryFn: async (): Promise<DBLandingPageDetail | null> => {
      if (!slug) return null;
      const { data: detail, error: detailErr } = await supabase
        .from("landing_page_details")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      if (detailErr) throw detailErr;
      if (!detail) return null;

      const [relRes, subRes] = await Promise.all([
        supabase
          .from("related_items")
          .select("*")
          .eq("landing_page_detail_id", detail.id)
          .order("sort_order"),
        supabase
          .from("subgenres")
          .select("*")
          .eq("landing_page_detail_id", detail.id)
          .order("sort_order"),
      ]);

      return {
        ...detail,
        related: relRes.data || [],
        subgenres: subRes.data || [],
      };
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 60,
  });
}

export function useFindItemBySlug(slug: string | undefined) {
  const { data: categories } = useCategories();
  if (!slug || !categories) return null;
  for (const cat of categories) {
    const item = cat.items.find((i) => i.slug === slug);
    if (item) return { ...item, category: cat.label, categorySlug: cat.slug };
  }
  return null;
}
