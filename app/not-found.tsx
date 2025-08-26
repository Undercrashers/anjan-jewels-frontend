'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl font-bold text-gray-100 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-200 mb-6 font-bodoni">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 mb-8 font-poppins max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            Return to Anjan Jewels
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
