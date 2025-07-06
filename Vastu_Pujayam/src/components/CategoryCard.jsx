import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-amber-100 rounded-xl shadow-md w-64 hover:scale-105 transition-transform">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="font-bold text-red-600 text-lg">{name}</h2>
      <Link to={`/category/${name.toLowerCase()}`}>
        <h4 className="hover:underline text-black cursor-pointer">
          Explore More
        </h4>
      </Link>
    </div>
  );
};

export default CategoryCard;
