"use client";

import { useQuery } from "@tanstack/react-query";

export interface LandingPageAPIResponse {
  slug: string;
  displayName: string;
  seo: {
    title: string;
    description: string;
  };
  category: {
    label: string;
    slug: string;
    icon: string;
  } | null;
  item: {
    label: string;
    slug: string;
    url: string;
  } | null;
  features: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  subgenres: { name: string; description: string }[];
  related: { label: string; slug: string; url: string; desc: string }[];
  demoNames: string[];
}

export function useLandingPageAPI(slug: string | undefined) {
  return useQuery({
    queryKey: ["landing-page-api", slug],
    queryFn: async (): Promise<LandingPageAPIResponse | null> => {
      if (!slug) return null;

      const res = await fetch(
        `https://znlzpeisxfwnxledzhhc.supabase.co/functions/v1/landing-page?slug=${encodeURIComponent(slug)}`,
      );

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      return res.json();
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 60,
  });
}
