import Image from "next/image";
import React from "react";
import "../styles/global.scss";
import styles from "../styles/landing.module.scss";
import Link from "next/link";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.reverseServiceContainer}>
        <div className={styles.textContainer}>
          <p className={styles.serviceHeader}>Guidance at Every Step</p>
          <div className={styles.serviceDesc}>
            <p className={styles.serviceDescTitle}>Learn as You Grow</p>
            <p>
              We don&#39;t just manage your store — we share insights so you
              understand what&#39;s working and why.
            </p>
          </div>

          <div className={styles.serviceDesc}>
            <p className={styles.serviceDescTitle}>Reach Out Anytime</p>
            <p>
              Questions come up, and we&#39;re here for them. You&#39;ll always
              have someone to lean on when you need answers.
            </p>
          </div>

          <div className={styles.serviceDesc}>
            <p className={styles.serviceDescTitle}>
              Talk to an Ecommerce Specialist
            </p>
            <p>
              You&#39;ll get direct access to experts who know how to scale
              stores and are ready to guide you personally.
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
      <div className={styles.serviceContainer}>
        <div className={styles.textContainer}>
          <p className={styles.serviceHeader}>
            We&#39;re Here to Help You Build, Grow, and Scale Your Online Business
          </p>
          <div className={styles.serviceDesc}>
            <p>
             From your first strategy call to expanding into new sales channels, we work alongside you to grow your business while you focus on what matters most.
            </p>
          </div>

          <Link type="button" className={styles.serviceButton} href="/contact">
            Get started
          </Link>
        </div>

        <Image
          width={2048 / 3.5}
          height={2192 / 3.5}
          src="/assets/images/service2.webp"
          alt="amazon dashboard"
          className={styles.serviceImage}
        />
      </div>
    </section>
  );
};

export default Services;
