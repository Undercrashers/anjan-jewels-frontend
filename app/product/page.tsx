"use client";

import React, { useState, FC } from "react";
import { Star, ShieldCheck, Truck, Tag, RefreshCw, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { colors } from "../../constants/colors";

// --- TYPE DEFINITIONS ---
interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

interface ProductVariant {
  id: string;
  name: string;
  colorCode: string;
}

interface RelatedProduct {
  id: string;
  name: string;
  img: string;
  price: number;
  mrp: number;
  discount: string;
}

interface Offer {
  code: string;
  title: string;
  description: string;
}

// --- MOCK DATA ---
const product = {
  name: "Crystal Love Bangle Bracelet",
  sku: "BR076",
  price: 2346,
  mrp: 3799,
  rating: 4.8,
  reviews: 751,
  images: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1611591437134-5a2a45865269?q=80&w=1887&auto=format&fit=crop",
      alt: "Crystal Love Bangle Bracelet on wrist",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1627225793913-a0434b102f5a?q=80&w=1887&auto=format&fit=crop",
      alt: "Close up of the bangle clasp",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1611652033959-8a3d445be637?q=80&w=1932&auto=format&fit=crop",
      alt: "Bangle with other jewelry",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1585552311543-868519c9b43f?q=80&w=1887&auto=format&fit=crop",
      alt: "Bangle held in hand",
    },
  ],
  variants: [
    { id: "gold", name: "Gold", colorCode: "#D4AF37" },
    { id: "rose_gold", name: "Rose Gold", colorCode: "#E6C0B2" },
  ],
  description:
    "Elevate your style with the enchanting Crystal Love Bangle Bracelet. This exquisite piece is plated in 18k gold and features shimmering crystals that catch the light with every movement. A timeless design that adds a touch of sophistication to any outfit, making it perfect for both everyday wear and special occasions.",
  specifications: [
    { key: "Material", value: "High-Quality Brass Alloy" },
    { key: "Plating", value: "18k Gold Tone Plated" },
    { key: "Stone", value: "AAA+ Quality Zirconia Crystals" },
    { key: "Size", value: "Adjustable (Fits most wrists)" },
    { key: "Features", value: "Anti-Tarnish, Hypoallergenic" },
  ],
};

const offers: Offer[] = [
  {
    code: "MEGA3",
    title: "Buy 3 at ₹3003",
    description: "Use code at checkout.",
  },
  {
    code: "B1G1",
    title: "Buy 1 Get 1 Free",
    description: "Add minimum 2 products to avail.",
  },
  {
    code: "MEGA4",
    title: "Buy 4 at ₹3999",
    description: "Use code at checkout.",
  },
];

const completeLookProducts: RelatedProduct[] = [
  {
    id: "p1",
    name: "Paris Heart Necklace",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887&auto=format&fit=crop",
    price: 1744,
    mrp: 2491,
    discount: "38%",
  },
  {
    id: "p2",
    name: "Gold Layered Earrings",
    img: "https://images.unsplash.com/photo-1620921920128-408c02b128c5?q=80&w=1887&auto=format&fit=crop",
    price: 2590,
    mrp: 3700,
    discount: "38%",
  },
  {
    id: "p3",
    name: "Stone & Strand Necklace",
    img: "https://images.unsplash.com/photo-1611591437134-5a2a45865269?q=80&w=1887&auto=format&fit=crop",
    price: 2540,
    mrp: 3629,
    discount: "38%",
  },
  {
    id: "p4",
    name: "Minimalist Heart Studs",
    img: "https://images.unsplash.com/photo-1611591437134-5a2a45865269?q=80&w=1887&auto=format&fit=crop",
    price: 1749,
    mrp: 2499,
    discount: "38%",
  },
];

// --- MAIN COMPONENT ---
const ProductPage: FC = () => {
  const [selectedImage, setSelectedImage] = useState<ProductImage>(
    product.images[0]
  );
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0]
  );
  const [activeTab, setActiveTab] = useState<string>("description");
  const [showOffers, setShowOffers] = useState<boolean>(false);

  const discountPercent = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  return (
    <div className="bg-white font-sans">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap');
                body { font-family: 'Inter', sans-serif; }
                .font-serif { font-family: 'Playfair Display', serif; }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

      <Header />

      <main className="container mx-auto p-4 md:p-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto scrollbar-hide">
              {product.images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage.id === img.id
                      ? "border-pink-500"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-grow aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1
              className="text-3xl lg:text-4xl font-serif font-bold"
              style={{ color: colors.primary }}
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mt-3 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-current"
                    style={{ color: colors.accent }}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-4">
              <span
                className="text-3xl font-bold"
                style={{ color: colors.accent }}
              >
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="text-xl text-gray-500 line-through">
                MRP ₹{product.mrp.toLocaleString("en-IN")}
              </span>
              <span className="text-lg font-semibold text-green-600">
                SAVE {discountPercent}%
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Inclusive of all taxes</p>
            <p className="text-sm text-gray-700 font-semibold mb-6">
              SKU: {product.sku}
            </p>

            {/* Offers Section */}
            <div className="border-t border-b border-dashed py-4 mb-6">
              {offers.slice(0, 2).map((offer) => (
                <div key={offer.code} className="flex items-center gap-3 mb-2">
                  <Tag size={20} style={{ color: colors.accent }} />
                  <p>
                    <span className="font-bold">{offer.title}</span>{" "}
                    <span className="text-gray-600">{offer.description}</span>
                  </p>
                </div>
              ))}
              <button
                onClick={() => setShowOffers(!showOffers)}
                className="text-sm font-semibold"
                style={{ color: colors.primary }}
              >
                See All Offers
              </button>
            </div>

            {/* Variants */}
            <div className="mb-6">
              <p className="font-semibold mb-2">{selectedVariant.name}</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedVariant.id === variant.id
                        ? "border-pink-500 scale-110"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: variant.colorCode }}
                    aria-label={`Select ${variant.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button
                className="w-full py-3 px-6 text-white font-bold rounded-lg transition-transform hover:scale-105"
                style={{ backgroundColor: colors.primary }}
              >
                ADD TO BAG
              </button>
              <button
                className="w-full py-3 px-6 font-bold rounded-lg transition-transform hover:scale-105"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.primary,
                }}
              >
                BUY IT NOW
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-4 text-sm text-center">
              <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-gray-50">
                <ShieldCheck size={24} style={{ color: colors.primary }} />
                <span>Lifetime Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-gray-50">
                <Lock size={24} style={{ color: colors.primary }} />
                <span>Skin Safe Jewellery</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-gray-50">
                <Truck size={24} style={{ color: colors.primary }} />
                <span>Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-gray-50">
                <RefreshCw size={24} style={{ color: colors.primary }} />
                <span>10 Days Exchange</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Tabs */}
        <div className="mt-16 border-t pt-8">
          <div className="flex border-b mb-6">
            <button
              onClick={() => setActiveTab("description")}
              className={`py-2 px-4 font-semibold transition-all ${
                activeTab === "description" ? "border-b-2" : "text-gray-500"
              }`}
              style={
                activeTab === "description"
                  ? { borderColor: colors.primary, color: colors.primary }
                  : {}
              }
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("specification")}
              className={`py-2 px-4 font-semibold transition-all ${
                activeTab === "specification" ? "border-b-2" : "text-gray-500"
              }`}
              style={
                activeTab === "specification"
                  ? { borderColor: colors.primary, color: colors.primary }
                  : {}
              }
            >
              Specification
            </button>
            <button
              onClick={() => setActiveTab("exchange")}
              className={`py-2 px-4 font-semibold transition-all ${
                activeTab === "exchange" ? "border-b-2" : "text-gray-500"
              }`}
              style={
                activeTab === "exchange"
                  ? { borderColor: colors.primary, color: colors.primary }
                  : {}
              }
            >
              Exchange
            </button>
          </div>
          <div>
            {activeTab === "description" && (
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            )}
            {activeTab === "specification" && (
              <ul className="space-y-2 text-gray-700">
                {product.specifications.map((spec) => (
                  <li key={spec.key} className="grid grid-cols-2">
                    <span className="font-semibold">{spec.key}</span>
                    <span>{spec.value}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "exchange" && (
              <p className="text-gray-700 leading-relaxed">
                We offer a 10-day exchange policy. Please visit our Exchange
                Policy page for more details on the process and eligibility.
                Note: Returns are not accepted.
              </p>
            )}
          </div>
        </div>

        {/* Complete Your Look */}
        <div className="mt-16">
          <h2
            className="text-3xl font-serif text-center font-bold mb-8"
            style={{ color: colors.primary }}
          >
            Complete Your Look
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {completeLookProducts.map((item) => (
              <Link href="/product" key={item.id} className="group text-center">
                <div className="relative overflow-hidden rounded-lg shadow-sm mb-2">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <div className="flex justify-center items-baseline gap-2">
                  <span className="font-bold" style={{ color: colors.accent }}>
                    ₹{item.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ₹{item.mrp}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
