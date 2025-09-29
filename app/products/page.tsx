import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Package } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductsPage = () => {
  const categories = [
    {
      id: "necklaces",
      name: "Necklaces",
      description: "Elegant pendant necklaces and chains",
      image: "/Anti-Tarnish/Necklace/Butterfly heart pendant/IMG_3569.JPG",
      link: "/collections?category=necklaces",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      hoverColor: "hover:from-pink-600 hover:to-rose-600",
    },
    {
      id: "bracelets",
      name: "Bracelets",
      description: "Stylish bracelets and charm accessories",
      image: "/Anti-Tarnish/Bracelet/Elegant Pearl bracelet/IMG_3107.JPG",
      link: "/collections?category=bracelets",
      icon: <Heart className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      hoverColor: "hover:from-purple-600 hover:to-indigo-600",
    },
    {
      id: "combos",
      name: "Combo Sets",
      description: "Complete jewelry sets and collections",
      image: "/Anti-Tarnish/Combos/White clover pendant chain set/IMG_3262.JPG",
      link: "/collections?category=combos",
      icon: <Package className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      hoverColor: "hover:from-amber-600 hover:to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Our Products
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our exquisite collection of anti-tarnish jewelry. Each
              piece is crafted with precision and designed to maintain its
              brilliance for years to come.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                🚚 Free Shipping on Orders Above ₹500
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="aspect-[4/5] relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    {category.icon}
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                  </div>
                  <p className="text-white/90 mb-4">{category.description}</p>

                  {/* Call to Action */}
                  <div className="flex items-center justify-between">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                      Explore Collection
                    </span>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Anjan Jewels?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the difference with our premium jewelry collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
                title: "Anti-Tarnish Technology",
                description: "Advanced coating ensures lasting brilliance",
              },
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: "Premium Quality",
                description: "Carefully crafted with finest materials",
              },
              {
                icon: <Package className="w-8 h-8 text-blue-500" />,
                title: "Free Shipping",
                description: "Complimentary delivery on orders above ₹500",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Lifetime Warranty",
                description: "Protection against manufacturing defects",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
