import { Check } from "lucide-react";
import React from "react";
import { Airplay, AlarmClock, Aperture, Archive } from "lucide-react";
import { pricingOptions } from "@/data";

const categories = [
  {
    title: "Amazon",
    icon: Airplay,
  },
  {
    title: "Advertising",
    icon: Airplay,
  },
  {
    title: "Ecommerce",
    icon: Airplay,
  },
  {
    title: "Analytics",
    icon: Airplay,
  },
  {
    title: "Analytics",
    icon: Airplay,
  },
  {
    title: "Support",
    icon: Airplay,
  },
];
const PricingChart = () => {
  return (
    <div className="flex items-center justify-center gap-2 px-6 z-20 bg-[#FAFAFA] w-full pb-14 lg:pb-32">
      <div className="flex flex-col gap-2 lg:w-[68%] lg:pl-6">
        <div className="overflow-x-auto">
          <div className="flex flex-col gap-10">
            <div className="lg:-mb-8">
              <div className="flex items-center gap-2 mb-4 p-4 rounded-t-xl">
                {/* <category.icon size={18}/> */}
              </div>

              <div className="last:border-b-0 border-b border-gray-200 w-full flex items-center gap-2 text-base">
                <p className="p-4 lg:w-[50%]"></p>
                <div className="w-full grid grid-cols-3 gap-2">
                  <div className="p-4 w-full flex items-center gap-2 font-semibold">
                    Premium
                  </div>
                  <div className="p-4 w-full flex items-center gap-2 font-semibold">
                    Premium
                  </div>
                  <div className="p-4 w-full flex items-center gap-2 font-semibold">
                    Premium
                  </div>
                </div>
              </div>
            </div>

            {categories.map((category, idx) => {
              const lowerKey =
                category.title.toLowerCase() as keyof (typeof pricingOptions)[1]["values"];
              const section = pricingOptions[0]?.values?.[lowerKey];
              const subItems = section ? Object.keys(section) : [];

              return (
                <div className="" key={idx}>
                  <div className="flex items-center gap-2 mb-4 p-4 bg-gray-100 rounded-t-xl">
                    {/* <category.icon size={18}/> */}
                    <p className="font-semibold text-base">
                      {category.title}
                    </p>
                  </div>

                  {subItems.map((subItem, index) => (
                    <div
                      key={`${category}-${subItem}`}
                      className="last:border-b-0 border-b border-gray-200 w-full flex items-center gap-2 text-base"
                    >
                      <p className="p-4 lg:w-[50%]">{subItem}</p>
                      <div className="w-full grid grid-cols-3 gap-2">
                        {pricingOptions.map((option) => (
                          <div
                            key={option.name}
                            className="p-4 w-full flex items-center gap-2"
                          >
                            {/* <Check size={20} /> */}
                            {option.values[lowerKey][subItem]}
                          </div>
                        ))}
                      </div>
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
