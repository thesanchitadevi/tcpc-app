"use client";
import Link from "next/link";
import React from "react";
import Iconify from "../components/iconify";

const Contact: React.FC = () => {
  return (
    <>
      <div className="container grid gap-8  py-12 mx-auto md:max-w-6xl md:grid-cols-2">
        <div>
          <p className="font-medium text-secondary dark:text-blue-400">
            Contact us
          </p>

          <h1 className="mt-2 text-2xl font-semibold  md:text-3xl text-white">
            We’d love to hear from you
          </h1>

          <p className="mt-3 text-gray-400">
            Our friendly team is always here to chat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 ">
          <div className="p-4 rounded-lg  md:p-6 ">
            <span className="inline-block p-3 text-primary rounded-lg bg-gray-800 ">
              <Iconify icon="ic:outline-email" className="w-5 h-5" />
            </span>

            <h2 className="mt-4 text-base font-medium text-white">
              Chat to members
            </h2>
            <Link
              href="mail:programmingclub.tcd@gmail.com"
              className="mt-2 text-sm text-primary "
            >
              programmingclub.tcd@gmail.com
            </Link>
          </div>

          <div className="p-4 rounded-lg  md:p-6 ">
            <span className="inline-block p-3 text-primary rounded-lg bg-gray-800">
              <Iconify icon="mi:call" className="w-5 h-5" />
            </span>

            <h2 className="mt-4 text-base font-medium text-white">Call us</h2>

            <p className="mt-2 text-sm text-primary ">(+88) 01869-943362</p>
          </div>

          <div className="p-4 rounded-lg  md:p-6 ">
            <span className="inline-block p-3 text-primary rounded-lg bg-gray-800">
              <Iconify icon="basil:facebook-outline" className="w-5 h-5" />
            </span>

            <h2 className="mt-4 text-base font-medium text-white">Follow us</h2>

            <Link
              href="https://www.facebook.com/tpc.tcd"
              className="mt-2 text-sm text-primary "
              target="_blank"
            >
              Programming Club, Tejgaon College
            </Link>
          </div>

          <div className="p-4 rounded-lg  md:p-6 ">
            <span className="inline-block p-3 text-primary rounded-lg bg-gray-800">
              <Iconify icon="mingcute:location-line" className="w-5 h-5" />
            </span>

            <h2 className="mt-4 text-base font-medium text-white">Visit us</h2>

            <p className="mt-2 text-sm text-primary ">
              Tejgaon Colllege, Dhaka 1215, Dhaka Division, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
