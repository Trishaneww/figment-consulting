import Image from "next/image";
import React from "react";
import "../styles/global.scss";


const Process = () => {
  return (
    <div className="flex flex-col items-center px-6 py-14 lg:py-32 bg-[#FAFAFA] w-full z-20">
      <div className="lg:w-[68%] flex flex-col gap-2 items-start justify-center text-left">
        <p className="font-semibold tracking-widest text-sm text-gray-500">HOW WE WORK</p>
        <p className="lg:w-[70%] text-3xl lg:text-[2.5rem] secondary font-medium">
          A  <span className="italic">structured</span> approach to web design and development
        </p>
      </div>


      <div className="flex flex-col w-full lg:w-[68%] gap-2 mt-12">
        <section className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <p className="font-semibold lg:w-[30%]">Onboarding</p>

            <div className="flex flex-col gap-4 lg:w-[70%]">
                <p className="font-semibold">Today</p>
                <div className="w-full h-[400px] bg-white border-[1px] border-gray-200 shadow-lg rounded-lg">
                </div>
            </div>
        </section>
      </div>

   
    </div>
  );
};

export default Process;