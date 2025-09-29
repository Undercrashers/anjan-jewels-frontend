"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  parseSearchParams,
  buildQueryFromFilters,
  updateQueryWithFilter,
  clearAllFilters,
} from "../lib/utils/query";

const Filters: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    gender: true,
    category: true,
    price: false,
    features: true,
  });

  // Parse current filters from URL
  const currentQuery = searchParams.toString();
  const filters = parseSearchParams(Object.fromEntries(searchParams.entries()));

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const updateFilter = (
    key: string,
    value: string,
    mode: "add" | "remove" | "set"
  ) => {
    const newQuery = updateQueryWithFilter(currentQuery, key, value, mode);
    router.push(`/collections?${newQuery}`, { scroll: false });
  };

  const clearAll = () => {
    const newQuery = clearAllFilters(currentQuery);
    router.push(`/collections${newQuery ? `?${newQuery}` : ""}`, {
      scroll: false,
    });
  };

  const handleCheckboxChange = (
    key: string,
    value: string,
    checked: boolean
  ) => {
    updateFilter(key, value, checked ? "add" : "remove");
  };

  const handlePriceRangeChange = (min?: number, max?: number) => {
    const newFilters = { ...filters };
    if (min !== undefined) newFilters.priceMin = min;
    if (max !== undefined) newFilters.priceMax = max;

    const newQuery = buildQueryFromFilters(newFilters);
    router.push(`/collections?${newQuery}`, { scroll: false });
  };

  // Filter options data
  const filterOptions = {
    gender: [
      { value: "women", label: "Women", count: 8 },
      { value: "men", label: "Men", count: 3 },
      { value: "unisex", label: "Unisex", count: 6 },
    ],
    category: [
      { value: "necklaces", label: "Necklaces", count: 17 },
      { value: "bracelets", label: "Bracelets", count: 3 },
      { value: "combos", label: "Combo Sets", count: 4 },
    ],
  };

  const priceRanges = [
    { min: 0, max: 1000, label: "Under ₹1,000" },
    { min: 1000, max: 2500, label: "₹1,000 - ₹2,500" },
    { min: 2500, max: 5000, label: "₹2,500 - ₹5,000" },
    { min: 5000, max: 10000, label: "₹5,000 - ₹10,000" },
    { min: 10000, max: undefined, label: "Over ₹10,000" },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          <button
            onClick={clearAll}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Clear all
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {/* Gender Filter */}
        <FilterSection
          title="Gender"
          isExpanded={expandedSections.gender}
          onToggle={() => toggleSection("gender")}
        >
          <div className="space-y-3">
            {filterOptions.gender.map((option) => (
              <FilterCheckbox
                key={option.value}
                label={option.label}
                value={option.value}
                count={option.count}
                checked={filters.genders.includes(option.value)}
                onChange={(checked) =>
                  handleCheckboxChange("gender", option.value, checked)
                }
              />
            ))}
          </div>
        </FilterSection>

        {/* Category Filter */}
        <FilterSection
          title="Category"
          isExpanded={expandedSections.category}
          onToggle={() => toggleSection("category")}
        >
          <div className="space-y-3">
            {filterOptions.category.map((option) => (
              <FilterCheckbox
                key={option.value}
                label={option.label}
                value={option.value}
                count={option.count}
                checked={filters.categories.includes(option.value)}
                onChange={(checked) =>
                  handleCheckboxChange("category", option.value, checked)
                }
              />
            ))}
          </div>
        </FilterSection>

        {/* Price Filter */}
        <FilterSection
          title="Price Range"
          isExpanded={expandedSections.price}
          onToggle={() => toggleSection("price")}
        >
          <div className="space-y-3">
            {priceRanges.map((range, index) => {
              const isSelected =
                filters.priceMin === range.min &&
                filters.priceMax === range.max;
              return (
                <FilterCheckbox
                  key={index}
                  label={range.label}
                  value={`${range.min}-${range.max || "max"}`}
                  checked={isSelected}
                  onChange={(checked) => {
                    if (checked) {
                      handlePriceRangeChange(range.min, range.max);
                    } else {
                      handlePriceRangeChange(undefined, undefined);
                    }
                  }}
                />
              );
            })}

            {/* Custom Price Range */}
            <div className="pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                  value={filters.priceMin || ""}
                  onChange={(e) => {
                    const value = e.target.value
                      ? parseInt(e.target.value)
                      : undefined;
                    handlePriceRangeChange(value, filters.priceMax);
                  }}
                />
                <span className="text-gray-400">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                  value={filters.priceMax || ""}
                  onChange={(e) => {
                    const value = e.target.value
                      ? parseInt(e.target.value)
                      : undefined;
                    handlePriceRangeChange(filters.priceMin, value);
                  }}
                />
              </div>
            </div>
          </div>
        </FilterSection>

        {/* Features Filter */}
        <FilterSection
          title="Features"
          isExpanded={expandedSections.features}
          onToggle={() => toggleSection("features")}
        >
          <div className="space-y-3">
            <FilterCheckbox
              label="Anti-Tarnish"
              value="anti-tarnish"
              checked={filters.antiTarnish === true}
              onChange={(checked) => {
                const newQuery = checked
                  ? updateQueryWithFilter(
                      currentQuery,
                      "antiTarnish",
                      "true",
                      "set"
                    )
                  : updateQueryWithFilter(
                      currentQuery,
                      "antiTarnish",
                      "",
                      "remove"
                    );
                router.push(`/collections?${newQuery}`, { scroll: false });
              }}
            />
          </div>
        </FilterSection>
      </div>
    </div>
  );
};

// Filter Section Component
interface FilterSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  isExpanded,
  onToggle,
  children,
}) => {
  return (
    <div className="p-4">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={onToggle}
      >
        <h3 className="font-medium text-gray-900">{title}</h3>
        {isExpanded ? (
          <ChevronUp size={20} className="text-gray-400" />
        ) : (
          <ChevronDown size={20} className="text-gray-400" />
        )}
      </button>

      {isExpanded && <div className="mt-4">{children}</div>}
    </div>
  );
};

// Filter Checkbox Component
interface FilterCheckboxProps {
  label: string;
  value: string;
  count?: number;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  label,
  value,
  count,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-2 focus:ring-offset-0"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          value={value}
        />
        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
          {label}
        </span>
      </div>
      {count !== undefined && (
        <span className="text-sm text-gray-400">({count})</span>
      )}
    </label>
  );
};

export default Filters;
