import { BlogData, blogPosts } from "@/data";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";
import "../styles/global.scss";
import Link from "next/link";


const BlogPreview = () => {
  return (
    <div className="flex flex-col items-center px-6 py-14 lg:py-32 mb-[95vh] lg:mb-[26rem] w-full z-20 bg-[#FAFAFA]">
      <div className="lg:w-[68%] flex flex-col gap-2 items-start justify-center text-left">
        <p className="font-semibold tracking-widest text-sm text-gray-500">
          BLOG
        </p>
        <p className="lg:w-[70%] text-3xl lg:text-[2.5rem] font-medium secondary">
          Insights to help your brand <span className="italic">grow</span>
        </p>
      </div>

      <section className="flex flex-col lg:flex-row lg:w-[68%] lg:min-w-[1000px] gap-6 mt-12">
        <div className="relative flex overflow-hidden lg:h-[480px] lg:w-[48%] lg:min-w-[500px] rounded-xl">
          <Image
            width={1000}
            height={1000}
            src="/assets/images/services2.avif"
            alt="service image"
            className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
          />

          <p className="px-4 py-4 absolute top-2 font-semibold text-sm w-full tracking-widest z-30 text-slate-50">
            ARTICLE
          </p>

          <div className="absolute bottom-0 flex flex-col px-4 py-4 items-start text-center mt-4 z-20 text-slate-50">
            <div className="flex flex-col text-left font-semibold">
              <p className="text-base lg:text-3xl secondary">
                Amazon Keyword Strategies That Convert
              </p>
            </div>
            <div className="flex items-center gap-2 text-base mt-2">
              <Calendar size={14} />
              <p>April 24, 2025 ~ Trishane Anthony</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap lg:flex-col gap-2">
          {blogPosts.slice(0, 3).map((blog, idx) => (
            <Link href="/article1"  key={idx}>
              <div
                className="flex flex-col lg:flex-row rounded-xl w-full max-w-[350px] lg:max-w-[600px] lg:w-full overflow-hidden items-center"
              >
                <div className="relative overflow-hidden h-[200px] lg:h-[150px] rounded-xl w-full lg:w-1/2  min-w-[250px]">
                  <Image
                    width={1000}
                    height={1000}
                    src={blog.src}
                    alt="service image"
                    className="hover:scale-110 duration-500 transition-transform h-full w-full"
                  />
                </div>

                <div className="flex flex-col px-4 py-4 items-start text-center lg:h-[140px]">
                  <div className="flex flex-col text-left font-semibold">
                    <p className="font-semibold text-sm w-full tracking-widest">
                      ARTICLE
                    </p>
                    <p className="text-base lg:text-2xl secondary font-medium">
                      {blog.title}
                    </p>
                  </div>
                  <div className="flex text-left items-start lg:items-center gap-2 text-sm mt-2 text-gray-500">
                    <Calendar size={20} />
                    <p>{blog.createdOn} ~ By {blog.author}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPreview;
