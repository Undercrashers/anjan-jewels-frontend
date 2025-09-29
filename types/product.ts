// Product Category Types
export type ProductCategory = 'necklace' | 'bracelet' | 'combo';

// Product Interface
export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  mrp: number;
  discount: string;
  rating: number;
  reviews: number;
  images: ProductImage[];
  description: string;
  specifications: ProductSpecification[];
  variants?: ProductVariant[];
  sku: string;
  isAntiTarnish: boolean;
  isFeatured: boolean;
}

// Product Image Interface
export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

// Product Variant Interface (for colors, sizes, etc.)
export interface ProductVariant {
  id: string;
  name: string;
  colorCode?: string;
  image?: string;
}

// Product Specification Interface
export interface ProductSpecification {
  key: string;
  value: string;
}

// Offer Interface
export interface Offer {
  code: string;
  title: string;
  description: string;
  isActive: boolean;
}

// Cart Item Interface
export interface CartItem {
  productId: string;
  quantity: number;
  selectedVariant?: ProductVariant;
}

// Related Product Interface (simplified version of Product)
export interface RelatedProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  mrp: number;
  discount: string;
  category: ProductCategory;
}