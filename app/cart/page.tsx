"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleCartDelete = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleIncrement = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleDecrement = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item,
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="pt-20">
      <h1 className="pb-20 text-center text-2xl font-bold">Cart Items</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="rounded p-4">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-left text-sm text-gray-500 dark:text-white rtl:text-right">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Qty
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="size-10 max-h-full max-w-full rounded-full md:size-32 md:w-32 lg:size-10"
                        />
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">
                        {item.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-gray-950">
                          <button
                            className="me-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                            type="button"
                            onClick={() => handleDecrement(item.id)}
                          >
                            <span className="sr-only">Decrease quantity</span>
                            <svg
                              className="size-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                Number(e.target.value),
                              )
                            }
                            className="block w-8 rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                          />
                          <button
                            className="ms-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
                            type="button"
                            onClick={() => handleIncrement(item.id)}
                          >
                            <span className="sr-only">Increase quantity</span>
                            <svg
                              className="h-3 w-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        <p className="text-lg font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <a href="#" className="text-red-600 dark:text-red-500">
                          <MdDelete
                            className="size-7"
                            onClick={() => handleCartDelete(item.id)}
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
        <section className="my-12 ml-10 flex-col items-start justify-between md:ml-20 md:flex-row lg:ml-80">
          <div className="space-y-3 md:w-1/2">
            <h3 className="font-bold">Shopping Details</h3>
            <p>
              Total Items:{" "}
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <Link href="checkout">
              <button className="btn mt-2 rounded-lg bg-blue-500 px-3 py-3 text-white hover:bg-blue-600">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
