import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import "../styles/global.scss";
import { IoStar } from "react-icons/io5";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]  overflow-hidden w-full text-slate-50 px-6 pb-32 z-20 bg-[#FAFAFA]">
      <Image
        src="/assets/images/hero.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 relative "
        priority
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="flex flex-col h-full items-center justify-end w-full z-30">
        <div className="flex flex-col gap-2 lg:w-[72%]">
          <div className="flex items-center gap-2 rounded-full text-slate-50 px-2 py-1">
            <Image
              src="/assets/images/google-logo.png"
              alt="Hero Background"
              width={20}
              height={20}
              priority
            />
            <IoStar className="text-yellow-500" size={20} />

            <p>4.9 Rating form 200+ reviews</p>
          </div>
          <h1 className="text-4xl lg:text-7xl font-medium secondary lg:w-[70%]">
            Scale Your Online Store With <span className="italic">Growth</span>{" "}
            Experts.
          </h1>

          <p className="text-base lg:text-lg font-medium lg:w-[80%] mt-2">
            Elevate your business with expert insights, tailored strategies, and
            unwavering support designed
          </p>

          <div className="flex flex-col md:flex-row items-start lg:items-center gap-4 mt-6">
            <Button className="text-base py-6 px-8 font-semibold bg-slate-50 text-black">
              Get started today
            </Button>
            <Link
              href="/contact"
              className="flex items-center gap-1 text-base group"
              aria-label="Link leads to contact page"
            >
              <p>Get Started</p>
              <ArrowRight className="group-hover:ml-2 duration-200" size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col lg:flex-row justify-between items-center lg:w-[75%] mt-12">
        <div className="relative z-30 flex flex-col items-start justify-center gap-2 lg:w-1/2 text-black">
          <div className="flex items-center gap-2 rounded-full px-4 py-1 mb-3">
            <Image
              src="/assets/images/google-logo.png"
              alt="Hero Background"
              width={20}
              height={20}
              priority
            />
            <IoStar className="text-yellow-500" size={20}/>

            <p>4.8 Rating form 500k+ review</p>
          </div>
          <h1 className="text-4xl lg:text-7xl font-medium secondary">
            Scale Your Online Store With <span className="italic">Growth</span>{" "}
            Experts.
          </h1>

           <p className="text-base font-medium lg:w-[80%] mt-2">
            Elevate your business with expert insights, tailored strategies, and unwavering support designed
          </p>

           <div className="flex gap-2 items-center mt-4">
            <Rocket size={18} />
            <p className="">
              Tell us what you’re building and share your design
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Rocket size={18} />
            <p className="">
              Tell us what you’re building and share your design
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Rocket size={18} />
            <p className="">
              Tell us what you’re building and share your design
            </p>
          </div>


          <Button className="border-[1px] text-white rounded-xl h-[48px] w-[180px] lg:w-[240px] mt-6 text-base font-semibold">
            Get a Free Audit
          </Button>
        </div>

        <div className="relative flex overflow-hidden lg:h-[580px] lg:w-[35%] rounded-xl shadow-lg shadow-slate-400">
          <Image
            width={1000}
            height={1000}
            src="/assets/images/hero.png"
            alt="service image"
            className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
