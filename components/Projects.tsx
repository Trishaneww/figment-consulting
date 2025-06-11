import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col px-6 my-32">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="font-semibold text-3xl lg:text-5xl lg:w-[60%]">
          Our Selected Works
        </p>
        <p className="lg:w-[50%] mt-4">
          Growing social media engagement, or generating leads, our
          subscription-based marketing helps businesses achieve real success.
        </p>
      </div>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
        <div className="relative flex overflow-hidden h-[420px] w-full rounded-xl">
          <Image
            width={1000}
            height={1000}
            src="/assets/images/services1.avif"
            alt="service image"
            className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
          />
          <div className="absolute top-[22rem] flex items-center justify-between w-full z-20 text-slate-50 px-4 ">
            <div className="flex flex-col gap-0">
              <p className="font-bold lg:text-2xl">Eclipse Interactive</p>
              <p>UI/UX Design</p>
            </div>
            <ArrowUpRight size={30}/>
          </div>
        </div>

        <div className="relative flex overflow-hidden h-[420px] w-full rounded-xl">
          <Image
            width={1000}
            height={1000}
            src="/assets/images/services2.avif"
            alt="service image"
            className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
          />
          <div className="absolute top-[22rem] flex items-center justify-between w-full z-20 text-slate-50 px-4 ">
            <div className="flex flex-col gap-0">
              <p className="font-bold lg:text-2xl">Eclipse Interactive</p>
              <p>UI/UX Design</p>
            </div>
            <ArrowUpRight size={30}/>
          </div>
        </div>

        <div className="relative flex overflow-hidden h-[420px] w-full rounded-xl">
          <Image
            width={1000}
            height={1000}
            src="/assets/images/services3.avif"
            alt="service image"
            className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
          />
          <div className="absolute top-[22rem] flex items-center justify-between w-full z-20 text-slate-50 px-4 ">
            <div className="flex flex-col gap-0">
              <p className="font-bold lg:text-2xl">Eclipse Interactive</p>
              <p>UI/UX Design</p>
            </div>
            <ArrowUpRight size={30}/>
          </div>
        </div>

        <div className="relative flex overflow-hidden h-[420px] w-full rounded-xl">
          <Image
            width={1000}
            height={1000}
            src="/assets/images/services4.webp"
            alt="service image"
            className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
          />
          <div className="absolute top-[22rem] flex items-center justify-between w-full z-20 text-slate-50 px-4 ">
            <div className="flex flex-col gap-0">
              <p className="font-bold lg:text-2xl">Eclipse Interactive</p>
              <p>UI/UX Design</p>
            </div>
            <ArrowUpRight size={30}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
