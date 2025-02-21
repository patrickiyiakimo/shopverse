"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("/skincare.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch:", error);
    return [];
  }
};

const BestSellingProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favourites, setFavourites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    const storedFavourites = JSON.parse(
      localStorage.getItem("favourites") || "[]",
    );
    setFavourites(storedFavourites);
  }, []);

  const handleCartClick = (product: Product) => {
    const existingCartItem = cart.find((item) => item.id === product.id);
    if (existingCartItem) {
      toast.error(`${product.name} is already in the cart`, {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
    } else {
      const newCartItem: CartItem = {
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      const updatedCart = [...cart, newCartItem];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success(`${product.name} added to cart`, {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
    }
  };

const handleFavouriteClick = (product: Product) => {
  const existingFavorites = JSON.parse(
    localStorage.getItem("favourites") || "[]",
  );
  const isAlreadyFavorite = existingFavorites.some(
    (fav: Product) => fav.id === product.id,
  );

  if (isAlreadyFavorite) {
    // Remove item from favourites
    const updatedFavourites = existingFavorites.filter(
      (fav: Product) => fav.id !== product.id,
    );
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    toast.error("Item removed from favourites", {
      position: "top-left",
      autoClose: 5000,
      theme: "dark",
    });
  } else {
    // Add item to favourites
    const updatedFavourites = [...existingFavorites, product];
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    toast.success(`${product.name} added to favourites`, {
      position: "top-left",
      autoClose: 5000,
      theme: "dark",
    });
  }
};

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="pb-40 pt-20 font-mont lg:pt-32 ">
      <h1 className="pb-20 text-center text-2xl font-bold md:text-4xl lg:text-6xl">
        Best Selling Products
      </h1>

      <div className="grid w-full grid-cols-1 gap-4 rounded-lg border-gray-200 bg-white shadow dark:bg-gray-900 md:grid-cols-2 lg:grid-cols-3">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="relative rounded border p-4 dark:border-gray-600"
          >
            <div
              onClick={() => handleFavouriteClick(product)}
              className="absolute flex size-12 items-center justify-center rounded-b-full bg-blue-600 font-bold hover:cursor-pointer"
            >
              <FaHeart
                className={`absolute size-6 ${
                  favourites.includes(product.id)
                    ? "text-green-600"
                    : "text-white duration-700 hover:text-red-500"
                }`}
              />
            </div>

            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="mb-4 h-auto max-h-60 rounded"
            />
            <h5 className="text-xl font-semibold">{product.name}</h5>
            <p>{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={() => handleCartClick(product)}
                className="flex items-center rounded bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800"
              >
                <FaCartShopping className="mr-3" />
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="rounded bg-gray-300 px-4 py-2 text-black duration-700 hover:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
        <span className="flex items-center px-4 py-2 font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="rounded bg-gray-300 px-4 py-2 text-black duration-700 hover:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BestSellingProducts;
