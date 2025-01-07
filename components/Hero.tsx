import React from "react";

export default function Hero() {
  return (
    <div className="">
      <section className="flex min-h-screen items-center justify-center bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] py-28 dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center hover:transition lg:py-16">
          <a
            href="#"
            className="mb-7 inline-flex items-center justify-between rounded-full bg-blue-100 p-1 pe-4 text-sm text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
          >
            <span className="me-3 rounded-full bg-blue-600 px-4 py-1.5 text-xs text-white">
              New
            </span>
            <span className="text-sm font-medium">Glow In Style</span>
            <svg
              className="ms-2 size-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Discover Your Style Statement with ShopVerse
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-900 dark:text-gray-200 sm:px-16 lg:px-48 lg:text-xl">
            Explore luxury and sophistication with ShopVerse's exclusive
            fashion-forward collection
          </p>
          <form className="mx-auto w-full max-w-md">
            <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email sign-up
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 rtl:inset-x-0">
                <svg
                  className="size-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="default-email"
                className="dark:placeholder:text-gray-400 block w-full rounded-lg border border-gray-300 bg-white p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter your email here..."
                required
              />
              <button
                type="submit"
                className="absolute bottom-2.5 end-2.5 rounded-lg px-4 py-2 text-sm font-medium bg-blue-700 text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="absolute left-0 top-0 z-0 size-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900"></div>
      </section>
    </div>
  );
}
