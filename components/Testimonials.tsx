"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import '../styles/global.scss'

const testimonials = [
  {
    quote:
      "Figment Studios built us a stunning website that truly reflects our brand. The process was smooth, and the results were beyond our expectations.",
    name: "Sarah T.",
    title: "Marketing Director, Bloom Co.",
  },
  {
    quote:
      "From design to deployment, everything was handled with care and creativity. I'd absolutely recommend them to any business.",
    name: "Jason L.",
    title: "Founder, GearHub",
  },
  {
    quote:
      "The level of professionalism and attention to detail was unmatched. Our online traffic and conversion rates have significantly improved.",
    name: "Amira R.",
    title: "CEO, Vital Nutrition",
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

  const { quote, name, title } = testimonials[currentIndex];

  return (
    <div className="flex justify-center w-full text-center px-4 relative bg-black text-white py-48 z-20">
      <div className="flex justify-between gap-32 lg:w-[72%]">
        {/* <p className="text-lg italic text-gray-700">“{quote}”</p>
        <div className="mt-6">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div> */}

        <div className="flex flex-col items-start gap-3 text-left lg:w-[25%] text-gray-400">
          <p className="traacking-widest font-semibold text-sm">TESTIMONIALS</p>
          <p>
            We deliver data-driven and result-focused deliverables. Hear what
            they say about us.
          </p>

          <section className="flex gap-2 items-center mt-6">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition border-[1px] border-gray-400"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={next}
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition border-[1px] border-gray-400"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </section>
        </div>

        <div
          className={`flex flex-col justify-center items-start text-left px-6 lg:px-12 mt-6 lg:mt-0 lg:w-[98%] transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-bold">Logepsum</p>
          <p className="font-medium text-2xl lg:text-[2rem] mt-2 secondary">
            "Mandala gave our brand new identity that truly resonates with our
            audience. The rebrand not only elevated our presence but also helped
            us secure investor confidence and funding!"
          </p>
          <section className="flex items-center gap-2 mt-4">
            <Image
              width={200}
              height={200}
              src="/assets/images/services2.avif"
              alt="testimonial profile photo"
              className="rounded-full h-[50px] w-[50px]"
            />

            <div className="flex flex-col items-start">
              <p className="secondary">Graham I.</p>
              <p>CEO @Bracer EV</p>
            </div>
          </section>

          <ul className="hidden lg:flex justify-between lg:w-[60%] mt-16">
            <li className="flex flex-col items-start">
              <p className="text-2xl lg:text-4xl font-bold secondary">70%</p>
              <p className="text-gray-400">Increase in Sales</p>
            </li>

            <li className="flex flex-col items-start">
              <p className="text-2xl lg:text-4xl font-bold secondary">70%</p>
              <p className="text-gray-400">Increase in Sales</p>
            </li>

            <li className="flex flex-col items-start">
              <p className="text-2xl lg:text-4xl font-bold secondary">70%</p>
              <p className="text-gray-400">Increase in Sales</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
