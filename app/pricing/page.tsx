"use client";
import Faq from "@/components/Faq";
import Footer3 from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingChart from "@/components/pricing/PricingChart";
import { faqData } from "@/data";
import PricingOptions from "@/components/pricing/Pricing";
import Rewards from "@/components/pricing/Rewards";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA]">
      <Navbar />
      <div className="mt-20"></div>
      <PricingOptions />
      <Rewards />
      <PricingChart />
      <Faq data={faqData} />
      <Footer3 />
    </div>
  );
};

export default Pricing;
