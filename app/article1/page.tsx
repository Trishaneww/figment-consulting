import BlogPosts from "@/components/BlogPosts";
import Footer3 from "@/components/Footer3";
import Navbar2 from "@/components/Navbar2";
import { Calendar, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

const Article1 = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] z-20 w-full">
      <Navbar2 />
      <div className="flex flex-col gap-2 items-center justify-center text-center mt-44 bg-[#FAFAFA] z-20 w-full">
        <p className="font-semibold text-sm lg:text-base lg:w-[60%] text-gray-600">
          Blog <span className="mx-2 text-black">/</span>{" "}
          <span className="text-black">
            Framer vs Webflow For Portfolio Websites: Which Platform Is Best For
            Creatives?
          </span>
        </p>
        <p className="font-semibold text-3xl lg:text-5xl mt-4 w-[60%]">
          Framer vs Webflow For Portfolio Websites: Which Platform Is Best For
          Creatives?
        </p>

        <div className="flex justify-center items-center gap-8 mt-6">
          <section className="flex gap-2 items-center">
            {/* <div className="flex justify-center items-center" */}
            <Image
              src="/assets/images/services2.avif"
              height={1000}
              width={1000}
              alt=""
              className="rounded-full  min-w-[48px] max-w-[48px]  min-h-[48px] max-h-[48px]"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <p className="tracking-wide font-bold text-sm">Written by Trishane Anthony</p>
              <div className="flex gap-2 text-xs items-center">
                <Instagram size={15}/>
                <p>600+ followers</p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-1 items-start">
            <p className="font-bold tracking-wide text-sm">UPDATED</p>
            <div className="flex items-center gap-2 text-xs">
              <Calendar size={15}/>
              <p>March 6, 2025</p>
            </div>
          </section>
        </div>

        <div className="relative flex overflow-hidden h-[65%] lg:h-[800px] w-[70%] rounded-xl mt-8">
          <Image
            width={1000}
            height={1000}
            src="/assets/images/services3.avif"
            alt="service image"
            className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
          />
        </div>
        <p>Reviewed by Mark Sanadi</p>
      </div>

      <BlogPosts />

      <Footer3 />
    </div>
  );
};

export default Article1;
