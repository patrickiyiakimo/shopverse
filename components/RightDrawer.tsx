"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

interface FavouriteItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export default function RightDrawer() {
  const [favourites, setFavourites] = useState<FavouriteItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  useEffect(() => {
    const storedFavourites = JSON.parse(
      localStorage.getItem("favourites") || "[]",
    );
    setFavourites(storedFavourites);
  }, [isOpen]);

  return (
    <>
      <div className="items-center justify-center" onClick={toggleDrawer}>
        <FaHeart className="mt-3 hover:cursor-pointer" />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={toggleDrawer}
        ></div>
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-lg dark:bg-gray-800 dark:text-white ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700`}
      >

        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-medium">Favorite Items</h2>
          <button
            className="text-gray-900 hover:bg-gray-300 hover:bg-rounded-full  dark:text-white"
            onClick={toggleDrawer}
          >
            ✕
          </button>
        </div>

        <div className="max-h-[calc(100vh-100px)] overflow-y-auto p-4">
          <div className="p-4">
            <p className="mb-6 text-sm text-gray-900 dark:text-white">
              Boost your shopping experience by taking advantage of our
              <em>'Add to Favourites' </em> feature! Save your most-loved
              products for easy access and never miss out on your must-haves.
              Discover why creating your personalized wishlist is the smartest
              way to shop!
            </p>
          </div>
          {favourites.length > 0 ? (
            favourites.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex items-center space-x-4 border-b pb-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                </div>
              </div>
            ))
          ) : (
            <p className="ml-4 text-gray-900 dark:text-white">No favorite items yet.</p>
          )}
        </div>
      </div>
    </>
  );
}
