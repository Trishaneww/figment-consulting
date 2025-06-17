import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const AmazonBenefits = () => {
  return (
    <div className="flex flex-col items-center px-6 py-32 gap-12">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:w-[80%]">
        <section className="flex flex-col items-center text-center lg:text-left lg:items-start gap-2 lg:w-1/2">
          <p className="text-3xl lg:text-5xl font-semibold">
            Elevate Your Business Operations
          </p>
          <p className="lg:w-[80%] font-semibold lg:text-lg">
            Our advanced features are designed to give you a competitive edge,
            ensuring your business runs smoothly and efficiently.
          </p>
          <div className="flex flex-col lg:flex-row gap-2 items-center mt-8">
            <Button className="font-bold border-[0.75px] border-gray-500 h-[48px] w-[200px]">
              Explore Remix UI Kit
            </Button>
            <Button className="bg-white text-black font-bold h-[48px]">
              View Template
            </Button>
          </div>
        </section>

        <section className="relative flex items-end justify-end h-[400px] lg:h-[520px] w-full lg:w-1/2 max-w-[560px] border-[1px] border-gray-200 bg-white rounded-lg overflow-hidden mt-8">
          <Image
            width={470}
            height={470}
            src="/assets/images/amazon1.png"
            alt="service image"
            className="rounded-tl-lg z-20 max-w-[300px] lg:max-w-[600px]"
          />

          <Image
            src="/assets/images/contactpage.avif"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0 relative"
            priority
          />
        </section>
      </div>

       <div className="flex flex-col lg:flex-row-reverse items-center justify-between lg:w-[80%]">
        <section className="flex flex-col items-center text-center lg:text-left lg:items-start gap-2 lg:w-1/2 lg:ml-16">
          <p className="text-3xl lg:text-5xl font-semibold">
            Elevate Your Business Operations
          </p>
          <p className="lg:w-[80%] font-semibold lg:text-lg">
            Our advanced features are designed to give you a competitive edge,
            ensuring your business runs smoothly and efficiently.
          </p>
          <div className="flex flex-col lg:flex-row gap-2 items-center mt-8">
            <Button className="font-bold border-[0.75px] border-gray-500 h-[48px] w-[200px]">
              Explore Remix UI Kit
            </Button>
            <Button className="bg-white text-black font-bold h-[48px]">
              View Template
            </Button>
          </div>
        </section>

        <section className="relative flex items-end justify-end h-[400px] lg:h-[520px] w-full lg:w-1/2 max-w-[560px] border-[1px] border-gray-200 bg-white rounded-lg overflow-hidden mt-8">
          <Image
            width={470}
            height={470}
            src="/assets/images/amazon1.png"
            alt="service image"
            className="rounded-tl-lg z-20 max-w-[300px] lg:max-w-[600px]"
          />

          <Image
            src="/assets/images/contactpage.avif"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0 relative"
            priority
          />
        </section>
      </div>
    </div>
  );
};

export default AmazonBenefits;
