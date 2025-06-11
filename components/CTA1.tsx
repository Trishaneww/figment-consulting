import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const CTA1 = () => {
  return (
    <div className="w-full px-6 flex justify-center py-32">
      <div className="flex flex-col items-center border-gray-200 bg-white border-[1px] rounded-lg gap-4 text-center px-2 lg:px-6">
        <div className="w-[130px] h-[37px] rounded-full flex justify-center items-center border-[1px] border-blue-600 mt-12 lg:mt-24 text-sm lg:text-base">
          GET STARTED
        </div>
        <p className="text-3xl lg:text-6xl font-semibold mt-4">
          Get Your <span className="italic">Free Audit</span> Today
        </p>
        <p className="text-base lg:w-[58%] text-center">
          Experience the full power of our SaaS platform with a risk-free trial.
          Join countless businesses who have already transformed their
          operations. No credit card required.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 font-semibold">
          <Button className="w-[160px] h-[45px] text-base font-semibold">
            Get Started
          </Button>
          <Link href="/">Request a Demo</Link>
        </div>

        <Image
          width={1000}
          height={1000}
          src="/assets/images/chart.png"
          alt="chart images"
          className="mt-12 rounded-t-lg"
        />
      </div>
    </div>
  );
};

export default CTA1;
