import React from "react";
import { FiCheck } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              <span>
                <FiCheck />
              </span>
              Download TikTok vidoes without watermark
              <span></span>
            </a>
          </div>

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-3xl lg:text-5xl dark:text-gray-200 tracking-wide">
              TikTok Video
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent ml-2">
                Downloader
              </span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Download TikTok videos without watermark in high quality.
              It&apos;s free and easy to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
