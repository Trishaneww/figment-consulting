import React from "react";
import "../../styles/global.scss";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

const AdvertisingHero = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full pt-32 lg:pt-[29rem] px-6 z-20 bg-[#FAFAFA] lg:h-[92vh]">
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

          <p>4.9 Rating form 200+ review</p>
        </div>
        <p className="text-4xl md:text-5xl lg:text-7xl font-medium secondary lg:w-[60%]">
          Stop Settling for Templates. Build to <span className="italic">Scale.</span>
        </p>
        <p className="mt-2 lg:w-[55%]">
          Tired of cookie-cutter sites that cap your growth? We build high-performance, custom-coded eCommerce stores that convert better, scale faster, and help your brand dominate across every sales channel.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <Button className="text-base py-6 px-8 font-semibold">Get started today</Button>
          <Link
            href="/contact"
            className="flex items-center gap-1 text-base group"
            aria-label="Link leads to contact page"
          >
            <p>Get Started</p>
            <ArrowRight className="group-hover:ml-2 duration-200" size={18}/>
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
