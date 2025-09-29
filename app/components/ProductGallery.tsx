"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { Product } from "../data/products";

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Get valid images
  const validImages = product.images.filter(Boolean);
  const hasImages = validImages.length > 0;
  const currentImage = hasImages ? validImages[selectedImageIndex] : null;

  // Reset image selection when product changes
  useEffect(() => {
    setSelectedImageIndex(0);
    setIsImageLoaded(false);
    setImageError(false);
  }, [product.id]);

  // Handle thumbnail navigation
  const handleThumbnailClick = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setIsImageLoaded(false);
    setImageError(false);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, action: () => void) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        action();
      }
    },
    []
  );

  // Navigate images with arrow keys
  const handleImageNavigation = useCallback(
    (direction: "prev" | "next") => {
      if (!hasImages) return;

      setSelectedImageIndex((current) => {
        if (direction === "prev") {
          return current > 0 ? current - 1 : validImages.length - 1;
        } else {
          return current < validImages.length - 1 ? current + 1 : 0;
        }
      });
      setIsImageLoaded(false);
      setImageError(false);
    },
    [hasImages, validImages.length]
  );

  // Arrow key navigation for gallery
  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handleImageNavigation("prev");
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleImageNavigation("next");
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [handleImageNavigation]);

  // Fallback component for no images
  const ImageFallback = () => (
    <div className="w-full aspect-square bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <ImageOff size={48} className="text-gray-600 mx-auto mb-2" />
        <p className="text-gray-500 text-sm">No image available</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative group">
        {!hasImages || imageError ? (
          <ImageFallback />
        ) : (
          <div className="relative w-full aspect-square bg-gray-900 rounded-lg overflow-hidden">
            <Image
              src={currentImage!}
              alt={`${product.title} - View ${selectedImageIndex + 1}`}
              fill
              className={`object-cover transition-opacity duration-300 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              priority={selectedImageIndex === 0}
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setImageError(true)}
            />

            {!isImageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
                <div className="text-gray-600">Loading...</div>
              </div>
            )}

            {/* Navigation Arrows */}
            {hasImages && validImages.length > 1 && (
              <>
                <button
                  onClick={() => handleImageNavigation("prev")}
                  onKeyDown={(e) =>
                    handleKeyDown(e, () => handleImageNavigation("prev"))
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Previous image"
                  tabIndex={0}
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={() => handleImageNavigation("next")}
                  onKeyDown={(e) =>
                    handleKeyDown(e, () => handleImageNavigation("next"))
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Next image"
                  tabIndex={0}
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Counter */}
            {hasImages && validImages.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {validImages.length}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {hasImages && validImages.length > 1 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-400">Gallery</h4>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {validImages.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                onKeyDown={(e) =>
                  handleKeyDown(e, () => handleThumbnailClick(index))
                }
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  selectedImageIndex === index
                    ? "border-white shadow-lg scale-105"
                    : "border-gray-700 hover:border-gray-500"
                }`}
                aria-label={`View image ${index + 1}`}
                tabIndex={0}
              >
                <Image
                  src={image}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Accessibility Info */}
      <div className="sr-only" aria-live="polite">
        {hasImages
          ? `Viewing image ${selectedImageIndex + 1} of ${
              validImages.length
            } for ${product.title}`
          : `No images available for ${product.title}`}
      </div>
    </div>
  );
};

export default ProductGallery;
