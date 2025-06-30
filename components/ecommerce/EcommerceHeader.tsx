import Image from "next/image";
import React from "react";
import "../../styles/global.scss";
import { Globe, Laptop } from "lucide-react";
import { FaShopify } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

const EcommerceHeader = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full py-14 lg:py-32 px-6 z-20 bg-[#FAFAFA]">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="tracking-widest text-red-500 font-semibold text-sm">
          THE PROBLEM
        </p>
        <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
          Why your Amazon store may not be <span className="italic">performing</span>
        </p>
        <p className="">
          From launch to scale, we’ve got you covered at every stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:w-[68%] text-center mt-12">
        <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl px-3 pb-4 h-[300px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center border-[1px] border-gray-300 rounded-xl text-red-500">
            <Laptop />
          </div>
          <p className="font-semibold w-[65%] text-[1.1rem] mt-2">
            Its slow
          </p>
          <p className="font-medium">
            From product listings to PPC, we help you dominate Amazon <span className="text-green-600">with
            proven strategies that boost visibility, trust, and sales.</span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl px-3 pb-4 h-[300px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center border-[1px] border-gray-300 rounded-xl text-red-500">
            <FaAmazon size={25} />
          </div>
          <p className="font-semibold w-[65%] text-[1.1rem] mt-2">
            Its not optimized
          </p>
          <p className="font-medium">
            From product listings to PPC, we help you dominate Amazon <span className="text-green-600">with
            proven strategies that boost visibility, trust, and sales.</span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl px-3 pb-4 h-[300px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center border-[1px] border-gray-300 rounded-xl text-red-500">
            <SiGoogleanalytics size={21} />
          </div>
          <p className="font-semibold w-[65%] text-[1.1rem] mt-2">
            It doesnt sell
          </p>
          <p className="font-medium">
            From product listings to PPC, we help you dominate Amazon <span className="text-green-600">with
            proven strategies that boost visibility, trust, and sales.</span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl px-3 pb-4 h-[300px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center border-[1px] border-gray-300 rounded-xl text-red-500">
            <FaShopify size={25} />
          </div>
          <p className="font-semibold w-[65%] text-[1.1rem] mt-2">
            Its invisible
          </p>
          <p className="font-medium">
            From product listings to PPC, we help you dominate Amazon <span className="text-green-600">with
            proven strategies that boost visibility, trust, and sales.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHeader;
