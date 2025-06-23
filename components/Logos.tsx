import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <div className="flex items-center justify-center w-full z-20 bg-[#FAFAFA] py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-content-center">
        <Image
          width={120}
          height={120}
          src="/assets/images/logo10.png"
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
          src="/assets/images/logo7.png"
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
          src="/assets/images/logo3.png"
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
          src="/assets/images/logo6.png"
          alt="logo carousel"
          className="filter grayscale"
        />
        
         <Image
          width={120}
          height={120}
          src="/assets/images/logo10.png"
          alt="logo carousel"
          className="filter grayscale"
        />
      </div>
    </div>
  );
};

export default Logos;
