"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface Events {
  id: number;
  image: string;
  title: string;
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
            (s: {
              id: number;
              image: string;
              title: string;
              details: string;
            }) => (
              <div
                key={s.id}
                className="flex flex-col overflow-hidden rounded-md shadow-sm md:flex-row"
              >
                <Image
                  src={s.image}
                  alt="Programming Club"
                  className="h-80 "
                  width="500"
                  height="150"
                />
                <div className="flex flex-col justify-center flex-1 p-6 ">
                  <h3 className="text-3xl font-bold text-primary">{s.title}</h3>
                  <p className="my-6 text-gray-200">{s.details}</p>
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
