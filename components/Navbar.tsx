"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "./ui/button";
import "../styles/global.scss";
import { navItems } from "@/data";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up or near top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        flex w-full justify-between items-center navbar gap-8 px-4 lg:w-[68%] text-black py-6 z-80 fixed overflow-hidden
        transition-all duration-300 ease-in-out
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4"
        }
      `}
    >
      <div className="flex gap-8 items-center w-full lg:w-1/3">
        <Link
          href="/"
          className={cn(
            "relative dark:text-slate-50 items-center flex space-x-1 text-slate-50"
          )}
          aria-label="homepage link"
        >
          {/* <Image
            width={60}
            height={60}
            src="/assets/images/logo.png"
            alt="figment studios logo"
          /> */}
          <p className="text-lg lg:text-xl font-extrabold">
            Wize Consulting
          </p>
        </Link>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-6 w-1/3">
        {navItems.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className={cn(
              "relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-50 font-semibold text-base"
            )}
            aria-label="navigation link"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex gap-8 items-center lg:w-1/3 justify-end">
          <Button className="font-semibold h-[45px] w-[160px] text-base border-[1px] border-gray-700 bg-white rounded-xl text-black">
            Get a free audit
          </Button>
      </div>

      <nav className="lg:hidden bg-transparent z-40">
        <input type="checkbox" id="sidebar-active" />
        <label
          htmlFor="sidebar-active"
          className="open-sidebar-button text-gray-500 flex justify-center items-center rounded-lg border-[1px] border-gray-500 p-2 bg-white"
        >
          <Menu size={20} />
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container ">
          <label
            htmlFor="sidebar-active"
            className="close-sidebar-button relative left-80 text-gray-500 mt-9 flex justify-center items-center rounded-lg border-[1px] border-gray-500 p-2 bg-white"
          >
            <X size={20} />
          </label>
          <div className="flex flex-col gap-2 w-full text-center font-semibold mt-12">
            {/* <Link href="/about" className="text-black w-full text-lg" aria-label="navigation link">About</Link> 
          {services.map((service, idx) => (
            <Link href={service.link} className="text-black -mt-4 w-full text-lg" key={idx}>{service.title}</Link>
          ))} */}
            <Link
              href="/contact"
              className="text-black -mt-4 w-full text-lg"
              aria-label="navigation link"
            >
              Contact Us
            </Link>
            <Link href="tel:416-995-4979">
              <Button className="h-[48px] w-full text-base bg-blue-500 text-white">
                Call us now
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
