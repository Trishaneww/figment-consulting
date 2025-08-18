import Link from "next/link";
import Image from "next/image";

import { pricing, pricingOptions } from "@/data";
import { ArrowRight, Check, CircleCheck } from "lucide-react";
import { Button } from "../ui/button";

import "../../styles/global.scss";
import styles from "@/styles/pricing.module.scss";

const Pricing = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full pt-12 lg:pt-32 lg:pb-4 px-6 z-20 bg-[#FAFAFA]">
      <div className="flex flex-col gap-2 lg:items-center justify-center text-center">
        <p className="font-semibold text-[2.5rem] leading-[2.8rem] lg:text-[3.8rem] secondary">
          Flexible plans. Scalable <span className="italic">growth.</span>
        </p>
        <p className="mt-4 lg:text-xl lg:w-[50%]">
          Flexible options to help you scale your store, reach new sales channels, and get the support you need — no matter where you are in your growth journey.
        </p>
      </div>

      <div className={styles.pricingSection}>
        {pricingOptions.slice(0, 2).map((option, idx) => (
          <div className={styles.pricingCard} key={idx}>
            <div className={styles.pricingContainer}>
              <Link
                href="/pricing"
                className={styles.pricingTitle}
                aria-label="Link leads to contact page"
              >
                <p>{option.name}</p>
              </Link>

              <p className={styles.pricingDesc}>
                Unlimited design requests for companies that need ongoing
                support in multiple fields of design.
              </p>



              <ul className={styles.featuresList}>
                {option.features.slice(0, 6).map((feature, idx) => (
                  <li key={idx}>
                    <Check size={15} className={styles.icon} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link type="button" className={styles.pricingButton} href="/">
                Get Started
              </Link>
            </div>
            <Image
              src="/assets/images/pricing-card.png"
              width={1486}
              height={494}
              alt="pricing footer image"
            />
          </div>
        ))}

        {pricingOptions.slice(2, 3).map((option, idx) => (
          <div className={styles.premiumPricingCard} key={idx}>
            <div className={styles.pricingContainer}>
              <Link
                href="/pricing"
                className={styles.pricingTitle}
                aria-label="Link leads to contact page"
              >
                <p>{option.name}</p>
              </Link>

              <p className={styles.pricingDesc}>
                Unlimited design requests for companies that need ongoing
                support in multiple fields of design.
              </p>

  

              <ul className={styles.featuresList}>
                {option.features.slice(0, 6).map((feature, idx) => (
                  <li key={idx}>
                    <Check size={15} className={styles.icon} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link type="button" className={styles.pricingButton} href="/">
                Talk to our team
              </Link>
            </div>
            <Image
              src="/assets/images/pricing-card.png"
              width={1486}
              height={494}
              alt="pricing footer image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
