import React from "react";
import { InlineWidget } from "react-calendly";

const Book = () => {
  return (
    <div className="flex flex-col items-center z-20 bg-[#FAFAFA] w-full py-14 lg:py-32 px-6">
      <div className="flex flex-col gap-2 lg:items-center justify-center lg:text-center">
        <p className="tracking-widest text-gray-500 font-semibold text-sm">
          BOOK A FREE 30 MINUTE CONSULTATION
        </p>
        <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
          Unlock your store’s <span className="italic">potential </span>
        </p>
        <p className="">
          Book a free strategy call and start scaling wizer today.
        </p>
      </div>

      <div className="flex items-center justify-center w-full h-[600px] lg:h-[680px] mt-4 rounded-lg overflow-hidden">
        <InlineWidget
          url="https://calendly.com/trishaneww/30min"
          styles={{ height: "100%", width: "1800px", boxShadow: "2rem" }}
        />
      </div>
    </div>
  );
};

export default Book;
