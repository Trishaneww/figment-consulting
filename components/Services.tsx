import Image from "next/image";
import React from "react";
import "../styles/global.scss";

const Services = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full py-32 px-6 z-20 bg-[#FAFAFA]">
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

      <div className="flex flex-col gap-4 lg:w-[68%] mt-8">
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
      </div>
    </div>
  );
};

export default Services;
