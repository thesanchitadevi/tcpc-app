import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navigation from "./components/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "TCPC",
  description: "Tejgaon College Programming Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-background h-full text-white overflow-y-hidden `}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
