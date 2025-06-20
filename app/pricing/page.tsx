"use client";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Faq from "@/components/Faq";
import Footer3 from "@/components/Footer3";
import Navbar2 from "@/components/Navbar2";
import PricingOptions from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import React from "react";

const Pricing = () => {
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
      <div className="mt-20"></div>
      <PricingOptions />
      <Testimonials />
      <Faq />
      <div className="mb-[26rem]"></div>
      <Footer3 />
    </div>
  );
};

export default Pricing;
