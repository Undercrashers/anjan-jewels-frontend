import React from "react";
import { getProductsByCategory } from "../../data/products";
import Card from "../../components/Card";

const ComboPage = () => {
  const combos = getProductsByCategory("combos");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Combo Sets Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete your jewelry collection with our perfectly matched combo
            sets, designed to offer coordinated elegance at exceptional value.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              🚚 Free Shipping on Orders Above ₹500
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {combos.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {combos.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No combo sets found
            </h3>
            <p className="text-gray-600">Check back soon for new arrivals!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComboPage;
