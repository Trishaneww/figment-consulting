import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA]">
      <Navbar2 />
      {/* <Image
        src="/assets/images/contactpage.avif"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 relative"
        priority
      /> */}

      {/* <div className="absolute inset-0 bg-black/10 z-10" /> */}
      <ContactForm />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Contact;
