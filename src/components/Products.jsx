import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { productsData } from "../features/ProductSlice";

import Card from "./Card";

function Products({ type, category, capitalizeText }) {
  const { products, popularProducts, featuredProducts, loading, error } =
    useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  const filterProductsByCategory = () => {
    if (category === "All") return products;
    
    return products.filter((product) => product.category === category);
  };

  useEffect(() => {
    dispatch(productsData());
  }, []);
  return (
    <>
      <div className="  m-5 md:m-10 ">
        {type === "featured" && (
          <>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Featured Products
            </h2>
            <Card products={featuredProducts} loading={loading} error={error} />
          </>
        )}

        {type === "popular" && (
          <>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Popular Products
            </h2>
            <Card products={popularProducts} loading={loading} error={error} />
          </>
        )}
        {type === "related" && (
          <>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Related Products
            </h2>
            <Card
              products={filterProductsByCategory()}
              loading={loading}
              error={error}
            />
          </>
        )}

        {type === "all" && (
          <>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {capitalizeText(category)}
              </h2>
              <button className="filter-button flex items-center bg-blue-500 text-white px-4 py-2 rounded md:hidden">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                Filter
              </button>
            </div>

            <Card
              products={filterProductsByCategory()}
              loading={loading}
              error={error}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Products;
