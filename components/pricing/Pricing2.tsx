import { pricing, pricingOptions } from "@/data";
import { Check, CircleCheck } from "lucide-react";
import React from "react";
import "../../styles/global.scss";
import { Button } from "../ui/button";
import Link from "next/link";

const PricingOptions2 = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full pt-32 lg:pb-4 px-6 z-20 bg-[#FAFAFA]">
      <div className="flex flex-col gap-2 lg:items-center justify-center text-left lg:text-center">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center gap-2 my-8 lg:my-20 w-full lg:w-[68%]">
        {pricingOptions.slice(0, 2).map((option, idx) => (
          <div
            className="relative flex flex-col rounded-2xl border-[1px] shadow-md border-gray-200 bg-white gap-4 overflow-hidden w-full h-[710px] lg:h-[700px]"
            key={idx}
          >
            <div className="absolute w-full h-full backdrop-blur-[100px]"></div>

            <div className="flex flex-col z-20 absolute px-6 py-6 pt-12 gap-2">
              <p className="text-2xl lg:text-2xl font-medium secondary">
                {option.name}
              </p>
              <p className="text-base">
                <span className="font-bold text-2xl lg:text-4xl secondary">
                  {option.price}
                </span>{" "}
                / month
              </p>
              <p className="text-[15px] text-gray-500">
                Unlimited design requests for companies that need ongoing
                support in multiple fields of design.
              </p>

              <Link href="/contact">
                <Button className="cursor-pointer h-[48px] w-full rounded-xl bg-black border-[1px] border-gray-200 text-slate-50 font-semibold text-base mt-4">
                  Get Started Now
                </Button>
              </Link>

              <ul className="flex flex-col gap-2 mt-6">
                {option.features.map((feature, idx) => (
                  <li className="flex items-center gap-2 text-base" key={idx}>
                    <Check
                      size={20}
                      className="min-w-[18px] max-w-[18px] text-gray-500"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {pricingOptions.slice(2, 3).map((option, idx) => (
          <div
            className="relative flex flex-col rounded-2xl border-[1px] shadow-md bg-[#171717] text-slate-50 gap-4 overflow-hidden w-full h-[710px] lg:h-[700px]"
            key={idx}
          >
            <div className="absolute w-full h-full backdrop-blur-[100px]"></div>

            <div className="flex flex-col z-20 absolute px-6 py-6 pt-12 gap-2">
              <p className="text-2xl lg:text-2xl font-medium secondary">
                {option.name}
              </p>
              <p className="text-base">
                <span className="font-bold text-2xl lg:text-4xl secondary">
                  {option.price}
                </span>{" "}
              </p>
              <p className="text-[15px] text-gray-100">
                Unlimited design requests for companies that need ongoing
                support in multiple fields of design.
              </p>

              <Link href="/contact">
                <Button className="cursor-pointer h-[48px] w-full rounded-xl bg-slate-50 border-[1px] border-gray-200 text-black font-semibold text-base mt-4">
                  Get Started Now
                </Button>
              </Link>

              <ul className="flex flex-col gap-2 mt-6">
                {option.features.map((feature, idx) => (
                  <li className="flex items-center gap-2 text-base" key={idx}>
                    <Check
                      size={20}
                      className="min-w-[18px] max-w-[18px] text-slate-50"
                    />
                    {feature}
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
