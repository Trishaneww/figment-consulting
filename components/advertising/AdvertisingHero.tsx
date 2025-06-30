import React from "react";
import "../../styles/global.scss";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

const AdvertisingHero = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full pt-96 px-6 z-20 bg-[#FAFAFA] lg:h-[92vh]">
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

          <p>4.8 Rating form 500k+ review</p>
        </div>
        <p className="text-4xl lg:text-7xl font-medium secondary lg:w-[60%]">
          Flexible plans. Scalable <span className="italic">growth.</span>
        </p>
        <p className="">
          From launch to scale, we’ve got you covered at every stage.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-2 mt-6">
          <Button>Get started today</Button>
          <Link
            href="/contact"
            className="flex items-center gap-1 text-base group"
            aria-label="Link leads to contact page"
          >
            <p>Get Started</p>
            <ArrowRight className="group-hover:ml-2 duration-200" />
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

export default AdvertisingHero;
