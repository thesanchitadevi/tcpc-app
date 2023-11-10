import Image from "next/image";
import React from "react";

const HomeAbout: React.FC = () => {
  return (
    <>
      <div className="container flex flex-col mx-auto md:flex-row  md:my-20">
        <div className="w-full md:w-2/4 px-5 ">
          <Image
            src="/images/hero.jpg"
            alt="Programming club"
            width={500}
            height={500}
            className="rounded-md md:absolute md:object-cover md:object-right opacity-70  "
          />
        </div>
        <div className="flex flex-col w-full md:w-2/4  md:py-12 p-8 md:text-end gap-4">
          <p className="text-primary">About</p>
          <h2 className="text-2xl font-semibold leadi">
            TEJGAON COLLEGE <br />
            PROGRAMMING CLUB
          </h2>
          <p className="mt-4 mb-8 text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected you
            need to be sure there is not anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.It uses a dictionary of over 200 Latin
            words, combined with a handfulof model sentence structures, to
            generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
