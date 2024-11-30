"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
  const [showToast, setShowToast] = useState(false);

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

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleCartClick = (product: Product) => {
    const existingCartItem = cart.find((item) => item.id === product.id);
    if (existingCartItem) {
      toast.info(`${product.name} is already in the cart`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
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
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="pt-20 lg:pt-32">
      {showToast && (
        <div
          className="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
          role="alert"
        >
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </div>
          <div className="ml-3 text-sm font-normal">Item added to cart.</div>
          <button
            type="button"
            onClick={() => setShowToast(false)}
            className="ml-auto rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100"
          >
            <svg className="h-3 w-3" viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M1 1l6 6m0 0l6 6M7 7l6-6m-6 6l-6 -6"
              />
            </svg>
          </button>
        </div>
      )}
      <h1 className="pb-20 text-center text-2xl font-bold md:text-4xl lg:text-6xl">
        Best Selling Products
      </h1>
      <section className="mb-20 ml-20 items-center justify-center sm:ml-24 md:ml-40 lg:ml-5 lg:flex">
        <input
          type="text"
          placeholder="search by description"
          className="mb-4 mr-5 border-2 border-gray-300 bg-gray-200 py-4 placeholder:text-gray-900 md:mb-0 md:mr-20"
        />
        <input
          type="text"
          placeholder="search by name"
          className="border-2 border-gray-300 bg-gray-200 py-4 placeholder:text-gray-900"
        />
      </section>
      <div className="grid w-full grid-cols-1 gap-4 rounded-lg  border-gray-200 bg-white shadow dark:bg-gray-900 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded border p-4 dark:border-gray-600"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 h-auto max-h-60 w-full rounded"
            />
            <h5 className="text-xl font-semibold">{product.name}</h5>
            <p>{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={() => handleCartClick(product)}
                className="rounded bg-blue-700 px-5 py-2 text-white hover:bg-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;