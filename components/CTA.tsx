import React from "react";
import styles from "../styles/landing.module.scss";
import Link from "next/link";

const CTA = () => {
  return (
    <div className={styles.ctaContainer}>
      <p className={styles.ctaHeader}>
        Reach more customers <br /> with a growth specialist
      </p>
      <p className={styles.ctaSubheader}>
        We&#39;ll help your store grow, attract more buyers, and boost sales —
        all while you focus on running your business.
      </p>
      <Link
        type="button"
        href="https://calendly.com/trishane-wizeconsulting/30min"
        target="_blank"
        className={styles.ctaButton}
      >
        Book a consultation
      </Link>
    </div>
  );
};

export default CTA;
