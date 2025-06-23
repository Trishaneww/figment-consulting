import { pricingOptions } from "@/data";
import { Check } from "lucide-react";
import React from "react";
import { Airplay, AlarmClock, Aperture, Archive } from "lucide-react";

const categories = [
  {
    title: "Publish",
    icon: Airplay,
  },
  {
    title: "Collaboration",
    icon: Airplay,
  },
  {
    title: "Features",
    icon: Airplay,
  },
  {
    title: "Ai",
    icon: Airplay,
  },
  {
    title: "Analytics",
    icon: Airplay,
  },
  {
    title: "Marketing",
    icon: Airplay,
  },
];
const PricingChart = () => {
  return (
    <div className="flex items-center justify-center gap-2 px-6 z-20 bg-[#FAFAFA] w-full pb-14 lg:pb-32">
      <div className="flex flex-col gap-2 lg:w-[60%] lg:pl-6">
        <div className="overflow-x-auto">
          <div className="flex flex-col gap-10">
            {categories.map((category, idx) => {
              const lowerKey =
                category.title.toLowerCase() as keyof (typeof pricingOptions)[0]["values"];
              const subItems = Object.keys(pricingOptions[0].values[lowerKey]);
              return (
                <div className="" key={idx}>
                  <div className="flex items-center gap-2 mb-4">
                    <category.icon size={18}/>
                    <p className="font-semibold text-lg">
                      {category.title}
                    </p>
                  </div>
                  {subItems.map((subItem, index) => (
                    <div
                      key={`${category}-${subItem}`}
                      className="border-t border-gray-200 w-full grid grid-cols-3 gap-2"
                    >
                      {pricingOptions.map((option) => (
                        <div
                          key={option.name}
                          className="p-4 w-full flex items-center gap-2"
                        >
                          <Check size={20} />
                          {option.values[lowerKey][subItem]}
                          <span className="text-gray-400">{subItem}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingChart;
