import React from "react";

const History: React.FC = () => {
  return (
    <>
      <div className="grid items-center gap-12 md:grid-cols-2 py-12">
        <div className="mt-12 md:mt-0">
          <span className="block mb-4 text-sm font-medium text-primary">
            History
          </span>
          <h2 className=" md:text-3xl font-bold text-dark text-white text-[40px]/[48px]">
            The Beginning
          </h2>
          <p className="mt-5 text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna
            quis elit efficitur consequat. Mauris eleifend velit a pretium
            iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
            malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat
            vel.
          </p>
        </div>
        <div className="mb-12 md:mb-0">
          <img
            src="https://tecdn.b-cdn.net/img/new/ecommerce/horizontal/048.jpg"
            className="w-full rounded-lg shadow-lg dark:shadow-black/20"
            alt="Programming club"
          />
        </div>
      </div>
    </>
  );
};

export default History;
