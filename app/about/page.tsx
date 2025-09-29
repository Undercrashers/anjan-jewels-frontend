import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { colors } from "../../constants/colors";

const AboutPage = () => {
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
          src="/about.png"
          alt="About Anjan Jewels"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4">
              About Anjan Jewels
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Crafting Timeless Elegance Since Our Beginning
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/ourstory.png"
                alt="Our artisans at work"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div>
              <h2
                className="text-3xl lg:text-4xl font-serif font-bold mb-6"
                style={{ color: colors.primary }}
              >
                Our Story
              </h2>
              <div
                className="space-y-4 text-lg"
                style={{ color: colors.textSecondary }}
              >
                <p>
                  At Anjan Jewels, we believe every ornament tells a story. Our
                  pieces are inspired by timeless traditions, handcrafted with
                  care, and designed to celebrate the elegance of every
                  individual.
                </p>
                <p>
                  Founded with a passion for excellence, we have dedicated
                  ourselves to creating jewelry that not only looks beautiful
                  but also stands the test of time. Our innovative anti-tarnish
                  technology ensures that each piece maintains its pristine
                  beauty for years to come.
                </p>
                <p>
                  Every piece in our collection is a testament to the skill and
                  dedication of our master craftsmen, who bring decades of
                  experience to every creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: colors.backgroundGrey }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-serif font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 mb-6">
                <Image
                  src="/images/mission.svg"
                  alt="Our Mission"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                Our Mission
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                To craft jewelry that blends heritage and modern design,
                empowering every wearer with confidence and grace. We are
                committed to using sustainable practices and innovative
                technology to create pieces that honor both tradition and
                innovation.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 mb-6">
                <Image
                  src="/images/vision.svg"
                  alt="Our Vision"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                Our Vision
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                To become a global symbol of craftsmanship and authenticity
                while honoring the rich cultural heritage of jewelry-making. We
                envision a future where our anti-tarnish technology sets the
                standard for lasting beauty in the jewelry industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
