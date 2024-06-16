"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/public/assets/logo.svg";

function Header() {
  const { setTheme } = useTheme();

  return (
    <div>
      <div className="flex justify-between items-center px-10 py-2 lg:mx-28 mt-4">
        <div className="flex items-center gap-2">
          {/* <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="w-15 h-15"
          /> */}
          <p className="text-2xl font-bold">
            <span className="text-primary">
              Dental <span className="">Disease</span>
            </span>
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent ml-2">
              Detection
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
