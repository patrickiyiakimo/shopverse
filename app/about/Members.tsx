import Image from "next/image";
import React from "react";

const Members: React.FC = () => {
  return (
    <div>
      <div className="pt-40 text-center font-mont text-xl font-semibold md:text-2xl lg:text-4xl">
        <h3>We have 50+ Active Dedicated Members for Helping the Customers</h3>
        <p className="px-20 py-1 text-xl font-normal lg:px-40">
          Globally engage cross-media leadership skills before cross-media
          innovation develop standardised platforms without robust applications.
          Conveniently go forward collaboration and idea-sharing.
        </p>
      </div>
      <div className="mt-10 grid lg:grid-cols-2">
        <div className="px-5 lg:pl-10">
          <div className="grid gap-4">
            <div>
              <Image
                width={700}
                height={700}
                className="h-auto max-w-full rounded-lg"
                src="/images/sunblock-lotion-dreamtime-14.webp"
                alt="Featured"
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <Image
                  width={200}
                  height={200}
                  className="h-auto max-w-full rounded-lg"
                  src="/images/white-lotion-bottle-dreamtime-7.webp"
                  alt="Gallery 1"
                />
              </div>
              <div>
                <Image
                  width={200}
                  height={200}
                  className="h-auto max-w-full rounded-lg"
                  src="/images/white-lotion-bottle-dreamtime-7.webp"
                  alt="Gallery 2"
                />
              </div>
              <div>
                <Image
                  width={200}
                  height={200}
                  className="h-auto max-w-full rounded-lg"
                  src="/images/white-lotion-bottle-dreamtime-8.webp"
                  alt="Gallery 3"
                />
              </div>
              <div>
                <Image
                  width={200}
                  height={200}
                  className="h-auto max-w-full rounded-lg"
                  src="/images/white-lotion-bottle-dreamtime-7.webp"
                  alt="Gallery 4"
                />
              </div>
              <div>
                <Image
                  width={200}
                  height={200}
                  className="h-auto max-w-full rounded-lg"
                  src="/images/white-lotion-bottle-dreamtime-8.webp"
                  alt="Gallery 5"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="ml-10 mt-10 font-mont text-2xl font-semibold md:text-3xl lg:ml-20 lg:text-5xl">
            We Provide Creative Solutions
          </h1>
          <p className="ml-10 py-1 font-mont font-normal lg:mx-20">
            Globally engage cross-media leadership skills before cross-media
            innovation develop standardised platforms without robust
            applications. Conveniently go forward collaboration and
            idea-sharing.
          </p>
          <div className="mt-10 flex flex-col items-center rounded-lg border border-gray-200 bg-white px-10 shadow dark:border-gray-700 dark:bg-gray-800 md:max-w-xl md:flex-row lg:ml-20">
            <Image
              width={400}
              height={400}
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/images/bottles-lotion-dreamtime-5.webp"
              alt="Creative Solutions"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
