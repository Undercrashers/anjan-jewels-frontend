import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../../constants/colors";

interface ProductCardProps {
  id: string | number;
  name: string;
  image: string;
  price: number;
  mrp: number;
  discount: string;
  rating?: number;
  reviews?: number;
  href?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  mrp,
  discount,
  reviews = 0,
  href = "/product",
}) => {
  return (
    <Link
      href={href}
      className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border"
      style={{ borderColor: colors.border }}
    >
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3
          className="font-bold mb-2 transition-colors"
          style={{
            color: colors.textPrimary,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = colors.primary)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = colors.textPrimary)
          }
        >
          {name}
        </h3>
        {reviews > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-current"
                  style={{ color: colors.accent }}
                />
              ))}
            </div>
            <span className="text-sm" style={{ color: colors.textSecondary }}>
              ({reviews})
            </span>
          </div>
        )}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold" style={{ color: colors.accent }}>
            ₹{price.toLocaleString("en-IN")}
          </span>
          <span
            className="text-sm line-through"
            style={{ color: colors.textSecondary }}
          >
            ₹{mrp.toLocaleString("en-IN")}
          </span>
          <span
            className="text-sm font-semibold"
            style={{ color: colors.success }}
          >
            {discount} OFF
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
