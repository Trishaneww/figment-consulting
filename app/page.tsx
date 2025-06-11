"use client";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import LogoCarousel from "@/components/LogoCarousel";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import PricingHeader from "@/components/PricingHeader";
import React from "react";
import Testimonials from "@/components/Testimonials";
import { useTransform, useScroll, motion } from "framer-motion";
import Steps from "@/components/Steps";
import Faq from "@/components/Faq";
import Lenis from "@studio-freight/lenis";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import CTA1 from "@/components/CTA1";
import BlogPosts from "@/components/BlogPosts";

const page = () => {
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
    <div className="flex flex-col items-center bg-white text-slate-950 overflow-hidden">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Intro />
      <Services />
      <Projects />
      {/* <Parallax /> */}
      {/* <SelectedWorks /> */}
      {/* <PricingHeader /> */}
      <CTA1 />
      <Pricing />
      <Steps />
      <Testimonials />
      <BlogPosts />
      <Faq />
      <Footer />
    </div>
  );
};

export default page;
