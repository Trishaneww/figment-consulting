import Image from "next/image";
import React from "react";
import "../../styles/global.scss";
import { Globe, Laptop } from "lucide-react";
import { FaShopify } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

const AmazonHeader = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full py-14 lg:py-32 px-6 z-20 bg-[#FAFAFA]">
      <div className="flex flex-col gap-2 items-center justify-center text-center mt-12">
        <p className="tracking-widest text-red-500 font-semibold text-sm">
          THE PROBLEM
        </p>
        <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
          Why your Amazon store may not be{" "}
          <span className="italic">performing</span>
        </p>
        <p className="lg:w-[55%]">
          Your Amazon store isn’t just another sales channel—it’s your brand’s
          gateway to millions of customers. But without the right strategy, it
          can just as easily stall your growth as scale it. Here’s what might be
          holding you back:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:w-[74%] text-center mt-12">
        <div className="flex flex-col items-center justify-start pt-8 gap-2 bg-white rounded-xl px-3 pb-4 h-[350px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center border-[1px] border-gray-300 rounded-xl text-red-500">
            <Laptop />
          </div>
          <p className="font-semibold w-[65%] text-[1.1rem] mt-2">
            You're Outranked
          </p>
          <p className="font-medium">
            You’re missing key insights that your top competitors are using to
            win the Buy Box and climb the rankings.
            <span className="text-green-600">
              {" "}
              We analyze your competition and help you out-position them with
              smarter pricing, listings, and optimization strategies.
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-start pt-8 gap-2 bg-white rounded-xl px-3 pb-4 h-[350px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center border-[1px] border-gray-300 rounded-xl text-red-500">
            <FaAmazon size={25} />
          </div>
          <p className="font-semibold w-[65%] text-[1.1rem] mt-2">
            You're Overspending
          </p>
          <p className="font-medium">
            Wasted ad spend on poorly targeted Amazon campaigns eats into your
            profits.{" "}
            <span className="text-green-600">
              We craft high-performing, data-backed PPC campaigns that drive
              better ROI with less waste.
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-start pt-8 gap-2 bg-white rounded-xl px-3 pb-4 h-[350px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center border-[1px] border-gray-300 rounded-xl text-red-500">
            <SiGoogleanalytics size={21} />
          </div>
          <p className="font-semibold w-[65%] text-[1.1rem] mt-2">
            Its invisible
          </p>
          <p className="font-medium">
            Poor SEO keeps your products buried in Amazon search results, making
            it nearly impossible for potential buyers to find you.{" "}
            <span className="text-green-600">
              We use AI-driven keyword research and listing optimization to get
              your products ranking and converting.
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-start pt-8 gap-2 bg-white rounded-xl px-3 pb-4 h-[350px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center border-[1px] border-gray-300 rounded-xl text-red-500">
            <FaShopify size={25} />
          </div>
          <p className="font-semibold w-[65%] text-[1.1rem] mt-2">
            It's All Manual
          </p>
          <p className="font-medium">
            Managing listings, inventory, and ads manually is time-consuming and
            error-prone.{" "}
            <span className="text-green-600">
              We streamline and automate your store with proven systems, AI
              tools, and account support—so you can focus on growing.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmazonHeader;
