import { ArrowRight, Check } from "lucide-react";
import styles from "../styles/landing.module.scss";
import Link from "next/link";
import Image from "next/image";

const PricingPreview = () => {
  return (
    <div className={styles.pricingSection}>
      <div className={styles.pricingContent}>
        <div className={styles.pricingInfo}>
          <p className={styles.pricingHeader}>
            Plans Designed to Grow With Your Business
          </p>
          <p className={styles.pricingSubheader}>
            Flexible options to help you scale your store, reach new sales
            channels, and get the support you need — no matter where you are in
            your growth journey.
          </p>
          <Link type="button" href="/pricing" className={styles.pricingButton}>
            Explore Our Plans
          </Link>
        </div>

        <div className={styles.pricingCard}>
          <div className={styles.pricingContainer}>
            <p className={styles.pricingTag}>FOR NEW STORES</p>
            <Link
              href="/pricing"
              className={styles.pricingTitle}
              aria-label="Link leads to contact page"
            >
              <p>Starter</p>
              <ArrowRight className="group-hover:ml-2 duration-200" />
            </Link>
            <ul className={styles.featuresList}>
              <li>
                <Check />
                20 hours of Listing Optimization
              </li>
              <li>
                <Check />
                Basic Conversion Rate Optimization review
              </li>
              <li>
                <Check />
                20 hours of Custom Store Development
              </li>
            </ul>
          </div>
          <Image
            src="/assets/images/pricing-card.png"
            width={1486}
            height={494}
            alt="pricing footer image"
          />
        </div>

        <div className={styles.premiumPricingCard}>
          <div className={styles.pricingContainer}>
            <p className={styles.pricingTag}>GROWING BRANDS</p>
            <Link
              href="/pricing"
              className={styles.pricingTitle}
              aria-label="Link leads to contact page"
            >
              <p>Premium</p>
              <ArrowRight className="group-hover:ml-2 duration-200" />
            </Link>
            <ul className={styles.featuresList}>
              <li>
                <Check />
                 40 hours of Listing Optimization
              </li>
              <li>
                <Check />
                Support for 2 eCommerce platforms
              </li>
              <li>
                <Check />
                  40 hours of Custom Store Development
              </li>
            </ul>
          </div>
          <Image
            src="/assets/images/pricing-card.png"
            width={1486}
            height={494}
            alt="pricing footer image"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPreview;
