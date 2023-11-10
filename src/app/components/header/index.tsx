"use client";
import React, { useState } from "react";
import Logo from "./logo";
import MenuItem from "../menu";
import Link from "next/link";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-10 bg-background backdrop-filter backdrop-blur-md border-b border-slate-800 bg-opacity-30">
      <div className="justify-between px-3 mx-auto md:max-w-6xl md:items-center md:flex md:px-0">
        <div>
          <div className="flex items-center justify-between py-2 md:py-2 md:block">
            <Logo />
            <div className="md:hidden">
              <button
                className="p-2 text-gray-300 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0  text-gray-300 ">
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <button>
                  <MenuItem />
                </button>
              </li>
              <li>
                <Link href="/activities">
                  <p>Events</p>
                </Link>
              </li>
              <li>
                <Link href="/achievements">
                  <p>Achievements</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
