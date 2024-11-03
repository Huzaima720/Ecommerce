import React from "react";
import { Link } from "react-router-dom";
export default function Card({ products, loading, error }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
          >
            <Link
              to={`/products/${product.id}`}
              className="flex justify-center items-center border border-gray-300 "
            >
              <img
                className="rounded-t-lg h-44 md:h-64  object-cover "
                src={product.image}
                alt=""
              />
            </Link>
            <div className="p-4 flex flex-col flex-grow">
              <Link to={`/products/${product.id}`}>
                <h5 className=" mb-4 text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.title}
                </h5>
              </Link>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-bold ">
                  ${product.price.toFixed(2)}
                </span>
                <div>
                  <Link
                    to={`/products/${product.id}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
