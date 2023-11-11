import React from "react";

const Upcoming: React.FC = () => {
  return (
    <>
      <h2 className="my-20 font-sans text-4xl text-center font-bold md:tracking-wide text-white  leading-none uppercase">
        Upcoming Events
      </h2>
      <img
        alt="Programming club"
        className="h-50 w-50 rounded-lg mx-auto"
        src="/event.jpg"
      />
    </>
  );
};

export default Upcoming;
