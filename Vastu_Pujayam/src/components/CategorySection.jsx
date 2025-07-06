import React from "react";
import CategoryCard from "./CategoryCard";
import categories  from "../data/categories2";


const CategorySection = () => {
    return (
        <section className="bg-amber-50 w-full flex flex-col items-center justify-center py-8 px-4">
        <h2 className="font-bold text-red-700 text-3xl mb-6 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {categories.map((category) => (
            <CategoryCard
                key={category.id}
                name={category.name}
                image={category.image}
            />
            ))}
        </div>
        </section>
    );
}

export default CategorySection;