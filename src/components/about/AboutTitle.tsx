"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutTitle = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !lineRef.current) return;

    const tl = gsap.timeline();

    // Title animation
    tl.fromTo(
      titleRef.current,
      { 
        opacity: 0, 
        scale: 0.5, 
        rotateY: -180,
        filter: "blur(20px)"
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "elastic.out(1, 0.6)",
      }
    );

    // Line animation
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    // Continuous glow pulse
    gsap.to(titleRef.current, {
      textShadow: "0 0 30px rgba(183, 162, 97, 0.8), 0 0 60px rgba(228, 212, 167, 0.4)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="relative mb-20">
      <div className="flex flex-col items-center gap-6">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFD580] via-[#B7A261] to-[#E4D4A7]"
          style={{ transformStyle: "preserve-3d" }}
        >
          About Me
        </h1>
        
        <div
          ref={lineRef}
          className="h-1 w-64 bg-gradient-to-r from-transparent via-[#B7A261] to-transparent rounded-full"
        />
        
        <p className="text-gray-400 text-center max-w-2xl text-lg">
          My journey from curiosity to creating digital experiences
        </p>
      </div>

      {/* Animated background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-gradient-to-r from-[#B7A261]/10 via-[#E4D4A7]/10 to-[#FFD580]/10 -z-10 animate-pulse" />
    </div>
  );
};

export default AboutTitle;
