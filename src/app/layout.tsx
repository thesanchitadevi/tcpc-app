import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// import { motion } from "framer-motion";
import Footer from "./components/footer";
import Header from "./components/header";
import StickyBanner from "./components/stickybanner";

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// };

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Programming Club | Tejgaon College",
  description: "Tejgaon College Programming Club",
  icons: {
    icon: {
      url: "/favicon.ico",
      sizes: "96X96",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background h-full `}>
        <Header />
        {/* <StickyBanner /> */}
        {/* {children} */}
        {/* <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className="w-full pt-10 px-8 h-full  text-slate-300"
        >
        </motion.main> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
