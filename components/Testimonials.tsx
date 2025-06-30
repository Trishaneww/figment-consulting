"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "../styles/global.scss";

const testimonials = [
  {
    quote:
      "Wize Consulting transformed our Amazon presence and product listings, leading to a surge in visibility and trust. Their strategies helped us scale faster than we thought possible.",
    name: "Sarah T.",
    title: "Marketing Director @Bloom Co.",
    stats: [
      {
        statistic: "2.5×",
        title: "Increase in monthly Amazon sales",
      },
      {
        statistic: "40%",
        title: "Decrease in ACOS",
      },
      {
        statistic: "180%",
        title: "Boost in product review count",
      },
    ],
    src: '/assets/images/services2.avif'
  },
  {
    quote:
      "Our eCommerce site went from slow and clunky to sleek and high-converting, thanks to Wize. The custom build completely changed how customers interact with our brand.",
    name: "Jason L.",
    title: "Founder @GearHub",
    stats: [
      {
        statistic: "65%",
        title: "Increase in website conversion rate",
      },
      {
        statistic: "38%",
        title: "Reduction in bounce rate",
      },
      {
        statistic: "3×",
        title: "Faster page load speed",
      },
    ],
    src: '/assets/images/services1.avif'
  },
  {
    quote:
      "Wize Consulting helped us break into Google Ads and scale profitably. Their targeting and creative strategies brought in quality traffic we couldn’t reach before.",
    name: "Amira R.",
    title: "CEO @Vital Nutrition",
    stats: [
      {
        statistic: "5.2×",
        title: "ROAS (Return On Ad Spend)",
      },
      {
        statistic: "70%",
        title: "Increase in new customer acquisition",
      },
      {
        statistic: "120%",
        title: "Growth in monthly traffic",
      },
    ],
    src: '/assets/images/services3.avif'
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleChange = (nextIndex: number) => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setFade(true); // Fade-in
    }, 200); // Matches fade-out duration
  };

  const next = () => {
    handleChange((currentIndex + 1) % testimonials.length);
  };

  const prev = () => {
    handleChange(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const { quote, name, title, stats, src } = testimonials[currentIndex];

  return (
    <div className="flex justify-center w-full text-center px-6 relative bg-[#171717] text-white py-24 lg:py-48 z-20">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-32 lg:w-[72%]">
        <div className="flex lg:flex-col items-center lg:items-start gap-12 lg:gap-2 text-left lg:w-[25%]">
          <div className="flex flex-col gap-6 text-[#949494]">
            <p className="tracking-widest font-semibold text-base">
              TESTIMONIALS
            </p>
            <p>
              We deliver data-driven and result-focused deliverables. Hear what
              they say about us.
            </p>
          </div>

          <section className="flex gap-2 items-center mt-6">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition border-[1.2px] border-[#949494]"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={next}
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition border-[1.2px] border-[#949494]"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </section>
        </div>

        <div
          className={`flex flex-col justify-center items-start text-left lg:px-12 mt-6 lg:mt-0 lg:w-[98%] transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-bold">Logepsum</p>
          <p className="font-medium text-2xl lg:text-[2rem] mt-2 secondary">
            "{quote}"
          </p>
          <section className="flex items-center gap-2 mt-6">
            <Image
              width={200}
              height={200}
              src={src}
              alt="testimonial profile photo"
              className="rounded-full h-[50px] w-[50px]"
            />

            <div className="flex flex-col items-start">
              <p className="secondary">{name}</p>
              <p className="text-[#949494]">{title}</p>
            </div>
          </section>

          <ul className="grid grid-cols-3 place-content-between w-full gap-6 lg:w-[60%] lg:min-w-[500px] mt-16 pt-4 border-t-[1px] border-[#949494] lg:border-none">
            <li className="flex flex-col gap-3 items-start">
              <p className="text-2xl lg:text-4xl font-bold secondary">{stats[0].statistic}</p>
              <p className="text-[#949494]">{stats[0].title}</p>
            </li>

            <li className="flex flex-col gap-3 items-start">
              <p className="text-2xl lg:text-4xl font-bold secondary">{stats[1].statistic}</p>
              <p className="text-[#949494]">{stats[1].title}</p>
            </li>

            <li className="flex flex-col gap-3 items-start">
              <p className="text-2xl lg:text-4xl font-bold secondary">{stats[2].statistic}</p>
              <p className="text-[#949494]">{stats[2].title}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
