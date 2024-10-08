import React from "react";

const History: React.FC = () => {
  return (
    <>
      <div className="grid items-center gap-12 md:grid-cols-2 py-12">
        <div className="mt-12 md:mt-0">
          <span className="block mb-4 text-sm font-medium text-primary">
            History
          </span>
          <h2 className=" md:text-3xl font-bold text-dark text-white text-[40px]/[48px]">
            The Beginning
          </h2>
          <p className="mt-5 text-base text-white">
            On 6th February, 2019 the voyage of Tejgaon College Programming Club
            – TCPC, had commenced. The dream was to set a platform for Tejgaon
            College, CSE Dept. students to spread out the light of technology,
            and that dream was seen by former members of TCPC. It started with a
            mission and vision.
          </p>
        </div>
        <div className="mb-12 md:mb-0">
          <img
            src="https://i.ibb.co.com/7CTc2tn/photo.jpg"
            className="w-full rounded-lg shadow-lg dark:shadow-black/20"
            alt="Programming club"
          />
        </div>
      </div>
    </>
  );
};

export default History;
