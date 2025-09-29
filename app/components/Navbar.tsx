"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import SearchDropdown from "./SearchDropdown";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/collections", label: "Collections" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 shadow-lg">
                <Image
                  src="/ka_jewels-1.png"
                  alt="Anjan Jewels Logo"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full rounded-full"
                  priority
                />
              </div>
              <span className="text-gray-900 font-bodoni text-xl font-bold tracking-wide">
                Anjan Jewels
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium font-poppins transition-colors duration-200 hover:bg-yellow-50 rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Action Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="text-gray-700 hover:text-yellow-600 p-2 rounded-md hover:bg-yellow-50 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Action Icons */}
            <button
              onClick={toggleSearch}
              className="text-gray-700 hover:text-yellow-600 p-2 rounded-md hover:bg-yellow-50 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-yellow-600 p-2 rounded-md hover:bg-yellow-50 transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 bg-white/95 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium font-poppins transition-colors duration-200 hover:bg-yellow-50 rounded-md"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile-only action items */}
              <div className="border-t border-gray-200 pt-3 mt-3"></div>
            </div>
          </div>
        )}
      </div>

      {/* Search Dropdown */}
      <SearchDropdown isOpen={isSearchOpen} onClose={closeSearch} />
    </nav>
  );
};

export default Navbar;
