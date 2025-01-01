"use client";

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function RightDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Trigger Button */}
      <div className=" items-center justify-center" onClick={toggleDrawer}>
        <FaHeart className="mt-3 hover:cursor-pointer" />
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 transform bg-white  shadow-lg dark:bg-gray-800 dark:text-white ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-medium">Favourite Items</h2>
          <button
            className="text-gray-900 dark:hover:text-white"
            onClick={toggleDrawer}
          >
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4">
          <p className="mb-6 text-sm text-gray-900 dark:text-white">
            Boost your shopping experience by taking advantage of our
           <em>'Add to Favourites' </em> feature! Save your most-loved
            products for easy access and never miss out on your must-haves.
            Discover why creating your personalized wishlist is the smartest way
            to shop!
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href="#"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
            >
              Learn more
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white duration-300 hover:bg-blue-800 focus:ring-4 focus:ring-cyan-300"
            >
              Get access&nbsp;
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
