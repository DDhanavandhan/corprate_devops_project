import React from 'react';

const ProductCard = ({ title, description, image, price }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="px-4 py-3">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        <p className="mt-2 text-xl font-semibold text-yellow-600">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;