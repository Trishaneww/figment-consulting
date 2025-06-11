import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center text-slate-50 bg-[#181818] w-full py-44 px-4">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="font-semibold text-3xl lg:text-5xl lg:w-[60%]">
          Consistent Growth in Just a Simple 3-Steps
        </p>
        <p className="lg:w-[50%] mt-4">
          We follow a structured, data-driven process to ensure your marketing
          strategy delivers consistent growth and measurable results.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:w-[70%] mt-12">
        <div className="flex flex-col gap-2 w-full lg:w-1/3 items-center text-center">
          <div className="relative bg-transparent flex items-baseline justify-baseline px-6">
            <h1 className="text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-500 via-purple-500 to-[#181818]">
              7
            </h1>
            {/* Fade-to-black overlay */}
            <div className="absolute bottom-14 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-[#181818] pointer-events-none" />
          </div>
          <p className="font-semibold text-xl -mt-16 mb-2">Onboarding strategy</p>
          <p>
            We follow a structured, data-driven process to ensure your marketing
            strategy delivers consistent growth and measurable results.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full lg:w-1/3 items-center text-center">
          <div className="relative bg-transparent flex items-baseline justify-baseline px-6">
            <h1 className="text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-500 via-purple-500 to-[#181818]">
              7
            </h1>
            {/* Fade-to-black overlay */}
            <div className="absolute bottom-14 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-[#181818] pointer-events-none" />
          </div>
          <p className="font-semibold text-xl -mt-16 mb-2">Onboarding strategy</p>
          <p>
            We follow a structured, data-driven process to ensure your marketing
            strategy delivers consistent growth and measurable results.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full lg:w-1/3 items-center text-center">
          <div className="relative bg-transparent flex items-baseline justify-baseline px-6">
            <h1 className="text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-500 via-purple-500 to-[#181818]">
              7
            </h1>
            {/* Fade-to-black overlay */}
            <div className="absolute bottom-14 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-[#181818] pointer-events-none" />
          </div>
          <p className="font-semibold text-xl -mt-16 mb-2">Onboarding strategy</p>
          <p>
            We follow a structured, data-driven process to ensure your marketing
            strategy delivers consistent growth and measurable results.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Steps;
