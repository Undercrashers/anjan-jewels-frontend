// Product data types and seed data for Anti-Tarnish Jewelry e-commerce

export type Gender = 'men' | 'women' | 'unisex';

export interface Variant {
  id: string;
  color: string;
  size: string;
  priceDelta: number; // Price difference from base price (+ or -)
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  brand: string;
  price: number;
  gender: Gender;
  sizes: string[];
  isNew: boolean;
  featuredRank?: number;
  images: string[]; // Paths inside /public/images
  material: string;
  antiTarnish: boolean;
  variants?: Variant[];
  description?: string;
  category: string;
  freeShipping: boolean; // Free shipping on orders above Rs 500
}

// Comprehensive catalog of anti-tarnish jewelry products
export const PRODUCTS: Product[] = [
  // NECKLACES
  {
    id: "n001",
    title: "Butterfly Heart Pendant",
    slug: "butterfly-heart-pendant",
    brand: "Anjan Jewels",
    price: 359,
    gender: "women",
    sizes: ["16-inch", "18-inch", "20-inch"],
    isNew: true,
    featuredRank: 1,
    images: [
      "/Anti-Tarnish/Necklace/Butterfly heart pendant/IMG_3569.JPG",
      "/Anti-Tarnish/Necklace/Butterfly heart pendant/IMG_3570.JPG",
      "/Anti-Tarnish/Necklace/Butterfly heart pendant/IMG_3571.JPG",
      "/Anti-Tarnish/Necklace/Butterfly heart pendant/IMG_3572.JPG"
    ],
    material: "Sterling Silver with Anti-Tarnish Coating",
    antiTarnish: true,
    freeShipping: true,
    description: "Elegant butterfly heart pendant with delicate butterfly design and heart-shaped center",
    category: "necklaces"
  },
  {
    id: "n002",
    title: "Black Clover Necklace",
    slug: "black-clover-necklace",
    brand: "Anjan Jewels",
    price: 299,
    gender: "unisex",
    sizes: ["18-inch", "20-inch", "22-inch"],
    isNew: true,
    featuredRank: 2,
    images: [
      "/Anti-Tarnish/Necklace/Black clover necklace/D695E33C-4308-47AF-B40F-DB8ACEA2832E.jpg",
      "/Anti-Tarnish/Necklace/Black clover necklace/IMG_3259.JPG",
      "/Anti-Tarnish/Necklace/Black clover necklace/IMG_3735.JPG",
      "/Anti-Tarnish/Necklace/Black clover necklace/IMG_3744.JPG"
    ],
    material: "Stainless Steel with Black PVD Coating",
    antiTarnish: true,
    freeShipping: true,
    description: "Sophisticated black clover pendant with premium gold accents, perfect for everyday elegance",
    category: "necklaces"
  },
  {
    id: "n003",
    title: "Bold Heart Pendant",
    slug: "bold-heart-pendant",
    brand: "Anjan Jewels",
    price: 329,
    gender: "women",
    sizes: ["16-inch", "18-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Bold heart pendant/IMG_3237.JPG",
      "/Anti-Tarnish/Necklace/Bold heart pendant/IMG_3238.JPG",
      "/Anti-Tarnish/Necklace/Bold heart pendant/IMG_3696.JPG",
      "/Anti-Tarnish/Necklace/Bold heart pendant/IMG_3697.JPG",
      "/Anti-Tarnish/Necklace/Bold heart pendant/IMG_3698.JPG"
    ],
    material: "925 Sterling Silver",
    antiTarnish: true,
    freeShipping: true,
    description: "Bold heart pendant with contemporary design, perfect for making a statement",
    category: "necklaces"
  },
  {
    id: "n004",
    title: "Bow & Heart Pendant",
    slug: "bow-heart-pendant",
    brand: "Anjan Jewels",
    price: 379,
    gender: "women",
    sizes: ["16-inch", "18-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Bow & Heart pendant/IMG_3699.JPG",
      "/Anti-Tarnish/Necklace/Bow & Heart pendant/IMG_3700.JPG",
      "/Anti-Tarnish/Necklace/Bow & Heart pendant/IMG_3702.JPG"
    ],
    material: "Sterling Silver with Gold Plating",
    antiTarnish: true,
    freeShipping: true,
    description: "Charming bow and heart pendant combination, perfect for romantic occasions",
    category: "necklaces"
  },
  {
    id: "n005",
    title: "Bow with Dangling Heart Necklace",
    slug: "bow-dangling-heart-necklace",
    brand: "Anjan Jewels",
    price: 349,
    gender: "women",
    sizes: ["16-inch", "18-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Bow with dangling heart necklace/IMG_3719.JPG",
      "/Anti-Tarnish/Necklace/Bow with dangling heart necklace/IMG_3720.JPG",
      "/Anti-Tarnish/Necklace/Bow with dangling heart necklace/IMG_3721.JPG",
      "/Anti-Tarnish/Necklace/Bow with dangling heart necklace/IMG_3722.JPG"
    ],
    material: "Sterling Silver with Anti-Tarnish Coating",
    antiTarnish: true,
    freeShipping: true,
    description: "Elegant bow pendant with dangling heart charm for graceful movement",
    category: "necklaces"
  },
  {
    id: "n006",
    title: "Dainty Golden Heart Necklace",
    slug: "dainty-golden-heart-necklace",
    brand: "Anjan Jewels",
    price: 299,
    gender: "women",
    sizes: ["14-inch", "16-inch", "18-inch"],
    isNew: true,
    featuredRank: 3,
    images: [
      "/Anti-Tarnish/Necklace/Dainty golden heart pendant/IMG_3248.JPG",
      "/Anti-Tarnish/Necklace/Dainty golden heart pendant/IMG_3249.JPG",
      "/Anti-Tarnish/Necklace/Dainty golden heart pendant/IMG_3581.JPG",
      "/Anti-Tarnish/Necklace/Dainty golden heart pendant/IMG_3582.JPG",
      "/Anti-Tarnish/Necklace/Dainty golden heart pendant/IMG_3583.JPG",
      "/Anti-Tarnish/Necklace/Dainty golden heart pendant/IMG_3584.JPG"
    ],
    material: "18K Gold Plated Sterling Silver",
    antiTarnish: true,
    freeShipping: true,
    description: "Delicate golden heart necklace perfect for layering or wearing alone",
    category: "necklaces"
  },
  {
    id: "n007",
    title: "Four Leaf Clover Pendant",
    slug: "four-leaf-clover-pendant",
    brand: "Anjan Jewels",
    price: 369,
    gender: "unisex",
    sizes: ["16-inch", "18-inch", "20-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Four Leaf clover pendant/IMG_3707.JPG",
      "/Anti-Tarnish/Necklace/Four Leaf clover pendant/IMG_3710.JPG",
      "/Anti-Tarnish/Necklace/Four Leaf clover pendant/IMG_3711.JPG"
    ],
    material: "Sterling Silver with Gold Accents",
    antiTarnish: true,
    freeShipping: true,
    description: "Lucky four leaf clover pendant symbolizing good fortune and prosperity",
    category: "necklaces"
  },
  {
    id: "n008",
    title: "Golden Bow Pendant Chain",
    slug: "golden-bow-pendant-chain",
    brand: "Anjan Jewels",
    price: 299,
    gender: "women",
    sizes: ["16-inch", "18-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Golden Bow Pendant chain/IMG_3578.JPG",
      "/Anti-Tarnish/Necklace/Golden Bow Pendant chain/IMG_3579.JPG",
      "/Anti-Tarnish/Necklace/Golden Bow Pendant chain/IMG_3580.JPG"
    ],
    material: "18K Gold Plated Brass",
    antiTarnish: true,
    freeShipping: true,
    description: "Elegant golden bow pendant on delicate chain for feminine charm",
    category: "necklaces"
  },
  {
    id: "n009",
    title: "Golden Dolphin Pendant Chain",
    slug: "golden-dolphin-pendant-chain",
    brand: "Anjan Jewels",
    price: 369,
    gender: "unisex",
    sizes: ["16-inch", "18-inch", "20-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Golden Dolphin Pendant chain/IMG_3704.JPG",
      "/Anti-Tarnish/Necklace/Golden Dolphin Pendant chain/IMG_3705.JPG",
      "/Anti-Tarnish/Necklace/Golden Dolphin Pendant chain/IMG_3706.JPG"
    ],
    material: "Sterling Silver with Gold Plating",
    antiTarnish: true,
    freeShipping: true,
    description: "Playful dolphin pendant representing freedom and intelligence",
    category: "necklaces"
  },
  {
    id: "n010",
    title: "Green Emerald Oval Double Layer Chain Pendant",
    slug: "green-emerald-oval-double-layer",
    brand: "Anjan Jewels",
    price: 419,
    gender: "women",
    sizes: ["16-18-inch"],
    isNew: true,
    featuredRank: 4,
    images: [
      "/Anti-Tarnish/Necklace/Green Emerald Oval shaped double layer chain pendant/IMG_3727.JPG",
      "/Anti-Tarnish/Necklace/Green Emerald Oval shaped double layer chain pendant/IMG_3728.JPG",
      "/Anti-Tarnish/Necklace/Green Emerald Oval shaped double layer chain pendant/IMG_3729.JPG"
    ],
    material: "Sterling Silver with Emerald Crystal",
    antiTarnish: true,
    freeShipping: true,
    description: "Luxurious emerald oval pendant on double layer chain for sophisticated look",
    category: "necklaces"
  },
  {
    id: "n011",
    title: "Green Emerald Square Double Layer Chain Pendant",
    slug: "green-emerald-square-double-layer",
    brand: "Anjan Jewels",
    price: 419,
    gender: "women",
    sizes: ["16-18-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Green emerald square shaped double layer chain pendant/IMG_3730.JPG",
      "/Anti-Tarnish/Necklace/Green emerald square shaped double layer chain pendant/IMG_3731.JPG",
      "/Anti-Tarnish/Necklace/Green emerald square shaped double layer chain pendant/IMG_3732.JPG",
      "/Anti-Tarnish/Necklace/Green emerald square shaped double layer chain pendant/IMG_3733.JPG"
    ],
    material: "Sterling Silver with Square Emerald Crystal",
    antiTarnish: true,
    freeShipping: true,
    description: "Modern square emerald pendant on layered chain for contemporary elegance",
    category: "necklaces"
  },
  {
    id: "n012",
    title: "Moon & Midnight Necklace",
    slug: "moon-midnight-necklace",
    brand: "Anjan Jewels",
    price: 299,
    gender: "unisex",
    sizes: ["18-inch", "20-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Moon & Midnight necklace/IMG_3574.JPG",
      "/Anti-Tarnish/Necklace/Moon & Midnight necklace/IMG_3575.JPG",
      "/Anti-Tarnish/Necklace/Moon & Midnight necklace/IMG_3576.JPG",
      "/Anti-Tarnish/Necklace/Moon & Midnight necklace/IMG_3577.JPG"
    ],
    material: "Stainless Steel with Dark Coating",
    antiTarnish: true,
    freeShipping: true,
    description: "Mystical moon pendant with midnight finish for celestial lovers",
    category: "necklaces"
  },
  {
    id: "n013",
    title: "Pretty Heart Necklace",
    slug: "pretty-heart-necklace",
    brand: "Anjan Jewels",
    price: 369,
    gender: "women",
    sizes: ["14-inch", "16-inch", "18-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Pretty Heart necklace/IMG_3715.JPG",
      "/Anti-Tarnish/Necklace/Pretty Heart necklace/IMG_3716.JPG",
      "/Anti-Tarnish/Necklace/Pretty Heart necklace/IMG_3717.JPG",
      "/Anti-Tarnish/Necklace/Pretty Heart necklace/IMG_3718.JPG"
    ],
    material: "Sterling Silver with Anti-Tarnish Coating",
    antiTarnish: true,
    freeShipping: true,
    description: "Pretty heart pendant with intricate detailing for romantic appeal",
    category: "necklaces"
  },
  {
    id: "n014",
    title: "Single Diamond Studded Necklace",
    slug: "single-diamond-studded-necklace",
    brand: "Anjan Jewels",
    price: 299,
    gender: "women",
    sizes: ["16-inch", "18-inch"],
    isNew: true,
    featuredRank: 5,
    images: [
      "/Anti-Tarnish/Necklace/Single Diamond studded necklace/IMG_3251.JPG",
      "/Anti-Tarnish/Necklace/Single Diamond studded necklace/IMG_3252.JPG",
      "/Anti-Tarnish/Necklace/Single Diamond studded necklace/IMG_3587.JPG",
      "/Anti-Tarnish/Necklace/Single Diamond studded necklace/IMG_3588.JPG",
      "/Anti-Tarnish/Necklace/Single Diamond studded necklace/IMG_3589.JPG",
      "/Anti-Tarnish/Necklace/Single Diamond studded necklace/IMG_3610.PNG"
    ],
    material: "14K Gold with Lab Diamond",
    antiTarnish: true,
    freeShipping: true,
    description: "Elegant single diamond pendant for timeless sophistication",
    category: "necklaces"
  },
  {
    id: "n015",
    title: "Tiny Rose Golden Pendant Chain",
    slug: "tiny-rose-golden-pendant-chain",
    brand: "Anjan Jewels",
    price: 369,
    gender: "women",
    sizes: ["14-inch", "16-inch", "18-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Tiny rose golden pendant chain/IMG_3565.JPG",
      "/Anti-Tarnish/Necklace/Tiny rose golden pendant chain/IMG_3566.JPG",
      "/Anti-Tarnish/Necklace/Tiny rose golden pendant chain/IMG_3567.JPG",
      "/Anti-Tarnish/Necklace/Tiny rose golden pendant chain/IMG_3568.JPG"
    ],
    material: "Rose Gold Plated Sterling Silver",
    antiTarnish: true,
    freeShipping: true,
    description: "Delicate tiny rose pendant in warm golden tones",
    category: "necklaces"
  },
  {
    id: "n016",
    title: "Valentine Gold-Plated Sweet Rose Necklace",
    slug: "valentine-gold-plated-sweet-rose",
    brand: "Anjan Jewels",
    price: 299,
    gender: "women",
    sizes: ["16-inch", "18-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Valentine Gold-Plated Sweet Rose Necklace/IMG_3723.JPG",
      "/Anti-Tarnish/Necklace/Valentine Gold-Plated Sweet Rose Necklace/IMG_3724.JPG",
      "/Anti-Tarnish/Necklace/Valentine Gold-Plated Sweet Rose Necklace/IMG_3725.JPG",
      "/Anti-Tarnish/Necklace/Valentine Gold-Plated Sweet Rose Necklace/IMG_3726.JPG"
    ],
    material: "Gold Plated Sterling Silver",
    antiTarnish: true,
    freeShipping: true,
    description: "Romantic rose necklace perfect for Valentine's Day and special occasions",
    category: "necklaces"
  },
  {
    id: "n017",
    title: "Viva Necklace",
    slug: "viva-necklace",
    brand: "Anjan Jewels",
    price: 369,
    gender: "women",
    sizes: ["16-inch", "18-inch", "20-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Necklace/Viva Necklace/IMG_3712.JPG",
      "/Anti-Tarnish/Necklace/Viva Necklace/IMG_3713.JPG",
      "/Anti-Tarnish/Necklace/Viva Necklace/IMG_3714.JPG",
      "/Anti-Tarnish/Necklace/Viva Necklace/IMG_3865.PNG"
    ],
    material: "Sterling Silver with Multi-tone Plating",
    antiTarnish: true,
    freeShipping: true,
    description: "Vibrant Viva necklace with contemporary design and multi-tone finish",
    category: "necklaces"
  },

  // BRACELETS
  {
    id: "b001",
    title: "Classic Bracelet",
    slug: "classic-bracelet",
    brand: "Anjan Jewels",
    price: 489,
    gender: "unisex",
    sizes: ["S", "M", "L"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Bracelet/Bracelet/IMG_3107.JPG",
      "/Anti-Tarnish/Bracelet/Bracelet/IMG_3131.JPG",
      "/Anti-Tarnish/Bracelet/Bracelet/IMG_3132.JPG",
      "/Anti-Tarnish/Bracelet/Bracelet/IMG_3133.JPG"
    ],
    material: "Sterling Silver with Anti-Tarnish Coating",
    antiTarnish: true,
    freeShipping: true,
    description: "Timeless classic bracelet suitable for any occasion",
    category: "bracelets"
  },
  {
    id: "b002",
    title: "Elegant Pearl Bracelet",
    slug: "elegant-pearl-bracelet",
    brand: "Anjan Jewels",
    price: 499,
    gender: "women",
    sizes: ["S", "M", "L"],
    isNew: true,
    featuredRank: 6,
    images: [
      "/Anti-Tarnish/Bracelet/Elegant Pearl bracelet/IMG_3107.JPG",
      "/Anti-Tarnish/Bracelet/Elegant Pearl bracelet/IMG_3111.JPG",
      "/Anti-Tarnish/Bracelet/Elegant Pearl bracelet/IMG_3112.JPG"
    ],
    material: "Cultured Pearls with Silver Chain",
    antiTarnish: true,
    freeShipping: true,
    description: "Sophisticated pearl bracelet for elegant occasions",
    category: "bracelets"
  },
  {
    id: "b003",
    title: "Gold Plated Spiritual Evil Eye Charm Bracelet with White Enamel",
    slug: "gold-plated-spiritual-evil-eye",
    brand: "Anjan Jewels",
    price: 479,
    gender: "unisex",
    sizes: ["S", "M", "L"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Bracelet/Gold Plated Spiritual Evil Eye Charm Bracelet with White Enamel/IMG_3103.JPG",
      "/Anti-Tarnish/Bracelet/Gold Plated Spiritual Evil Eye Charm Bracelet with White Enamel/IMG_3106.JPG",
      "/Anti-Tarnish/Bracelet/Gold Plated Spiritual Evil Eye Charm Bracelet with White Enamel/IMG_3107.JPG"
    ],
    material: "Gold Plated with White Enamel",
    antiTarnish: true,
    freeShipping: true,
    description: "Protective evil eye charm bracelet with spiritual significance",
    category: "bracelets"
  },

  // COMBOS/SETS
  {
    id: "c001",
    title: "Black Clover Pendant Chain Set",
    slug: "black-clover-pendant-set",
    brand: "Anjan Jewels",
    price: 799,
    gender: "unisex",
    sizes: ["18-20-inch"],
    isNew: true,
    featuredRank: 7,
    images: [
      "/Anti-Tarnish/Combos/Black Clover Pendant Chain set/ChatGPT Image Sep 2, 2025 at 03_03_30 AM.png",
      "/Anti-Tarnish/Combos/Black Clover Pendant Chain set/IMG_3260.JPG",
      "/Anti-Tarnish/Combos/Black Clover Pendant Chain set/IMG_3740.JPG",
      "/Anti-Tarnish/Combos/Black Clover Pendant Chain set/IMG_3741.JPG",
      "/Anti-Tarnish/Combos/Black Clover Pendant Chain set/IMG_3742.JPG",
      "/Anti-Tarnish/Combos/Black Clover Pendant Chain set/IMG_3744.JPG"
    ],
    material: "Complete Matching Set with Anti-Tarnish Coating",
    antiTarnish: true,
    freeShipping: true,
    description: "Complete black clover jewelry set including necklace, earrings, and bracelet",
    category: "combos"
  },
  {
    id: "c002",
    title: "Diamond Flora Pendant Set",
    slug: "diamond-flora-pendant-set",
    brand: "Anjan Jewels",
    price: 449,
    gender: "women",
    sizes: ["16-18-inch"],
    isNew: true,
    featuredRank: 8,
    images: [
      "/Anti-Tarnish/Combos/Diamond flora pendant set/IMG_3751.JPG",
      "/Anti-Tarnish/Combos/Diamond flora pendant set/IMG_3752.JPG"
    ],
    material: "Sterling Silver with Lab Diamonds",
    antiTarnish: true,
    freeShipping: true,
    description: "Luxurious diamond flora pendant set with matching earrings",
    category: "combos"
  },
  {
    id: "c003",
    title: "Twinkle Heart Pendant Set",
    slug: "twinkle-heart-pendant-set",
    brand: "Anjan Jewels",
    price: 449,
    gender: "women",
    sizes: ["16-18-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Combos/Twinkle heart Pendant set/IMG_3753.JPG",
      "/Anti-Tarnish/Combos/Twinkle heart Pendant set/IMG_3754.JPG"
    ],
    material: "Sterling Silver with Sparkle Coating",
    antiTarnish: true,
    freeShipping: true,
    description: "Sparkling heart pendant set with twinkling effect",
    category: "combos"
  },
  {
    id: "c004",
    title: "White Clover Pendant Set",
    slug: "white-clover-pendant-set",
    brand: "Anjan Jewels",
    price: 799,
    gender: "women",
    sizes: ["16-18-inch"],
    isNew: true,
    images: [
      "/Anti-Tarnish/Combos/White clover pendant chain set/IMG_3262.JPG",
      "/Anti-Tarnish/Combos/White clover pendant chain set/IMG_3745.JPG",
      "/Anti-Tarnish/Combos/White clover pendant chain set/IMG_3747.JPG",
      "/Anti-Tarnish/Combos/White clover pendant chain set/IMG_3749.JPG"
    ],
    material: "White Gold Plated Sterling Silver",
    antiTarnish: true,
    freeShipping: true,
    description: "Elegant white clover pendant set with pristine finish",
    category: "combos"
  }
];

// Helper functions for filtering and sorting
export const getProductsByGender = (gender: Gender): Product[] => 
  PRODUCTS.filter(p => p.gender === gender || p.gender === 'unisex');

export const getProductsByCategory = (category: string): Product[] =>
  PRODUCTS.filter(p => p.category === category);

export const getFeaturedProducts = (): Product[] =>
  PRODUCTS.filter(p => p.featuredRank).sort((a, b) => (a.featuredRank || 0) - (b.featuredRank || 0));

export const getNewProducts = (): Product[] =>
  PRODUCTS.filter(p => p.isNew);

export const getAntiTarnishProducts = (): Product[] =>
  PRODUCTS.filter(p => p.antiTarnish);
