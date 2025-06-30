import { pricing } from "@/data";
import { Check, CircleCheck, X } from "lucide-react";
import React from "react";
import "../styles/global.scss";
import { Button } from "./ui/button";

const Comparison = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full py-14 lg:py-32 px-6 z-20 bg-[#FAFAFA]">
      <div className="flex flex-col gap-2 lg:items-center justify-center lg:text-center">
        <p className="tracking-widest text-gray-500 font-semibold text-sm">
          WHAT SETS US APART
        </p>
        <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
          We don’t settle for <span className="italic">average</span>, and
          neither should you
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-[68%] bg-white shadow-lg border-[1px] border-gray-200 rounded-xl mt-12 p-5">
        <section className="w-full h-full lg:1-/2 rounded-xl bg-[#171717] flex flex-col gap-3 px-6 pb-6 pt-12 text-slate-50">
          <p className="text-lg lg:text-xl font-semibold">Wize Consulting</p>

          <div className="flex items-center gap-2 mt-6">
            <Check size={18} />
            <p>Deep focus on Amazon strategy, SEO & ads</p>
          </div>

          <div className="flex items-center gap-2">
            <Check size={18} />
            <p>Work directly with experienced strategists</p>
          </div>

          <div className="flex items-center gap-2">
            <Check size={18} />
            <p>Campaigns optimized for ROI, not spend</p>
          </div>

          <div className="flex items-center gap-2">
            <Check size={18} />
            <p>Slack/email support + direct access</p>
          </div>

          <div className="flex items-center gap-2">
            <Check size={18} />
            <p>Tailored, code-level eCommerce builds</p>
          </div>

          <div className="flex items-center gap-2">
            <Check size={18} />
            <p>Clear, easy-to-understand monthly performance data</p>
          </div>

          <div className="flex items-center gap-2">
            <Check size={18} />
            <p>Modern tools & automation for smarter scaling</p>
          </div>
        </section>

        <section className="w-full h-full lg:1-/2 rounded-xl flex flex-col gap-3 px-6 pb-6 pt-12">
          <p className="text-lg lg:text-xl font-semibold">Other agencies</p>

          <div className="flex items-center gap-2 mt-6">
            <X size={18} />
            <p>General knowledge, not Amazon-specific</p>
          </div>

          <div className="flex items-center gap-2">
            <X size={18} />
            <p>Handed off to juniors or outsourced teams</p>
          </div>

          <div className="flex items-center gap-2">
            <X size={18} />
            <p>Focus on impressions or vanity metrics</p>
          </div>

          <div className="flex items-center gap-2">
            <X size={18} />
            <p>Slow replies, ticketing systems</p>
          </div>

          <div className="flex items-center gap-2">
            <X size={18} />
            <p>Template-based, limited flexibility</p>
          </div>

          <div className="flex items-center gap-2">
            <X size={18} />
            <p>Complicated dashboards with vague insights</p>
          </div>

          <div className="flex items-center gap-2">
            <X size={18} />
            <p>Outdated processes and slow implementation</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Comparison;
