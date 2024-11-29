import React from 'react'

export default function BestSellingProducts() {
  return (
    <div className="pt-32">
      <div className="">
        <h1 className="pb-20 text-center text-6xl font-bold">
          Best Selling Products
        </h1>
        <section className="flex items-center justify-center">
          <input
            type="text"
            placeholder="search by description"
            className="mr-20 border-2 border-gray-700 bg-gray-200 py-4 placeholder:text-gray-900"
          />
          <input
            type="text"
            placeholder="search by name"
            className="border-2 border-gray-700 bg-gray-200 py-4 placeholder:text-gray-900"
          />
        </section>
      </div>
    </div>
  );
}
