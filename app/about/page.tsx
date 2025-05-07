import React from "react";
import Members from "./Members";

export default function CartPage() {
  return (
    <div className="py-40 font-mont dark:bg-gray-900">
      <section>
        <div className="mx-auto max-w-screen-xl 2xl:max-w-screen-2xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-6xl">
            We&apos;re passionate about more than just selling products.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-900 dark:text-white sm:px-16 lg:px-48 2xl:px-72 lg:text-xl">
            Our skincare solutions are crafted using the finest natural
            ingredients, free from harmful chemicals, and designed to bring out
            your best skin ever. Whether you&apos;re battling dryness,
            sensitivity, or looking to elevate your self-care routine,
            we&apos;re here to help you feel confident in your own skin every
            day.
          </p>
        </div>
      </section>

      <section className="mx-5 mt-10 rounded-lg bg-blue-800 p-10 md:mx-20 md:px-32 md:py-20 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-40">
        <div>
          <h3 className="mr-10 text-xl font-bold text-white md:text-2xl lg:text-4xl 2xl:text-5xl">
            Perform Market Research to gain Insights into Industry Trends
          </h3>
          <div className="mt-5 flex items-center text-white">
            <svg
              className="me-1 size-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold">4.95</p>
            <span className="mx-1.5 size-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium underline hover:no-underline"
            >
              73 reviews
            </a>
          </div>
        </div>

        <hr className="my-2" />

        <div className="mt-5 grid gap-6 text-white lg:flex lg:justify-between">
          <div className="flex items-start uppercase">
            <p className="mr-2 text-xl md:text-3xl lg:text-5xl">12K+</p>
            <p className="mt-1 text-sm md:text-[15px]">
              total projects completed
            </p>
          </div>
          <div className="flex items-start uppercase">
            <p className="mr-2 text-xl md:text-3xl lg:text-5xl">300K+</p>
            <p className="mt-1 text-sm md:text-[15px]">
              satisfied active customers
            </p>
          </div>
          <div className="flex items-start uppercase">
            <p className="mr-2 text-xl md:text-3xl lg:text-5xl">4.95</p>
            <p className="mt-1 text-sm md:text-[15px]">active clients rating</p>
          </div>
        </div>
      </section>

      <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
        <Members />
      </div>
    </div>
  );
}
