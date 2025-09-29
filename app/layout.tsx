import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bodoni_Moda, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Anjan Jewels - Luxury Anti-Tarnish Jewelry",
  description:
    "Discover timeless elegance with Anjan Jewels. Premium anti-tarnish jewelry collection featuring exquisite designs and unmatched quality.",
  keywords:
    "jewelry, anti-tarnish, luxury jewelry, anjan jewels, premium jewelry, jewelry collection",
  authors: [{ name: "Anjan Jewels" }],
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Anjan Jewels - Luxury Anti-Tarnish Jewelry",
    description:
      "Discover timeless elegance with Anjan Jewels. Premium anti-tarnish jewelry collection.",
    type: "website",
    locale: "en_US",
    siteName: "Anjan Jewels",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjan Jewels - Luxury Anti-Tarnish Jewelry",
    description:
      "Discover timeless elegance with Anjan Jewels. Premium anti-tarnish jewelry collection.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} ${poppins.variable} antialiased bg-gray-50 text-gray-900 min-h-screen`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
