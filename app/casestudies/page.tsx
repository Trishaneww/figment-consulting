"use client"
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Footer3 from "@/components/Footer3";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import React from "react";
import { casestudies } from "@/data";

const CaseStudies = () => {
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
    <div className="flex flex-col items-center bg-[#FAFAFA]">
      <Navbar2 />
      <div className="flex flex-col items-center mb-[26rem] bg-[#FAFAFA] z-20 w-full">
        <div className="mt-20"></div>
        <div className="flex flex-col gap-2 justify-center items-center w-full py-32  px-6">
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <p className="tracking-widest text-gray-500 font-semibold text-sm">
              PRICING
            </p>
            <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
              Flexible plans. Scalable <span className="italic">growth.</span>
            </p>
            <p className="">
              From launch to scale, we’ve got you covered at every stage.
            </p>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-2 lg:w-[68%] lg:min-w-[1000px] gap-8 mt-12">
            {casestudies.map((casestudy, idx) => (
              <div
                className="flex flex-col gap-2 rounded-2xl shadow-xl overflow-hidden bg-[#FAFAFA] lg:h-[700px]"
                key={idx}
              >
                <div className="relative flex overflow-hidden lg:h-[480px]">
                  <Image
                    width={1000}
                    height={1000}
                    src={casestudy.src}
                    alt="service image"
                    className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
                  />
                </div>

                <div className="flex flex-col justify-center px-6 lg:px-8 mt-6">
                  <p className="font-bold">Logepsum</p>
                  <p className="font-medium text-2xl lg:text-3xl mt-2 secondary">
                    Nuvé’s rebrand driving 70% sales growth in just 2 years
                  </p>

                  <ul className="hidden lg:flex justify-between w-[80%] mt-8">
                    <li className="flex flex-col items-start gap-1">
                      <p className="text-2xl lg:text-3xl secondary font-semibold">
                        70%
                      </p>
                      <p className="text-gray-500">Increase in Sales</p>
                    </li>

                    <li className="flex flex-col items-start gap-1">
                      <p className="text-2xl lg:text-3xl secondary font-semibold">
                        70%
                      </p>
                      <p className="text-gray-500">Increase in Sales</p>
                    </li>

                    <li className="flex flex-col items-start gap-1">
                      <p className="text-2xl lg:text-3xl secondary font-semibold">
                        70%
                      </p>
                      <p className="text-gray-500">Increase in Sales</p>
                    </li>
                  </ul>

                  <div className="flex gap-2 items-center mt-4 pt-4 border-t-[1px] border-gray-200 pb-6 ">
                    <div className="px-4 h-[35px] flex items-center justify-center rounded-full border-[1.4px] border-gray-300">
                      <p className="text-sm">Ad Management</p>
                    </div>
                    <div className="px-4 h-[35px] flex items-center justify-center rounded-full border-[1.4px] border-gray-300">
                      <p className="text-sm">Consulting</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <Footer3 />
    </div>
  );
};

export default CaseStudies;
