import BlogPosts from "@/components/BlogPosts";
import Footer3 from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data";
import { Calendar, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const BlogPage = ({ params }: Props) => {
  const blog = blogPosts.find((post) => post.href === params.id);

  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] z-20 w-full">
      <Navbar />
      <div className="flex flex-col gap-2 items-center justify-center text-left lg:text-center pt-44 bg-[#FAFAFA] z-20 w-full">
        <div className="flex flex-col gap-2 w-full lg:w-[74%] items-center justify-center px-6">
          <p className="font-semibold text-sm lg:text-base lg:w-[60%] text-gray-600 w-full">
            Blog <span className="mx-2 text-black">/</span>{" "}
            <span className="text-black">{blog?.title}</span>
          </p>
          <p className="font-semibold text-3xl lg:text-5xl mt-4 lg:w-[60%]">
            {blog?.title}
          </p>

          <div className="flex w-full lg:justify-center lg:items-center gap-8 mt-6">
            <section className="flex gap-2 items-center">
              {/* <div className="flex justify-center items-center" */}
              <Image
                src="/assets/images/services2.avif"
                height={1000}
                width={1000}
                alt=""
                className="hidden lg:flex rounded-full min-w-[48px] max-w-[48px]  min-h-[48px] max-h-[48px]"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <p className="tracking-wide font-bold text-sm">
                  Written by {blog?.author}
                </p>
                <div className="flex gap-2 text-xs items-center">
                  <Instagram size={15} />
                  <p>600+ followers</p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-1 items-start">
              <p className="font-bold tracking-wide text-sm">UPDATED</p>
              <div className="flex items-center gap-2 text-xs">
                <Calendar size={15} />
                <p>{blog?.createdOn}</p>
              </div>
            </section>
          </div>

          <div className="relative flex overflow-hidden h-[65%] w-full lg:h-[700px] rounded-xl mt-8">
            <Image
              width={1000}
              height={1000}
              src={blog!.src}
              alt="service image"
              className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
            />
          </div>
          <p className="w-full text-left lg:text-center">
            Reviewed by Justin Neale
          </p>

          <section className="flex flex-col gap-6 text-left mt-6">
            {blog?.sections.map((section, idx) => (
              <div
                className="flex flex-col gap-1 text-base lg:text-lg"
                key={idx}
              >
                <p className="text-base lg:text-lg font-semibold">
                  {section.header}
                </p>
                <div className="flex flex-col gap-1">
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <BlogPosts />

      <Footer3 />
    </div>
  );
};

export default BlogPage;
