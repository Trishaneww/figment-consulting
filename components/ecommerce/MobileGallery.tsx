"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Image data (5 rows of 4 parallax, each with a speed factor)
const parallax = [
  [
    { src: "/assets/parallax/hero3.png", speed: 0.5 },
    { src: "/assets/parallax/hero2.png", speed: 0.1 },
    { src: "/assets/parallax/proj5.png", speed: 0.1 },
    { src: "/assets/parallax/proj6.png", speed: 0.1 },
    { src: "/assets/parallax/proj24.png", speed: 0.1 },
    { src: "/assets/parallax/proj13.png", speed: 0.1 },
    { src: "/assets/parallax/hero4.png", speed: 0.1 },
    { src: "/assets/parallax/proj26.png", speed: 0.1 },
    { src: "/assets/parallax/proj14.png", speed: 0.1 },
    { src: "/assets/parallax/proj8.png", speed: 0.1 },
    { src: "/assets/parallax/proj11.png", speed: 0.1 },
    { src: "/assets/parallax/hero3.png", speed: 0.5 },
    { src: "/assets/parallax/hero2.png", speed: 0.1 },
    { src: "/assets/parallax/proj5.png", speed: 0.1 },
  ],
  [
    { src: "/assets/parallax/proj1.png", speed: 0.9 },
    { src: "/assets/parallax/proj28.png", speed: 0.05 },
    { src: "/assets/parallax/proj23.png", speed: 0.05 },
    { src: "/assets/parallax/proj27.png", speed: 0.05 },
    { src: "/assets/parallax/proj19.png", speed: 0.1 },
    { src: "/assets/parallax/proj10.png", speed: 0.1 },
    { src: "/assets/parallax/proj27.png", speed: 0.1 },
    { src: "/assets/parallax/hero3.png", speed: 0.5 },
    { src: "/assets/parallax/proj23.png", speed: 0.1 },
    { src: "/assets/parallax/proj4.png", speed: 0.1 },
    { src: "/assets/parallax/proj1.png", speed: 0.1 },
    { src: "/assets/parallax/6.jpg", speed: 0.1 },
    { src: "/assets/parallax/hero1.png", speed: 0.1 },
    { src: "/assets/parallax/proj12.png", speed: 0.1 },
  ],
]

// Floating parallax (absolute, randomly placed)
const floatingparallax = [
  { src: "/assets/parallax/mobile7.png", speed: -0.05, top: "5%", left: "25%" },
  { src: "/assets/parallax/mobile7.png", speed: -0.05, top: "20%", left: "60%" },
  { src: "/assets/parallax/mobile7.png", speed: -0.05, top: "5%", left: "40%" },
  { src: "/assets/parallax/mobile7.png", speed: -0.05, top: "12%", left: "70%" },
  { src: "/assets/parallax/mobile7.png", speed: -0.05, top: "5%", left: "85%" },
];

const MobileGallery = () => {
  // Using useRef for image and floating image elements
  const imageRefs = useRef<(HTMLDivElement | null)[][]>(
    Array.from({ length: 5 }, () => Array(4).fill(null))
  );
  const floatingRefs = useRef<(HTMLDivElement | null)[]>(Array(5).fill(null));

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false; // To throttle the scroll event

    const updateParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Move grid parallax
          imageRefs.current.forEach((column, colIndex) => {
            column.forEach((img, rowIndex) => {
              if (img) {
                const speed = parallax[colIndex][rowIndex].speed;
                img.style.transform = `translateY(${scrollY * speed}px)`;
              }
            });
          });

          // Move floating parallax
          floatingRefs.current.forEach((img, index) => {
            if (img) {
              const speed = floatingparallax[index].speed;
              img.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
            }
          });

          lastScrollY = scrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    const handleScroll = () => {
      updateParallax();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[200vh] bg-[#FAFAFA]">
      <div className="gap-2 flex justify-center px-2">
        {parallax.map((column, colIndex) => (
          <div key={colIndex} className={`flex flex-col gap-2 will-change-transform ${colIndex % 2 === 0 ? `-mt-[4000px]` : '-mt-[7000px]'}`} ref={(el) => { imageRefs.current[colIndex][0] = el; }}>
            {column.map(({ src }, rowIndex) => (
                <Image src={src} key={rowIndex}
                 alt={`Parallax ${colIndex}-${rowIndex}`} width={1000} height={1000} className="relative rounded-lg shadow-lg overflow-hidden will-change-transform border-[2px] border-gray-200" priority />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileGallery;
