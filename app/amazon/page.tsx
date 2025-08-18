"use client";
import AmazonBenefits from "@/components/amazon/AmazonBenefits";
import AmazonHeader from "@/components/amazon/AmazonHeader";
import BlogPreview from "@/components/BlogPreview";
import Faq from "@/components/Faq";
import Footer3 from "@/components/Footer";
import React from "react";
import AmazonFeatures from "@/components/amazon/AmazonFeatures";
import Testimonials from "@/components/Testimonials";
import Navbar2 from "@/components/Navbar2";
import AmazonHero from "@/components/amazon/AmazonHero";
import { amazonFaqData, faqData } from "@/data";

const Amazon = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] text-slate-950 overflow-hidden">
      <Navbar2 />
      <AmazonHero />
      {/* <LogoCarousel /> */}
      <AmazonHeader />
      <AmazonBenefits />
      <AmazonFeatures />
      {/* <AmazonSeller /> */}
      <Testimonials />
      <Faq data={amazonFaqData} />
      <BlogPreview />
      <Footer3 />
    </div>
  );
};

export default Amazon;
