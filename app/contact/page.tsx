import React from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { colors } from "../../constants/colors";

const ContactPage = () => {
  return (
    <div className="bg-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[40vh] overflow-hidden">
        <Image
          src="/images/contact-hero.svg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              We&apos;d love to hear from you and help with any questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-serif font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Contact Information
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: colors.textSecondary }}
            >
              Reach out to us through any of the following channels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Address */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.accent }}
              >
                <MapPin size={32} style={{ color: colors.primary }} />
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                Visit Our Store
              </h3>
              <p className="text-lg" style={{ color: colors.textSecondary }}>
                KIIT University
                <br />
                Patia, Bhubaneswar
                <br />
                Odisha, India - 751024
              </p>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.accent }}
              >
                <Mail size={32} style={{ color: colors.primary }} />
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                Email Us
              </h3>
              <p className="text-lg" style={{ color: colors.textSecondary }}>
                support@anjanjewels.com
                <br />
                orders@anjanjewels.com
                <br />
                info@anjanjewels.com
              </p>
            </div>

            {/* Phone */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.accent }}
              >
                <Phone size={32} style={{ color: colors.primary }} />
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                Call Us
              </h3>
              <p className="text-lg" style={{ color: colors.textSecondary }}>
                +91 96618 32167
                <br />
                support@anjanjewels.com
                <br />
                Mon-Sat: 10AM-8PM
              </p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="text-center">
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: colors.primary }}
            >
              Follow Us
            </h3>
            <div className="flex justify-center space-x-6">
              {[
                { icon: <Facebook size={24} />, href: "#" },
                { icon: <Instagram size={24} />, href: "#" },
                { icon: <Twitter size={24} />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: colors.accent,
                    color: colors.primary,
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: colors.backgroundGrey }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl lg:text-4xl font-serif font-bold mb-4"
                style={{ color: colors.primary }}
              >
                Send us a Message
              </h2>
              <p className="text-xl" style={{ color: colors.textSecondary }}>
                Have a question or need assistance? We&apos;re here to help!
              </p>
            </div>

            <form className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.primary }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-label="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.primary }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-label="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                  style={{ color: colors.primary }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  aria-label="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: colors.primary }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  aria-label="Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 font-bold rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-yellow-500"
                  style={{
                    backgroundColor: colors.primary,
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl lg:text-4xl font-serif font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Visit Our Store
            </h2>
            <p className="text-xl" style={{ color: colors.textSecondary }}>
              Come see our beautiful collection in person
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/map-placeholder.svg"
                alt="Store Location Map"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <p
                className="text-lg font-medium"
                style={{ color: colors.primary }}
              >
                KIIT University, Patia, Bhubaneswar, Odisha, India
              </p>
              <p
                className="text-md mt-2"
                style={{ color: colors.textSecondary }}
              >
                Open Monday to Saturday, 10:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
