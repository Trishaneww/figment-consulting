import { Check } from "lucide-react";
import React from "react";
import { InlineWidget } from "react-calendly";

const Book = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center w-[65%]">
      <section className="flex flex-col gap-2">
        <p>GET STARTED</p>
        <p className="text-3xl lg:text-5xl">Reserve your call today</p>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <Check size={18} />
            <p className="lg:text-lg">
              Tell us what you’re building and share your design
            </p>
          </li>

          <li className="flex gap-2 items-center">
            <Check size={18} />
            <p className="lg:text-lg">
              Tell us what you’re building and share your design
            </p>
          </li>

          <li className="flex gap-2 items-center">
            <Check size={18} />
            <p className="lg:text-lg">
              Tell us what you’re building and share your design
            </p>
          </li>
        </ul>
      </section>

      <div className="flex items-center justify-center w-full lg:h-[680px] lg:w-[500px] mt-12 rounded-lg overflow-hidden shadow-lg bg-red-200">
        <InlineWidget
          url="https://calendly.com/trishaneww/30min"
          styles={{ height: "100%", width: '100%' }}
        />
      </div>
    </div>
  );
};

export default Book;
