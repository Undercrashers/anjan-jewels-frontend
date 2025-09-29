import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, Shield, ArrowLeft } from "lucide-react";
import { PRODUCTS } from "../../data/products";
import ProductGallery from "../../components/ProductGallery";
import CollapsibleSection from "../../components/CollapsibleSection";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BuyNowButton from "../../components/BuyNowButton";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all products
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found - Anjan Jewels",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.title} - Anjan Jewels`,
    description: `${product.description || "Premium anti-tarnish jewelry"} - ${
      product.material
    }`,
    keywords: `${product.title}, ${product.category}, ${product.material}, anti-tarnish jewelry, ${product.brand}`,
    openGraph: {
      title: `${product.title} - Anjan Jewels`,
      description: product.description || "Premium anti-tarnish jewelry",
      images: product.images.length > 0 ? [product.images[0]] : [],
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  // Get related products (same category, different product)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const displayPrice = product.price.toLocaleString("en-IN");

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href="/collections"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Collections
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href={`/collections?category=${product.category}`}
                className="text-gray-600 hover:text-gray-900 transition-colors capitalize"
              >
                {product.category}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{product.title}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Link
            href="/collections"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Collections
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Gallery */}
            <div className="space-y-4">
              <ProductGallery product={product} />
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              {/* Product Meta */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {product.isNew && (
                    <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.antiTarnish && (
                    <div className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <Shield size={14} />
                      Anti-Tarnish
                    </div>
                  )}
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full capitalize">
                    {product.gender}
                  </span>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold font-bodoni mb-2 text-gray-900">
                  {product.title}
                </h1>

                <p className="text-gray-600 text-lg mb-4">{product.material}</p>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-yellow-500">
                    ₹{displayPrice}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < 4
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-600"
                        }
                      />
                    ))}
                    <span className="text-gray-600 ml-2">
                      (4.5) · 127 reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-4">
                <BuyNowButton
                  productName={product.title}
                  productPrice={`₹${displayPrice}`}
                  productId={product.id}
                  size="lg"
                  className="w-full"
                />
              </div>

              {/* Product Specifications */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Product Details
                </h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Material</dt>
                    <dd className="text-gray-900 font-medium">
                      {product.material}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Brand</dt>
                    <dd className="text-gray-900 font-medium">
                      {product.brand}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Category</dt>
                    <dd className="text-gray-900 font-medium capitalize">
                      {product.category}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Size</dt>
                    <dd className="text-gray-900 font-medium">Free Size</dd>
                  </div>
                  {product.antiTarnish && (
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Special Features</dt>
                      <dd className="text-yellow-600 flex items-center gap-1 font-medium">
                        <Shield size={16} />
                        Anti-Tarnish Coating
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Collapsible Sections */}
              <div className="space-y-4">
                <CollapsibleSection
                  title="Product Details"
                  content={
                    product.description ||
                    "This exquisite piece showcases premium craftsmanship with attention to every detail. Made with high-quality materials and featuring our signature anti-tarnish technology for lasting beauty."
                  }
                />

                <CollapsibleSection
                  title="Care Instructions"
                  content="To maintain the beauty of your anti-tarnish jewelry: Store in a dry place away from humidity. Clean with a soft, lint-free cloth. Avoid contact with perfumes, lotions, and cleaning chemicals. Our anti-tarnish coating provides long-lasting protection, but proper care extends the life of your jewelry."
                />

                <CollapsibleSection
                  title="Shipping & Returns"
                  content="Free shipping on orders over ₹2,000. Standard delivery in 3-5 business days. Express delivery available. 30-day hassle-free returns. All items are carefully packaged in luxury gift boxes. For exchanges, please contact our customer service team."
                />

                <CollapsibleSection
                  title="Reviews"
                  content={
                    <div className="text-gray-600">
                      <p className="mb-4">
                        Customer reviews for this product will appear here.
                      </p>
                      <p className="text-sm">
                        Be the first to review this product and share your
                        experience with other customers.
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>

          {/* You Might Also Like */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 border-t border-gray-200 pt-16">
              <h2 className="text-2xl font-bold font-bodoni mb-8 text-center text-gray-900">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"
                  >
                    <Card product={relatedProduct} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
