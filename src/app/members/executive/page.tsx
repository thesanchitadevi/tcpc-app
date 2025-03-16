"use client";
import Iconify from "@/app/components/iconify";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Executive {
  id: number;
  image: string;
  name: string;
  designation: string;
  batch: string;
  facebook: string;
  linkedIn: string;
}
const fetchData = async (): Promise<Executive[]> => {
  const response = await axios.get("/executive/executive.json");
  return response.data as Executive[];
};

const Executive: React.FC = () => {
  const [data, setData] = useState<Executive[]>([]);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);
  //   console.log(data);

  function sortMembers(data: any) {
    return data.sort((Link: any, b: any) => {
      return Link.position - b.position;
    });
  }
  const sortedMembers = sortMembers(data);
  console.log(sortedMembers);

  return (
    <>
      <h2 className="my-20 md:px-0 px-4 font-sans text-4xl text-center font-bold md:tracking-wide text-white  leading-none uppercase">
        Executive Committee
      </h2>
      <div className="container flex flex-col items-center justify-center mx-auto">
        {/* President */}
        <div className="m-8 text-center">
          <Image
            alt="Programming club"
            className="w-28 h-28 my-4 object-cover object-center  rounded-full mx-auto  hover:scale-105 transition-all duration-500 cursor-pointer"
            src="/executive/images/Md_Mizanur.jpg"
            width={"100"}
            height={"100"}
          />
          <h2 className="text-lg font-semibold leadi text-primary py-0.5">
            Md. Mizanur Rahman
          </h2>
          <p className="text-gray-300 text-sm font-light">President</p>
          {/* Social medias */}
          <div className="flex items-center space-x-3 mt-2 sm:justify-center">
            <Link
              target="_blank"
              href="https://www.facebook.com/itsrmizanur/"
              className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
            >
              <Iconify icon="la:facebook" className="w-8 h-8" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/itsrmizanur/"
              className="text-gray-600 transition-colors duration-300 hover:text-blue-100"
            >
              <Iconify icon="mingcute:linkedin-line" className="w-7 h-7" />
            </Link>
          </div>
        </div>

        {/*Vice President */}
        <div className="flex md:flex-row flex-col md:justify-between md:gap-5 ">
          <div className="m-8 text-center md:px-10 px-0">
            <Image
              alt="Programming club"
              className="w-28 h-28 my-4 object-cover object-center  rounded-full mx-auto  hover:scale-105 transition-all duration-500 cursor-pointer"
              src="/executive/images/Sanchita_Devi.jpg"
              width={"100"}
              height={"100"}
            />
            <h2 className="text-lg font-semibold leadi text-primary py-0.5">
              Sanchita Devi
            </h2>
            <p className="text-gray-300 text-sm font-light">Vice President</p>
            {/* Social medias */}
            <div className="flex items-center space-x-3 mt-2 sm:justify-center">
              <Link
                target="_blank"
                href="https://www.facebook.com/thesanchitadevi/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
              >
                <Iconify icon="la:facebook" className="w-8 h-8" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/thesanchitadevi/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-100"
              >
                <Iconify icon="mingcute:linkedin-line" className="w-7 h-7" />
              </Link>
            </div>
          </div>
          <div className="m-8 text-center md:px-10 px-0">
            <Image
              alt="Programming club"
              className="w-28 h-28 bg-white my-4 object-cover object-center  rounded-full mx-auto  hover:scale-105 transition-all duration-500 cursor-pointer"
              src="/executive/images/Tanvir_Mridha.png"
              width={"100"}
              height={"100"}
            />
            <h2 className="text-lg font-semibold leadi text-primary py-0.5">
              MD. SOBHAN MRIDHA
            </h2>
            <p className="text-gray-300 text-sm font-light">Secretary</p>
            {/* Social medias */}
            <div className="flex items-center space-x-3 mt-2 sm:justify-center">
              <Link
                target="_blank"
                href="https://www.facebook.com/tanvir.mridha.56481/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
              >
                <Iconify icon="la:facebook" className="w-8 h-8" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/sobhanmridha/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-100"
              >
                <Iconify icon="mingcute:linkedin-line" className="w-7 h-7" />
              </Link>
            </div>
          </div>
          {/* <div className="m-8 text-center md:px-10 px-0">
            <Image
              alt="Programming club"
              className="w-28 h-28 my-4 object-cover object-center  rounded-full mx-auto  hover:scale-105 transition-all duration-500 cursor-pointer"
              src=""
              width={"100"}
              height={"100"}
            />
            <h2 className="text-lg font-semibold leadi text-primary py-0.5">
              null
            </h2>
            <p className="text-gray-300 text-sm font-light">
              Vice President (Academic)
            </p>
          </div> */}
        </div>

        {/* Executives */}
        <div className="grid gap-x-5 md:grid-cols-5 mt-5">
          {sortedMembers?.map?.(
            (s: {
              id: number;
              image: string;
              name: string;
              designation: string;
              batch: string;
              facebook: string;
              linkedIn: string;
            }) => (
              <div key={s.id}>
                <div className="m-8 text-center">
                  {s.image ? (
                    <Image
                      alt="Programming club"
                      className="w-28 h-28 my-4 object-cover object-center  rounded-full mx-auto  hover:scale-105 transition-all duration-500 cursor-pointer"
                      src={s.image}
                      width={"100"}
                      height={"100"}
                    />
                  ) : (
                    <Image
                      alt="Programming club"
                      className="w-28 h-28 my-4 object-cover object-center  rounded-full mx-auto "
                      src="/user.jpg"
                      width={"100"}
                      height={"100"}
                    />
                  )}
                  <h2 className="text-md font-semibold leadi text-primary py-0.5 ">
                    {s.name}
                  </h2>
                  <p className="text-gray-300 text-sm font-light">
                    {s.designation}
                  </p>
                  {/* Social medias */}
                  {s.facebook && s.linkedIn ? (
                    <div>
                      <div className="flex items-center space-x-3 mt-2 sm:justify-center">
                        <Link
                          target="_blank"
                          href={s.facebook}
                          className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
                        >
                          <Iconify icon="la:facebook" className="w-8 h-8" />
                        </Link>
                        <Link
                          target="_blank"
                          href={s.linkedIn}
                          className="text-gray-600 transition-colors duration-300 hover:text-blue-100"
                        >
                          <Iconify
                            icon="mingcute:linkedin-line"
                            className="w-7 h-7"
                          />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Executive;
