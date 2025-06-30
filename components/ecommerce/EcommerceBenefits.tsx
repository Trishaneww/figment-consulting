import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import "../../styles/global.scss";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const EccomerceBenefits = () => {
  return (
    <div className="flex items-center justify-center py-14 lg:py-32 z-20 bg-[#FAFAFA] w-full">
      <div className="flex flex-col items-center px-6 gap-20 lg:gap-12 z-20 lg:w-[88%]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-start lg:justify-between lg:w-[80%]">
          <section className="flex flex-col text-left items-start gap-2 lg:w-1/2">
            <p className="text-3xl lg:text-[2.5rem] secondary font-medium lg:w-[70%]">
              Elevate Your Business <span className="italic">Operations</span>
            </p>
            <p className="lg:w-[80%] mt-2">
              Our advanced features are designed to give you a competitive edge,
              ensuring your business runs smoothly and efficiently.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <Button className="text-base py-6 px-8 font-semibold">
                Get started today
              </Button>
              <Link
                href="/contact"
                className="flex items-center gap-1 text-base group"
                aria-label="Link leads to contact page"
              >
                <p>Get Started</p>
                <ArrowRight
                  className="group-hover:ml-2 duration-200"
                  size={18}
                />
              </Link>
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

        <div className="flex flex-col lg:flex-row-reverse lg:items-center justify-start lg:justify-between lg:w-[80%]">
          <section className="flex flex-col text-left items-start gap-2 lg:w-1/2 lg:ml-16">
            <p className="text-3xl lg:text-[2.5rem] secondary font-medium lg:w-[70%]">
              Elevate Your Business <span className="italic">Operations</span>
            </p>
            <p className="lg:w-[80%] mt-1">
              Our advanced features are designed to give you a competitive edge,
              ensuring your business runs smoothly and efficiently.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <Button className="text-base py-6 px-8 font-semibold">
                Get started today
              </Button>
              <Link
                href="/contact"
                className="flex items-center gap-1 text-base group"
                aria-label="Link leads to contact page"
              >
                <p>Get Started</p>
                <ArrowRight
                  className="group-hover:ml-2 duration-200"
                  size={18}
                />
              </Link>
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

         <div className="flex flex-col lg:flex-row lg:items-center justify-start lg:justify-between lg:w-[80%]">
          <section className="flex flex-col text-left items-start gap-2 lg:w-1/2">
            <p className="text-3xl lg:text-[2.5rem] secondary font-medium lg:w-[70%]">
              Elevate Your Business <span className="italic">Operations</span>
            </p>
            <p className="lg:w-[80%] mt-1">
              Our advanced features are designed to give you a competitive edge,
              ensuring your business runs smoothly and efficiently.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <Button className="text-base py-6 px-8 font-semibold">
                Get started today
              </Button>
              <Link
                href="/contact"
                className="flex items-center gap-1 text-base group"
                aria-label="Link leads to contact page"
              >
                <p>Get Started</p>
                <ArrowRight
                  className="group-hover:ml-2 duration-200"
                  size={18}
                />
              </Link>
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

        <div className="flex flex-col lg:flex-row-reverse lg:items-center justify-start lg:justify-between lg:w-[80%]">
          <section className="flex flex-col text-left items-start gap-2 lg:w-1/2 lg:ml-16">
            <p className="text-3xl lg:text-[2.5rem] secondary font-medium lg:w-[70%]">
              Elevate Your Business <span className="italic">Operations</span>
            </p>
            <p className="lg:w-[80%] mt-1">
              Our advanced features are designed to give you a competitive edge,
              ensuring your business runs smoothly and efficiently.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <Button className="text-base py-6 px-8 font-semibold">
                Get started today
              </Button>
              <Link
                href="/contact"
                className="flex items-center gap-1 text-base group"
                aria-label="Link leads to contact page"
              >
                <p>Get Started</p>
                <ArrowRight
                  className="group-hover:ml-2 duration-200"
                  size={18}
                />
              </Link>
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
    </div>
  );
};

export default EccomerceBenefits;
