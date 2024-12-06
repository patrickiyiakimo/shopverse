import React from "react";

export default function Members() {
  return (
    <div>
      <div className="pt-40 text-center font-mont text-xl font-semibold md:text-2xl lg:text-4xl">
        <h3>We have 50+ Active Dedicated Members for Helping the Customers</h3>
        <p className="px-20 py-1 text-xl font-normal">
          Globally engage cross-media leadership skills before cross-media
          innovation develop standardised platforms without robust applications.
          Conveniently go forward collaboration and idea-sharing.
        </p>
      </div>
      <div className="mt-10 grid lg:grid-cols-2">
        <div className="pl-5 pr-5 lg:pl-10">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="ml-10 text-2xl  lg:ml-20 mt-10 font-mont md:text-3xl lg:text-5xl font-semibold">
            We Provide Creative Solutions
          </h1>
          <p className="text-normal ml-10  lg:mx-20 py-1 font-mont font-normal">
            Globally engage cross-media leadership skills before cross-media
            innovation develop standardised platforms without robust
            applications. Conveniently go forward collaboration and
            idea-sharing.
          </p>
          <a
            href="#"
            className="px-10 lg:ml-20 mt-10 flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
          >
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/images/bottles-lotion-dreamtime-5.webp"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-900 dark:text-white">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
