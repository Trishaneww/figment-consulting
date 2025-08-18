import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import React from "react";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Footer3 from "@/components/Footer";
import Logos from "@/components/Logos";
import Navbar from "@/components/Navbar";
import Demo from "@/components/Demo";
import PricingPreview from "@/components/PricingPreview";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";

import { faqData } from "@/data";

const page = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] text-slate-950 overflow-hidden">
      <Navbar />
      <Hero />
      <Logos />
      <Intro />
      <Demo />
      <Testimonials />
      <Projects />
      <Services />
      <PricingPreview />
      <CTA />
      <Faq data={faqData}/>
      <Footer3 />
    </div>
  );
};

export default page;
