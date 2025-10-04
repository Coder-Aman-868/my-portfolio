"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Experience Data
const experiences = [
  {
    icon: "💻",
    title: "Frontend Developer",
    company: "Creative Studio",
    year: "2023 - Present",
    summary: "Crafted animated React UIs using GSAP and Framer Motion. Built complex, beautiful user journeys optimized for performance.",
  },
  {
    icon: "🎨",
    title: "UI Designer",
    company: "Design Agency",
    year: "2021 - 2023",
    summary: "Redesigned e-commerce flows, defined premium design systems, delivered micro-animations and visual storytelling.",
  },
  {
    icon: "🚀",
    title: "Web Intern",
    company: "StartupX",
    year: "2020 - 2021",
    summary: "Developed blazing-fast pages, implemented first hero sections using GSAP, grew skills in teamwork and prototyping.",
  },
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shimmerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Cinematic BG sweep
    gsap.fromTo(
      containerRef.current,
      { backgroundPosition: "0% 120%" },
      { backgroundPosition: "100% 0%", duration: 1.1, ease: "power2.out" }
    );

    // Card cinematic entrance (scale + fade + 3D rotate)
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 0.89, rotateY: 35 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 1.14,
            ease: "expo.out",
            delay: 0.4 + i * 0.25,
          }
        );
      }
    });
    // Optional shimmer sweep on mount
    shimmerRefs.current.forEach((ref, i) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { left: "-70%" },
          { left: "110%", duration: 1.6, ease: "power1.inOut", delay: 0.7 + i * 0.3 }
        );
      }
    });
  }, []);

  // Card Hover shimmer
  const shimmerIn = (i: number) => {
    const shimmer = shimmerRefs.current[i];
    if (shimmer) {
      gsap.fromTo(
        shimmer,
        { left: "-80%" },
        { left: "110%", duration: 1.2, ease: "power1.inOut" }
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full px-6 py-14 flex flex-col items-center justify-start"
      style={{
        boxShadow: "0 0 60px 16px #B7A26113, 0 8px 30px 0 #000A",
      }}
    >
      {/* Big Title */}
      <h2
        className="text-center font-extrabold text-transparent bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] bg-clip-text text-[7vw] sm:text-[4vw] mb-2 drop-shadow-[0_10px_36px_rgba(183,162,97,0.8)]"
        style={{
          fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
          letterSpacing: "0.21em",
        }}
      >
        My Experience
      </h2>

      {/* Subtitle */}
      <p className="text-[#E4D4A7cc] text-base md:text-lg font-light tracking-[0.27em] mb-12 uppercase">
        Roles & Highlights
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl mt-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => { (cardRefs.current[i] = el) }}
            className="relative rounded-3xl bg-gradient-to-br from-[#1d1710] via-[#B7A261D9] to-[#19120C] border border-[#B7A261]/30 shadow-[0_8px_48px_rgba(183,162,97,0.22)] px-9 py-10 flex flex-col items-start overflow-hidden hover:scale-[1.04] transition-transform duration-200 ease-out group"
            style={{
              boxShadow: "0 10px 48px #b7a2612e, 0 3px 12px #000A",
              backdropFilter: "blur(2px)",
            }}
            onMouseEnter={() => shimmerIn(i)}
          >
            {/* Shimmer gradient on hover */}
            <div
              ref={(el: HTMLDivElement | null) => { (shimmerRefs.current[i] = el) }}
              className="absolute top-0 left-[-60%] w-2/3 h-full pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(120deg, transparent 10%, #FFF2B3 38%, #E4D4A7dd 50%, transparent 72%)",
                opacity: 0.25,
                filter: "blur(8px)",
                borderRadius: "2rem",
                transition: "opacity 0.3s",
              }}
            />

            {/* Card icon avatar */}
            <div className="mb-6">
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-tr from-[#B7A261] via-[#E4D4A7] to-[#B7A261] flex items-center justify-center shadow-lg text-3xl animate-pulse">
                {exp.icon}
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#232015] mb-1 tracking-wide" style={{ letterSpacing: "0.14em" }}>
              {exp.title}
            </h3>
            <div className="text-[#B7A261] font-medium text-lg mb-1">{exp.company}</div>
            <div className="text-[#E4D4A7] font-medium text-base mb-3">{exp.year}</div>
            <div className="text-[#BEB593] font-light text-[1.06rem] leading-relaxed">{exp.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;