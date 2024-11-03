import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

export default function ProductDetails({ product, loading }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    // console.log({ product, quantity })
    // console.log(addToCart)
    dispatch(addToCart({ item : product , quantity }));
  };
  if (loading) return <div>Loading...</div>;

  const { title, price, image, description, category, rating } = product;
  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-full dark:hidden" src={image} alt="" />
            <img className="w-full hidden dark:block" src={image} alt="" />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${price}
              </p>

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < rating.rate ? "#ffc107" : "#e4e5e9"}
                    />
                  ))}
                </div>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  ({rating.rate})
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                  {rating.count} Reviews
                </a>
              </div>
            </div>

            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              {/* Quantity */}
              <div className="">
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="px-5 py-2.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-primary-300 rounded-lg border border-gray-200 dark:border-gray-800"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              {/* Add to Cart */}
              <a
                href="#"
                title=""
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button"
                onClick={addToCartHandler}
              >
                Add to Cart
              </a>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
