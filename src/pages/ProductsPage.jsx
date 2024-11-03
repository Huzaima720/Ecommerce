import React, { useState } from "react";
import Products from "../components/Products";

function ProductsPage() {
  const [category, setCategory] = useState("All");
  const categories = [
    "All",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  function capitalizeText(text) {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  console.log(category);
  return (
    <>
      <div className="flex justify-center gap-5 m-7 md:flex hidden">
        {categories.map((category) => (
          <button
            key={category}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg"
            onClick={() => setCategory(category)}
          >
            {capitalizeText(category)}
          </button>
        ))}
      </div>

      <Products
        type="all"
        category={category}
        capitalizeText={capitalizeText}
      />
    </>
  );
}

export default ProductsPage;
