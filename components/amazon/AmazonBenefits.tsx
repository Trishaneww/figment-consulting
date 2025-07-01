import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import "../../styles/global.scss";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AmazonBenefits = () => {
  return (
    <div className="flex items-center justify-center py-14 lg:py-32 z-20 bg-[#FAFAFA] w-full">
      <div className="flex flex-col items-center px-6 gap-20 lg:gap-12 z-20 lg:w-[80%]">
        <div className="flex flex-col gap-2 items-center justify-center text-left lg:text-center lg:w-[40%]">
          <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
            What to <span className="italic">expect</span> from your Amazon
            consultant{" "}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center justify-start lg:justify-between lg:w-[80%]">
          <section className="flex flex-col text-left items-start gap-2 lg:w-1/2 lg:ml-28">
            <p className="lg:w-[70%] mt-2 text-gray-500 text-lg lg:text-xl">
              <span className="text-black">Optimized listings built to convert. </span>From product images to descriptions, we refine every detail to
              match shopper psychology. The result? More clicks, more trust, and
              more sales—all without needing a full rebrand.
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
              <span className="text-black">
                Outrank the competition with market intel. {" "}
              </span>
              We analyze your top competitors’ listings, ad strategies, and
              keyword performance to find gaps you can exploit. With our
              insights, you're not just competing—you’re leading.
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
              <span className="text-black">A+ content that converts. </span>
              We design branded A+ content and storefronts that build trust and
              boost sales—helping your product stand out in a crowded
              marketplace with stunning visuals and conversion-driven layouts.
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
              <span className="text-black">
                Unlock high-ranking keywords with AI. {" "}
              </span>
              We use AI-powered keyword tools to find what your customers are
              actually searching for—giving you a strategic edge. Our insights
              help you dominate rankings with keywords that convert, not just
              generate clicks.
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
              <span className="text-black">SEO that drives sales. </span>
              Amazon SEO is more than stuffing keywords. We optimize your
              titles, bullets, backend terms, and A+ content to increase
              discoverability, CTRs, and conversions—backed by real ranking
              data.
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

export default AmazonBenefits;
