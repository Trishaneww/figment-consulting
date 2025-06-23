"use client";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Navbar2 from "@/components/Navbar2";
import { BlogData } from "@/data";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";
import "../../styles/global.scss";
import Footer3 from "@/components/Footer3";
import Head from "next/head";

const Blog = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  // const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 1.6]);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="flex flex-col items-center bg-[#FAFAFA]">
        <Navbar2 />
        <div className="flex flex-col items-center w-full bg-[#FAFAFA] z-20 mb-[26rem] px-6">
          <div className="lg:w-[68%] flex flex-col gap-2 items-center justify-center text-center mt-48">
            <p className="font-semibold tracking-widest text-sm">BLOG</p>
            <p className="w-[80%] lg:w-[70%] text-3xl lg:text-[2.5rem] font-medium secondary">
              Insights to help your brand <span className="italic">grow</span>
            </p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 lg:gap-4 mt-12 lg:w-[75%] pb-32">
            {BlogData.map((blog, idx) => (
              <div
                className="flex flex-col rounded-xl w-full h-[400px] md:max-w-[520px] overflow-hidden"
                key={idx}
              >
                <div className="relative overflow-hidden h-[550px] rounded-b-xl">
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
                      Amazon paid ads
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-2 text-gray-500">
                    <Calendar size={14} />
                    <p>April 24, 2025 ~ By Trishane Anthony</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
        <Footer3 />
      </div>
    </>
  );
};

export default Blog;
