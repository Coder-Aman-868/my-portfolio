"use client";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

const Welcome: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const burstRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure Welcome text is there for SplitType!
    if (!titleRef.current) return;

    // Split into letters via SplitType
    const split = new SplitType(titleRef.current, { types: "chars" });
    const chars = split.chars;

    // Dramatic hero parallax entrance for letters
    gsap.fromTo(
      chars,
      {
        opacity: 0,
        scale: 3.2,
        x: (i: number) => gsap.utils.random(-250, 250),
        y: (i: number) => gsap.utils.random(-180, 180),
        rotateX: (i: number) => gsap.utils.random(-120, 120),
        rotateY: (i: number) => gsap.utils.random(-100, 160),
        filter: "blur(40px) brightness(2.8)",
        color: "#b7a261",
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        filter: "blur(0px) brightness(1)",
        color: "#E4D4A7",
        duration: 1.5,
        stagger: 0.085,
        ease: "power4.out",
        onComplete: () => {
          // Gold flash burst
          gsap.fromTo(
            burstRef.current,
            { scale: 0.7, opacity: 0 },
            {
              scale: 2.4,
              opacity: 1,
              duration: 0.15,
              ease: "expo.in",
              onComplete: () => {
                gsap.to(burstRef.current, { opacity: 0, duration: 0.35 })
              }
            }
          );

          // Subtitle glitch & shine in
          gsap.fromTo(
            subtitleRef.current,
            {
              opacity: 0,
              y: 34,
              filter: "blur(12px) brightness(2.5)",
              letterSpacing: "0.8em",
            },
            {
              opacity: 0.96,
              y: 0,
              filter: "blur(0px) brightness(1.2)",
              letterSpacing: "0.19em",
              color: "#EADCA9",
              duration: 0.9,
              ease: "expo.out",
              delay: 0.14,
            }
          );

          // Sparkle burst at center
          sparkleBurst(containerRef.current);
        },
      }
    );

    return () => {
      split.revert();
    };
  }, []);

  function sparkleBurst(parent: HTMLDivElement | null) {
    if (!parent) return;
    const count = 24;
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("div");
      sparkle.className =
        "absolute w-[10px] h-[10px] rounded-full pointer-events-none";
      sparkle.style.background =
        "radial-gradient(circle,#E4D4A7 74%,#B7A261 100%)";
      sparkle.style.opacity = "0.81";
      sparkle.style.left = "50%";
      sparkle.style.top = "51%";
      sparkle.style.zIndex = "40";
      parent.appendChild(sparkle);
      gsap.fromTo(
        sparkle,
        { scale: 0 },
        {
          x: gsap.utils.random(-150, 150),
          y: gsap.utils.random(-100, 100),
          scale: gsap.utils.random(0.8, 2.8),
          opacity: 0,
          duration: 0.85,
          delay: 0.06 * Math.random(),
          ease: "power1.out",
          onComplete: () => sparkle.remove(),
        }
      );
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden rounded-2xl"
      style={{
        background: "radial-gradient(circle at 55% 55%, #19120C 69%, #b7a2612A 100%)",
        boxShadow: "0 0 220px 40px #B7A26114, 0 8px 62px 0 #000A",
      }}
    >
      {/* Gold flash burst */}
      <div
        ref={burstRef}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[100px] rounded-full z-30"
        style={{
          background:
            "radial-gradient(circle,#fff1cbcc 13%,#b7a26133 60%,transparent 100%)",
          filter: "blur(26px)",
          opacity: 0,
        }}
      />

      {/* WELCOME word (Plain Text, No HTML) */}
      <h1
        ref={titleRef}
        className="select-none text-[13vw] sm:text-[8vw] lg:text-[7vw] font-black bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] text-transparent bg-clip-text drop-shadow-[0_12px_102px_rgba(183,162,97,0.99)] z-20"
        style={{
          fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
          letterSpacing: "0.23em",
          textTransform: "uppercase",
          position: "relative",
        }}
      >
        WELCOME
      </h1>

      {/* Subtitle animated in */}
      <p
        ref={subtitleRef}
        className="mt-10 text-[#E4D4A7ee] text-[1.32rem] md:text-[2.2rem] font-extralight tracking-[0.29em] uppercase z-50"
        style={{
          filter: "blur(7px)",
          letterSpacing: "0.36em",
          opacity: 0.24,
        }}
      >
        To My Portfolio
      </p>
    </div>
  );
};

export default Welcome;