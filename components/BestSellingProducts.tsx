"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";


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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();

    // Load cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleCartClick = (product: Product) => {
    const existingCartItem = cart.find((item) => item.id === product.id);
    if (existingCartItem) {
      toast.info(`${product.name} is already in the cart`, {
        position: "top-right",
        autoClose: 5000,
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
      });
    }
  };

  // Calculate the products to display for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  // Calculate the total number of pages
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
            className="rounded border p-4 dark:border-gray-600"
          >
            <FaHeart className="absolute ml-5 mt-5 size-5 text-red-500 hover:cursor-pointer" />
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 h-auto max-h-60 w-full rounded "
            />
            <h5 className="text-xl font-semibold">{product.name}</h5>
            <p className="">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={() => handleCartClick(product)}
                className="rounded bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800"
              >
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
          className={`rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50`}
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
          className={`rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BestSellingProducts;
