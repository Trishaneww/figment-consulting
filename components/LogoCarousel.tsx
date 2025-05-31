import Image from "next/image";
import styles from "@/styles/LogoCarousel.module.scss";

const logos = [
  "/assets/images/logo.png",
  "/assets/images/logo.png",
  "/assets/images/logo.png",
  "/assets/images/logo.png",
  "/assets/images/logo.png",
  "/assets/images/logo.png",
  "/assets/images/logo.png",
  "/assets/images/logo.png",
  "/assets/images/logo.png",
  "/assets/images/logo.png",
];

export default function LogoCarousel() {
  // Duplicate logos for seamless scroll
  const repeated = [...logos, ...logos];

  return (
    <div className={styles.carouselWrapper}>
      {/* Tailwind overlays */}
      <div className="absolute left-0 top-0 h-full w-[50px] lg:w-[200px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-[50px] lg:w-[200px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className={styles.carousel}>
        <div className={styles.track}>
          {repeated.map((logo, i) => (
            <div key={i} className={styles.logo}>
              <Image src={logo} alt={`Logo ${i}`} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
