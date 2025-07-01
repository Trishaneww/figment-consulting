import React from "react";
import "../../styles/global.scss";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IoStar } from "react-icons/io5";
import image1 from "../../public/assets/parallax/mobile8.png";
import image2 from "../../public/assets/parallax/mobile9.png";
import image3 from "../../public/assets/parallax/mobile10.png";
import image4 from "../../public/assets/parallax/mobile11.png";
import image5 from "../../public/assets/parallax/mobile12.png";

const EcommerceHero = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full pt-32 lg:pt-[11rem] px-6 z-20 bg-[#FAFAFA]">
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
          Stop Settling for Templates. Build to{" "}
          <span className="italic">Scale.</span>
        </p>
        <p className="mt-2 lg:w-[55%]  text-[16px] ">
          Tired of cookie-cutter sites that cap your growth? We build
          high-performance, custom-coded eCommerce stores that convert better,
          scale faster, and help your brand dominate across every sales channel.
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

      <section className="flex gap-1 justify-center items-center overflow-hidden relative mt-20 lg:hidden">
        <Image
          src={image4}
          alt="mobile view landing page"
          className="rounded-xl -ml-4 -mr-4 max-w-[250px]"
          priority
        />
        <Image
          src={image5}
          alt="mobile view landing page"
          className="rounded-xl -ml-4 -mr-4 max-w-[250px]"
          priority
        />
        <Image
          src={image1}
          alt="mobile view landing page"
          className="rounded-xl -ml-4 -mr-4 max-w-[250px]"
          priority
        />
        <Image
          src={image3}
          alt="mobile view landing page"
          className="rounded-xl -ml-4 -mr-4 max-w-[250px]"
          priority
        />
        <Image
          src={image2}
          alt="mobile view landing page"
          className="rounded-xl -ml-4 -mr-4 max-w-[250px]"
          priority
        />
        <div className="absolute inset-y-0 left-0 w-[6rem] lg:w-[40rem] bg-gradient-to-r from-[#FAFAFA] via-[#fafafa60] to-transparent"></div>
        {/* Right Fade Effect */}
        <div className="absolute inset-y-0 right-0 w-[6rem] lg:w-[40rem] bg-gradient-to-l from-[#FAFAFA] via-[#fafafa69] to-transparent"></div>
      </section>

      <section className="hidden lg:flex gap-1 justify-center items-center overflow-hidden relative mt-20">
        <Image
          src={image4}
          alt="mobile view landing page"
          className="rounded-xl -ml-8 -mr-8 max-w-[500px]"
          priority
        />

        <Image
          src={image5}
          alt="mobile view landing page"
          className="rounded-xl -ml-8 -mr-8 max-w-[500px]"
          priority
        />

        <Image
          src={image1}
          alt="mobile view landing page"
          className="rounded-xl -ml-8 -mr-8 max-w-[500px]"
          priority
        />

        <Image
          src={image2}
          alt="mobile view landing page"
          className="rounded-xl -ml-8 -mr-8 max-w-[500px]"
          priority
        />

        <Image
          src={image3}
          alt="mobile view landing page"
          className="rounded-xl -ml-8 -mr-8 max-w-[500px]"
          priority
        />
        <div className="absolute inset-y-0 left-0 w-[6rem] lg:w-[40rem] bg-gradient-to-r from-[#FAFAFA] via-[#fafafa79] to-transparent"></div>
        {/* Right Fade Effect */}
        <div className="absolute inset-y-0 right-0 w-[6rem] lg:w-[40rem] bg-gradient-to-l from-[#FAFAFA] via-[#fafafa6d] to-transparent"></div>
      </section>
    </div>
  );
};

export default EcommerceHero;
