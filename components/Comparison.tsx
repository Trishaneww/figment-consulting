import { otherAgencyFeatures, pricing, wizeConsultingFeatures } from "@/data";
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

      <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-[74%] rounded-xl mt-12 p-5">
        <section className="w-full h-full lg:1-/2 rounded-xl flex flex-col gap-3 px-3 py-3 pt-6 bg-[#ececec]">
          <p className="text-lg lg:text-xl font-semibold text-center">
            Other consulting companies
          </p>

          <div className="bg-white rounded-xl flex flex-col gap-3 px-3 py-3">
            {otherAgencyFeatures.map((feature, idx) => (
              <div className="flex items-start gap-2 first:mt-6" key={idx}>
                <div className="flex justify-center items-center p-1 bg-red-100 rounded-full text-red-600 mt-1">
                  <X size={12} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Other {feature.title}</p>
                  <p className="-mt-1 font-light">{feature.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full h-full lg:1-/2 rounded-xl flex flex-col gap-3 px-3 py-3 pt-6 bg-green-800">
          <p className="text-lg lg:text-xl font-semibold text-center text-white">
            Wize Consulting
          </p>

          <div className="bg-white rounded-xl flex flex-col gap-3 px-3 py-3">
            {wizeConsultingFeatures.map((feature, idx) => (
              <div className="flex items-start gap-2 first:mt-6" key={idx}>
                <div className="flex justify-center items-center p-1 bg-green-100 rounded-full text-green-600 mt-1">
                  <X size={12} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Wize {feature.title}</p>
                  <p className="-mt-1 font-light">{feature.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-6">
        <Button className="text-lg font-semibold px-6 py-6 bg-indigo-800">
          Get a free audit
        </Button>
        <p className="text-sm mt-1">
          Start your free trial. Cancel in 1 click.
        </p>
      </div>
    </div>
  );
};

export default Comparison;
