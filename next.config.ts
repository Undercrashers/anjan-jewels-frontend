import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix workspace root detection
  outputFileTracingRoot: process.cwd(),

  // Output configuration - remove for Vercel deployment
  // output: 'standalone',

  // Enable experimental features for better performance
  experimental: {
    // optimizeCss: true, // Disabled as it requires critters package
    optimizePackageImports: ['framer-motion'],
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/uc/**',
      },
    ],
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // Ensure trailing slash behavior is consistent
  trailingSlash: false,

  // Redirects for common 404 scenarios
  async redirects() {
    return [
      {
        source: '/pages/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  },

  // Environment-specific settings
  env: {
    CUSTOM_KEY: process.env.NODE_ENV,
  },

  // Build optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.vendor = {
        test: /[\\/]node_modules[\\/](react|react-dom|framer-motion)[\\/]/,
        name: 'vendors',
        chunks: 'all',
      };
    }
    return config;
  },
};

export default nextConfig;
