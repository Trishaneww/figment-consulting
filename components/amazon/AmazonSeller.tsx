import Image from "next/image";
import React from "react";

const AmazonSeller = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full py-14 lg:py-32 px-6 z-20 bg-[#FAFAFA]">
      {/* <div className="flex flex-col gap-2 items-center justify-center text-center lg:w-[40%]">
        <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
          All the features you need to go from landing page to big{" "}
          <span className="italic">growth.</span>
        </p>
      </div> */}
      <div className="lg:w-[68%] flex flex-col gap-2 items-start justify-center text-left">
        <p className="font-semibold tracking-widest text-sm">BLOG</p>
        <p className="lg:w-[70%] text-3xl lg:text-[2.5rem] font-medium secondary">
          Insights to help your brand <span className="italic">grow</span>
        </p>
      </div>

      <section className="flex flex-col items-center justify-center mt-12 lg:w-[68%]">
        <div className="relative flex items-baseline justify-center overflow-hidden w-full">
          <Image
            width={1600}
            height={1600}
            src="/assets/images/amazondashboard.png"
            alt="amazon seller dashboard"
            className="rounded-xl border-[2px] border-gray-400"
          />
          {/* Fade-to-black overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#FAFAFA] pointer-events-none" />
        </div>

        <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-20 mt-8 px-2">
            <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold">No devs required</p>
                <p className="text-gray-500">Framer lets you design, build, and publish your site in hours. One tool. Total control. No code needed.</p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold">No devs required</p>
                <p className="text-gray-500">Framer lets you design, build, and publish your site in hours. One tool. Total control. No code needed.</p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold">No devs required</p>
                <p className="text-gray-500">Framer lets you design, build, and publish your site in hours. One tool. Total control. No code needed.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AmazonSeller;
