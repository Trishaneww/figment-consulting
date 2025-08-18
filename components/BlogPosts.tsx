import { BlogData, blogPosts } from "@/data";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import "../styles/global.scss";
import Link from "next/link";

const BlogPosts = () => {
  return (
    <div className="flex flex-col items-center py-32 px-6 bg-[#FAFAFA] z-20 w-full">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="font-semibold tracking-widest text-sm text-gray-500">
          BLOG
        </p>
        <p className="text-3xl lg:text-[2.5rem] font-medium secondary">
          Latest from our <span className="italic">blog</span>
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-3 mt-12 lg:w-[69%] z-20 bg-[#FAFAFA]">
        {blogPosts.slice(0, 3).map((blog, idx) => (
          <Link href={`/blog/${blog.href}`} key={idx}>
            <div className="flex flex-col rounded-xl w-full h-[400px] max-w-[360px] md:max-w-[520px] overflow-hidden">
              <div className="relative overflow-hidden h-[550px] rounded-b-xl">
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
      </section>
      <Link href="/blog">
        <Button className="w-[200px] h-[48px] font-semibold text-base mt-12 rounded-full cursor-pointer">
          Explore the blog <ArrowRight className="ml-4" size={19} />
        </Button>
      </Link>
    </div>
  );
};

export default BlogPosts;
