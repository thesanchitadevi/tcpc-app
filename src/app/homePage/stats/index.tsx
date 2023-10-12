import React from "react";

const Stats: React.FC = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w md:max-w-full  md:px-24">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="text-center md:border-r border-slate-700">
          <h6 className="text-4xl font-bold  md:text-6xl">150+</h6>
          <p className="text-sm font-medium tracking-widest text-gray-600 uppercase md:text-base">
            CURRENT MEMBERS
          </p>
        </div>
        <div className="text-center md:border-r border-slate-700">
          <h6 className="text-4xl font-bold md:text-6xl">12</h6>
          <p className="text-sm font-medium tracking-widest text-gray-600 uppercase md:text-base">
            MENTORS
          </p>
        </div>
        <div className="text-center md:border-r border-slate-700">
          <h6 className="text-4xl font-bold md:text-6xl">50+</h6>
          <p className="text-sm font-medium tracking-widest text-gray-600 uppercase md:text-base">
            ALUMNI
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold md:text-6xl">24</h6>
          <p className="text-sm font-medium tracking-widest text-gray-600 uppercase md:text-base">
            CURRENT EXECUTIVES
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
