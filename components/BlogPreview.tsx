import { BlogData } from "@/data";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";
import "../styles/global.scss";

const BlogPreview = () => {
  return (
    <div className="flex flex-col items-center px-6 py-32 mb-[26rem] w-full z-20 bg-[#FAFAFA]">
      <div className="lg:w-[68%] flex flex-col gap-2 items-start justify-center text-left">
        <p className="font-semibold tracking-widest text-sm">BLOG</p>
        <p className="lg:w-[70%] text-3xl lg:text-[2.5rem] font-medium secondary">
          Insights to help your brand <span className="italic">grow</span>
        </p>
      </div>

      <section className="flex flex-col lg:flex-row lg:w-[68%] lg:min-w-[1000px] gap-6 mt-12">
        <div className="relative flex overflow-hidden lg:h-[480px] lg:w-[48%] rounded-xl">
          <Image
            width={1000}
            height={1000}
            src="/assets/images/services1.avif"
            alt="service image"
            className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
          />

          <p className="px-4 py-4 absolute top-2 font-semibold text-sm w-full tracking-widest z-30 text-slate-50">
            ARTICLE
          </p>

          <div className="absolute bottom-0 flex flex-col px-4 py-4 items-start text-center h-[140px] mt-4 z-20 text-slate-50">
            <div className="flex flex-col text-left font-semibold">
              <p className="text-base lg:text-3xl secondary">
                Social Media Strategies That Actually Work
              </p>
            </div>
            <div className="flex items-center gap-2 text-base mt-2">
              <Calendar size={14} />
              <p>April 24, 2025 ~ Trishane Anthony</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {BlogData.slice(0, 3).map((blog, idx) => (
            <div className="flex rounded-xl w-full overflow-hidden" key={idx}>
              <div className="relative overflow-hidden h-[150px] rounded-xl">
                <Image
                  width={1000}
                  height={1000}
                  src="/assets/images/services1.avif"
                  alt="service image"
                  className="hover:scale-110 duration-500 transition-transform h-full w-full"
                />
              </div>

              <div className="flex flex-col px-4 py-4 items-start text-center h-[140px] mt-4">
                <div className="flex flex-col text-left font-semibold">
                  <p className="font-semibold text-sm w-full tracking-widest">
                    ARTICLE
                  </p>
                  <p className="text-base lg:text-2xl secondary font-medium">
                    Social Media Strategies That Actually Work
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm mt-2 text-gray-500">
                  <Calendar size={14} />
                  <p>April 24, 2025 ~ By Trishane Anthony</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPreview;
