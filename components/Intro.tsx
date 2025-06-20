import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import "../styles/global.scss";

const Intro = () => {
  return (
    <div className="flex flex-col items-center w-full py-32 z-20 bg-[#FAFAFA]">
      <div className="w-[65%] h-[440px] relative overflow-hidden rounded-lg">
        <Image
          src="/assets/images/intro.avif"
          alt="Sample"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 justify-between w-[65%] mt-12">
        <section className="flex flex-col gap-4 w-1/2">
          <p className="text-3xl lg:text-[2.5rem] font-medium lg:w-[80%] secondary">
            Grow <span className="italic">10x</span> Smarter, Better, Faster
          </p>
          <p className="text-base lg:w-[85%]">
            With a decade of expertise, We crafts bold brands and high-impact
            campaigns that get results. From to execution, we create with
            purpose and scale with precision.
          </p>
          <Link href="tel:416-995-4979">
            <Button className="font-semibold h-[45px] w-[160px] text-sm border-[1px] border-gray-700 bg-slate-950 shadow-slate-400 shadow-lg text-white mt-4">
              Get a free audit
            </Button>
          </Link>
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-1/2">
          <div className="w-full flex flex-col items-start gap-2 h-[150px]">
            <p className="font-medium text-4xl lg:text-7xl secondary">100+</p>
            <p>Brands Transformed</p>
          </div>

          <div className="w-full flex flex-col items-start gap-2 h-[150px]">
            <p className="font-medium text-4xl lg:text-7xl secondary">100+</p>
            <p>Brands Transformed</p>
          </div>

          <div className="w-full flex flex-col items-start gap-2 h-[150px]">
            <p className="font-medium text-4xl lg:text-7xl secondary">100+</p>
            <p>Brands Transformed</p>
          </div>

          <div className="w-full flex flex-col items-start gap-2 h-[150px]">
            <p className="font-medium text-4xl lg:text-7xl secondary">100+</p>
            <p>Brands Transformed</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Intro;
