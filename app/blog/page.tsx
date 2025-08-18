"use client";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";
import "../../styles/global.scss";
import Footer3 from "@/components/Footer";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FAFAFA]">
        <Navbar />
        <div className="flex flex-col items-center w-full bg-[#FAFAFA] z-20 px-6">
          <div className="lg:w-[74%] flex flex-col gap-2 items-center justify-center text-center mt-32 lg:mt-48">
            <p className="w-[80%] lg:w-[70%] text-[2.5rem] leading-[2.8rem] lg:text-[3.8rem]  lg:leading-[4rem] font-medium secondary">
              Insights to help your brand <span className="italic">grow</span>
            </p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 lg:gap-4 mt-12 lg:w-[66%] pb-32">
            {blogPosts.map((blog, idx) => (
              <Link href={`/blog/${blog.href}`} key={idx}>
                <div className="flex flex-col rounded-xl w-full h-[450px] md:max-w-[520px] overflow-hidden bg-white border-[1px] border-gray-200">
                  <div className="relative overflow-hidden h-[250px]">
                    <Image
                      width={1000}
                      height={1000}
                      src={blog.src}
                      alt="service image"
                      className="hover:scale-110 duration-500 transition-transform h-full w-full"
                    />
                  </div>

                  <div className="flex flex-col justify-between px-4 py-4 items-start text-center h-[140px] mt-2 lg:mt-4">
                    <div className="flex flex-col text-left font-semibold">
                      <p className="font-semibold text-sm w-full tracking-widest">
                        ARTICLE
                      </p>
                      <p className="text-base lg:text-2xl secondary font-medium">
                        {blog.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-8 text-gray-500">
                      <Calendar size={14} />
                      <p>
                        {blog.createdOn} ~ By {blog.author}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </div>
        <Footer3 />
      </div>
    </>
  );
};

export default Blog;
