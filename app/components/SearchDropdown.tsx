"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "../data/products";

interface SearchResult {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  material: string;
}

interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      inputRef.current?.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close search on escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Search products
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate search delay for better UX
    const timeout = setTimeout(() => {
      const searchResults = PRODUCTS.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.material.toLowerCase().includes(query.toLowerCase())
      )
        .slice(0, 6)
        .map((product) => ({
          id: product.id,
          title: product.title,
          category: product.category,
          price: product.price,
          image: product.images[0] || "/images/placeholder.svg",
          material: product.material,
        }));

      setResults(searchResults);
      setIsLoading(false);
    }, 150);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleResultClick = () => {
    setQuery("");
    setResults([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50">
      <div
        ref={searchRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
      >
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for jewelry, categories, materials..."
            className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-lg"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="mt-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-500"></div>
              <span className="ml-2 text-gray-600">Searching...</span>
            </div>
          ) : query.trim() !== "" && results.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">
                No products found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Try different keywords or browse our collections
              </p>
            </div>
          ) : results.length > 0 ? (
            <div>
              <p className="text-sm text-gray-600 mb-3">
                Found {results.length} result{results.length !== 1 ? "s" : ""}{" "}
                for &ldquo;{query}&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    onClick={handleResultClick}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {product.title}
                      </h4>
                      <p className="text-xs text-gray-600 capitalize">
                        {product.category}
                      </p>
                      <p className="text-sm font-semibold text-yellow-600">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              {results.length === 6 && (
                <div className="text-center mt-4">
                  <Link
                    href={`/collections?search=${encodeURIComponent(query)}`}
                    onClick={handleResultClick}
                    className="inline-flex items-center px-4 py-2 border border-yellow-500 text-yellow-600 rounded-md hover:bg-yellow-50 transition-colors text-sm font-medium"
                  >
                    View all results for &ldquo;{query}&rdquo;
                  </Link>
                </div>
              )}
            </div>
          ) : query.trim() === "" ? (
            <div className="text-center py-8">
              <p className="text-gray-600">
                Start typing to search our jewelry collection
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Search by product name, category, or material
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
