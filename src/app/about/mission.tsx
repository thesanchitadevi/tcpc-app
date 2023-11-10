import React from "react";

const Mission: React.FC = () => {
  return (
    <>
      <div className="grid  md:grid-cols-2 items-center gap-12 my-12 ">
        <div className="mt-12 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
            alt="Programming club"
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div className=" mt-10 md:mt-0">
          <h2 className=" md:text-3xl font-bold text-dark text-white text-[40px]/[48px]">
            Our Mission
          </h2>
          <p className="mt-5 text-base text-white">
            Tejgaon College Programming Club started with a mission committed to
            its members to introduce them to the ever-changing information and
            technology world. Tejgaon College Programming Club believes one
            always must stay rationalized if he/she wants to subsist in today’s
            competitive technology driven world. Tejgaon College Programming
            Club wants to introduce its members to the impending challenges and
            help them to face it with our unity and communications.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
