import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import { Button } from "@/components/ui/button";
import { pricing } from "@/data";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center bg-slate-200">
      <Navbar2 />
      <div className="flex flex-col gap-2 items-center justify-center text-center mt-44">
        <p className="font-semibold text-sm lg:text-base lg:w-[60%]">
          BLOG
        </p>
        <p className="font-semibold text-3xl lg:text-6xl mt-4">
          Explore Our Pricing Plans.
        </p>
        <p className="font-semibold text-sm lg:text-base">
          See features we are working on and expected release dates.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 my-20">
        {pricing.slice(0, 2).map((option, idx) => (
          <div
            className="relative flex flex-col rounded-2xl bg-white gap-4 overflow-hidden w-[340px] lg:w-[370px] h-[800px]"
            key={idx}
          >
            <div className="w-[45%] h-[200px] bg-gradient-to-r from-[#6bebff] to-[#741dd8] rounded-full relative z-10 blur-[50px] left-[75%] -top-32"></div>
            <div className="w-[45%] h-[200px] bg-gradient-to-r from-[#6bebff] to-[#741dd8] rounded-full relative z-10 blur-[50px] -left-[15%] top-[27rem]"></div>

            <div className="absolute w-full h-full backdrop-blur-[100px]"></div>

            <div className="flex flex-col z-20 absolute px-6 py-6 pt-12 gap-2">
              <p className="text-2xl lg:text-2xl font-semibold">
                {option.title}
              </p>
              <p className="text-lg">{option.description}</p>
              <p className="text-4xl lg:text-5xl font-extrabold">
                {option.price}
              </p>

              <Image
                width={120}
                height={120}
                src={option.src}
                alt="pricing logo"
                className="mt-32"
              />

              <ul className="flex flex-col gap-2 mt-6">
                {option.features.map((feature, idx) => (
                  <li className="flex items-center gap-2 text-lg" key={idx}>
                    <CircleCheck
                      size={20}
                      className="min-w-[25px] max-w=[25px]"
                    />
                    {feature.feature}
                  </li>
                ))}
              </ul>

              <Button className="h-[48px] w-full rounded-full bg-white border-[1px] border-gray-200 text-black font-semibold text-base mt-20">
                Get Started Now
              </Button>
            </div>
          </div>
        ))}

        {pricing.slice(0, 1).map((option, idx) => (
          <div
            className="relative flex flex-col rounded-2xl bg-black gap-4 overflow-hidden w-[340px] lg:w-[370px] h-[800px]"
            key={idx}
          >
            <div className="w-[45%] h-[200px] bg-gradient-to-r from-[#6bebff] to-[#741dd8] rounded-full relative z-10 blur-[50px] left-[75%] -top-32"></div>
            <div className="w-[45%] h-[200px] bg-gradient-to-r from-[#6bebff] to-[#741dd8] rounded-full relative z-10 blur-[50px] -left-[15%] top-[27rem]"></div>

            <div className="absolute w-full h-full backdrop-blur-[100px]"></div>

            <div className="flex flex-col z-20 absolute px-6 py-6 pt-12 gap-2 text-slate-50">
              <p className="text-2xl lg:text-2xl font-semibold">
                {option.title}
              </p>
              <p className="text-lg">{option.description}</p>
              <p className="text-4xl lg:text-5xl font-extrabold">
                {option.price}
              </p>

              <Image
                width={120}
                height={120}
                src={option.src}
                alt="pricing logo"
                className="mt-32"
              />

              <ul className="flex flex-col gap-2 mt-6">
                {option.features.map((feature, idx) => (
                  <li className="flex items-center gap-2 text-lg" key={idx}>
                    <CircleCheck
                      size={20}
                      className="min-w-[25px] max-w=[25px]"
                    />
                    {feature.feature}
                  </li>
                ))}
              </ul>

              <Button className="h-[48px] w-full rounded-full bg-white border-[1px] border-gray-200 text-black font-semibold text-base mt-20">
                Get Started Now
              </Button>
            </div>
          </div>
        ))}
      </div>

     
      <Footer />
    </div>
  );
};

export default Pricing;
