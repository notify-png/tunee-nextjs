export interface DBCategoryItem {
  id: string;
  category_id: string;
  label: string;
  slug: string;
  url: string;
  sort_order: number;
}

export interface DBCategory {
  id: string;
  slug: string;
  label: string;
  icon: string;
  sort_order: number;
  items: DBCategoryItem[];
}
