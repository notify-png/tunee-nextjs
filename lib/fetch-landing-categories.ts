import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/integrations/supabase/constants";
import type { Database } from "@/integrations/supabase/types";
import type { DBCategory } from "@/lib/landing-types";

export async function fetchLandingCategories(): Promise<DBCategory[]> {
  const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: cats, error: catErr } = await supabase
    .from("categories")
    .select("*")
    .order("sort_order");
  if (catErr) throw catErr;

  const { data: items, error: itemErr } = await supabase
    .from("category_items")
    .select("*")
    .order("sort_order");
  if (itemErr) throw itemErr;

  return (cats || []).map((cat) => ({
    ...cat,
    items: (items || []).filter((item) => item.category_id === cat.id),
  }));
}
