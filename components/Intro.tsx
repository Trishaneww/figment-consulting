import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import "../styles/global.scss";
import { ArrowRight } from "lucide-react";

const Intro = () => {
  return (
    <div className="flex flex-col items-center w-full py-14 lg:py-32 z-20 bg-[#FAFAFA] px-6">
      <div className="w-full lg:w-[65%] h-[220px] lg:h-[440px] relative overflow-hidden rounded-lg">
        <Image
          src="/assets/images/intro.avif"
          alt="Sample"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 justify-between lg:w-[65%] mt-12">
        <section className="flex flex-col gap-4 lg:w-1/2">
          <p className="text-3xl lg:text-[2.5rem] font-medium lg:w-[80%] secondary">
            Grow <span className="italic">Smarter</span>. Scale <span className="italic">Faster</span>. Sell <span className="italic">Everywhere</span>.
          </p>
          <p className="text-base lg:w-[85%]">
            From Amazon to Shopify, we help eCommerce brands break barriers. Through high-converting websites, expert ad strategy, and multi-channel growth plans, Wize turns your store into a scalable sales machine.
          </p>
          {/* <Link href="tel:416-995-4979">
            <Button className="font-semibold h-[45px] w-[160px] text-sm border-[1px] border-gray-700 bg-slate-950 shadow-slate-400 shadow-lg text-white mt-4">
              Get a free audit
            </Button>
          </Link> */}
           <Link href="/contact" className="flex items-center gap-1 text-base text-slate-950 group" aria-label="Link leads to contact page">
            <p>Get Started</p>
            <ArrowRight className="group-hover:ml-2 duration-200" />
            </Link>
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:w-1/2">
          <div className="w-full flex flex-col items-start gap-6 lg:h-[150px]">
            <p className="font-medium text-5xl lg:text-7xl secondary">50+</p>
            <p>Brands Transformed</p>
          </div>

          <div className="w-full flex flex-col items-start gap-6 lg:h-[150px]">
            <p className="font-medium text-5xl lg:text-7xl secondary">4x</p>
            <p>Average ROI on Campaigns</p>
          </div>

          <div className="w-full flex flex-col items-start gap-6 lg:h-[150px]">
            <p className="font-medium text-5xl lg:text-7xl secondary">80k+</p>
            <p>Growth in monthly Amazon sales</p>
          </div>

          <div className="w-full flex flex-col items-start gap-6 lg:h-[150px]">
            <p className="font-medium text-5xl lg:text-7xl secondary">3x</p>
            <p>Boost in product visibility</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Intro;
