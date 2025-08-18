import React from "react";
import "../../styles/global.scss";
import {
  AlignJustify,
  AppWindowMac,
  BadgeDollarSign,
  Barcode,
  ChartLine,
  ChartPie,
  CircleCheck,
  Container,
  Image,
  KeyRound,
  Lightbulb,
  Package2,
  Plane,
  Rocket,
  SearchCheck,
  Truck,
  Airplay,
} from "lucide-react";
import { MdOutlineCampaign, MdOutlineInventory } from "react-icons/md";

const categories = [
  {
    title: "Listing Optimization",
    icon: Airplay,
  },
  {
    title: "Amazon SEO",
    icon: SearchCheck,
  },
  {
    title: "Amazon FBA Setup",
    icon: Plane,
  },
  {
    title: "Product Research",
    icon: Rocket,
  },
  {
    title: "AI Keyword Discovery",
    icon: KeyRound,
  },
  {
    title: "PPC Campaigns",
    icon: MdOutlineCampaign,
  },
  {
    title: "Fullfilled by Merchant",
    icon: Truck,
  },
  {
    title: "A+ Content Creation",
    icon: Image,
  },
  {
    title: "Storefront Design",
    icon: AppWindowMac,
  },
  {
    title: "Competitor Analysis",
    icon: Barcode,
  },
  {
    title: "Brand Registry Support",
    icon: CircleCheck,
  },
  {
    title: "Category Optimization",
    icon: AlignJustify,
  },
  {
    title: "Inventory Planning",
    icon: MdOutlineInventory,
  },
  {
    title: "Buy Box Strategy",
    icon: Package2,
  },
  {
    title: "Ad Spend Optimization",
    icon: ChartLine,
  },
  {
    title: "Profit Margin Analysis",
    icon: ChartPie,
  },
  {
    title: "Fulfillment Strategy",
    icon: Lightbulb,
  },
  {
    title: "Ongoing Account Support",
    icon: Airplay,
  },
  {
    title: "AI Market Research",
    icon: BadgeDollarSign,
  },
  {
    title: "Shipping Management",
    icon: Container,
  },
];

const AmazonFeatures = () => {
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

export default AmazonFeatures;
