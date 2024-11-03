import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link , NavLink} from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex items-center justify-between  py-4 mx-5 md:mx-10 ">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
            Zenova
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/cart"
            type="button"
            className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cart
            <svg
              className="rtl:rotate-180 w-3 h-3 sm:w-3 sm:h-3 md:h-3.5 md:w-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-cta"
            className="inline-flex items-center justify-center cursor-pointer md:hidden"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block md:flex md:items-center md:w-auto`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 mt-4 space-y-2 border border-gray-100 rounded-lg bg-gray-50 md:space-y-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 dark:text-blue-500"
                    : "block py-2 px-3 md:p-0 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded md:hover:bg-transparent"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 dark:text-blue-500"
                    : "block py-2 px-3 md:p-0 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded md:hover:bg-transparent"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 dark:text-blue-500"
                    : "block py-2 px-3 md:p-0 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded md:hover:bg-transparent"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 dark:text-blue-500"
                    : "block py-2 px-3 md:p-0 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded md:hover:bg-transparent"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
