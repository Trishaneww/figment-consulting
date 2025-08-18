import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import "../styles/global.scss";
import styles from '@/styles/landing.module.scss'

const Footer = () => {
  return (
    <div className="flex flex-col pt-24 pb-12 px-6 overflow-x-hidden items-center bg-[#FAFAFA] w-full">
      <div className="flex flex-col gap-12 lg:gap-2 flex-wrap lg:flex-row justify-between lg:w-[80%] border-b-[1px] border-b-[#171717] pb-12">
        <section className="flex flex-col items-start justify-start gap-2  lg:max-w-[380px] text-[#171717]">
          <p className="text-3xl lg:text-4xl mb-2 secondary font-medium">
            Lets <span className="italic">scale</span> your online store today
          </p>
          <p className="text-base text-[#171717] mb-4">
            Elevate your business with expert insights, tailored strategies, and unwavering support designed
          </p>
          <Link
            href="/contact"
            className={styles.demoButton}
            aria-label="Link leads to contact page"
          >
            <p>Get Started</p>
            <ArrowRight className="group-hover:ml-2 duration-200" />
          </Link>
        </section>
        <section className="flex flex-col lg:flex-row">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 text-[#171717] w-full">
            <div className="flex gap-4">
              {/* <p>4</p> */}
              <div className="flex flex-col">
                <ul className="text-[#171717] text-base flex flex-col gap-2">
                  <li className="secondary text-[1.2rem] font-semibold text-[#171717]">
                    Company
                  </li>
                  <li>
                    <Link href="/#services" aria-label="navigation link">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" aria-label="navigation link"></Link>
                    Pricing
                  </li>
                  <li>
                    <Link href="/casestudies" aria-label="navigation link">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" aria-label="navigation link">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" aria-label="navigation link">
                      Get a Free Audit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col">
                <ul className="text-[#171717] text-base flex flex-col gap-2">
                  <li className="secondary text-[1.2rem] font-semibold text-[#171717]">
                    Contact
                  </li>
                  <li>
                    <Link
                      href="mailto:trishane@wizeconsulting.ca"
                      target="_blank"
                      aria-label="Email us now!"
                    >
                      trishane@wizeconsulting.ca
                    </Link>
                  </li>
                  <li>(647)-472-4119</li>
                  <li>
                    <Link
                      href="https://www.instagram.com/wizeconsulting_"
                      target="_blank"
                      aria-label="View more of our work on instagram"
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="lg:w-[80%] flex gap-2 text-[#171717] text-sm pt-8">
        <p>@2025 WIZE CONSULTING</p>
        <p>ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
