import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full z-20 py-12 px-6">
      <p className="text-[19px] font-medium w-[80%] lg:w-full">
        Chosen by Businesses Investing in Their Growth
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 place-content-center mt-4">
        <Image
          width={120}
          height={120}
          src="/assets/images/logo3.png"
          alt="logo carousel"
          className="filter grayscale"
        />

        <Image
          width={120}
          height={120}
          src="/assets/images/logo8.png"
          alt="logo carousel"
          className="filter grayscale"
        />

        <Image
          width={120}
          height={120}
          src="/assets/images/logo5.png"
          alt="logo carousel"
          className="filter grayscale"
        />

        <Image
          width={120}
          height={120}
          src="/assets/images/logo9.png"
          alt="logo carousel"
          className="filter grayscale"
        />

        <Image
          width={120}
          height={120}
          src="/assets/images/logo6.png"
          alt="logo carousel"
          className="filter grayscale"
        />


        <Image
          width={120}
          height={120}
          src="/assets/images/logo6.png"
          alt="logo carousel"
          className="filter grayscale lg:hidden"
        />
      </div>
    </div>
  );
};

export default Logos;
