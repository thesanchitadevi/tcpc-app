"use client";
import React from "react";
import HomeAbout from "./about";
import WhyJoin from "./why";
import Stats from "./stats";
import Touch from "./touch";

const HomePage: React.FC = () => {
  return (
    <>
      <section className=" text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10  md:max-w-3xl">
          <h1 className="md:text-5xl font-bold md:leadi  tracking-wider text-3xl">
            TEJGAON COLLEGE <span>PROGRAMMING CLUB</span>
          </h1>
          <p className=" mt-8 mb-12 text-lg">
            Tejgaon College Programming Club is a student group of the college.
            We are here to help you in your programming journey and also provide
            a platform for members to collaborate, learn, and improve their
            coding skills through workshops, coding challenges, projects, and
            discussions.
          </p>
        </div>
        <div>
          <HomeAbout />
          <WhyJoin />
          <Stats />
          <Touch />
        </div>
      </section>
    </>
  );
};

export default HomePage;
