import Image from "next/image";
import React from "react";
import "../styles/global.scss";
import { Globe, Laptop } from "lucide-react";
import { FaShopify } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

const Services = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full py-14 lg:py-32 px-6 z-20 bg-[#FAFAFA]">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="tracking-widest text-gray-500 font-semibold text-sm">
          SERVICES
        </p>
        <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
          Flexible plans. Scalable <span className="italic">growth.</span>
        </p>
        <p className="">
          From launch to scale, we’ve got you covered at every stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:w-[68%] text-center mt-12">
        <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-xl px-3 pb-4 h-[300px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center bg-indigo-800 rounded-xl text-slate-50">
            <Laptop />
          </div>
          <p className="font-semibold w-[65%]">Custom eCommerce Website Development</p>
          <p>We design fast, high-converting online stores built from scratch to match your brand and drive sales—no templates, just results.</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-xl px-3 pb-4 h-[300px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center bg-indigo-800 rounded-xl text-slate-50">
            <FaAmazon size={25}/>
          </div>
          <p className="font-semibold w-[65%]">Amazon Strategy & Store Optimization</p>
          <p>From product listings to PPC, we help you dominate Amazon with proven strategies that boost visibility, trust, and sales.</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-xl px-3 pb-4 h-[300px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center bg-indigo-800 rounded-xl text-slate-50">
            <SiGoogleanalytics size={21}/>
          </div>
          <p className="font-semibold w-[65%]">Google & Amazon Ads Management</p>
          <p>Maximize your ad spend with targeted campaigns that bring in more clicks, conversions, and long-term customers.</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-xl px-3 pb-4 h-[300px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center bg-indigo-800 rounded-xl text-slate-50">
            <FaShopify size={25}/>
          </div>
          <p className="font-semibold w-[65%]">eCommerce Consulting & Sales Expansion</p>
          <p>We guide you through what sells, where to sell, and how to grow—so your store scales faster across multiple platforms.</p>
        </div>
      </div>

      {/* <div className="flex flex-col gap-4 lg:w-[68%] mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col rounded-xl w-full h-[540px] max-w-[360px] md:max-w-[520px] overflow-hidden">
            <div className="relative overflow-hidden h-[550px] rounded-b-xl">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/services5.webp"
                alt="service image"
                className="hover:scale-110 duration-500 transition-transform h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-between px-4 py-4 items-start text-center h-[140px] mt-4">
              <div className="flex flex-col text-left">
                <p className="font-medium text-lg lg:text-2xl w-full tracking-wide secondary">
                  Lead Generation
                </p>
                <p className="mt-2 text-base">
                  Strengthen your sales pipeline by identifying, targeting, and
                  attracting high-quality prospects with precision.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl w-full h-[540px] max-w-[360px] md:max-w-[520px] overflow-hidden">
            <div className="relative overflow-hidden h-[550px] rounded-b-xl">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/services5.webp"
                alt="service image"
                className="hover:scale-110 duration-500 transition-transform h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-between px-4 py-4 items-start text-center h-[140px] mt-4">
              <div className="flex flex-col text-left">
                <p className="font-medium text-lg lg:text-2xl w-full tracking-wide secondary">
                  Lead Generation
                </p>
                <p className="mt-2 text-base">
                  Strengthen your sales pipeline by identifying, targeting, and
                  attracting high-quality prospects with precision.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl w-full h-[540px] max-w-[360px] md:max-w-[520px] overflow-hidden">
            <div className="relative overflow-hidden h-[550px] rounded-b-xl">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/services5.webp"
                alt="service image"
                className="hover:scale-110 duration-500 transition-transform h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-between px-4 py-4 items-start text-center h-[140px] mt-4">
              <div className="flex flex-col text-left">
                <p className="font-medium text-lg lg:text-2xl w-full tracking-wide secondary">
                  Lead Generation
                </p>
                <p className="mt-2 text-base">
                  Strengthen your sales pipeline by identifying, targeting, and
                  attracting high-quality prospects with precision.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col rounded-xl w-full h-[440px] max-w-[360px] md:max-w-[1000px] overflow-hidden">
            <div className="relative overflow-hidden h-[550px] rounded-b-xl">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/services1.avif"
                alt="service image"
                className="hover:scale-110 duration-500 transition-transform h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-between px-4 py-4 items-start text-center h-[140px] mt-4">
              <div className="flex flex-col text-left">
                <p className="font-medium text-lg lg:text-2xl w-full tracking-wide secondary">
                  Lead Generation
                </p>
                <p className="mt-2 text-base">
                  Strengthen your sales pipeline by identifying, targeting, and
                  attracting high-quality prospects with precision.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl w-full h-[440px] max-w-[360px] md:max-w-[1000px] overflow-hidden">
            <div className="relative overflow-hidden h-[550px] rounded-b-xl">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/services1.avif"
                alt="service image"
                className="hover:scale-110 duration-500 transition-transform h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-between px-4 py-4 items-start text-center h-[140px] mt-4">
              <div className="flex flex-col text-left">
                <p className="font-medium text-lg lg:text-2xl w-full tracking-wide secondary">
                  Lead Generation
                </p>
                <p className="mt-2 text-base">
                  Strengthen your sales pipeline by identifying, targeting, and
                  attracting high-quality prospects with precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
