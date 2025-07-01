import React from "react";
import "../../styles/global.scss";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

const AmazonHero = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full pt-32 lg:pt-[33rem] px-6 z-20 bg-[#FAFAFA] lg:h-[97vh]">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <div className="flex items-center gap-2 rounded-full  text-black px-4 py-1 mb-3">
          <Image
            src="/assets/images/google-logo.png"
            alt="Hero Background"
            width={20}
            height={20}
            priority
          />
          <IoStar className="text-yellow-500" size={20} />

          <p>4.9 Rating from 200+ reviews</p>
        </div>
        <p className="text-4xl md:text-5xl lg:text-7xl font-medium secondary lg:w-[60%]">
          Expert Amazon Consultants to <span className="italic">Scale</span>{" "}
          Your Store
        </p>
        <p className="mt-2 lg:w-[50%]">
          Amazon is complicated, competitive, and ever-changing. We simplify the
          process, optimizing your listings, managing ads, and using AI-driven
          insights to scale your store with confidence.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <Link href="/contact">
            <Button className="text-base py-6 px-8 font-semibold cursor-pointer">
              Get started today
            </Button>
          </Link>
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

      <Image
        width={1000}
        height={1000}
        src="/assets/images/dashboard.png"
        alt="amazon dashboard"
        className="rounded-t-xl mt-12 shadow-2xl"
      />
    </div>
  );
};

export default AmazonHero;
