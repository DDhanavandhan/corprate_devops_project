import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "Farm Fresh Eggs",
    description: "Premium quality farm-fresh eggs",
    price: "4.99",
    image: "https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?auto=format&fit=crop&w=500"
  },
  {
    id: 2,
    title: "Organic Brown Eggs",
    description: "Certified organic brown eggs",
    price: "5.99",
    image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&w=500"
  },
  // Add more products as needed
];

const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;