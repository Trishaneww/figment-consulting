import { BlogData } from "@/data";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogPosts = () => {
  return (
    <div className="flex flex-col items-center py-32 w-full px-6">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="font-semibold text-3xl lg:text-5xl lg:w-[60%]">
          Transparent Pricing
        </p>
        <p className="lg:w-[50%] mt-4">
          Our subscription-based marketing plans give you ongoing expert
          marketing at a predictable monthly cost so your business gets
          continuous
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-2 mt-12 lg:w-[70%]">
        {BlogData.slice(0,3).map((blog, idx) => (
          <div
            className="flex flex-col border-[1px] border-gray-300 rounded-xl w-full h-[400px] max-w-[360px] md:max-w-[480px] overflow-hidden"
            key={idx}
          >
            <div className="relative overflow-hidden h-[550px] rounded-b-xl">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/services1.avif"
                alt="service image"
                className="hover:scale-110 duration-500 transition-transform h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-between px-4 py-4 items-start text-center h-[140px] mt-4">
              <div className="flex flex-col text-left font-semibold">
                <p className="font-semibold text-base w-full tracking-wide">ARTICLE</p>
                <p className="mt-2 text-base lg:text-xl">Amazon paid ads</p>
              </div>
             <div className="flex items-center gap-2 text-sm">
                <Calendar size={14}/>
                <p>April 24, 2025</p>
             </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogPosts;
