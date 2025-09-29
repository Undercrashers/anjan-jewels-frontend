import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageOff, ExternalLink } from "lucide-react";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  currency?: string;
  href?: string;
  badges?: string[];
  className?: string;
  imageAlt?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "default" | "featured" | "minimal";
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  price,
  originalPrice,
  currency = "₹",
  href,
  badges = [],
  className = "",
  imageAlt,
  onClick,
  children,
  variant = "default",
}) => {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-IN").format(amount);
  };

  const CardContent = () => (
    <div
      className={`group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-600 hover:shadow-xl hover:shadow-black/20 ${
        variant === "featured" ? "ring-2 ring-yellow-500/20" : ""
      } ${className}`}
      onClick={onClick}
    >
      {/* Image Container */}
      {(image || variant !== "minimal") && (
        <div className="relative aspect-square overflow-hidden bg-gray-800">
          {image ? (
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <ImageOff size={48} className="text-gray-600" />
            </div>
          )}

          {/* Badges Overlay */}
          {badges.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full shadow-lg"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* External Link Icon */}
          {href && (
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/70 backdrop-blur-sm rounded-full p-2">
                <ExternalLink size={16} className="text-white" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-white text-lg font-bodoni group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-gray-400 text-sm font-poppins line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}

        {/* Price */}
        {price !== undefined && (
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-yellow-400">
              {currency}
              {formatPrice(price)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-gray-500 line-through">
                {currency}
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
        )}

        {/* Custom Children Content */}
        {children && (
          <div className="pt-2 border-t border-gray-800">{children}</div>
        )}

        {/* Action Indicator */}
        {(href || onClick) && (
          <div className="pt-2">
            <div className="text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {href ? "View Details" : "Click to select"} →
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  // Otherwise, return the card directly
  return <CardContent />;
};

export default Card;
