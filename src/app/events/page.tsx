import React from "react";
import Upcoming from "./upcoming";
import Image from "next/image";

const Events: React.FC = () => {
  return (
    <>
      <div className="px-4 my-20 mx-auto max-w-6xl md:px-0 ">
        <Upcoming />
        <h2 className="my-20 font-sans text-4xl text-center font-bold md:tracking-wide text-white  leading-none uppercase">
          Featured Events
        </h2>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm md:flex-row">
          <Image
            src="/images/hero.jpg"
            alt="Programming Club"
            className="h-80 "
            width="500"
            height="150"
          />
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <h3 className="text-3xl font-bold text-primary">
              Programming Combat 2021
            </h3>
            <p className="my-6 text-gray-200">
              Programming Combat is one of the biggest and most awaited events
              organized successfully by Tejgaon College Programming Club. This
              occasion is for both the students and faculties of Tejgaon College
              which brings the institutions together with its celebration by
              students of different disciplines, the honorable Vice-Chancellor
              of National University, Faculty members, and Administrative
              officers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
