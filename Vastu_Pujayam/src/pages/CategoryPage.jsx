import React from 'react';
import { useParams } from "react-router-dom";
import RudrakshaProd from "../components/RudrakshaProd";
import GemstoneProd from "../components/GemstoneProd";

function CategoryPage() {
  const { categoryName } = useParams();

  if (categoryName === "rudraksha") return <RudrakshaProd />;
  if (categoryName === "gemstones") return <GemstoneProd />;
  
  return <div>Category not found</div>;
}

export default CategoryPage;