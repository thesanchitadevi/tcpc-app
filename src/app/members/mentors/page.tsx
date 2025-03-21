"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Mentors {
  id: number;
  image: string;
  name: string;
  designation: string;
  //   founders: any;
}
const fetchData = async (): Promise<Mentors[]> => {
  const response = await axios.get("/mentors/founders.json");
  return response.data as Mentors[];
};

const Mentors: React.FC = () => {
  const [data, setData] = useState<Mentors[]>([]);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="px-4 my-20 mx-auto max-w-xl md:max-w-full  md:px-24 ">
        <h2 className="my-20 font-sans text-4xl text-center font-bold md:tracking-wide text-white  leading-none uppercase">
          Advisors & Mentors
        </h2>

        {/* Chief Advisor */}
        <>
          <div className="mb-10">
            <Image
              alt="Programming club"
              className="w-32 h-32 mx-auto rounded-lg object-cover object-center  mx-auto  hover:scale-105 transition-all duration-500 cursor-pointer"
              src="/advisors/Professor Shamima Yesmin.jpeg"
              width={"100"}
              height={"100"}
            />

            <div className="flex flex-col items-center sm:text-center py-5">
              <p className="text-lg font-bold text-primary">
                Professor Shamima Yesmin
              </p>
              <p className="mb-5 text-sm text-gray-400 text-center">
                Principal, Tejgaon College <br />
                Chief Advisor of Programming Club, Tejgaon College
              </p>
            </div>
          </div>
        </>

        {/* Advisor */}
        <div className="flex md:w-2/3 md:mx-auto md:flex-row flex-col md:justify-between md:gap-5 ">
          <div className="mb-10">
            <Image
              className="w-32 h-32 mx-auto rounded-lg object-cover object-center  mx-auto  hover:scale-105 transition-all duration-500 cursor-pointer"
              src="/user.jpg"
              alt="Programming club"
              width={"50"}
              height={"50"}
            />
            <div className="flex flex-col items-center sm:text-center py-5">
              <p className="text-lg font-bold text-primary">
                Professor Md. Aminul Haque
              </p>
              <p className="mb-5 text-sm text-gray-400 text-center">
                Professor & Chairman, CSE Dept, Tejgaon College <br />
                Advisor of Programming Club, Tejgaon College
              </p>
            </div>
          </div>
          <div className="mb-10">
            <Image
              className="w-32 h-32 mx-auto rounded-lg object-cover object-center mx-auto hover:scale-105 transition-all duration-500 cursor-pointer"
              src="/user.jpg"
              alt="Programming club"
              width={"50"}
              height={"50"}
            />
            <div className="flex flex-col items-center sm:text-center py-5">
              <p className="text-lg font-bold text-primary">
                Professor Md. Abdul Hadi
              </p>
              <p className="mb-5 text-sm text-gray-400 text-center">
                Professor, CSE Dept, Tejgaon College <br />
                Advisor of Programming Club, Tejgaon College
              </p>
            </div>
          </div>
        </div>

        {/* MENTORS */}
        <div className="mx-auto md:mb-20 mb-10 text-center">
          <p className="inline-block px-3  mb-4 text-xs font-semibold tracking-wider text-secondary uppercase rounded-full bg-teal-accent-400">
            TEJGAON COLLEGE <br />
            PROGRAMMING CLUB MENTORS
          </p>
          <p className="text-base text-gray-300 md:text-md">
            Creating a community of mentors and friends to provide the best
            resources for students to explore computer science and software
            engineering.
          </p>
        </div>

        <div className="grid gap-10 mx-auto grid-cols-1 md:grid-cols-5 ">
          {data?.map?.(
            (s: {
              id: number;
              image: string;
              name: string;
              designation: string;
            }) => (
              <div key={s.id}>
                <div className="relative mb-4 rounded shadow ">
                  {s.image ? (
                    <Image
                      alt="Programming club"
                      className="w-32 h-32 mx-auto rounded-lg object-cover object-center  mx-auto  hover:scale-105 transition-all duration-500 cursor-pointer"
                      src={s.image}
                      width={"100"}
                      height={"100"}
                    />
                  ) : (
                    <div className="overflow-hidden rounded-md">
                      <Image
                        className="w-full h-50 rounded hover:scale-125 transition-all duration-500 cursor-pointer"
                        src="/user.jpg"
                        alt="Programming club"
                        width={"50"}
                        height={"50"}
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center sm:text-center py-5">
                  <p className="text-lg font-bold text-primary">{s.name}</p>
                  <p className="mb-5 text-sm text-gray-400">{s.designation}</p>
                  {/* <div className="flex items-center space-x-3 sm:justify-center">
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <Iconify icon="prime:facebook" className="w-10 h-10" />
                    </a>
                  </div> */}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Mentors;
