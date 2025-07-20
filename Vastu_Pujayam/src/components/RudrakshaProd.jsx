import React from "react";
import CategoryCard from "./CategoryCard";
import { useParams } from "react-router-dom";

function RudrakshaProd() {
  const { categoryName } = useParams();

  const allProducts = [
    {
      id: 1,
      name: "5 Mukhi Rudraksha",
      image: "/Rudrakshaimages/5_Mukhi_Rudraksha.png",
      category: "rudraksha",
    },
    {
      id: 2,
      name: "2 Mukhi Rudraksha",
      image: "2_Mukhi_Rudraksha.png",
      category: "rudraksha",
    },
    {
      id: 3,
      name: "2 Mukhi Rudraksha (Indian)",
      image: "2-Mukhi-Rudraksha-indian.png",
      category: "rudraksha",
    },
    // Add more as needed
  ];

  const filtered = allProducts.filter((p) => p.category === categoryName);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">--: Rudraksha :--</h1>
      <p className="text-lg text-gray-700 mb-4">
        Protect Your Aura with Sacred Rudraksha
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((product) => (
          <CategoryCard key={product.id} name={product.name} image={product.image} />
        ))}
      </div>
    </div>
  );
}

export default RudrakshaProd;
