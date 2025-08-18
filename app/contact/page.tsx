"use client";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import ContactForm from "@/components/ContactForm";
import Footer3 from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Toaster } from "sonner";

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA]">
      <Navbar />
      <ContactForm />
      <Footer3 />
      <Toaster />
    </div>
  );
};

export default Contact;
