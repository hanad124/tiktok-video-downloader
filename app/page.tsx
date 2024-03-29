import Fields from "@/components/Fields";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

import { Toaster } from "@/components/ui/toaster";
import Result from "@/components/Result";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
      <Header />
      <HeroSection />
      <Fields />
      <Features />
      <Footer />
      <Toaster />
    </div>
  );
}
