import Image from "next/image";
import React from "react";
import '../styles/global.scss';

const Projects = () => {
  return (
    <div className="flex flex-col items-center px-6 py-14 lg:py-32 bg-gray-100 w-full z-20">
      <div className="lg:w-[68%] flex flex-col gap-2 items-start justify-center text-left">
        <p className="font-semibold tracking-widest text-sm">
          CASE STUDIES
        </p>
        <p className="lg:w-[70%] text-3xl lg:text-[2.5rem] secondary font-medium">
          See how brands made <span className="italic">impact</span> through our collaboration
        </p>
      </div>

      <section className="flex flex-col lg:w-[68%] lg:min-w-[1000px] gap-20 mt-12">
        <div className="flex flex-col lg:flex-row gap-2 rounded-2xl shadow-xl overflow-hidden bg-[#FAFAFA] lg:h-[440px]">
          <div className="relative flex overflow-hidden lg:h-[480px] lg:w-[48%]">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/services1.avif"
              alt="service image"
              className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
            />
          </div>

          <div className="flex flex-col justify-center px-6 lg:px-12 mt-6 lg:mt-0">
            <p className="font-bold">Logepsum</p>
            <p className="font-medium text-2xl lg:text-3xl mt-2 secondary">
              Nuvé’s rebrand driving 70% sales growth in just 2 years
            </p>

            <ul className="hidden lg:flex justify-between w-[80%] mt-16">
              <li className="flex flex-col items-start gap-1">
                <p className="text-2xl lg:text-3xl secondary font-semibold">70%</p>
                <p className="text-gray-500">Increase in Sales</p>
              </li>

              <li className="flex flex-col items-start gap-1">
                <p className="text-2xl lg:text-3xl secondary font-semibold">70%</p>
                <p className="text-gray-500">Increase in Sales</p>
              </li>

              <li className="flex flex-col items-start gap-1">
                <p className="text-2xl lg:text-3xl secondary font-semibold">70%</p>
                <p className="text-gray-500">Increase in Sales</p>
              </li>
            </ul>

            <div className="flex gap-2 items-center mt-4 pt-4 border-t-[1px] border-gray-200 pb-6 ">
              <div className="px-4 h-[35px] flex items-center justify-center rounded-full border-[1.4px] border-gray-300">
                <p className="text-sm">Ad Management</p>
              </div>
              <div className="px-4 h-[35px] flex items-center justify-center rounded-full border-[1.4px] border-gray-300">
                <p className="text-sm">Consulting</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 rounded-2xl shadow-xl overflow-hidden bg-[#FAFAFA] lg:h-[440px]">
          <div className="relative flex overflow-hidden lg:h-[480px] lg:w-[48%]">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/services3.avif"
              alt="service image"
              className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
            />
          </div>

          <div className="flex flex-col justify-center px-6 lg:px-12 mt-6 lg:mt-0">
            <p className="font-bold">Logepsum</p>
            <p className="font-medium text-2xl lg:text-3xl mt-2 secondary">
              Nuvé’s rebrand driving 70% sales growth in just 2 years
            </p>

            <ul className="hidden lg:flex justify-between w-[80%] mt-16">
              <li className="flex flex-col items-start gap-1">
                <p className="text-2xl lg:text-3xl secondary font-semibold">70%</p>
                <p className="text-gray-500">Increase in Sales</p>
              </li>

              <li className="flex flex-col items-start gap-1">
                <p className="text-2xl lg:text-3xl secondary font-semibold">70%</p>
                <p className="text-gray-500">Increase in Sales</p>
              </li>

              <li className="flex flex-col items-start gap-1">
                <p className="text-2xl lg:text-3xl secondary font-semibold">70%</p>
                <p className="text-gray-500">Increase in Sales</p>
              </li>
            </ul>

            <div className="flex gap-2 items-center mt-4 pt-4 border-t-[1px] border-gray-200 pb-6 ">
              <div className="px-4 h-[35px] flex items-center justify-center rounded-full border-[1.4px] border-gray-300">
                <p className="text-sm">Ad Management</p>
              </div>
              <div className="px-4 h-[35px] flex items-center justify-center rounded-full border-[1.4px] border-gray-300">
                <p className="text-sm">Consulting</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 rounded-2xl shadow-xl overflow-hidden bg-[#FAFAFA] lg:h-[440px]">
          <div className="relative flex overflow-hidden lg:h-[480px] lg:w-[48%]">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/services2.avif"
              alt="service image"
              className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
            />
          </div>

          <div className="flex flex-col justify-center px-6 lg:px-12 mt-6 lg:mt-0">
            <p className="font-bold">Logepsum</p>
            <p className="font-medium text-2xl lg:text-3xl mt-2 secondary">
              Nuvé’s rebrand driving 70% sales growth in just 2 years
            </p>

            <ul className="hidden lg:flex justify-between w-[80%] mt-16">
              <li className="flex flex-col items-start gap-1">
                <p className="text-2xl lg:text-3xl secondary font-semibold">70%</p>
                <p className="text-gray-500">Increase in Sales</p>
              </li>

              <li className="flex flex-col items-start gap-1">
                <p className="text-2xl lg:text-3xl secondary font-semibold">70%</p>
                <p className="text-gray-500">Increase in Sales</p>
              </li>

              <li className="flex flex-col items-start gap-1">
                <p className="text-2xl lg:text-3xl secondary font-semibold">70%</p>
                <p className="text-gray-500">Increase in Sales</p>
              </li>
            </ul>

            <div className="flex gap-2 items-center mt-4 pt-4 border-t-[1px] border-gray-200 pb-6 ">
              <div className="px-4 h-[35px] flex items-center justify-center rounded-full border-[1.4px] border-gray-300">
                <p className="text-sm">Ad Management</p>
              </div>
              <div className="px-4 h-[35px] flex items-center justify-center rounded-full border-[1.4px] border-gray-300">
                <p className="text-sm">Consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
