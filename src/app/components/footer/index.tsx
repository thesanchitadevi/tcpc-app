import moment from "moment";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <hr className=" border-gray-700" />
      <div className="container mx-auto py-10 max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start text-sm text-gray-500 mt-4 md:mt-0">
          <p className="order-2 md:order-1 ">
            © {moment().format("yyyy")}. All rights reserved by{" "}
            <Link
              href="https://www.facebook.com/tpc.tcd"
              target="_blank"
              className="text-white font-medium"
            >
              Programming Club, Tejgaon College
            </Link>
          </p>

          <p className="text-sm  text-gray-500 md:py-0 py-2">
            Developed by <span className="text-gray-300">Development Team</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
