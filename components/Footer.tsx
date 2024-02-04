import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { FiFacebook, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="border-t py-5 mt-16 px-6 md:px-52">
      <div className="flex flex-wrap gap-y-5 justify-between">
        <div className="">
          <h1 className="font-bold text-xl">
            Tik-Vid{" "}
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent ">
              Down
            </span>
          </h1>
          <div className="flex gap-5 mt-4">
            <Link
              href="https://www.facebook.com/hanad.faaruuq/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FiFacebook className="text-2xl" />
            </Link>
            <Link
              href="https://github.com/hanad124"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <GitHubLogoIcon
                className="
            text-2xl h-6 w-6
          "
              />
            </Link>
            <Link
              href="https://github.com/hanad124"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <TwitterLogoIcon
                className="
            text-2xl h-6 w-6
          "
              />
            </Link>
          </div>
        </div>
        <div className="">
          <p className="">
            Made with ❤️ by{" "}
            <a
              href="
            https://www.facebook.com/hanad.faaruuq/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Hanad Faaruuq
            </a>
          </p>
          <p className="mt-4">copyright &copy; 2024 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
