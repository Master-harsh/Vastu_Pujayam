import React from "react";
import { Categories } from "../data/Categories.jsx";

const CategoryGrid = () => {
  return (
    <div className="bg-amber-50 py-6">
      <div className="flex justify-center flex-wrap gap-8">
        {Categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={cat.image}
              alt={cat.label}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 shadow-sm hover:scale-105 transition-transform"
            />
            <p className="mt-2 text-sm font-medium text-red-600">{cat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;