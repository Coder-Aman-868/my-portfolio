"use client";

import React, { useEffect, useRef } from "react";
import AboutCard from "./AboutCard";
import AboutCTA from "./AboutCTA";
import { gsap } from "gsap";

const aboutData = [
  {
    icon: "user",
    title: "Who Am I?",
    content: "Aman Siwach. Frontend engineer, lifelong learner, and a technophile who believes design is as important as engineering.",
    color: "from-[#FFD580] to-[#B7A261]"
  },
  {
    icon: "sparkles",
    title: "Philosophy",
    content: "Code is not just logic—it's art. I strive to build interfaces that are as delightful as they are dependable.",
    color: "from-[#E4D4A7] to-[#FFD580]"
  },
  {
    icon: "rocket",
    title: "Career",
    content: "Turning complex problems into elegant frontend solutions using React, Next.js, Vue, and more.",
    color: "from-[#B7A261] to-[#E4D4A7]"
  },
  {
    icon: "palette",
    title: "Styling",
    content: "Tailwind, Bootstrap, and custom CSS—design systems are my paintbrush. I enjoy blending code and creativity.",
    color: "from-[#FFD580] to-[#E4D4A7]",
  },
  {
    icon: "code",
    title: "Stack",
    content: "TypeScript, JavaScript, REST, GraphQL, Figma, Git, GSAP, Framer Motion: I believe in using the right tool for the job.",
    color: "from-[#FFD580] to-[#B7A261]",
  },
  {
    icon: "desktop",
    title: "Projects",
    content: "From landing pages to fully interactive dashboards and SaaS apps, I deliver robust, polished products—always.",
    color: "from-[#E4D4A7] to-[#FFD580]",
  },
  {
    icon: "trophy",
    title: "Standards",
    content: "Accessibility, performance, pixel-perfection: I hold myself to world-class dev values, never settling for 'just OK.'",
    color: "from-[#B7A261] to-[#FFD580]",
  },
  {
    icon: "lightbulb",
    title: "Mission",
    content: "Make tech simpler, inspire new ideas, and empower users with great experiences.",
    color: "from-[#FFD580] to-[#B7A261]",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelector(".about-title"),
      { opacity: 0, y: 44, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "back" }
    );
    gsap.fromTo(
      cardRefs.current.filter(Boolean),
      { opacity: 0, y: 32, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.11,
        duration: 0.62,
        ease: "power2.out",
        delay: 0.15,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-5xl mx-auto px-4 py-16 md:py-24 relative"
      style={{ perspective: "800px" }}
    >
      <h2 className="about-title text-3xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#FFD580]">
        About Me
      </h2>
      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 gap-7 mb-12 z-10 relative">
        {aboutData.map((card, i) => (
          <AboutCard
            ref={(el: HTMLDivElement | null) => {
              cardRefs.current[i] = el;
            }}
            key={card.title}
            {...card}
          />
        ))}
      </div>
      <AboutCTA />
      {/* Subtle glass orb */}
      <div className="pointer-events-none absolute -inset-12 flex items-center justify-center">
        <div className="w-3/4 h-3/4 bg-gradient-to-r from-[#FFD580]/15 via-[#B7A261]/15 to-[#E4D4A7]/15 blur-[80px] rounded-full" />
      </div>
    </section>
  );
};

export default About;
