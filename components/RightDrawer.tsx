"use client";

import React, { useState } from "react";

export default function RightDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Trigger Button */}
      <div className="flex min-h-[50vh] items-center justify-center">
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          onClick={toggleDrawer}
        >
          Show Drawer
        </button>
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
        className={`fixed right-0 top-0 z-50 h-full w-80 transform bg-white shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-medium">Drawer</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleDrawer}
          >
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4">
          <p className="mb-6 text-sm text-gray-500">
            Supercharge your hiring by taking advantage of our&nbsp;
            <a href="#" className="text-cyan-600 underline hover:no-underline">
              limited-time sale
            </a>
            &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K
            top-ranked candidates and the #1 design job board.
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
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300"
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
