"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

interface BuyNowButtonProps {
  productName: string;
  productPrice?: string;
  productId?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const BuyNowButton: React.FC<BuyNowButtonProps> = ({
  productName,
  productPrice,
  productId,
  className = "",
  size = "md",
}) => {
  const phoneNumber = "+919661832167"; // WhatsApp number

  const handleBuyNow = () => {
    let message = `Hi! I'm interested in purchasing: ${productName}`;

    if (productPrice) {
      message += ` (${productPrice})`;
    }

    if (productId) {
      message += `\nProduct ID: ${productId}`;
    }

    message += "\n\nI would like to know more about:";
    message += "\n• Product availability";
    message += "\n• Delivery details";
    message += "\n• Payment options";
    message += "\n\nPlease share more information. Thank you!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={handleBuyNow}
      className={`
        bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg
        transition-colors duration-200 flex items-center justify-center gap-2
        shadow-md hover:shadow-lg font-poppins
        ${sizeClasses[size]}
        ${className}
      `}
    >
      <MessageCircle size={size === "sm" ? 16 : size === "lg" ? 20 : 18} />
      Chat on WhatsApp
    </button>
  );
};

export default BuyNowButton;
