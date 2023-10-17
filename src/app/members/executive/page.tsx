import Image from "next/image";
import React from "react";

const Executive: React.FC = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center md:p-4 mx-auto space-y-8 p-10">
        <h1 className="text-2xl font-bold leadi text-center text-secondary">
          Executive Committee
        </h1>

        <div className="flex flex-row flex-wrap-reverse justify-center">
          <div className="flex flex-col justify-center m-8 text-center">
            <Image
              alt="_"
              className="self-center w-24 h-24 mb-4 bg-center bg-cover rounded-full "
              src="/brad.jpeg"
              width={"100"}
              height={"100"}
            />
            <p className="text-xl font-semibold leadi text-primary">
              Leroy Jenkins
            </p>
            <p className="text-gray-400">Visual Designer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Executive;
