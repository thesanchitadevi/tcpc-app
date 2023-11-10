import React from "react";

const Touch: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto py-16 px-4  md:py-15 md:px-0">
        <div className="mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.700774576325!2d90.38704539837438!3d23.75804756509617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a6b5c8b851%3A0xbd30fd584b97cb22!2sTejgaon%20College!5e0!3m2!1sen!2sbd!4v1697209212943!5m2!1sen!2sbd"
                width="100%"
                height="400"
                allow-fullscreen=""
                loading="lazy"
                style={{
                  filter: ` contrast(1.6) opacity(0.8)`,
                }}
              ></iframe>
            </div>

            <div className="max-w-full  rounded-lg overflow-hidden md:text-end text-center pt-8">
              <h2 className="text-2xl font-semibold text-primary">
                Get In Touch
              </h2>

              <div className="py-6 ">
                <h3 className="text-lg font-medium text-gray-600">
                  Our Address
                </h3>
                <p className="mt-3 ">
                  Tejgaon College 16 Indira Rd <br />
                  Dhaka 1215
                </p>
              </div>
              <div className="border-t border-gray-800  py-6">
                <h3 className="text-lg font-medium text-gray-600">Contact</h3>
                <p className="mt-3 ">Email: programmingclub.tcd@gmail.com</p>
                <p className="mt-1 ">Phone: 01869-943362</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Touch;

// style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
