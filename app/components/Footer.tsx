"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Collections", href: "/collections" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Care Instructions", href: "/care" },
  ];

  const customerCare = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "FAQ", href: "/faq" },
    { name: "Track Order", href: "/track" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold font-bodoni text-gray-900">
                Anjan Jewels
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Crafted with precision and passion, our jewelry combines timeless
              elegance with modern anti-tarnish technology. Discover jewelry
              that tells your story and lasts forever.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors duration-200 text-gray-600"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-bodoni mb-4 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-yellow-600 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold font-bodoni mb-4 text-gray-900">
              Customer Care
            </h3>
            <ul className="space-y-2">
              {customerCare.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-yellow-600 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold font-bodoni mb-4 text-gray-900">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 text-sm">
                  <Phone className="w-4 h-4 mr-3 text-yellow-500" />
                  <span>+91 96618 32167</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-yellow-500" />
                  <span>hello@anjanjewels.com</span>
                </div>
                <div className="flex items-start text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-3 mt-0.5 text-yellow-500" />
                  <span>
                    KIIT University
                    <br />
                    Patia, Bhubaneswar, Odisha
                  </span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="w-4 h-4 mr-3 text-yellow-500" />
                  <span>Mon-Sat: 10AM-8PM</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold font-bodoni mb-4 text-gray-900">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Subscribe for exclusive offers and new arrivals.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-r-md transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Features banner */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-700 font-medium">
                Anti-Tarnish Technology
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-700 font-medium">
                Lifetime Warranty
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-700 font-medium">
                Free Shipping
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Anjan Jewels. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Made with ❤️ for jewelry lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
