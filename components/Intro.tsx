import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/global.scss";
import styles from "../styles/landing.module.scss";

const Intro = () => {
  return (
    // <div className="flex flex-col items-center w-full py-14 lg:py-32 z-20 bg-[#FAFAFA] px-6">
    //   <div className="w-full lg:w-[74%] h-[220px] lg:h-[440px] relative overflow-hidden rounded-lg">
    //     <Image
    //       src="/assets/images/intro.avif"
    //       alt="Sample"
    //       layout="fill"
    //       objectFit="cover"
    //       objectPosition="center"
    //       priority
    //     />
    //   </div>

    //   <div className="flex flex-col lg:flex-row gap-12 justify-between lg:w-[74%] mt-12">
    //     <section className="flex flex-col gap-4 lg:w-[60%]">
    //       <p className="text-3xl lg:text-[3.4rem] font-medium lg:w-[90%] secondary">
    //         Grow <span className="italic">smarter.</span> Scale <span className="italic">faster.</span> Sell <span className="italic">everywhere.</span>
    //       </p>
    //       <p className="text-base lg:w-[85%]">
    //         From Amazon to Shopify, we help eCommerce brands break barriers. Through high-converting websites, expert ad strategy, and multi-channel growth plans, Wize turns your store into a scalable sales machine.
    //       </p>
    //       {/* <Link href="tel:416-995-4979">
    //         <Button className="font-semibold h-[45px] w-[160px] text-sm border-[1px] border-gray-700 bg-slate-950 shadow-slate-400 shadow-lg text-white mt-4">
    //           Get a free audit
    //         </Button>
    //       </Link> */}
    //        {/* <Link href="/contact" className="flex items-center gap-1 text-base text-slate-950 group" aria-label="Link leads to contact page">
    //         <p>Get Started</p>
    //         <ArrowRight className="group-hover:ml-2 duration-200" />
    //         </Link> */}
    //               <Link type="button" className={styles.heroButton} href="/">
    //         Get started
    //       </Link>
    //     </section>

    //     <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:w-1/2">
    //       <div className="w-full flex flex-col items-start gap-6 lg:h-[150px]">
    //         <p className="font-medium text-5xl lg:text-7xl secondary">50+</p>
    //         <p>Brands Transformed</p>
    //       </div>

    //       <div className="w-full flex flex-col items-start gap-6 lg:h-[150px]">
    //         <p className="font-medium text-5xl lg:text-7xl secondary">4x</p>
    //         <p>Average ROI on Campaigns</p>
    //       </div>

    //       <div className="w-full flex flex-col items-start gap-6 lg:h-[150px]">
    //         <p className="font-medium text-5xl lg:text-7xl secondary">80k+</p>
    //         <p>Growth in monthly Amazon sales</p>
    //       </div>

    //       <div className="w-full flex flex-col items-start gap-6 lg:h-[150px]">
    //         <p className="font-medium text-5xl lg:text-7xl secondary">3x</p>
    //         <p>Boost in product visibility</p>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    <section className={styles.servicesSection}>
      <div className={styles.introContainer}>
        <p className={styles.introHeader}>
          Grow <span className="italic">smarter.</span> Scale{" "}
          <span className="italic">faster.</span> Sell{" "}
          <span className="italic">everywhere.</span>
        </p>

        <div className={styles.introSection}>
          <div className={styles.introCard}>
            <p className={styles.cardHeader}>Scalable Growth Strategies</p>
            <p className={styles.cardSubheader}>
              We don&#39;t just build your online store and leave you on your
              own. Our focus is on creating a foundation that grows with your
              business — whether that means improving your website, optimizing
              your eCommerce platform, or guiding you onto Amazon.
            </p>
          </div>

          <div className={styles.introCard}>
            <p className={styles.cardHeader}>Multi-Channel Expertise</p>
            <p className={styles.cardSubheader}>
              Your customers shop everywhere, so your business should be there
              too. We help you sell across multiple platforms — from your
              website to Amazon and beyond — making sure you reach more people
              without spreading yourself thin.
            </p>
          </div>

          <div className={styles.introCard}>
            <p className={styles.cardHeader}>Flexible Support That Fits You</p>
            <p className={styles.cardSubheader}>
              Every business has different needs. Some clients want us to take
              the wheel, while others prefer guidance so they can stay hands-on.
              We offer both, so you get the exact level of support you need to
              move forward with confidence.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div className={styles.reverseServiceContainer}>
          <div className={styles.textContainer}>
            <p className={styles.serviceHeader}>
              Managed eCommerce Solutions to Grow With Confidence
            </p>
            <div className={styles.serviceDesc}>
              <p className={styles.serviceDescTitle}>
                Your Store, Fully Managed
              </p>
              <p>
                We&#39;ll build, maintain, and improve your online store so it&#39;s
                always ready to grow with your business.
              </p>
            </div>

            <div className={styles.serviceDesc}>
              <p className={styles.serviceDescTitle}>
                More Time for What Matters
              </p>
              <p>
                While we run the backend, you can focus on your customers and
                scaling your business with confidence.
              </p>
            </div>

            <div className={styles.serviceDesc}>
              <p className={styles.serviceDescTitle}>
                Expand Into New Sales Channels
              </p>
              <p>
                Whether it&#39;s Amazon, Shopify, or beyond, we make it easy to scale into new platforms and reach more customers.
              </p>
            </div>
          </div>

          <Image
            width={2048 / 3.5}
            height={2192 / 3.5}
            src="/assets/images/service1.webp"
            alt="amazon dashboard"
            className={styles.serviceImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
