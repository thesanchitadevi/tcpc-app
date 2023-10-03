"use client";
import React from "react";
import "./globals.css";
// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navigation from "./components/navigation";
import { motion } from "framer-motion";
import Footer from "./components/footer";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

// export const metadata: Metadata = {
//   title: "TCPC",
//   description: "Tejgaon College Programming Club",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background h-full  `}>
        <Navigation />
        {/* {children} */}
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className="
                     w-full pt-10
                    px-8 
                     h-full
                "
        >
          {children}
        </motion.main>
        <Footer />
      </body>
    </html>
  );
}
