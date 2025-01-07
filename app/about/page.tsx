import React from "react";
import Members from "./Members";

export default function CartPage() {
  return (
    <div className="py-40 ">
      <section className="font-mont dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-6xl">
            We’re passionate about more than just selling products.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-900 dark:text-white sm:px-16 lg:px-48 lg:text-xl">
            Our skincare solutions are crafted using the finest natural
            ingredients, free from harmful chemicals, and designed to bring out
            your best skin ever. Whether you’re battling dryness, sensitivity,
            or looking to elevate your self-care routine, we’re here to help you
            feel confident in your own skin every day.
          </p>
        </div>
      </section>
      <div className="ml-5 mr-5  grid grid-cols-2 gap-4 md:mx-20 md:grid-cols-4 lg:mx-20">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              src="/images/cosmetic-products-dreamtime-4.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="mx-5 mt-10 rounded-lg bg-blue-800 px-10 py-10 md:mx-20  md:px-32 md:py-20">
        <div className="">
          <h3 className="mr-10 font-mont text-xl font-bold text-white md:text-2xl lg:text-4xl">
            Perform Market Research to gain Insights into Industry Trends
          </h3>
          <div className="mt-5 flex items-center text-white dark:text-white">
            <svg
              className="me-1 size-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold dark:text-white">4.95</p>
            <span className="mx-1.5 size-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
            <a
              href="#"
              className="font-mediu text-sm underline hover:no-underline dark:text-white"
            >
              73 reviews
            </a>
          </div>
        </div>
        <hr className="mb-2 mt-2" />
        <div className="font-mont lg:flex text-white">
          <span className="flex uppercase">
            <p className="mr-2 text-xl md:text-3xl lg:text-5xl">12K+</p>
            <p className="mr-3 mt-1 text-sm md:text-[15px]">total projects completed</p>
          </span>
          <span className="flex uppercase">
            <p className="mr-2 text-xl md:text-3xl lg:text-5xl">300K+</p>
            <p className="mr-3 mt-1 text-sm md:text-[15px]">satisfied active customers</p>
          </span>
          <span className="flex uppercase">
            <p className="mr-2 text-xl md:text-3xl lg:text-5xl">4.95</p>
            <p className="mr-3 mt-1 text-sm md:text-[15px]">active clients rating</p>
          </span>
        </div>
      </section>
      <Members />
    </div>
  );
}
