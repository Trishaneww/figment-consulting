import React from "react";
import "../styles/global.scss";
import styles from "../styles/landing.module.scss";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContentSection}>
        <div className={styles.textContainer}>
          <p className={styles.heroTag}>FOR BUSINESSES</p>
          <p className={styles.heroHeader}>
            Scale Your Online Store With <span className="italic">Growth</span>{" "}
            Experts.
          </p>
          <p className={styles.heroSubheader}>
            Elevate your business with expert insights, tailored strategies, and
            unwavering support designed
          </p>
          <div className={styles.buttonContainer}>
          <Link type="button" className={styles.heroButton} href="/contact">
            Get started
          </Link>
              <Link type="button" className={styles.demoButton} href="https://calendly.com/trishane-wizeconsulting/30min" target="_blank">
            Book a consultation
          </Link>

          </div>
        </div>

        <Image
          width={2048 / 3.5}
          height={2192 / 3.5}
          src="/assets/images/hero.webp"
          alt="amazon dashboard"
          className={styles.heroImage}
        />
      </div>

      {/* <div className={styles.benefitSection}>
        <div className={styles.firstBenefit}>
          <p className={styles.benefitTitle}>The best of chequing & saving</p>
          <p className={styles.benefitDesc}>
            Earn up to 2.75% in interest, with no everyday account fees. Plus,
            access your cash from ATMs Canada-wide and we’ll cover the fees up
            to $5.
          </p>
        </div>

        <div className={styles.benefit}>
          <p className={styles.benefitTitle}>The best of chequing & saving</p>
          <p className={styles.benefitDesc}>
            Earn up to 2.75% in interest, with no everyday account fees. Plus,
            access your cash from ATMs Canada-wide and we’ll cover the fees up
            to $5.
          </p>
        </div>

        <div className={styles.benefit}>
          <p className={styles.benefitTitle}>The best of chequing & saving</p>
          <p className={styles.benefitDesc}>
            Earn up to 2.75% in interest, with no everyday account fees. Plus,
            access your cash from ATMs Canada-wide and we’ll cover the fees up
            to $5.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
