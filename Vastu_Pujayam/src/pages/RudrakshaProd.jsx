import React, { use } from "react";
import CategoryCard from "../components/CategoryCard";
import { useParams } from "react-router-dom";

function RudrakshaProd(name, image) {
  const { CategoryCard } = useParams();

  // data for category rudraksha
  const allProducts = [
    {
      id: 1,
      name: "5 Mukhi Rudraksha",
      image: "",
    },
  ];

  const filtered = allProducts.filter((p) => p.category === categoryName);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        --: Rudraksha :--
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Protect Your Aura with Sacred Rudraksha
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((product) => (
          <CategoryCard
            key={product.id}
            name={product.name}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default RudrakshaProd;