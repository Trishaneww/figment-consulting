"use client";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import AmazonBenefits from "@/components/amazon/AmazonBenefits";
import BlogPreview from "@/components/BlogPreview";
import Faq from "@/components/Faq";
import Footer3 from "@/components/Footer3";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";
import AmazonFeatures from "@/components/amazon/AmazonFeatures";
import Testimonials from "@/components/Testimonials";
import AmazonSeller from "@/components/amazon/AmazonSeller";
import LaptopGallery from "@/components/ecommerce/LaptopGallery";
import MobileGallery from "@/components/ecommerce/MobileGallery";
import EcommerceHero from "@/components/ecommerce/EcommerceHero";
import Navbar2 from "@/components/Navbar2";
import { ecommerceFaqData } from "@/data";
import EccomerceBenefits from "@/components/ecommerce/EcommerceBenefits";
import EcommerceFeatures from "@/components/ecommerce/EcommerceFeatures";

const Ecommerce = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

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
    <div className="flex flex-col items-center bg-[#FAFAFA] text-slate-950 overflow-hidden">
      <Navbar2 />
      <EcommerceHero />
      {/* <AmazonHeader /> */}
      <EccomerceBenefits/>
      <EcommerceFeatures />
      {/* <AmazonSeller /> */}
      {/* <Home /> */}

      <div className="relative z-20 bg-[#FAFAFA] px-2 pt-12 lg:pt-44">
        <div className="space-y-16 lg:space-y-20 bg-[#fafafa] py-2 relative z-30"></div>
        <div className="hidden lg:flex relative z-20 bg-[#FAFAFA]">
          <LaptopGallery />
        </div>
         <div className="lg:hidden relative z-20 bg-[#FAFAFA]">
          <MobileGallery/>
        </div>
      </div>

      <Testimonials />
      <Faq data={ecommerceFaqData}/>
      <BlogPreview />
      <Footer3 />
    </div>
  );
};

export default Ecommerce;
