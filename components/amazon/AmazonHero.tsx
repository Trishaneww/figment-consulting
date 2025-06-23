import React from 'react'
import "../../styles/global.scss";

const AmazonHero = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full py-32 px-6 z-20 bg-[#FAFAFA]">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="tracking-widest text-gray-500 font-semibold text-sm">
          SERVICES
        </p>
        <p className="font-medium text-3xl lg:text-[2.5rem] secondary">
          Flexible plans. Scalable <span className="italic">growth.</span>
        </p>
        <p className="">
          From launch to scale, we’ve got you covered at every stage.
        </p>
      </div>
    </div>
  )
}

export default AmazonHero