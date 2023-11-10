"use client";
import React from "react";
import Mission from "./mission";
import History from "./history";
import Events from "./events";

const About: React.FC = () => {
  return (
    <>
      <div className="container mx-auto md:max-w-6xl md:px-0 px-5">
        <h2 className="my-20 font-sans text-4xl text-center font-bold md:tracking-wide text-white  leading-none uppercase">
          About Us
        </h2>

        <History />
        <div className="flex md:flex-wrap flex-wrap-reverse items-center justify-between -mx-4">
          <div className="w-full px-4 md:w-6/12">
            <div className="flex items-center ">
              <div className="w-full md:px-3 px-4 md:w-1/2">
                <div className="md:py-3 py-4">
                  <img
                    src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                    alt="Programming club"
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="md:py-3 py-4">
                  <img
                    src="https://i.ibb.co/rfHFq15/image-2.jpg"
                    alt="Programming club"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full md:px-3 px-4 md:w-1/2">
                <div className="relative -z-10 my-4">
                  <img
                    src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                    alt="Programming club"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="mt-10 md:mt-0">
              <span className="block mb-4 text-sm font-medium text-primary">
                TCPC
              </span>
              <h2 className="mb-5 md:text-3xl font-bold text-dark text-white text-[40px]/[48px]">
                The Community
              </h2>
              <p className="mb-5 text-base text-white">
                In continuation, TCPC is now one of the biggest and most
                successful clubs in Tejgaon College by its different activities
                over the years ever since the club was .
              </p>
            </div>
          </div>
        </div>
        <Events />
        <Mission />
      </div>
    </>
  );
};

export default About;
