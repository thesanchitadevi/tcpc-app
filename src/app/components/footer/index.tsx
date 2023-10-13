import moment from "moment";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <hr className=" border-gray-700" />
      <div className="container mx-auto py-10 ">
        <div className="grid grid-cols-2 divide-x divide-slate-700  tracking-[0.17rem] ">
          <div
            data-aos="fade-right"
            className="flex flex-col items-end mr-3 py-3 gap-2 text-xs [&>a]:text-slate-300 [&>a:hover]:text-white"
          >
            <Link href="https://www.facebook.com/tpc.tcd">Facebook</Link>
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col pl-4 py-3 gap-2 text-xs [&>a]:text-slate-300 [&>a:hover]:text-white"
          >
            <Link href={"#"}>Discord</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500 mt-4 md:mt-0">
          <p className="order-2 md:order-1 ">
            © {moment().format("yyyy")}. All rights reserved by{" "}
            <span className="text-white font-medium">TCPC</span>
          </p>
          <div className="order-1 md:order-2">
            <p className="text-sm  dark:text-gray-300">
              Developed by{" "}
              <span className="text-gray-300">
                <Link href="https://github.com/thesanchitadevi">
                  Sanchita Devi
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
