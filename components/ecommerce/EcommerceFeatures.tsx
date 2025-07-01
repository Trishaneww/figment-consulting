import React from "react";
import "../../styles/global.scss";
import { Inbox } from "lucide-react";
import { Airplay, AlarmClock, Aperture, Archive } from "lucide-react";

const categories = [
  {
    title: "Custom Development",
    icon: Airplay,
  },
  {
    title: "Amazon Optimization",
    icon: Airplay,
  },
  {
    title: "AI Keyword Research",
    icon: Airplay,
  },
  {
    title: "Fast Load Times",
    icon: Airplay,
  },
  {
    title: "Mobile Design",
    icon: Airplay,
  },
  {
    title: "Channel Integration",
    icon: Airplay,
  },
  {
    title: "SEO Tools",
    icon: Airplay,
  },
  {
    title: "Conversion Boosting",
    icon: Airplay,
  },
  {
    title: "Analytics Dashboard",
    icon: Airplay,
  },
  {
    title: "Custom Checkout",
    icon: Airplay,
  },
  {
    title: "UX/UI Design",
    icon: Airplay,
  },
  {
    title: "Tech Support",
    icon: Airplay,
  },
  {
    title: "Competitor Insights",
    icon: Airplay,
  },
  {
    title: "Inventory Setup",
    icon: Airplay,
  },
  {
    title: "FBA Setup",
    icon: Airplay,
  },
];

const EcommerceFeatures = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full py-14 lg:py-32 px-6 z-20 bg-[#FAFAFA]">
      <div className="flex flex-col gap-2 items-center justify-center text-left lg:text-center lg:w-[40%]">
        <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
          All the features you need to go from landing page to big{" "}
          <span className="italic">growth.</span>
        </p>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-12 w-full lg:w-[68%]">
        {categories.map((feature, idx) => (
          <div
            className="grid grid-cols-1 place-items-center gap-4 items-center justify-center w-full aspect-square p-4 rounded-xl border-[1px] border-gray-200 bg-white hover:border-gray-300 transition-colors"
            key={idx}
          >
            <feature.icon size={35} />
            <p className="text-base lg:w-[50%] text-center font-medium leading-5 text-gray-500 -mt-12 lg:-mt-24">
              {feature.title}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EcommerceFeatures;
