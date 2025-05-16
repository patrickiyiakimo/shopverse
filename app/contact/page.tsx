import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-14 font-mont">
      <div className="w-full max-w-xl px-4 md:px-8">
        <form className="rounded bg-white p-6 shadow-md dark:bg-gray-800 sm:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-white">
            Sign Up
          </h2>
          <div className="mb-4">
            {/* <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-500 bg-white px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:bg-gray-700"
              placeholder="Enter your name"
            />
          </div> */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-500 bg-white px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:bg-gray-700"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-500 bg-white px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:bg-gray-700"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-500 bg-white px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:bg-gray-700"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-700 py-2 text-white transition duration-300 hover:bg-blue-800"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center text-sm text-gray-800 dark:text-white">
            Already have an account?
            <Link href="/login" className="pl-2 text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
