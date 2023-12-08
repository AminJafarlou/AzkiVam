export interface ProductType {
  available: boolean;
  azkivam: boolean;
  categoryId: number;
  categoryName: string;
  hidden: false;
  id: string;
  imageUrl: string;
  maxPrice: number;
  merchantId: number;
  merchantName: string;
  minPrice: number;
  name: string;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  mapped: boolean;
  enabled: boolean;
  priority: number;
  parent: number | null;
}
