"use client"; // This directive marks the component as a Client Component

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ComingSoonPage = () => {
  // State to manage the loading screen
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate a loading time for the animation to complete
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Duration for the new animation

    return () => clearTimeout(timer);
  }, []);

  const brandName = "Anjan Jewels";

  // Framer Motion variants for the new loading animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each letter animates 0.1s after the previous one
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      <div className="bg-black text-white min-h-screen font-bodoni overflow-hidden">
        <AnimatePresence>
          {loading && (
            <motion.div
              key="loader"
              className="fixed inset-0 bg-black z-50 flex items-center justify-center"
              exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
            >
              {/* New advanced loading animation: Staggered letter reveal */}
              <motion.h1
                className="text-4xl md:text-6xl text-white font-bodoni flex overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {brandName.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    style={{ display: 'inline-block', whiteSpace: 'pre' }} // Use pre to render spaces
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="relative min-h-screen">
          {/* Background Image Container */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-right z-0"
            style={{ 
              backgroundImage: "url(/background.png)", // Updated path to your background image
              opacity: 0.3
            }}
          />
          
          {/* Shadow Overlay */}
          <motion.div 
            className="absolute inset-0 z-10"
            initial={{ background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 4 }}
          />

          <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center p-4 md:items-start md:text-left md:pl-20 lg:pl-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.5 }}
            >
              {/* Logo */}
              <motion.div
                className="mb-6 flex justify-center md:justify-start"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 4.2 }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 shadow-2xl p-2">
                  <Image
                    src="/ka_jewels-1.png"
                    alt="KA Jewels Logo"
                    width={120}
                    height={120}
                    className="object-contain w-full h-full rounded-full"
                    priority
                  />
                </div>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-gray-100 tracking-wider">
                Anjan Jewels
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-300 font-poppins max-w-md">
                Timeless elegance, redefined. Discover our exquisite collection of anti-tarnish jewelry.
              </p>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-200">Coming Soon</h2>
              <p className="mt-2 text-gray-400 font-poppins">
                We are crafting a unique experience for you.
              </p>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ComingSoonPage;
