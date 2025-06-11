import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-[100vh] lg:h-[90vh] overflow-hidden w-full text-slate-50">
      <Image
        src="/assets/images/background2.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 relative"
        priority
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-30 flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex justify-center items-center gap-2 rounded-full border-[1px] border-gray-700 px-2 py-1 text-base">
          <Image
            width={25}
            height={25}
            src="/assets/images/google-logo.png"
            alt="google logo"
          />
          <IoIosStar className="text-yellow-500" size={20} />
          <p className="text-sm">4.8 Rating form 500k+ reviews</p>
        </div>
        <h1 className="text-4xl lg:text-7xl font-semibold lg:w-[55%] text-center">
          Marketo-Marketing, That Moves Your Brand Ahead.
        </h1>
        <p className="text-base text-center lg:w-[45%]">
          Say goodbye to one-time marketing campaigns. Get expert,
          results-driven marketing on a flexible subscription—no contracts, just
          growth.
        </p>

        <Button className="border-[1px] border-white rounded-full bg-slate-100 text-black h-[48px] w-[180px] mt-6 text-base font-semibold">
          Get a Free Audit
        </Button>
      </div>
    </div>
  );
};

export default Hero;
