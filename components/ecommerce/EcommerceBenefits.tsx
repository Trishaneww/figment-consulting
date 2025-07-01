import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import "../../styles/global.scss";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const EccomerceBenefits = () => {
  return (
    <div className="flex items-center justify-center py-14 lg:py-32 z-20 bg-[#FAFAFA] w-full">
      <div className="flex flex-col items-center px-6 gap-20 lg:gap-12 z-20 lg:w-[80%]">
        <div className="flex flex-col gap-2 items-center justify-center text-left lg:text-center lg:w-[40%] mt-20 lg:mt-12">
          <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
            We create <span className="italic">high-performing</span> websites that sell
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center justify-start lg:justify-between lg:w-[80%]">
          <section className="flex flex-col text-left items-start gap-2 lg:w-1/2 lg:ml-28">
            <p className="lg:w-[70%] mt-2 text-gray-500 text-lg lg:text-xl">
              <span className="text-black">
                Built for performance, not templates.{" "}
              </span>
              We custom-code every store to match your brand, optimize speed,
              and drive conversions. No templates, no slow load times—just a
              high-performing site that works seamlessly across all devices and
              is designed to grow with your business.
            </p>
          </section>

          <section className="relative flex items-end justify-end h-[400px] lg:h-[520px] w-full lg:w-1/2 max-w-[560px] border-[1px] border-gray-200 bg-white rounded-lg overflow-hidden mt-8">
            <Image
              width={420}
              height={420}
              src="/assets/images/amazon1.png"
              alt="service image"
              className="rounded-tl-lg z-20 max-w-[300px] lg:max-w-[600px]"
            />
          </section>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-start lg:justify-between lg:w-[80%]">
          <section className="flex flex-col text-left items-start gap-2 lg:w-1/2">
            <p className="lg:w-[70%] mt-2 text-gray-500 text-lg lg:text-xl">
              <span className="text-black"> SEO that ranks, and sells. </span>
              We build your site with powerful SEO baked in—from keyword
              structure to technical optimization—so your store ranks for the
              right terms and attracts customers ready to buy. More visibility,
              more organic sales.
            </p>
          </section>

          <section className="relative flex items-end justify-end h-[400px] lg:h-[520px] w-full lg:w-1/2 max-w-[560px] border-[1px] border-gray-200 bg-white rounded-lg overflow-hidden mt-8">
            <Image
              width={420}
              height={420}
              src="/assets/images/amazon1.png"
              alt="service image"
              className="rounded-tl-lg z-20 max-w-[300px] lg:max-w-[600px]"
            />
          </section>
        </div>

        <div className="flex flex-col lg:flex-row-reverse lg:items-center justify-start lg:justify-between lg:w-[80%]">
          <section className="flex flex-col text-left items-start gap-2 lg:w-1/2 lg:ml-28">
            <p className="lg:w-[70%] mt-2 text-gray-500 text-lg lg:text-xl">
              <span className="text-black">
                AI-Driven product & keyword research.{" "}
              </span>
              Using advanced AI tools, we identify high-converting products,
              trending keywords, and overlooked opportunities. You’ll know what
              to sell, how to sell it, and where to stand out—based on real
              data, not guesswork.
            </p>
          </section>

          <section className="relative flex items-end justify-end h-[400px] lg:h-[520px] w-full lg:w-1/2 max-w-[560px] border-[1px] border-gray-200 bg-white rounded-lg overflow-hidden mt-8">
            <Image
              width={420}
              height={420}
              src="/assets/images/amazon1.png"
              alt="service image"
              className="rounded-tl-lg z-20 max-w-[300px] lg:max-w-[600px]"
            />
          </section>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-start lg:justify-between lg:w-[80%]">
          <section className="flex flex-col text-left items-start gap-2 lg:w-1/2">
            <p className="lg:w-[70%] mt-2 text-gray-500 text-lg lg:text-xl">
              <span className="text-black">Deep competitor intelligence. </span>
              We research your top competitors to uncover what’s working—and
              where they fall short. With insights into their product
              positioning, UX, and marketing, we help you launch smarter,
              differentiate better, and win more customers.
            </p>
          </section>

          <section className="relative flex items-end justify-end h-[400px] lg:h-[520px] w-full lg:w-1/2 max-w-[560px] border-[1px] border-gray-200 bg-white rounded-lg overflow-hidden mt-8">
            <Image
              width={420}
              height={420}
              src="/assets/images/amazon1.png"
              alt="service image"
              className="rounded-tl-lg z-20 max-w-[300px] lg:max-w-[600px]"
            />
          </section>
        </div>

        <div className="flex flex-col lg:flex-row-reverse lg:items-center justify-start lg:justify-between lg:w-[80%]">
          <section className="flex flex-col text-left items-start gap-2 lg:w-1/2 lg:ml-28">
            <p className="lg:w-[70%] mt-2 text-gray-500 text-lg lg:text-xl">
              <span className="text-black">
                Conversion optimization, baked In
              </span>
              From fast checkouts to mobile UX, we build your store with proven
              CRO strategies that guide visitors toward the sale. Every element
              is designed to increase conversions and grow revenue—without
              needing constant fixes.
            </p>
          </section>

          <section className="relative flex items-end justify-end h-[400px] lg:h-[520px] w-full lg:w-1/2 max-w-[560px] border-[1px] border-gray-200 bg-white rounded-lg overflow-hidden mt-8">
            <Image
              width={420}
              height={420}
              src="/assets/images/amazon1.png"
              alt="service image"
              className="rounded-tl-lg z-20 max-w-[300px] lg:max-w-[600px]"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default EccomerceBenefits;
