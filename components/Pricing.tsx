import { pricing } from "@/data";
import { Check, CircleCheck } from "lucide-react";
import React from "react";
import "../styles/global.scss";
import { Button } from "./ui/button";

const PricingOptions = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full py-14 lg:py-32 px-6 z-20 bg-[#FAFAFA]">
      <div className="flex flex-col gap-2 lg:items-center justify-center lg:text-center">
        <p className="tracking-widest text-gray-500 font-semibold text-sm">
          PRICING
        </p>
        <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
          Flexible plans. Scalable <span className="italic">growth.</span>
        </p>
        <p className="">
          From launch to scale, we’ve got you covered at every stage.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 my-20">
        {pricing.slice(0, 1).map((option, idx) => (
          <div
            className="relative flex flex-col rounded-2xl border-[1px] shadow-md border-gray-200 bg-white gap-4 overflow-hidden w-[340px] lg:w-[440px] h-[560px] lg:h-[520px]"
            key={idx}
          >
            {/* <div className="w-[45%] h-[200px] bg-gradient-to-r from-[#6bebff] to-[#741dd8] rounded-full relative z-10 blur-[50px] left-[75%] -top-32"></div>
            <div className="w-[45%] h-[200px] bg-gradient-to-r from-[#6bebff] to-[#741dd8] rounded-full relative z-10 blur-[50px] -left-[15%] top-[27rem]"></div> */}

            <div className="absolute w-full h-full backdrop-blur-[100px]"></div>

            <div className="flex flex-col z-20 absolute px-6 py-6 pt-12 gap-2">
              <p className="text-2xl lg:text-2xl font-medium secondary">
                {option.title}
              </p>
              <p className="text-base">
                <span className="font-bold text-2xl lg:text-4xl secondary">
                  {option.price}
                </span>{" "}
                / month
              </p>
              <p className="text-sm text-gray-400">
                Unlimited design requests for companies that need ongoing
                support in multiple fields of design.
              </p>

              {/* <Image
                width={120}
                height={120}
                src={option.src}
                alt="pricing logo"
                className="mt-32"
              /> */}

              <Button className="h-[48px] w-full rounded-xl bg-black border-[1px] border-gray-200 text-slate-50 font-semibold text-base mt-4">
                Get Started Now
              </Button>

              <ul className="flex flex-col gap-2 mt-6">
                {option.features.map((feature, idx) => (
                  <li className="flex items-center gap-2 text-base" key={idx}>
                    <Check
                      size={20}
                      className="min-w-[18px] max-w-[18px] text-gray-500"
                    />
                    {feature.feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {pricing.slice(1, 2).map((option, idx) => (
          <div
            className="relative flex flex-col rounded-2xl border-[4px] shadow-md border-indigo-700 bg-white gap-4 overflow-hidden w-[340px] lg:w-[440px] h-[560px] lg:h-[520px]"
            key={idx}
          >
            {/* <div className="w-[45%] h-[200px] bg-gradient-to-r from-[#6bebff] to-[#741dd8] rounded-full relative z-10 blur-[50px] left-[75%] -top-32"></div>
            <div className="w-[45%] h-[200px] bg-gradient-to-r from-[#6bebff] to-[#741dd8] rounded-full relative z-10 blur-[50px] -left-[15%] top-[27rem]"></div> */}

            <div className="absolute w-full h-full backdrop-blur-[100px]"></div>

            <div className="flex flex-col z-20 absolute px-6 py-6 pt-12 gap-2">
              <p className="text-2xl lg:text-2xl font-medium secondary">
                {option.title}
              </p>
              <p className="text-base">
                <span className="font-bold text-2xl lg:text-4xl secondary">
                  {option.price}
                </span>{" "}
                / month
              </p>
              <p className="text-sm text-gray-400">
                Unlimited design requests for companies that need ongoing
                support in multiple fields of design.
              </p>

              {/* <Image
                width={120}
                height={120}
                src={option.src}
                alt="pricing logo"
                className="mt-32"
              /> */}

              <Button className="h-[48px] w-full rounded-xl bg-black border-[1px] border-gray-200 text-slate-50 font-semibold text-base mt-4">
                Get Started Now
              </Button>

              <ul className="flex flex-col gap-2 mt-6">
                {option.features.map((feature, idx) => (
                  <li className="flex items-center gap-2 text-base" key={idx}>
                    <Check
                      size={20}
                      className="min-w-[18px] max-w-[18px] text-gray-500"
                    />
                    {feature.feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* {pricing.slice(0, 1).map((option, idx) => (
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
                      className="min-w-[25px] max-w-[25px]"
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
        ))} */}
      </div>
    </div>
  );
};

export default PricingOptions;
