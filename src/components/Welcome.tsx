"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Welcome: React.FC = () => {
  const topRef = useRef<HTMLHeadingElement>(null);
  const mainRef = useRef<HTMLHeadingElement>(null);
  const bottomRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Top outline text
    tl.fromTo(
      topRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 0.3, duration: 1, ease: "power3.out" }
    );

    // Main gradient text
    tl.fromTo(
      mainRef.current,
      { y: 150, opacity: 0, scale: 0.9, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.6,
        ease: "power4.out",
      },
      "-=0.6"
    );

    // Bottom outline text
    tl.fromTo(
      bottomRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 0.3, duration: 1, ease: "power3.out" },
      "-=1"
    );
  }, []);

  return (
    <div className="border-[3px]  bg-gradient-to-b from-black via-[#1c1a17] to-black rounded-[20px] p-6 w-full flex flex-col justify-center items-center h-[87vh] overflow-hidden relative">
      {/* Top Outline */}
      <h1
        ref={topRef}
        className="text-[14vw] sm:text-[10vw] md:text-[10vw] lg:text-[8vw] font-extrabold text-transparent stroke-[#B7A261] stroke-[2px] opacity-30"
        style={{
          WebkitTextStroke: "2px #B7A261",
        }}
      >
        WELCOME
      </h1>

      {/* Main Gradient Text */}
      <h1
        ref={mainRef}
        className="text-[14vw] sm:text-[10vw] md:text-[10vw] lg:text-[8vw] font-extrabold bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] text-transparent bg-clip-text drop-shadow-[0_8px_15px_rgba(0,0,0,0.8)] relative z-10"
      >
        WELCOME
      </h1>

      {/* Bottom Outline */}
      <h1
        ref={bottomRef}
        className="text-[14vw] sm:text-[10vw] md:text-[10vw] lg:text-[8vw] font-extrabold text-transparent stroke-[#B7A261] stroke-[2px] opacity-30"
        style={{
          WebkitTextStroke: "2px #B7A261",
        }}
      >
        WELCOME
      </h1>
    </div>
  );
};

export default Welcome;
