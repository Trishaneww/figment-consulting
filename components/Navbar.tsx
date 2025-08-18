"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import "../styles/global.scss";
import { navItems } from "@/data";
import styles from "@/styles/landing.module.scss";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <div
      className={`
         flex w-full justify-center items-center navbar gap-8 px-4  text-black py-6 z-80 fixed 
        transition-all duration-300 ease-in-out bg-[#FAFAFA] border-b-[1px] border-slate-200`}
    >
      <div className="flex w-full justify-between items-center navbar gap-8 px-4 lg:w-[75%]">
        <div className="flex gap-8 items-end w-full">
          <Link
            href="/"
            className={cn(
              "relative  items-center flex space-x-1 text-slate-950"
            )}
            aria-label="homepage link"
          >
            <p className="text-xl lg:text-2xl font-extrabold secondary">
              Wize Consulting
            </p>
          </Link>

          <div className="hidden lg:flex justify-center items-end gap-6">
            {navItems.slice(0, 3).map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                className={cn(
                  "relative items-center hidden lg:flex space-x-1 text-slate-950 text-base font-semibold"
                )}
                aria-label="navigation link"
              >
                {item.title}
              </Link>
            ))}
            {/* <NavigationMenu className="bg-transparent">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "relative items-center hidden lg:flex space-x-1 text-slate-950 text-base font-medium"
                    )}
                    aria-label="navigation link"
                  >
                    Core Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-[#FAFAFA] flex flex-col gap-3 text-base py-4 pr-12 font-medium">
                    <Link href="/amazon">Amazon Management</Link>
                    <Link href="/ecommerce">Ecommerce Development</Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu> */}

            {navItems.slice(3, 4).map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                className={cn(
                  "relative items-center hidden lg:flex space-x-1 text-slate-950 text-base font-semibold"
                )}
                aria-label="navigation link"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.navbuttonContainer}>
          <Link
            href="https://calendly.com/trishane-wizeconsulting/30min"
            target="_blank"
          >
            <Button className={styles.navButton}>Book a consultation</Button>
          </Link>
          <Link href="/contact">
            <Button className={styles.demoButton}>Get started</Button>
          </Link>
        </div>
      </div>

      <nav className="lg:hidden bg-transparent z-40">
        <input type="checkbox" id="sidebar-active" />
        <label
          htmlFor="sidebar-active"
          className="open-sidebar-button text-black"
        >
          <Menu size={25} />
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <div className="w-full">
            <header className="flex justify-between w-full pt-6 px-[20px]">
              <p className="secondary text-black text-xl font-extrabold">
                Wize Consulting
              </p>
              <label
                htmlFor="sidebar-active"
                className="close-sidebar-button relative text-black"
              >
                <X size={22} />
              </label>
            </header>

            <div className="flex flex-col w-full mt-6">
              <Link
                href="/"
                className="text-black w-full text-base font-medium"
                aria-label="navigation link"
              >
                Home
              </Link>
              {navItems.map((item, idx) => (
                <Link
                  href={item.href}
                  className="text-black text-base font-medium"
                  key={idx}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="https://calendly.com/trishane-wizeconsulting/30min"
            target="_blank"
          >
            <Button className="rounded-full w-full py-6 text-base self-end">
              Book your consulation
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
