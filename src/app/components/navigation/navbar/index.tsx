import React from "react";
import Link from "next/link";
import Logo from "./logo";
import MenuItem from "../../menu";
import { usePathname } from "next/navigation";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="h-20 sticky top-0 z-10 bg-background backdrop-filter backdrop-blur-md border-b border-slate-800 bg-opacity-30 ">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden "
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>

            <ul className="hidden md:flex gap-x-6 text-slate-100 ">
              <li>
                <Link
                  className={`link ${pathname === "/about" ? "active" : ""}`}
                  href="/about"
                >
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
    </>
  );
};

export default Navbar;
