"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Truck,
  RefreshCw,
  Lock,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReusableCard from "./components/ReusableCard";
import { colors } from "../constants/colors";
import { getFeaturedProducts } from "./data/products";

const antiTarnishBenefits = [
  {
    icon: <ShieldCheck size={48} style={{ color: colors.primary }} />,
    title: "Lifetime Protection",
    description:
      "Our advanced anti-tarnish coating ensures your jewelry stays brilliant for years to come.",
  },
  {
    icon: <Lock size={48} style={{ color: colors.primary }} />,
    title: "Skin Safe Formula",
    description:
      "Hypoallergenic materials that are gentle on your skin, perfect for daily wear.",
  },
  {
    icon: <RefreshCw size={48} style={{ color: colors.primary }} />,
    title: "Long-Lasting Shine",
    description:
      "Maintains its original luster without the need for frequent polishing or maintenance.",
  },
  {
    icon: <Check size={48} style={{ color: colors.primary }} />,
    title: "Quality Guarantee",
    description:
      "Each piece is crafted with premium materials and comes with our lifetime warranty.",
  },
];

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel data
  const carouselImages = [
    {
      image: "/banner1.png",
      title: "Butterfly Heart Collection",
      subtitle: "Elegant necklaces for every occasion",
    },
    {
      image: "/background.png",
      title: "Pearl Bracelet Collection",
      subtitle: "Sophisticated bracelets with timeless appeal",
    },
    {
      image: "/banner2.png",
      title: "Premium Anti-Tarnish Collection",
      subtitle: "Long-lasting brilliance for your jewelry",
    },
    {
      image: "/banner3.jpg",
      title: "Handcrafted Elegance",
      subtitle: "Artisan-made pieces with exceptional quality",
    },
    {
      image: "/banner4.jpg",
      title: "Modern Luxury Collection",
      subtitle: "Contemporary designs for the modern woman",
    },
  ];

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="bg-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .hero-gradient { background: ${colors.gradient}; }
        .gold-gradient { background: ${colors.goldGradient}; }
      `}</style>

      <Navbar />

      {/* Carousel Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {carouselImages.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                  <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl lg:text-2xl mb-8 opacity-95 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Tarnish Benefits */}
      <section
        className="py-16 lg:py-24 hidden md:block"
        style={{ backgroundColor: colors.backgroundGrey }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-serif font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Why Choose Anti-Tarnish Jewelry?
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: colors.textSecondary }}
            >
              Experience the difference with our advanced anti-tarnish
              technology that keeps your jewelry looking brand new.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {antiTarnishBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: colors.primary }}
                >
                  {benefit.title}
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-serif font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Featured Anti-Tarnish Collection
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: colors.textSecondary }}
            >
              Handpicked pieces from our exclusive anti-tarnish collection,
              designed to last a lifetime.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ReusableCard
                key={product.id}
                title={product.title}
                description={product.brand}
                image={product.images[0]}
                price={product.price}
                badges={[
                  ...(product.isNew ? ["NEW"] : []),
                  ...(product.antiTarnish ? ["Anti-Tarnish"] : []),
                ]}
                href={`/products/${product.id}`}
                variant="featured"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/collections"
              className="inline-flex items-center px-8 py-3 font-bold rounded-lg text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: colors.primary }}
            >
              View All Products <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section
        className="py-16"
        style={{ backgroundColor: colors.backgroundGrey }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl lg:text-4xl font-serif font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Our Promise to You
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg">
              <ShieldCheck
                size={48}
                style={{ color: colors.accent }}
                className="mx-auto mb-4"
              />
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: colors.primary }}
              >
                Lifetime Warranty
              </h3>
              <p style={{ color: colors.textSecondary }}>
                Complete protection for your investment
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg">
              <Truck
                size={48}
                style={{ color: colors.accent }}
                className="mx-auto mb-4"
              />
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: colors.primary }}
              >
                Fast Delivery
              </h3>
              <p style={{ color: colors.textSecondary }}>
                Quick and secure shipping nationwide
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg">
              <RefreshCw
                size={48}
                style={{ color: colors.accent }}
                className="mx-auto mb-4"
              />
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: colors.primary }}
              >
                10 Days Exchange
              </h3>
              <p style={{ color: colors.textSecondary }}>
                Easy exchange policy for your peace of mind
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg">
              <Lock
                size={48}
                style={{ color: colors.accent }}
                className="mx-auto mb-4"
              />
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: colors.primary }}
              >
                Skin Safe
              </h3>
              <p style={{ color: colors.textSecondary }}>
                Hypoallergenic and safe for sensitive skin
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
