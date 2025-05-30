"use client";

import { useState } from "react";
import { IoCart } from "react-icons/io5";
import Link from "next/link";
import Drawer from "./Drawer";
import { usePathname } from "next/navigation";
import RightDrawer from "./RightDrawer";
import { IoMenu } from "react-icons/io5";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string): boolean => pathname === path;

  return (
    <main className="font-mont">
      <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link href="/">
            <em className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              ShopVerse
            </em>
          </Link>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <Drawer />
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex size-10 items-center justify-center rounded-lg border-2 border-blue-600 p-2 text-sm text-blue-600 focus:outline-none focus:ring-2 dark:text-blue-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-expanded={isMenuOpen}
            >
              <IoMenu className="text-6xl" />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">

              <Link href="/about">
                <li
                  className={`mt-3 block rounded px-3 py-2 ${
                    isActive("/about")
                      ? "bg-blue-700 text-white lg:bg-auto lg:text-blue-600"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  } md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500`}
                >
                  About
                </li>
              </Link>

              <Link href="/cart">
                <li
                  className={`mt-3 block rounded px-3 py-2 ${
                    isActive("/cart")
                      ? "bg-blue-700 text-white lg:bg-auto lg:text-blue-600"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  } md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500`}
                >
                  <IoCart className="size-6" />
                </li>
              </Link>

              <Link href="/contact">
                <li
                  className={`mt-3 block rounded px-3 py-2 ${
                    isActive("/contact")
                      ? "bg-blue-700 text-white lg:bg-auto lg:text-blue-600"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  } md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500`}
                >
                  Sign Up
                </li>
              </Link>

              <div className="ml-2 flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse ">
                <RightDrawer />
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                  aria-expanded={isMenuOpen}
                ></button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}
