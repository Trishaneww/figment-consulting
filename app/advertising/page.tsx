"use client";
import AmazonBenefits from "@/components/amazon/AmazonBenefits";
import AmazonHeader from "@/components/amazon/AmazonHeader";
import BlogPreview from "@/components/BlogPreview";
import Faq from "@/components/Faq";
import Footer3 from "@/components/Footer";
import React from "react";
import AmazonFeatures from "@/components/amazon/AmazonFeatures";
import Testimonials from "@/components/Testimonials";
import AmazonSeller from "@/components/amazon/AmazonSeller";
import Navbar2 from "@/components/Navbar2";
import { advertisingFaqData } from "@/data";
import AdvertisingHero from "@/components/advertising/AdvertisingHero";

const Advertising = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] text-slate-950 overflow-hidden">
      <Navbar2 />
      <AdvertisingHero />
      {/* <LogoCarousel /> */}
      <AmazonHeader />
      <AmazonBenefits />
      <AmazonFeatures />
      <AmazonSeller />
      <Testimonials />
      <Faq data={advertisingFaqData} />
      <BlogPreview />
      <Footer3 />
    </div>
  );
};

export default Advertising;
