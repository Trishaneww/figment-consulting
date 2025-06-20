import { BlogData } from "@/data";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const BlogPosts = () => {
  return (
    <div className="flex flex-col items-center py-32 w-full px-6">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="lg:w-[50%] mt-4 lg:text-sm font-semibold tracking-wide">BLOG</p>
        <p className="font-semibold text-3xl lg:text-5xl">
          Latest from our blog
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-3 mt-12 lg:w-[75%] z-20 bg-[#FAFAFA]">
        {BlogData.slice(0, 3).map((blog, idx) => (
          <div
            className="flex flex-col rounded-xl w-full h-[400px] max-w-[360px] md:max-w-[520px] overflow-hidden"
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
                <p className="font-semibold text-base w-full tracking-wide">
                  ARTICLE
                </p>
                <p className="mt-2 text-base lg:text-xl">Amazon paid ads</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={14} />
                <p>April 24, 2025</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Button className="w-[200px] h-[48px] font-semibold text-base mt-12 rounded-2xl shadow-lg shadow-slate-400">Explore the blog <ArrowRight className="ml-4" size={19}/></Button>
    </div>
  );
};

export default BlogPosts;
