import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";

const AboutUs = () => {
  return (
    //change the photo kechalk
    //ena think about the website name
    <div className="bg-[#F5F5DC]">
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center p-6 overflow-hidden bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center laptop:w-1/2">
            <img
              src="trending1.jpg"
              alt="Massage Therapy"
              className="w-64 h-auto rounded-lg"
            />
          </div>

          <div className="mt-6 text-center laptop:w-1/2 laptop:mt-0 laptop:ml-12 laptop:text-left">
            <h2 className="mb-4 text-3xl font-semibold">Contact Us</h2>
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white bg-black rounded-full">
                  <FaPhone />
                </div>
                <p className="text-lg">+251-910-460-568</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white bg-black rounded-full">
                  <FaPhone />
                </div>
                <p className="text-lg">+251-954-988-402</p>
              </div>

              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white bg-black rounded-full">
                  <TiWorld />
                </div>
                <p className="text-lg">www.ourWebsite.com</p>
              </div>

              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white bg-black rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2a6 6 0 016 6c0 3.48-5.25 11.9-5.68 12.54a.5.5 0 01-.64 0C11.25 19.9 6 11.48 6 8a6 6 0 016-6z"
                    />
                  </svg>
                </div>
                <p className="text-lg">CMC, Addis Ababa</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://www.reallygreatsite.com"
                className="px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800"
              >
                www.OurWebsite.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
