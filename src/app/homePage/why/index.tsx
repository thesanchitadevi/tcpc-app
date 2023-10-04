import Image from "next/image";
import React from "react";

const WhyJoin: React.FC = () => {
  return (
    <>
      <section className="px-6 py-10 md:py-20 md:px-10  ">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent md:text-3xl text-4xl">
            Build a Website That Your Customers Love
          </h2>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              <Image src="/icon.svg" alt="" width={20} height={20} />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              TREE AND SHRUB PRUNING
            </h1>
            <p className="px-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure
              inventore amet modi accusantium vero perspiciatis, incidunt dicta
              sed aspernatur!
            </p>
          </div>
          <div className="rounded-xl p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              <Image src="/icon1.svg" alt="" width={25} height={25} />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              TREE AND SHRUB PRUNING
            </h1>
            <p className="px-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure
              inventore amet modi accusantium vero perspiciatis, incidunt dicta
              sed aspernatur!
            </p>
          </div>
          <div className="rounded-xl p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              <Image src="/icon2.svg" alt="" width={25} height={25} />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              TREE AND SHRUB PRUNING
            </h1>
            <p className="px-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure
              inventore amet modi accusantium vero perspiciatis, incidunt dicta
              sed aspernatur!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyJoin;
