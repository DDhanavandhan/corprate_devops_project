import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import NutritionFacts from './components/NutritionFacts';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20"> {/* Added padding-top to account for fixed navbar */}
        <Hero />
        <ProductGrid />
        <NutritionFacts />
      </main>
    </div>
  );
}

export default App;