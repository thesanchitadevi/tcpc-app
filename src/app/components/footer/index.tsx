import moment from "moment";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <hr className=" border-gray-700" />
      <div className="container mx-auto py-10 ">
        <div className="flex flex-col items-center text-center">
          <div className="container mx-auto flex flex-col items-center px-4 py-5 text-center md:px-10  md:max-w-sm">
            <h1 className="md:text-2xl font-medium md:leadi tracking-wide text-xl text-white">
              TEJGAON COLLEGE <span>PROGRAMMING CLUB</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between ">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            © {moment().format("yyyy")}. All rights reserved by{" "}
            <span className="text-gray-300">
              <Link href="https://github.com/thesanchitadevi">
                Sanchita Devi
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
