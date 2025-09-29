"use client";

import React from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { colors } from "../../constants/colors";

interface HeaderProps {
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-serif font-bold"
          style={{ color: colors.primary }}
        >
          Anjan Jewels
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="transition-colors"
            style={{
              color: colors.textSecondary,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.primary)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.textSecondary)
            }
          >
            Home
          </Link>
          <Link
            href="/collections"
            className="transition-colors"
            style={{
              color: colors.textSecondary,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.primary)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.textSecondary)
            }
          >
            Collections
          </Link>
          <Link
            href="/about"
            className="transition-colors"
            style={{
              color: colors.textSecondary,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.primary)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.textSecondary)
            }
          >
            About
          </Link>
          <Link
            href="/contact"
            className="transition-colors"
            style={{
              color: colors.textSecondary,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.primary)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.textSecondary)
            }
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            aria-label="Search"
            className="hover:scale-110 transition-transform"
          >
            <Search size={22} style={{ color: colors.primary }} />
          </button>
          <Link
            href="/account"
            aria-label="Account"
            className="hover:scale-110 transition-transform"
          >
            <User size={22} style={{ color: colors.primary }} />
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative hover:scale-110 transition-transform"
          >
            <ShoppingCart size={22} style={{ color: colors.primary }} />
            {cartItemCount > 0 && (
              <span
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs flex items-center justify-center text-white font-semibold"
                style={{ backgroundColor: colors.accent }}
              >
                {cartItemCount}
              </span>
            )}
          </Link>
          <button
            className="md:hidden hover:scale-110 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X size={22} style={{ color: colors.primary }} />
            ) : (
              <Menu size={22} style={{ color: colors.primary }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white border-t"
          style={{ borderColor: colors.border }}
        >
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block transition-colors"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.primary)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.textSecondary)
              }
            >
              Home
            </Link>
            <Link
              href="/collections"
              className="block transition-colors"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.primary)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.textSecondary)
              }
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="block transition-colors"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.primary)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.textSecondary)
              }
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block transition-colors"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.primary)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.textSecondary)
              }
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
