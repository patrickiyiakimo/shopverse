import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen font-mont">
      <div className="flex h-screen">
        {/* Left Side: Image */}
        <div className="hidden w-1/2 md:block">
          <Image
            width={800}
            height={500}
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt="Signup"
            className="object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div className=" flex items-center justify-center md:flex md:w-1/2">
          <form className="ml-14 max-w-md rounded p-8 shadow-md md:ml-0 md:w-3/4">
            <h2 className="mb-6 text-center text-2xl font-bold">Sign In</h2>
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
                className="mt-1 block w-full rounded-md border border-gray-500 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
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
                className="mt-1 block w-full rounded-md border border-gray-500 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-700 py-2 text-white transition duration-300 hover:bg-blue-800"
            >
              Sign In
            </button>
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-white">
              Don&apos;t have an account?
              <Link href="contact" className="pl-2 text-blue-600">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
