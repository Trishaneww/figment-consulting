// import { Facebook, Instagram, Twitter } from "lucide-react";
// import Link from "next/link";
// import React from "react";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <div className="flex flex-col text-white w-full px-2 lg:px-80 bg-black py-16">
//       <div className="flex flex-col border-b-[0.5px] border-gray-300 pb-10">
//         <section className="flex flex-wrap justify-between w-full pb-12 px-6">
//           <div className="flex flex-col mt-8 lg:mt-0 lg:max-w-[400px]">
//             <p className="font-semibold text-xl mb-4">Newsletter</p>
//             <p>Drop us your email and we will get back to you asap!</p>
//             <form className="relative flex flex-col lg:flex-row items-start justify-center mt-6 gap-2">
//               <Input
//                 placeholder="name@gmail.com"
//                 className="h-[50px] w-full border-[1px] border-gray-600 rounded-full text-white placeholder:text-white"
//               />
//               <Button className="flex justify-center items-center absolute right-10 text-base bg-transparent h-[50p] w-[50px] text-white mt-1">
//                 Subscribe
//               </Button>
//             </form>
//           </div>

//           <div className="flex flex-col mt-8 lg:mt-0">
//             <p className="font-semibold mb-4 text-xl">Company</p>
//             <ul className="flex flex-col gap-2">
//               <li>Burlington</li>
//               <li>Etobicoke</li>
//               <li>Hamilton</li>
//               <li>Toronto</li>
//               {/* {services.map((service, idx) => (
//               <li key={idx}>
//                 <Link href={`${service.link}`}>{service.title}</Link>
//               </li>
//             ))} */}
//             </ul>
//           </div>

//           <div className="flex flex-col mt-8 lg:mt-0">
//             <p className="font-semibold mb-4 text-xl">Services</p>
//             <ul className="flex flex-col gap-2">
//               <li>Mississauga</li>
//               <li>Oakville</li>
//               <li>Burlington</li>
//               <li>Etobicoke</li>
//               <li>Hamilton</li>
//               <li>Toronto</li>
//             </ul>
//           </div>

//           <div className="flex flex-col mt-8 lg:mt-0">
//             <p className="font-semibold mb-4 text-2xl">Contact</p>
//             <ul className="flex flex-col gap-2">
//               <li>
//                 <Link href="tel:416-995-4979">(416) 995-4979</Link>
//               </li>
//               <li>
//                 <Link href="mailto:eastlinemechanical@gmail.com">
//                   eastlinemechanical@gmail.com
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </section>

//         <section className="flex justify-center items-center gap-2">
//           <Image
//             width={200}
//             height={200}
//             src="/assets/images/logo.png"
//             alt="figment consulting logo"
//             className="max-w-[60px] md:max-w-[600px]"
//           />
//           <p className="text-3xl lg:text-7xl font-semibold">
//             <span className="font-bold">FGMT</span> Consulting
//           </p>
//         </section>
//       </div>

//       <section className="flex justify-between mt-6 gap-6 px-6 lg:px-0 text-sm">
//         <p className="">@2025 Figment IT Consulting</p>
//         <div className="flex items-center gap-4">
//           <p>Privacy Policy</p>
//           <p>Terms & Conditions</p>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Footer;

import React from "react";
import { Button } from "./ui/button";
import "../styles/global.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-[99%] rounded-xl bg-black py-22 text-white gap-4 px-6">
      <p className="text-lg font-semibold">WIZE SOLUTIONS</p>
      <p className="font-semibold text-3xl lg:text-6xl lg:w-[40%] text-center">
        Framer Templates & Resources for Founders.
      </p>
      <p className="font-semibold text-lg text-center w-[80%]">
        Go from idea to a live website in just a few hours.
      </p>
      <div className="flex gap-2 items-center mt-8">
        <Button className="font-bold border-[0.75px] border-gray-500 h-[48px] w-[200px]">
          Explore Remix UI Kit
        </Button>
        <Button className="bg-white text-black font-bold h-[48px]">
          View Template
        </Button>
      </div>

      <div className="flex justify-center items-center w-full py-2 relative lg:-mt-20">
        <p className="prompt-medium text-[9rem] lg:text-[34rem] text-[#343434aa]">
          WIZE
        </p>

        <div className="flex justify-center items-center h-full w-full absolute gap-2">
          <div className="relative flex overflow-hidden h-[60px] lg:h-[165px] w-[60px] lg:w-[165px] rounded-xl">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/services1.avif"
              alt="service image"
              className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
            />
          </div>
          <div className="relative flex overflow-hidden h-[60px] lg:h-[165px] w-[60px] lg:w-[165px] rounded-xl">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/services1.avif"
              alt="service image"
              className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
            />
          </div>
          <div className="relative flex overflow-hidden h-[60px] lg:h-[165px] w-[60px] lg:w-[165px] rounded-xl">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/services1.avif"
              alt="service image"
              className="hover:scale-110 duration-500 transition-transform h-full w-full z-10"
            />
          </div>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row justify-between text-slate-50 lg:-mt-22 w-[65%]">
        <div className="flex flex-col items-center text-center lg:text-base font-semibold mt-8 lg:mt-0">
          <p className="font-semibold mb-4 text-lg text-gray-400">Company</p>
          <ul className="flex flex-col gap-2">
            <li>Burlington</li>
            <li>Etobicoke</li>
            <li>Hamilton</li>
            <li>Toronto</li>
            <li>Hamilton</li>
            <li>Toronto</li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center lg:text-base font-semibold mt-8 lg:mt-0">
          <p className="font-semibold mb-4 text-lg text-gray-400">Company</p>
          <ul className="flex flex-col gap-2">
            <li>Burlington</li>
            <li>Etobicoke</li>
            <li>Hamilton</li>
            <li>Toronto</li>
            <li>Hamilton</li>
            <li>Toronto</li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center lg:text-base font-semibold mt-8 lg:mt-0">
          <p className="font-semibold mb-4 text-lg text-gray-400">Company</p>
          <ul className="flex flex-col gap-2">
            <li>Burlington</li>
            <li>Etobicoke</li>
            <li>Hamilton</li>
            <li>Toronto</li>
            <li>Hamilton</li>
            <li>Toronto</li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center lg:text-base font-semibold mt-8 lg:mt-0">
          <p className="font-semibold mb-4 text-lg text-gray-400">Company</p>
          <ul className="flex flex-col gap-2">
            <li>Burlington</li>
            <li>Etobicoke</li>
            <li>Hamilton</li>
            <li>Toronto</li>
            <li>Hamilton</li>
            <li>Toronto</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
