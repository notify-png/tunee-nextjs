import { getCategories } from "@/lib/get-categories";
import NavBarClient from "@/components/NavBarClient";
import type { DBCategory } from "@/lib/landing-types";

export default async function NavBar({ categories: overrideCategories, variant }: { categories?: DBCategory[]; variant?: "default" | "genre-dark" } = {}) {
  const categories = overrideCategories ?? await getCategories();
  return <NavBarClient categories={categories} variant={variant} />;
}
