import { Rocket } from "lucide-react";
import Image from "next/image";
import React from "react";

const PricingHeader = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full lg:pt-24 bg-gray-100">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="font-semibold text-3xl lg:text-5xl lg:w-[60%]">
          Why Businesses Trust Our Subscription Model
        </p>
        <p className="lg:w-[50%] mt-4">
          Growing social media engagement, or generating leads, our
          subscription-based marketing helps businesses achieve real success.
        </p>
      </div>

      <div className="flex gap-2 justify-center items-center mt-6 w-full px-32">
        <section className="w-1/3 flex justify-center items-center">
          <Image
            width={500}
            height={500}
            src="/assets/images/pricing.png"
            alt="figment consulting logo"
          />
        </section>

        <section className="lg:w-1/3 flex gap-6">
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="rounded-xl h-[250px] w-[250px] flex flex-col items-center justify-center text-center gap-2 bg-white px-6 py-6">
              <div className="rounded-full border-[2px] border-blue-500 text-blue-500 flex justify-center items-center h-[75px] w-[75px]">
                <Rocket />
              </div>
              <p className="font-semibold text-base">
                AI-driven email & SMS campaigns
              </p>
            </div>

            <div className="rounded-xl h-[250px] w-[250px] flex flex-col items-center justify-center text-center gap-2 bg-white px-6 py-6">
              <div className="rounded-full border-[2px] border-blue-500 text-blue-500 flex justify-center items-center h-[75px] w-[75px]">
                <Rocket />
              </div>
              <p className="font-semibold text-base">
                AI-driven email & SMS campaigns
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="rounded-xl h-[250px] w-[250px] flex flex-col items-center justify-center text-center gap-2 bg-white px-6 py-6 mt-12">
              <div className="rounded-full border-[2px] border-blue-500 text-blue-500 flex justify-center items-center h-[75px] w-[75px]">
                <Rocket />
              </div>
              <p className="font-semibold text-base">
                AI-driven email & SMS campaigns
              </p>
            </div>

            <div className="rounded-xl h-[250px] w-[250px] flex flex-col items-center justify-center text-center gap-2 bg-white px-6 py-6">
              <div className="rounded-full border-[2px] border-blue-500 text-blue-500 flex justify-center items-center h-[75px] w-[75px]">
                <Rocket />
              </div>
              <p className="font-semibold text-base">
                AI-driven email & SMS campaigns
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingHeader;
