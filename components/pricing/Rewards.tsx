import Image from "next/image";
import React from "react";
import styles from "@/styles/pricing.module.scss";
import Link from "next/link";

const Rewards = () => {
  return (
    <section className={styles.rewardsSection}>
      <div className={styles.rewardContainer}>
        <div className={styles.textContainer}>
          <p className={styles.rewardHeader}>
            Maximize Your Business Potential With a Partner Who Delivers Results
          </p>
          <div className={styles.rewardDesc}>
            <p>
             We help your business thrive by building high-converting stores and scaling across multiple sales channels — delivering real results every step of the way.
            </p>
          </div>

          <Link
            type="button"
            href="https://calendly.com/trishane-wizeconsulting/30min"
            target="_blank"
            className={styles.rewardButton}
          >
            Get started
          </Link>
        </div>

        <Image
          width={2048 / 3.5}
          height={2192 / 3.5}
          src="/assets/images/service2.webp"
          alt="amazon dashboard"
          className={styles.rewardImage}
        />
      </div>
    </section>
  );
};

export default Rewards;
