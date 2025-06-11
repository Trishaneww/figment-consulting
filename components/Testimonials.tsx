"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director at Bloom Inc.",
    quote:
      "Figment Studios truly understood our vision. The website exceeded expectations, and we saw a 30% increase in leads within the first month. Their work elevated our brand. The website is fast, visually stunning, and performs better on Google than ever before.",
  },
  {
    name: "Daniel Lee",
    position: "Founder of Peak Climb Gym",
    quote:
      "The dashboard they built is intuitive and beautiful. Our members love tracking their climbs, and engagement has skyrocketed. Their work elevated our brand. The website is fast, visually stunning, and performs better on Google than ever before.",
  },
  {
    name: "Emily Carter",
    position: "Owner at Carter & Co Renovations",
    quote:
      "Trishane made the process seamless. I didn’t have to worry about a thing, and now I have a site I’m proud to show clients. Their work elevated our brand. The website is fast, visually stunning, and performs better on Google than ever before.",
  },
  {
    name: "James Liu",
    position: "CEO of Elevate Drone Media",
    quote:
      "Their work elevated our brand. The website is fast, visually stunning, and performs better on Google than ever before. Their work elevated our brand. The website is fast, visually stunning, and performs better on Google than ever before.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      slideTo((currentIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideTo = (nextIndex: number) => {
    if (nextIndex === currentIndex) return;
    setPrevIndex(currentIndex);
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsSliding(false);
    }, 500); // match duration with transition
  };

  const direction =
    prevIndex < currentIndex ||
    (prevIndex === testimonials.length - 1 && currentIndex === 0)
      ? "left"
      : "right";

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="font-semibold text-3xl lg:text-5xl lg:w-[60%]">
          Success Stories from Our Happy Clients
        </p>
      </div>

      <div className="relative w-full lg:w-[50%] overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out`}
          style={{
            transform: isSliding
              ? direction === "left"
                ? "translateX(-100%)"
                : "translateX(100%)"
              : "translateX(0%)",
          }}
        >
          {/* Previous Testimonial */}
          <div className="w-full flex-shrink-0 px-4 py-6">
            <TestimonialContent testimonial={testimonials[prevIndex]} />
          </div>

          {/* Current Testimonial */}
          <div className="w-full flex-shrink-0 px-4 py-6">
            <TestimonialContent testimonial={testimonials[currentIndex]} />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => slideTo(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialContent({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <div className="flex items-center gap-1 text-yellow-400 mt-4">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <FaStar size={25} key={i} />
          ))}
      </div>

      <p className="text-xl text-center font-semibold mt-4">
        "{testimonial.quote}"
      </p>

      <div className="mt-8 flex gap-4 bg-white rounded-full px-2 pr-8 py-2 shadow-lg">
        <Image
          height={100}
          width={100}
          src="/assets/images/headshot.jpg"
          alt="headshots"
          className="rounded-full min-w-[60px] max-w-[60px] max-h-[60px] min-h-[60px]"
        />

        <div className="flex flex-col justify-center gap-1">
          <p className="text-sm font-semibold text-gray-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-700 -mt-1">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}
