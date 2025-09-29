'use client';

import React, { useState, useCallback } from 'react';
import { Ruler, Info } from 'lucide-react';

interface SizePickerProps {
  sizes: string[];
}

// Helper function to detect size type and format display
function getSizeInfo(size: string) {
  const lowerSize = size.toLowerCase();
  
  if (lowerSize.includes('inch')) {
    return {
      type: 'length',
      display: size,
      description: 'Chain/Necklace Length',
      unit: 'inches'
    };
  } else if (['xs', 'sm', 's', 'small', 'md', 'm', 'medium', 'lg', 'l', 'large', 'xl', 'xxl'].some(s => lowerSize.includes(s))) {
    return {
      type: 'standard',
      display: size.toUpperCase(),
      description: 'Bracelet/Band Size',
      unit: 'standard sizing'
    };
  } else if (lowerSize.match(/^\d+(\.\d+)?$/)) {
    const num = parseFloat(size);
    if (num >= 4 && num <= 13) {
      return {
        type: 'ring',
        display: size,
        description: 'Ring Size',
        unit: 'US ring size'
      };
    }
  }
  
  return {
    type: 'custom',
    display: size,
    description: 'Size',
    unit: 'custom sizing'
  };
}

// Sample size guide data
const sizeGuides = {
  ring: {
    title: 'Ring Size Guide',
    content: [
      { size: '5', diameter: '15.7mm', circumference: '49.3mm' },
      { size: '6', diameter: '16.5mm', circumference: '51.9mm' },
      { size: '7', diameter: '17.3mm', circumference: '54.4mm' },
      { size: '8', diameter: '18.2mm', circumference: '57.0mm' },
      { size: '9', diameter: '19.0mm', circumference: '59.5mm' },
    ]
  },
  length: {
    title: 'Chain Length Guide',
    content: [
      { length: '16"', description: 'Choker length, sits at base of neck' },
      { length: '18"', description: 'Princess length, most popular choice' },
      { length: '20"', description: 'Matinee length, sits below collarbone' },
      { length: '22"', description: 'Opera length, elegant and versatile' },
    ]
  }
};

const SizePicker: React.FC<SizePickerProps> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0] || '');
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  // Get size information for the first size to determine type
  const sizeInfo = getSizeInfo(sizes[0] || '');

  const handleSizeSelect = useCallback((size: string) => {
    setSelectedSize(size);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  }, []);

  const toggleSizeGuide = useCallback(() => {
    setShowSizeGuide(prev => !prev);
  }, []);

  if (!sizes || sizes.length === 0) {
    return null;
  }

  const hasMultipleSizes = sizes.length > 1;
  const showGuide = sizeInfo.type === 'ring' || sizeInfo.type === 'length';

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          {sizeInfo.description}
        </h3>
        
        {showGuide && (
          <button
            onClick={toggleSizeGuide}
            onKeyDown={(e) => handleKeyDown(e, toggleSizeGuide)}
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-2 py-1"
            aria-label="Show size guide"
            tabIndex={0}
          >
            <Ruler size={14} />
            Size Guide
          </button>
        )}
      </div>

      {hasMultipleSizes ? (
        <>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Selected:</span>
              <span className="text-white font-medium">{selectedSize}</span>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {sizes.map((size) => {
                const isSelected = selectedSize === size;
                const info = getSizeInfo(size);
                
                return (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    onKeyDown={(e) => handleKeyDown(e, () => handleSizeSelect(size))}
                    className={`relative px-3 py-2 text-sm font-medium border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-105 ${
                      isSelected
                        ? 'bg-white text-black border-white shadow-lg'
                        : 'bg-transparent text-white border-gray-600 hover:border-gray-400 hover:bg-gray-800'
                    }`}
                    aria-label={`Select size ${info.display}`}
                    aria-pressed={isSelected}
                    tabIndex={0}
                  >
                    {info.display}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-xs text-gray-500 flex items-center gap-1">
            <Info size={12} />
            {sizeInfo.unit}
          </div>
        </>
      ) : (
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-400 text-sm">{sizeInfo.description}:</span>
              <span className="text-white font-semibold ml-2">{sizeInfo.display}</span>
            </div>
            <div className="text-xs text-gray-500">
              {sizeInfo.unit}
            </div>
          </div>
        </div>
      )}

      {/* Size Guide Modal/Dropdown */}
      {showSizeGuide && showGuide && (
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 z-10 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-white">
                {sizeGuides[sizeInfo.type as keyof typeof sizeGuides]?.title}
              </h4>
              <button
                onClick={toggleSizeGuide}
                onKeyDown={(e) => handleKeyDown(e, toggleSizeGuide)}
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded p-1"
                aria-label="Close size guide"
                tabIndex={0}
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {sizeInfo.type === 'ring' && sizeGuides.ring.content.map((item) => (
                <div key={item.size} className="grid grid-cols-3 gap-4 text-sm py-1 border-b border-gray-700 last:border-b-0">
                  <span className="text-white font-medium">Size {item.size}</span>
                  <span className="text-gray-400">{item.diameter}</span>
                  <span className="text-gray-400">{item.circumference}</span>
                </div>
              ))}
              
              {sizeInfo.type === 'length' && sizeGuides.length.content.map((item) => (
                <div key={item.length} className="text-sm py-2 border-b border-gray-700 last:border-b-0">
                  <div className="flex justify-between items-start">
                    <span className="text-white font-medium">{item.length}</span>
                    <span className="text-gray-400 text-xs text-right max-w-xs">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-gray-700">
              <p className="text-xs text-gray-500">
                Need help finding your size? Contact our customer service for personalized assistance.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Accessibility announcement */}
      <div className="sr-only" aria-live="polite">
        {hasMultipleSizes 
          ? `Selected size: ${selectedSize}. ${sizes.length} sizes available.`
          : `Size: ${selectedSize}`
        }
      </div>
    </div>
  );
};

export default SizePicker;