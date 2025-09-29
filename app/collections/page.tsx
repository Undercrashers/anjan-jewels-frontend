import React from "react";
import { PRODUCTS, Product } from "../data/products";
import { parseSearchParams, getActiveFilterCount } from "../lib/utils/query";
import Card from "../components/Card";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X } from "lucide-react";

interface CollectionsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CollectionsPage({
  searchParams,
}: CollectionsPageProps) {
  // Parse search parameters
  const resolvedSearchParams = await searchParams;
  const filters = parseSearchParams(resolvedSearchParams);

  // Filter products based on search parameters
  const filteredProducts = filterProducts(PRODUCTS, filters);

  // Sort products based on sort parameter
  const sortedProducts = sortProducts(
    filteredProducts,
    filters.sort || "featured"
  );

  const activeFilterCount = getActiveFilterCount(filters);
  const hasActiveFilters = activeFilterCount > 0;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {filters.search ? `Search Results` : "Collections"}
              </h1>
              <p className="mt-2 text-gray-600">
                {filters.search
                  ? `Showing results for "${filters.search}"`
                  : "Discover our complete range of anti-tarnish jewelry"}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-8">
                <Filters />
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Mobile Filter Toggle & Sort */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Toggle */}
                  <button className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white">
                    <span>Filters</span>
                    {hasActiveFilters && (
                      <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>

                  {/* Results Count */}
                  <span className="text-sm text-gray-600">
                    {sortedProducts.length} result
                    {sortedProducts.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Sort Component */}
                <Sort />
              </div>

              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">
                      Active filters:
                    </span>
                    <ActiveFilterBadges filters={filters} />
                    <button className="text-sm text-gray-500 hover:text-gray-700 underline ml-2">
                      Clear all
                    </button>
                  </div>
                </div>
              )}

              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedProducts.map((product) => (
                    <Card key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <EmptyState hasActiveFilters={hasActiveFilters} />
              )}
            </main>
          </div>
        </div>

        {/* Mobile Filter Drawer - Will be handled by Filters component */}
      </div>
      <Footer />
    </>
  );
}

// Filter products based on parsed filters
function filterProducts(
  products: Product[],
  filters: ReturnType<typeof parseSearchParams>
): Product[] {
  return products.filter((product) => {
    // Gender filter
    if (filters.genders.length > 0) {
      const matchesGender =
        filters.genders.includes(product.gender) ||
        (filters.genders.includes("unisex") && product.gender === "unisex");
      if (!matchesGender) return false;
    }

    // Size filter
    if (filters.sizes.length > 0) {
      const hasMatchingSize = product.sizes.some((size) =>
        filters.sizes.includes(size)
      );
      if (!hasMatchingSize) return false;
    }

    // Category filter
    if (filters.categories.length > 0) {
      if (!filters.categories.includes(product.category)) return false;
    }

    // Price range filter
    if (filters.priceMin !== undefined && product.price < filters.priceMin) {
      return false;
    }
    if (filters.priceMax !== undefined && product.price > filters.priceMax) {
      return false;
    }

    // Anti-tarnish filter
    if (
      filters.antiTarnish !== undefined &&
      product.antiTarnish !== filters.antiTarnish
    ) {
      return false;
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const searchable = `${product.title} ${product.category} ${
        product.material
      } ${product.description || ""}`.toLowerCase();
      if (!searchable.includes(searchTerm)) {
        return false;
      }
    }

    return true;
  });
}

// Sort products based on sort parameter
function sortProducts(products: Product[], sortBy: string): Product[] {
  const sortedProducts = [...products];

  switch (sortBy) {
    case "featured":
      return sortedProducts.sort((a, b) => {
        // Featured products first, then by featured rank
        if (a.featuredRank && b.featuredRank) {
          return a.featuredRank - b.featuredRank;
        }
        if (a.featuredRank && !b.featuredRank) return -1;
        if (!a.featuredRank && b.featuredRank) return 1;
        return 0;
      });

    case "newest":
      return sortedProducts.sort((a, b) => {
        // New products first
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });

    case "price_asc":
      return sortedProducts.sort((a, b) => a.price - b.price);

    case "price_desc":
      return sortedProducts.sort((a, b) => b.price - a.price);

    default:
      return sortedProducts;
  }
}

// Component for displaying active filter badges
function ActiveFilterBadges({
  filters,
}: {
  filters: ReturnType<typeof parseSearchParams>;
}) {
  const badges: React.ReactNode[] = [];

  // Gender badges
  filters.genders.forEach((gender) => {
    badges.push(
      <FilterBadge
        key={`gender-${gender}`}
        label={gender}
        type="gender"
        value={gender}
      />
    );
  });

  // Size badges
  filters.sizes.forEach((size) => {
    badges.push(
      <FilterBadge
        key={`size-${size}`}
        label={`Size: ${size}`}
        type="size"
        value={size}
      />
    );
  });

  // Category badges
  filters.categories.forEach((category) => {
    badges.push(
      <FilterBadge
        key={`category-${category}`}
        label={category}
        type="category"
        value={category}
      />
    );
  });

  // Price range badge
  if (filters.priceMin !== undefined || filters.priceMax !== undefined) {
    const priceLabel = `₹${filters.priceMin || 0}–₹${filters.priceMax || "∞"}`;
    badges.push(
      <FilterBadge key="price" label={priceLabel} type="price" value="price" />
    );
  }

  // Anti-tarnish badge
  if (filters.antiTarnish !== undefined) {
    badges.push(
      <FilterBadge
        key="anti-tarnish"
        label="Anti-Tarnish"
        type="antiTarnish"
        value="true"
      />
    );
  }

  return <>{badges}</>;
}

// Individual filter badge component
function FilterBadge({
  label,
}: {
  label: string;
  type: string;
  value: string;
}) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
      {label}
      <button
        className="hover:bg-gray-200 rounded-full p-0.5"
        aria-label={`Remove ${label} filter`}
      >
        <X size={12} />
      </button>
    </span>
  );
}

// Empty state component
function EmptyState({ hasActiveFilters }: { hasActiveFilters: boolean }) {
  return (
    <div className="text-center py-12">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {hasActiveFilters ? "No products found" : "No products available"}
        </h3>
        <p className="text-gray-600 mb-6">
          {hasActiveFilters
            ? "Try adjusting your filters or search criteria."
            : "Check back soon for new products."}
        </p>
        {hasActiveFilters && (
          <div className="space-y-3">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Clear all filters
            </button>
            <div>
              <button className="text-gray-600 hover:text-gray-800 underline">
                View featured products
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
