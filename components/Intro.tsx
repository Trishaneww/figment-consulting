import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 lg:px-32 lg:gap-4 justify-center items-center mt-20 lg:mt-24">
      <div className="flex flex-col lg:w-1/3 gap-6 text-left">
        <p className="text-3xl lg:text-5xl font-semibold lg:w-[85%]">
          Your trusted partner in unlocking business potential
        </p>
        <p className="text-sm">
          Traditional marketing is expensive and unpredictable. We believe
          businesses deserve consistent, expert marketing without high costs or
          long-term contracts.
        </p>
        <Button className="h-[48px] w-[150px] rounded-full font-semibold">Get Started Now</Button>
      </div>
      <Image
        width={700}
        height={700}
        src="/assets/images/intro.png"
        alt="intro image"
        className="mt-6 lg:mt-0"
      />
    </div>
  );
};

export default Intro;
