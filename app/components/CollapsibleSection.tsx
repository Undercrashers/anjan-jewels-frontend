"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  content: React.ReactNode | string;
  defaultOpen?: boolean;
  className?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  content,
  defaultOpen = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0
  );
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleSection = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleSection();
      }
    },
    [toggleSection]
  );

  // Handle height animation
  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        const scrollHeight = contentRef.current.scrollHeight;
        setHeight(scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen]);

  // Reset height after animation completes
  useEffect(() => {
    if (isOpen && height !== undefined) {
      const timer = setTimeout(() => {
        setHeight(undefined);
      }, 300); // Match the transition duration

      return () => clearTimeout(timer);
    }
  }, [isOpen, height]);

  return (
    <div
      className={`border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm ${className}`}
    >
      {/* Header */}
      <button
        onClick={toggleSection}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-4 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors duration-200 focus:ring-2 focus:ring-gray-200 focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`collapsible-content-${title
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
        tabIndex={0}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-gray-900 font-semibold text-base">{title}</h3>
          <div className="text-gray-600 transition-transform duration-200">
            {isOpen ? (
              <ChevronUp size={20} className="transform" />
            ) : (
              <ChevronDown size={20} className="transform" />
            )}
          </div>
        </div>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        id={`collapsible-content-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: height !== undefined ? `${height}px` : "auto",
        }}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pb-4">
          <div className="text-gray-700 leading-relaxed">
            {typeof content === "string" ? (
              <div className="space-y-2">
                {content.split("\n").map(
                  (paragraph, index) =>
                    paragraph.trim() && (
                      <p key={index} className="text-sm">
                        {paragraph.trim()}
                      </p>
                    )
                )}
              </div>
            ) : (
              <div className="text-sm">{content}</div>
            )}
          </div>
        </div>
      </div>

      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite">
        {isOpen ? `${title} section expanded` : `${title} section collapsed`}
      </div>
    </div>
  );
};

export default CollapsibleSection;
