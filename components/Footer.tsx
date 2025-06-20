import React from "react";
import { Button } from "./ui/button";
import "../styles/global.scss";
import Image from "next/image";


const Footer = () => {
  return (
    <div className="flex flex-col items-center w-[99%] rounded-xl bg-black py-22 text-white gap-4 px-6">
      <p className="text-lg font-semibold tracking-widest">WIZE SOLUTIONS</p>
      <p className="font-medium secondary text-3xl lg:text-6xl lg:w-[40%] text-center">
        Lets scale your online store today
      </p>
      <p className="text-lg text-center w-[80%]">
        Go from idea to a live website in just a few hours.
      </p>
      <div className="flex gap-2 items-center mt-8">
        <Button className="font-bold border-[0.75px] border-gray-500 h-[48px] w-[200px]">
          Explore Remix UI Kit
        </Button>
        <Button className="bg-white text-black font-bold h-[48px]">
          View Template
        </Button>
      </div>

      <div className="flex justify-center items-center w-full py-2 relative lg:-mt-20">
        <p className="prompt-medium text-[9rem] lg:text-[34rem] text-[#343434aa] third">
          WIZE
        </p>

        <div className="flex justify-center items-center h-full w-full absolute gap-2">
          <div className="relative flex overflow-hidden h-[60px] lg:h-[165px] w-[60px] lg:w-[165px] rounded-xl">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/services1.avif"
              alt="service image"
              className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
            />
          </div>
          <div className="relative flex overflow-hidden h-[60px] lg:h-[165px] w-[60px] lg:w-[165px] rounded-xl">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/services1.avif"
              alt="service image"
              className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
            />
          </div>
          <div className="relative flex overflow-hidden h-[60px] lg:h-[165px] w-[60px] lg:w-[165px] rounded-xl">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/services1.avif"
              alt="service image"
              className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
            />
          </div>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row justify-between text-slate-50 lg:-mt-22 w-[65%]">
        <div className="flex flex-col items-center text-center lg:text-base mt-8 lg:mt-0">
          <p className="secondary mb-4 text-lg text-gray-400 font-semibold">Company</p>
          <ul className="flex flex-col gap-2">
            <li>Burlington</li>
            <li>Etobicoke</li>
            <li>Hamilton</li>
            <li>Toronto</li>
            <li>Hamilton</li>
            <li>Toronto</li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center lg:text-base mt-8 lg:mt-0">
          <p className="secondary mb-4 text-lg text-gray-400 font-semibold">Company</p>
          <ul className="flex flex-col gap-2">
            <li>Burlington</li>
            <li>Etobicoke</li>
            <li>Hamilton</li>
            <li>Toronto</li>
            <li>Hamilton</li>
            <li>Toronto</li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center lg:text-base mt-8 lg:mt-0">
          <p className="secondary mb-4 text-lg text-gray-400 font-semibold">Company</p>
          <ul className="flex flex-col gap-2">
            <li>Burlington</li>
            <li>Etobicoke</li>
            <li>Hamilton</li>
            <li>Toronto</li>
            <li>Hamilton</li>
            <li>Toronto</li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center lg:text-base mt-8 lg:mt-0">
          <p className="secondary mb-4 text-lg text-gray-400 font-semibold">Company</p>
          <ul className="flex flex-col gap-2">
            <li>Burlington</li>
            <li>Etobicoke</li>
            <li>Hamilton</li>
            <li>Toronto</li>
            <li>Hamilton</li>
            <li>Toronto</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
