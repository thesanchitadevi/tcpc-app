import Image from "next/image";
import React from "react";

const HomeAbout: React.FC = () => {
  return (
    <>
      <div className="container flex flex-col mx-auto md:flex-row  md:my-20">
        <div className="w-full md:w-2/4 ">
          <Image
            src="/images/hero.jpg"
            alt="Programming club"
            width={500}
            height={500}
            className="rounded-md md:absolute md:object-cover md:object-right opacity-70  "
          />
        </div>
        <div className="flex flex-col w-full md:w-2/4  md:py-12  md:text-end gap-4">
          <p className="text-primary pt-5 md:pt-0">About</p>
          <h2 className="text-2xl font-semibold leadi">
            TEJGAON COLLEGE <br />
            PROGRAMMING CLUB
          </h2>
          <p className="mt-4 mb-8 text-sm">
            The journey of Tejgaon College Programming Club (TCPC) started on
            6th February 2019 with former students of CSE Dept. and also founder
            of the club. Realizing the key importance to adapt along with
            upgrading technology, founding members introduced this club with its
            mission and vision all set. The goal was to build up a strong
            community of Tejgaon College CSE Dept. students by offering them a
            potential platform that deals with technology and its advancement.
            They have organized intra club events, nevertheless, among them,
            events like Code Bash 1.0, Programming Combat brought its biggest
            achievement and appreciation.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
