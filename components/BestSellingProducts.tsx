"use client"

import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("skincare.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.log("Failed to fetch:", error);
    return [];
  }
};

const BestSellingProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();
  }, []);

  return (
    <div className="pt-20 lg:pt-32">
      <div className="">
        <h1 className="pb-20 text-center text-2xl font-bold md:text-4xl lg:text-6xl">
          Best Selling Products
        </h1>
        <section className="mb-20 ml-20 sm:ml-24 md:ml-40 lg:ml-5 items-center justify-center lg:flex">
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
        <div className="grid w-full  grid-cols-1 gap-4 rounded-lg border border-gray-200 bg-white shadow dark:border-gray-900 dark:bg-gray-800 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="rounded border p-4">
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 h-auto max-h-60 w-full rounded"
              />
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
              </a>
              <p>{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  <p className="font-bold">${product.price.toFixed(2)}</p>
                </span>
                <a
                  href="#"
                  className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;