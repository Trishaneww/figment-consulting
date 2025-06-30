"use client";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Footer3 from "@/components/Footer3";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import React from "react";

const caseStudies = [
  {
    quote:
      "EV Breakers triples monthly revenue on Amazon after SEO & PPC overhaul",
    stats: [
      {
        statistic: "$75,000",
        title: "Monthly Amazon revenue",
      },
      {
        statistic: "42%",
        title: "Decrease in Amazon ad cost-per-click",
      },
      {
        statistic: "3×",
        title: "Increase in product listing impressions",
      },
    ],
    services: [
      "Amazon Consulting",
      "Amazon Ads Management",
    ],
    src: "/assets/images/services2.avif",
  },
  {
    quote:
      "YA Solutions scales client acquisition through web upgrades and ad strategy",
    stats: [
      {
        statistic: "2.8×",
        title: "More leads from redesigned landing pages",
      },
      {
        statistic: "60%",
        title: "Boost in Google Ads click-through rate",
      },
      {
        statistic: "40%",
        title: "Faster website load time",
      },
    ],
    services: ["Custom Web Development", "Google Ads Management"],
    src: "/assets/images/services1.avif",
  },
  {
    quote:
      "Glowify boosts DTC sales with custom Shopify store and Amazon launch",
    stats: [
      {
        statistic: "55%",
        title: "Increase in repeat customer purchases",
      },
      {
        statistic: "4.5×",
        title: "Growth in total online sales",
      },
      {
        statistic: "3",
        title: "New sales channels launched",
      },
    ],
    services: ["Custom eCommerce Development", "Conversion Rate Optimization"],
    src: "/assets/images/services3.avif",
  },
   {
    quote:
      "Glowify boosts DTC sales with custom Shopify store and Amazon launch",
    stats: [
      {
        statistic: "55%",
        title: "Increase in repeat customer purchases",
      },
      {
        statistic: "4.5×",
        title: "Growth in total online sales",
      },
      {
        statistic: "3",
        title: "New sales channels launched",
      },
    ],
    services: ["Custom eCommerce Development", "Conversion Rate Optimization"],
    src: "/assets/images/services4.webp",
  },
];

const CaseStudies = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  // const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 1.6]);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA]">
      <Navbar2 />
      <div className="flex flex-col items-center mb-[26rem] bg-[#FAFAFA] z-20 w-full">
        <div className="mt-20"></div>
        <div className="flex flex-col gap-2 justify-center items-center w-full py-32  px-6">
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <p className="tracking-widest text-gray-500 font-semibold text-sm">
              CASE STUDIES
            </p>
            <p className="font-medium text-3xl lg:text-[2.5rem] secondary lg:w-[60%]">
              See how brands made <span className="italic">impact</span> through our collaboration
            </p>
            {/* <p className="lg:w-[50%] mt-2">
              From listings to launches, see the exact steps we took to help clients scale smarter and sell more.
            </p> */}
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-2 lg:w-[68%] lg:min-w-[1000px] gap-8 mt-12">
            {caseStudies.map((casestudy, idx) => (
              <div
                className="flex flex-col gap-2 rounded-2xl shadow-xl overflow-hidden bg-[#FAFAFA]"
                key={idx}
              >
                <div className="relative flex overflow-hidden lg:h-[350px]">
                  <Image
                    width={1000}
                    height={1000}
                    src={casestudy.src}
                    alt="service image"
                    className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
                  />
                </div>

                <div className="flex flex-col  px-6 lg:px-8 mt-6 lg:h-[380px]">
                  <p className="font-bold">Logepsum</p>
                  <p className="font-medium text-2xl lg:text-3xl mt-2 secondary">
                    {casestudy.quote}
                  </p>

                  <ul className="hidden lg:flex justify-between w-[94%] mt-8 gap-2">
                    <li className="flex flex-col items-start gap-2 lg:w-1/3">
                      <p className="text-2xl lg:text-3xl secondary font-semibold">
                        {casestudy.stats[0].statistic}
                      </p>
                      <p className="text-gray-500 text-sm mt-2 lg-[80%]">
                        {casestudy.stats[0].title}
                      </p>
                    </li>

                    <li className="flex flex-col items-start gap-2 lg:w-1/3">
                      <p className="text-2xl lg:text-3xl secondary font-semibold">
                        {casestudy.stats[1].statistic}
                      </p>
                      <p className="text-gray-500 text-sm mt-2 lg-[80%]">
                        {casestudy.stats[0].title}
                      </p>
                    </li>

                    <li className="flex flex-col items-start gap-2 lg:w-1/3">
                      <p className="text-2xl lg:text-3xl secondary font-semibold">
                        {casestudy.stats[2].statistic}
                      </p>
                      <p className="text-gray-500 text-sm mt-2 lg-[80%]">
                        {casestudy.stats[0].title}
                      </p>
                    </li>
                  </ul>

                  <div className="flex gap-2 items-center mt-4 pt-4 border-t-[1px] border-gray-200 pb-6 ">
                    {casestudy.services.map((service, idx) => (
                      <div className="px-4 h-[35px] flex items-center justify-center rounded-full border-[1.4px] border-gray-300" key={idx}>
                        <p className="text-sm">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <Footer3 />
    </div>
  );
};

export default CaseStudies;
