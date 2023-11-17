"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Executive {
  id: number;
  image: string;
  name: string;
  designation: string;
  batch: string;
  position: number;
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
    return data.sort((a: any, b: any) => {
      return a.position - b.position;
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
            src="/images/shakhayet_srabon.jpg"
            width={"100"}
            height={"100"}
          />
          <h2 className="text-lg font-semibold leadi text-primary py-0.5">
            Md. Shakayet Hossain
          </h2>
          <p className="text-gray-300 text-sm font-light">President</p>
        </div>

        {/*Vice President */}
        <div className="flex md:flex-row flex-col md:justify-between md:gap-5 ">
          <div className="m-8 text-center md:px-10 px-0">
            <Image
              alt="Programming club"
              className="w-28 h-28 my-4 object-cover object-center  rounded-full mx-auto  hover:scale-105 transition-all duration-500 cursor-pointer"
              src="/images/MehediHasanKhan.jpg"
              width={"100"}
              height={"100"}
            />
            <h2 className="text-lg font-semibold leadi text-primary py-0.5">
              Mehedi Hasan Khan
            </h2>
            <p className="text-gray-300 text-sm font-light">
              Vice President (Admin)
            </p>
          </div>
          <div className="m-8 text-center md:px-10 px-0">
            <Image
              alt="Programming club"
              className="w-28 h-28 my-4 object-cover object-center  rounded-full mx-auto  hover:scale-105 transition-all duration-500 cursor-pointer"
              src="/images/Md_Mahim.jpg"
              width={"100"}
              height={"100"}
            />
            <h2 className="text-lg font-semibold leadi text-primary py-0.5">
              Monir Hossen Mahim
            </h2>
            <p className="text-gray-300 text-sm font-light">
              Vice President (Academic)
            </p>
          </div>
        </div>

        {/* Secretary */}
        <div className="m-8 text-center">
          <Image
            alt="Programming club"
            className="w-28 h-28 my-4 object-cover object-center  rounded-full mx-auto  hover:scale-105 transition-all duration-500 cursor-pointer"
            src="/images/mizanur.jpg"
            width={"100"}
            height={"100"}
          />
          <h2 className="text-lg font-semibold leadi text-primary py-0.5">
            Md. Mizanur Rahman
          </h2>
          <p className="text-gray-300 text-sm font-light">Secretary</p>
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
                  {/* <span className="text-gray-400 text-xs">{s.batch} Batch</span> */}
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
