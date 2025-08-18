import React from "react";
import "../../styles/global.scss";
import {
  AppWindowMac,
  ArrowBigUp,
  Barcode,
  BookCheck,
  BookCopy,
  Gauge,
  Handshake,
  Inbox,
  Plane,
  SearchCheck,
  ShoppingCart,
  Smartphone,
  TabletSmartphone,
  Truck,
  Workflow,
} from "lucide-react";
import { Airplay, AlarmClock, Aperture, Archive } from "lucide-react";
import { FaAmazon } from "react-icons/fa";

const categories = [
  {
    title: "Custom Development",
    icon: BookCopy,
  },
  {
    title: "Amazon Optimization",
    icon: FaAmazon,
  },
  {
    title: "AI Keyword Research",
    icon: SearchCheck,
  },
  {
    title: "Fast Load Times",
    icon: Gauge,
  },
  {
    title: "Mobile Design",
    icon: Smartphone,
  },
  {
    title: "Channel Integration",
    icon: Workflow,
  },
  {
    title: "SEO Tools",
    icon: Airplay,
  },
  {
    title: "Conversion Boosting",
    icon: ArrowBigUp,
  },
  {
    title: "Analytics Dashboard",
    icon: AppWindowMac,
  },
  {
    title: "Custom Checkout",
    icon: ShoppingCart,
  },
  {
    title: "UX/UI Design",
    icon: TabletSmartphone,
  },
  {
    title: "Tech Support",
    icon: Handshake,
  },
  {
    title: "Competitor Insights",
    icon: Barcode,
  },
  {
    title: "Inventory Setup",
    icon: Plane,
  },
  {
    title: "FBA Setup",
    icon: Truck,
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

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-12 w-full lg:w-[74%]">
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
