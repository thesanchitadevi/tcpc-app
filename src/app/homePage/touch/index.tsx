import React from "react";

const Touch: React.FC = () => {
  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        <div className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <div className="w-full shrink-0 grow-0 basis-auto md:flex">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7032539251995!2d90.38606907429295!3d23.75795918848801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a6b5c8b851%3A0xbd30fd584b97cb22!2sTejgaon%20College!5e0!3m2!1sen!2sbd!4v1697134080496!5m2!1sen!2sbd"
                  width="100%"
                  height="480"
                  loading="lazy"
                  frame-border="0"
                  title="map"
                  //   className="filter: grayscale(1) contrast(1.2) opacity(0.4);"
                />
              </div>
              <div>Get in touch</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Touch;
