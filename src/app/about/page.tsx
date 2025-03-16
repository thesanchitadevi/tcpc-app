"use client";
import React from "react";
import Mission from "./mission";
import History from "./history";
import Events from "./events";
import Community from "./community";

const About: React.FC = () => {
  return (
    <>
      <div className="container mx-auto md:max-w-6xl md:px-0 px-5">
        <h2 className="my-20 font-sans text-4xl text-center font-bold md:tracking-wide text-white  leading-none uppercase">
          About Us
        </h2>

        <History />
        <Community />
        <Events />
        <Mission />
      </div>
    </>
  );
};

export default About;
