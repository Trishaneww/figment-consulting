import { pricing } from "@/data";
import { Check, CircleCheck } from "lucide-react";
import React from "react";
import "../../styles/global.scss";
import { Button } from "../ui/button";

const PricingOptions2 = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full pt-32 lg:pb-4 px-6 z-20 bg-[#FAFAFA]">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center gap-2 my-20 lg:w-[60%]">
        {pricing.slice(0, 1).map((option, idx) => (
          <div
            className="relative flex flex-col rounded-2xl border-[1px] shadow-md border-gray-200 bg-white gap-4 overflow-hidden w-full h-[560px]"
            key={idx}
          >
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

        {pricing.slice(0, 1).map((option, idx) => (
          <div
            className="relative flex flex-col rounded-2xl border-[1px] shadow-md border-gray-200 bg-white gap-4 overflow-hidden w-full h-[560px]"
            key={idx}
          >
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
            className="relative flex flex-col rounded-2xl border-[4px] shadow-md border-indigo-700 bg-white gap-4 overflow-hidden w-full h-[560px]"
            key={idx}
          >
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
      </div>
    </div>
  );
};

export default PricingOptions2;
