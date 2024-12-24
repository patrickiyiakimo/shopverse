import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen">
      <div className="flex h-screen">
        {/* Left Side: Image */}
        <div className="w-1/2">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt="Signup"
            className="size-full object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div className="flex w-1/2 items-center justify-center">
          <form className="w-3/4 max-w-md rounded p-8 shadow-md">
            <h2 className="mb-6 text-center text-2xl font-bold">Sign Up</h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-2 text-white transition duration-300 hover:bg-blue-700"
            >
              Sign Up
            </button>
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-white">
              Already have an account?
              <a href="#" className="text-blue-600 pl-2">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
