"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Shield } from "lucide-react";
import { Product } from "../data/products";
import BuyNowButton from "./BuyNowButton";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const {
    title,
    price,
    images,
    gender,
    antiTarnish,
    isNew,
    material,
    freeShipping,
  } = product;

  const displayPrice = price.toLocaleString("en-IN");
  const primaryImage = images[0] || "/images/placeholder.svg";

  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={primaryImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded">
              NEW
            </span>
          )}
          {antiTarnish && (
            <div className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
              <Shield size={12} />
              Anti-Tarnish
            </div>
          )}
        </div>

        {/* Gender Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2 py-1 rounded capitalize">
            {gender}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>

        {/* Material */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-1">{material}</p>

        {/* Free Shipping Badge */}
        {freeShipping && price >= 500 && (
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              🚚 Free Shipping
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-yellow-600">
              ₹{displayPrice}
            </span>
          </div>

          {/* Rating placeholder - can be expanded later */}
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">4.5</span>
          </div>
        </div>

        {/* Action Buttons - Always visible on mobile, hover on desktop */}
        <div
          className="mt-3 space-y-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => e.preventDefault()}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <BuyNowButton
              productName={title}
              productPrice={`₹${displayPrice}`}
              productId={product.id}
              size="sm"
              className="w-full"
            />
          </div>
          <Link
            href={`/products/${product.id}`}
            className="block w-full bg-gray-800 text-white py-2 rounded-md text-sm font-medium hover:bg-gray-700 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            Quick View
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Card;
