import React from "react";
import { FiDownload, FiClock } from "react-icons/fi";
import { BiDollarCircle } from "react-icons/bi";
import Image from "next/image";

import dowbloadIcon from "@/public/assets/download.svg";
import dollarIcon from "@/public/assets/dollar.svg";
import speedIcon from "@/public/assets/speed.svg";
import cupIcon from "@/public/assets/cup.svg";

const Features = () => {
  return (
    <div className=" py-10 ">
      <div className="">
        <p className="text-center text-sm text-gray-500 uppercase font-medium ">
          what makes us different
        </p>
        <h2 className="text-5xl font-semibold text-center text-gray-800 dark:text-gray-300 mt-3 tracking-wider">
          Features
        </h2>
        <div className="flex justify-center  px-6 md:px-0">
          <div className="flex flex-wrap gap-6 md:justify-center md:gap-y-16 md:gap-x-16 mt-14">
            {/* feature -1 */}
            <div className="flex gap-4 md:flex-row">
              <Image
                src={dowbloadIcon}
                width={50}
                height={50}
                className="w-5 h-5 mt-1"
                alt="download icon"
              />
              <div className="">
                <h3 className="text font-medium text-gray-800 dark:text-gray-200">
                  No Download Limit
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-56 md:max-w-60 text-sm mt-1">
                  Download as many videos as you want.
                </p>
              </div>
            </div>
            {/* feature -2 */}
            <div className="flex  gap-4 md:flex-row">
              <Image
                src={dollarIcon}
                width={50}
                height={50}
                className="w-5 h-5 mt-1"
                alt="download icon"
              />
              <div className="">
                <h3 className="text font-medium text-gray-800 dark:text-gray-200">
                  Download at no cost
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-56 md:max-w-60 text-sm mt-1">
                  We offer free downloads for all videos.
                </p>
              </div>
            </div>
            {/* feature -3 */}
            <div className="flex  gap-4 md:flex-row">
              <Image
                src={speedIcon}
                width={50}
                height={50}
                className="w-5 h-5 mt-1"
                alt="download icon"
              />
              <div className="">
                <h3 className="text font-medium text-gray-800 dark:text-gray-200">
                  Fast Download
                </h3>
                <p className="text-gray-600 dark:text-gray-400  max-w-56 md:max-w-60 text-sm mt-1">
                  Download videos at high speed with our platform.
                </p>
              </div>
            </div>
            {/* feature -4 */}
            <div className="flex  gap-4 md:flex-row">
              <Image
                src={cupIcon}
                width={50}
                height={50}
                className="w-5 h-5 mt-1"
                alt="download icon"
              />
              <div className="">
                <h3 className="text font-medium text-gray-800 dark:text-gray-200">
                  Easy to use
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-56 md:max-w-60 text-sm mt-1">
                  You can download videos with just one click of a button.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
