import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NutritionFacts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const facts = [
    { nutrient: 'Protein', amount: '6.3g', benefit: 'Essential for muscle building and repair' },
    { nutrient: 'Vitamin D', amount: '1µg', benefit: 'Supports bone health and immune system' },
    { nutrient: 'Vitamin B12', amount: '0.6µg', benefit: 'Important for brain function' },
    { nutrient: 'Choline', amount: '147mg', benefit: 'Crucial for brain development' },
    { nutrient: 'Selenium', amount: '15.4µg', benefit: 'Antioxidant properties' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Egg Nutrition Facts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                {fact.nutrient}
              </h3>
              <p className="text-3xl font-bold text-gray-800 mb-2">
                {fact.amount}
              </p>
              <p className="text-gray-600">
                {fact.benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionFacts;