"use client";
import axios from "axios";
import Iconify from "../../components/iconify";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Founders {
  id: number;
  image: string;
  name: string;
  designation: string;
  //   founders: any;
}
const fetchData = async (): Promise<Founders[]> => {
  const response = await axios.get("/founders/founders.json");
  return response.data as Founders[];
};

const Founders: React.FC = () => {
  const [data, setData] = useState<Founders[]>([]);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);
  //   console.log(data);

  return (
    <>
      <div className="px-4 my-20 mx-auto max-w-xl md:max-w-full  md:px-24 ">
        <div className="mx-auto mb-10 text-center">
          <p className="inline-block px-3  mb-4 text-xs font-semibold tracking-wider text-secondary uppercase rounded-full bg-teal-accent-400">
            TEJGAON COLLEGE <br />
            PROGRAMMING CLUB MEMBERS
          </p>
          <p className="text-base text-gray-500 md:text-md">
            Creating a community of mentors and friends and partnering with
            companies to provide the best resources for students to explore
            computer science and software engineering.
          </p>
        </div>
        <div className="grid gap-10 mx-auto grid-cols-2 md:grid-cols-4 ">
          {data?.map?.(
            (s: {
              id: number;
              image: string;
              name: string;
              designation: string;
            }) => (
              <div key={s.id}>
                {s.image ? (
                  <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                    <Image
                      className="absolute object-cover w-full h-full rounded transition-all hover:scale-110"
                      src={s.image}
                      alt="Person"
                      width={"80"}
                      height={"100"}
                    />
                  </div>
                ) : (
                  "____"
                )}
                <div className="flex flex-col sm:text-center">
                  <p className="text-lg font-bold text-primary">{s.name}</p>
                  <p className="mb-5 text-sm text-gray-400">{s.designation}</p>
                  <div className="flex items-center space-x-3 sm:justify-center">
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <Iconify icon="prime:facebook" className="w-10 h-10" />
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Founders;
