import Image from "next/image";
import React from "react";
import "../styles/global.scss";
import { processData } from "@/data";

const Process = () => {
  return (
    <div className="flex flex-col items-center px-6 py-14 lg:py-32 bg-[#FAFAFA] w-full z-20">
      <div className="lg:w-[74%] flex flex-col gap-2 items-start justify-center text-left">
        <p className="font-semibold tracking-widest text-sm text-gray-500">
          HOW WE WORK
        </p>
        <p className="lg:w-[60%] text-3xl lg:text-[2.5rem] secondary font-medium">
          A <span className="italic">structured</span> approach to grow your
          online store
        </p>
      </div>

      <div className="flex flex-col w-full lg:w-[74%] gap-6 lg:gap-12 mt-12">
        {processData.map((process, idx) => (
          <section
            className="flex flex-col gap-2 lg:flex-row lg:justify-between"
            key={idx}
          >
            <p className="font-semibold lg:w-[25%]">{process.title}</p>

            <div className="flex flex-col gap-4 lg:w-[75%]">
              <p className="font-semibold text-gray-500">{process.duration}</p>
              <ul className="w-full bg-white border-[1px] border-gray-200 shadow-lg rounded-lg">
                {process.steps.map((step, idx) => (
                  <li
                    key={idx}
                    className="first:border-t-0 border-t-[1px] border-gray-200 py-4 px-6"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Process;
