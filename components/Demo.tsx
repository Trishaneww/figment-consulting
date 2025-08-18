import React from "react";
import styles from "../styles/landing.module.scss";
import Link from "next/link";
import Image from "next/image";

const Demo = () => {
  return (
    <div className={styles.demoContainer}>
      <div className={styles.textContainer}>
        <p className={styles.demoTag}>Available only until Sept 21</p>
        <p className={styles.demoHeader}>
         Grow Your Store This Summer — at a Special Rate
        </p>
        <p className={styles.demoSubheader}>
          Take advantage of our limited openings to get a free consultation and expert guidance on scaling your eCommerce store. Let&#39;s build your brand, reach more customers, and increase sales — all with no upfront risk.
        </p>

        <Link type="button" href="/contact" className={styles.demoButton}>
          Talk to our team
        </Link>
      </div>

      <Image
        width={2048 / 4.3}
        height={2192 / 4.3}
        src="/assets/images/hero.webp"
        alt="amazon dashboard"
        className={styles.demoImage}
      />
    </div>
  );
};

export default Demo;
