'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown, Check } from 'lucide-react';
import { updateQueryWithFilter, resetPagination } from '../lib/utils/query';

interface SortOption {
  value: string;
  label: string;
  description?: string;
}

const sortOptions: SortOption[] = [
  { 
    value: 'featured', 
    label: 'Featured', 
    description: 'Our recommended picks' 
  },
  { 
    value: 'newest', 
    label: 'Newest', 
    description: 'Latest arrivals first' 
  },
  { 
    value: 'price_asc', 
    label: 'Price: Low to High', 
    description: 'Lowest price first' 
  },
  { 
    value: 'price_desc', 
    label: 'Price: High to Low', 
    description: 'Highest price first' 
  }
];

const Sort: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const currentSort = searchParams.get('sort') || 'featured';
  const currentSortOption = sortOptions.find(option => option.value === currentSort) || sortOptions[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortChange = (sortValue: string) => {
    const currentQuery = searchParams.toString();
    
    // Reset pagination when changing sort
    const queryWithoutPage = resetPagination(currentQuery);
    const newQuery = updateQueryWithFilter(queryWithoutPage, 'sort', sortValue, 'set');
    
    router.push(`/collections?${newQuery}`, { scroll: false });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Desktop Dropdown */}
      <div className="hidden sm:block">
        <button
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span>Sort: {currentSortOption.label}</span>
          <ChevronDown 
            size={16} 
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 z-10 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="py-1" role="listbox">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                  onClick={() => handleSortChange(option.value)}
                  role="option"
                  aria-selected={currentSort === option.value}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {option.label}
                      </div>
                      {option.description && (
                        <div className="text-xs text-gray-500 mt-1">
                          {option.description}
                        </div>
                      )}
                    </div>
                    {currentSort === option.value && (
                      <Check size={16} className="text-black" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Segmented Control */}
      <div className="sm:hidden">
        <div className="flex items-center gap-1 text-xs">
          <span className="text-gray-600 mr-2">Sort:</span>
          <div className="flex bg-gray-100 rounded-lg p-1">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  currentSort === option.value
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => handleSortChange(option.value)}
              >
                {option.label.replace('Price: ', '')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;