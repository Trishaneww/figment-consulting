import Image from "next/image";
import React from "react";
import "../styles/global.scss";

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
      "Product SEO Optimization",
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
    src: "/assets/images/service1.png",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center px-6 py-14 lg:py-32 bg-gray-100 w-full z-20">
      <div className="lg:w-[74%] flex flex-col gap-2 items-start justify-center text-left">
        <p className="lg:w-[70%] text-[2.5rem] leading-[2.5rem] lg:text-[3.4rem] lg:leading-[3.4rem] secondary font-medium">
          See how brands made <span className="italic">impact</span> through our
          collaboration
        </p>
      </div>

      <section className="flex flex-col lg:w-[74%] lg:min-w-[1000px] gap-20 mt-12 w-full">
        {caseStudies.map((casestudy, idx) => (
          <div
            className="flex flex-col lg:flex-row gap-2 rounded-2xl shadow-xl overflow-hidden bg-[#FAFAFA] lg:h-[440px]"
            key={idx}
          >
            <div className="relative flex overflow-hidden lg:h-[480px] lg:w-[40%]">
              <Image
                width={1000}
                height={1000}
                src={casestudy.src}
                alt="service image"
                className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
              />
            </div>

            <div className="flex flex-col justify-center px-6 lg:px-12 mt-6 lg:mt-0 lg:w-[60%]">
              <p className="font-bold">Logepsum</p>
              <p className="font-medium text-2xl lg:text-3xl mt-2 secondary">
                {casestudy.quote}
              </p>

              <ul className="hidden lg:flex gap-2 justify-between w-[92%] mt-16">
                <li className="flex flex-col items-start gap-2 lg:w-1/3">
                  <p className="text-2xl lg:text-3xl secondary font-semibold">
                    {casestudy.stats[0].statistic}
                  </p>
                  <p className="text-gray-500 mt-2 text-sm lg:w-[80%]">
                    {casestudy.stats[0].title}
                  </p>
                </li>

                <li className="flex flex-col items-start gap-2 lg:w-1/3">
                  <p className="text-2xl lg:text-3xl secondary font-semibold">
                    {casestudy.stats[1].statistic}
                  </p>
                  <p className="text-gray-500 mt-2 text-sm lg:w-[80%]">
                    {casestudy.stats[1].title}
                  </p>
                </li>

                <li className="flex flex-col items-start gap-2 lg:w-1/3">
                  <p className="text-2xl lg:text-3xl secondary font-semibold">
                    {casestudy.stats[2].statistic}
                  </p>
                  <p className="text-gray-500 mt-2 text-sm lg:w-[80%]">
                    {casestudy.stats[2].title}
                  </p>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 items-center mt-4 pt-4 border-t-[1px] border-gray-200 pb-6 ">
                {casestudy.services.map((service, idx) => (
                  <div
                    className="px-4 h-[35px] flex items-center justify-center rounded-full border-[1.4px] border-gray-300"
                    key={idx}
                  >
                    <p className="text-sm">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
