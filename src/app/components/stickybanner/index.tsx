"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const StickyBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const today = new Date();
    const startDate = new Date(2024, 0, 14); // Month is 0-indexed
    const endDate = new Date(2024, 0, 23);

    // Show the banner if the current date is between start and end dates
    setShowBanner(today >= startDate && today <= endDate);
  }, []);

  return (
    <>
      <div
        className={`relative isolate  gap-x-6 overflow-hidden bg-white md:px-6 py-2.5 px-3.5  top-0  
         ${showBanner ? "" : "hidden"}`}
      >
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#FFDE77] to-[#adfc89] opacity-30"></div>
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#FFDE77] to-[#adfc89] opacity-30"></div>
        </div>
        <div className="md:flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900 md:mb-0 mb-2">
            <strong className="font-semibold">
              Workshop on Basic C Programming
            </strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            Registration date from Jan 14 – Jan 23
          </p>
          <Link
            href="https://forms.gle/1wAqvCFGHNYHDTN16"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 "
            target="_blank"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StickyBanner;
