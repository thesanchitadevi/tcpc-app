import React from "react";

const Activities: React.FC = () => {
  return (
    <>
      <div className="px-4 my-20 mx-auto max-w-xl md:max-w-full  md:px-24 ">
        <h2 className="my-20 font-sans text-4xl text-center font-bold md:tracking-wide text-white  leading-none uppercase">
          Upcoming Events
        </h2>
        <img
          alt="gallery"
          className="h-50 w-50 rounded-lg mx-auto"
          src="/event.jpg"
        />
      </div>
    </>
  );
};

export default Activities;
