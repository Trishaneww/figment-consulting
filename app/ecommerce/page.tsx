"use client";
import BlogPreview from "@/components/BlogPreview";
import Faq from "@/components/Faq";
import Footer3 from "@/components/Footer";
import React from "react";
import Testimonials from "@/components/Testimonials";
import LaptopGallery from "@/components/ecommerce/LaptopGallery";
import MobileGallery from "@/components/ecommerce/MobileGallery";
import EcommerceHero from "@/components/ecommerce/EcommerceHero";
import Navbar2 from "@/components/Navbar2";
import { ecommerceFaqData } from "@/data";
import EccomerceBenefits from "@/components/ecommerce/EcommerceBenefits";
import EcommerceFeatures from "@/components/ecommerce/EcommerceFeatures";
import EcommerceHeader from "@/components/ecommerce/EcommerceHeader";

const Ecommerce = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] text-slate-950 overflow-hidden">
      <Navbar2 />
      <EcommerceHero />
      {/* <AmazonHeader /> */}
      <EcommerceHeader />
      <EccomerceBenefits />
      <EcommerceFeatures />
      {/* <AmazonSeller /> */}
      {/* <Home /> */}

      <div className="relative z-20 bg-[#FAFAFA] px-2 pt-12 lg:pt-44">
        <div className="space-y-16 lg:space-y-20 bg-[#fafafa] py-2 relative z-30"></div>
        <div className="hidden lg:flex relative z-20 bg-[#FAFAFA]">
          <LaptopGallery />
        </div>
        <div className="lg:hidden relative z-20 bg-[#FAFAFA]">
          <MobileGallery />
        </div>
      </div>

      <Testimonials />
      <Faq data={ecommerceFaqData} />
      <BlogPreview />
      <Footer3 />
    </div>
  );
};

export default Ecommerce;
