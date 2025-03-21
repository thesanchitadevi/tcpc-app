"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface Events {
  id: number;
  image: string;
  title: string;
  date: string;
  details: string;
  //   events: any;
}
const fetchData = async (): Promise<Events[]> => {
  const response = await axios.get("/events/events.json");
  return response.data as Events[];
};

const Events: React.FC = () => {
  const [data, setData] = useState<Events[]>([]);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);
  //   console.log(data);

  return (
    <>
      <div className="px-4 my-20 mx-auto max-w-6xl md:px-0 ">
        <h2 className="my-20 font-sans text-4xl text-center font-bold md:tracking-wide text-white  leading-none uppercase">
          Featured Events
        </h2>
        <div>
          {data?.map?.(
            (
              s: {
                id: number;
                image: string;
                date: string;
                title: string;
                details: string;
              },
              index
            ) => (
              <div
                key={s.id}
                className={`flex flex-col gap-10 lg:mb-16 mb-8 overflow-hidden rounded-md shadow-sm lg:flex-row justify-center items-center lg:items-start md:px-10 px-5 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={s.image}
                    alt="Programming Club"
                    className="h-80 transition duration-500 ease-in-out hover:scale-110 rounded-lg cursor-pointer"
                    width="500"
                    height="150"
                  />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">
                    {s.title}
                  </h3>
                  <p className="text-sm text-primary pt-2">
                    <span className="font-semibold">Event Date:</span> {s.date}
                  </p>
                  <p className="mt-6 text-gray-200">{s.details}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
