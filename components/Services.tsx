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
      <div className="flex flex-col gap-2 items-start lg:tems-center justify-center lg:text-center">
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
          <p className="font-semibold w-[65%]">
            Custom eCommerce Website Development
          </p>
          <p>
            We design fast, high-converting online stores built from scratch to
            match your brand and drive sales—no templates, just results.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-xl px-3 pb-4 h-[300px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center bg-indigo-800 rounded-xl text-slate-50">
            <FaAmazon size={25} />
          </div>
          <p className="font-semibold w-[65%]">
            Amazon Strategy & Store Optimization
          </p>
          <p>
            From product listings to PPC, we help you dominate Amazon with
            proven strategies that boost visibility, trust, and sales.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-xl px-3 pb-4 h-[300px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center bg-indigo-800 rounded-xl text-slate-50">
            <SiGoogleanalytics size={21} />
          </div>
          <p className="font-semibold w-[65%]">
            Google & Amazon Ads Management
          </p>
          <p>
            Maximize your ad spend with targeted campaigns that bring in more
            clicks, conversions, and long-term customers.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-xl px-3 pb-4 h-[300px] border-[1px] shadow-md border-gray-200">
          <div className="h-[50px] w-[50px] flex items-center justify-center bg-indigo-800 rounded-xl text-slate-50">
            <FaShopify size={25} />
          </div>
          <p className="font-semibold w-[65%]">
            eCommerce Consulting & Sales Expansion
          </p>
          <p>
            We guide you through what sells, where to sell, and how to grow—so
            your store scales faster across multiple platforms.
          </p>
        </div>
      </div>

      {/* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-4 w-full lg:w-[68%] px-2">
        <div className="flex items-center gap-3">
          <Image
            width={33}
            height={33}
            src="/assets/images/service-icon1.avif"
            alt="service icon"
            className="rounded-md"
          />
          <div className="flex flex-col">
            <p className="font-semibold">Sheets</p>
            <p className="-mt-1 text-[#474747]">Sync with Google</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Image
            width={33}
            height={33}
            src="/assets/images/service-icon1.avif"
            alt="service icon"
            className="rounded-md"
          />
          <div className="flex flex-col">
            <p className="font-semibold">Sheets</p>
            <p className="-mt-1 text-[#474747]">Sync with Google</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Image
            width={33}
            height={33}
            src="/assets/images/service-icon1.avif"
            alt="service icon"
            className="rounded-md"
          />
          <div className="flex flex-col">
            <p className="font-semibold">Sheets</p>
            <p className="-mt-1 text-[#474747]">Sync with Google</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
