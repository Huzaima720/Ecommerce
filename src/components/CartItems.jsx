import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaPlus, FaMinus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import {
  removeFromCart,
  updateCartQuantity,
  clearCart,
} from "../features/CartSlice";

export default function CartItems({ items }) {
  return (
    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
      <div className="space-y-6">
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {

    dispatch(updateCartQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      // Prevent reducing below 1
      dispatch(
        updateCartQuantity({ id: item.id, quantity: item.quantity - 1 })
      );
    }
  };
  const handleRemove = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <a href="#" className="w-20 shrink-0 md:order-1">
          <img
            className="h-20 w-20 dark:hidden"
            src={item.image}
            alt="imac image"
          />
          <img
            className="hidden h-20 w-20 dark:block"
            src={item.image}
            alt="imac image"
          />
        </a>

        <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <FaMinus className="cursor-pointer	" onClick={handleDecrease} />
            <span className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
              {item.quantity}
            </span>
            <FaPlus className="cursor-pointer" onClick={handleIncrease} />
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 dark:text-white">
              ${item.totalPrice}
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:underline dark:text-white"
          >
            {item.title}
          </a>

          <div className="flex items-center gap-4">
            <p className="text-base font-bold text-gray-900 dark:text-white">
              ${item.price}
            </p>

            <button
              type="button"
              className="inline-flex  items-center gap-2 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
              onClick={handleRemove}
            >
              <FaXmark />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
