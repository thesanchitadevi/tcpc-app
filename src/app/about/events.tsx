import React from "react";

const Events: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap  items-center justify-between py-12">
        <div className="w-full md:w-1/2">
          <div className="mt-10 md:mt-0">
            <span className="block mb-4 text-sm font-medium text-primary">
              Events and Activities
            </span>
            <h2 className="mb-5 md:text-3xl font-bold text-dark text-white text-[40px]/[48px]">
              Our Success
            </h2>
            <p className="mb-5 text-base text-white">
              Tejgaon College programming Club (TCPC) has devoted to serve
              TCPC’s students with full of its resources and its interests. They
              have successfully completed many events, however, among them
              Programming Combat, featuring programming contest brought its
              biggest success and appreciation. Being a TCPC member, on the
              other hand, means privileged with more than just adequate
              facilities: participating in dissimilar workshops.
            </p>
          </div>
        </div>
        <div className="flex w-full  md:w-1/2 flex-wrap ">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="Programming club"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co.com/4Rg5Lkr/photo-3.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="Programming club"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co.com/GxWR2Pz/photo-2.jpg"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="Programming club"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co.com/pfpXVbj/photo-10.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
