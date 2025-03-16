// import Image from "next/image";
import Image from "next/image";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center max-w-2xl">
            <Image
              src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
              alt="Programming club"
              className="h-20 w-20"
              width={"100"}
              height={"10"}
            />
            <h1 className="mb-3 text-3xl font-bold text-center text-white">
              Under Maintenance
            </h1>
            <p className="text-center text-gray-600">
              The Page you are looking for is currently under maintenance and
              will be back soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
