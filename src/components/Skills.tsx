"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaVuejs,
  FaNodeJs, FaGit
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiNuxtdotjs, SiAngular,
  SiTailwindcss, SiFirebase, SiPostman, SiWebflow, SiWordpress
} from "react-icons/si";
import { gsap } from "gsap";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "Nuxt.js", icon: <SiNuxtdotjs /> },
        { name: "Angular", icon: <SiAngular /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "GSAP", icon: <FaJs /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "API Integration", icon: <SiPostman /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      category: "Tools & Cloud",
      skills: [
        { name: "Figma", icon: <FaReact /> },
        { name: "Git & GitHub", icon: <FaGit /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Webflow", icon: <SiWebflow /> },
        { name: "WordPress", icon: <SiWordpress /> },
        { name: "Cloud & AI Integration", icon: <SiFirebase /> },
      ],
    },
  ];

  // Create floating particles
  useEffect(() => {
    if (!particlesRef.current) return;

    const particleCount = 30;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = gsap.utils.random(2, 8);
      const x = gsap.utils.random(0, window.innerWidth);
      const y = gsap.utils.random(0, window.innerHeight);

      gsap.set(particle, {
        width: size,
        height: size,
        x: x,
        y: y,
        opacity: gsap.utils.random(0.1, 0.4),
        background: gsap.utils.random([
          "radial-gradient(circle, #B7A261, transparent)",
          "radial-gradient(circle, #E4D4A7, transparent)",
        ]),
        borderRadius: "50%",
        position: "absolute",
        pointerEvents: "none",
      });

      particlesRef.current.appendChild(particle);
      particles.push(particle);

      // Animate particles
      gsap.to(particle, {
        y: `+=${gsap.utils.random(-200, 200)}`,
        x: `+=${gsap.utils.random(-200, 200)}`,
        duration: gsap.utils.random(15, 30),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  // Title animation
  useEffect(() => {
    if (!titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -50,
        scale: 0.8,
        rotateX: -45,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Continuous glow pulse
    gsap.to(titleRef.current, {
      textShadow: "0 0 30px rgba(183, 162, 97, 0.6), 0 0 60px rgba(183, 162, 97, 0.3)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  // Cards entrance animation
  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".skill-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        scale: 0,
        y: 100,
        rotation: 180,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          from: "start",
          ease: "power2.out",
        },
        ease: "back.out(1.4)",
      }
    );
  }, [activeCategory]);

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".skill-icon");
    const glow = card.querySelector(".skill-glow");
    const ripple = card.querySelector(".ripple-effect");

    const tl = gsap.timeline();

    tl.to(card, {
      y: -15,
      scale: 1.08,
      rotateY: 10,
      rotateX: -10,
      boxShadow: "0 20px 60px rgba(183, 162, 97, 0.4)",
      duration: 0.4,
      ease: "power2.out",
    })
      .to(
        icon,
        {
          scale: 1.3,
          rotation: 360,
          color: "#E4D4A7",
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .to(
        glow,
        {
          opacity: 1,
          scale: 1.2,
          duration: 0.4,
        },
        "-=0.5"
      )
      .to(
        ripple,
        {
          scale: 2.5,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".skill-icon");
    const glow = card.querySelector(".skill-glow");

    gsap.to(card, {
      y: 0,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      boxShadow: "0 8px 30px rgba(183, 162, 97, 0.15)",
      duration: 0.4,
      ease: "power2.inOut",
    });

    gsap.to(icon, {
      scale: 1,
      rotation: 0,
      color: "#ffffff",
      duration: 0.4,
      ease: "power2.inOut",
    });

    gsap.to(glow, {
      opacity: 0,
      scale: 1,
      duration: 0.3,
    });
  };

  return (
    <div className="relative pt-20 px-6 md:px-12 2xl:px-20 overflow-hidden">
      {/* Floating particles background */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#B7A261]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E4D4A7]/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-6xl md:text-7xl font-black text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]"
          style={{ transformStyle: "preserve-3d" }}
        >
          My Skills
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Crafting exceptional digital experiences with modern technologies
        </p>

        {/* Category tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`relative px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${activeCategory === idx
                  ? "bg-gradient-to-r from-[#B7A261] to-[#E4D4A7] text-[#0a0a0a] shadow-lg shadow-[#B7A261]/50"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-[#B7A261]/50"
                }`}
              onMouseEnter={(e) => {
                if (activeCategory !== idx) {
                  gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== idx) {
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                }
              }}
            >
              {category.category}
              {activeCategory === idx && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#B7A261] to-[#E4D4A7] opacity-50 blur-xl" />
              )}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div ref={containerRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <div
                key={i}
                className="skill-card relative group cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                {/* Card container */}
                <div className="relative w-full aspect-square flex flex-col justify-center items-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] backdrop-blur-xl rounded-2xl overflow-hidden border border-[#B7A261]/20 shadow-[0_8px_30px_rgba(183,162,97,0.15)]">
                  {/* Ripple effect */}
                  <div className="ripple-effect absolute inset-0 bg-gradient-to-br from-[#B7A261] to-[#E4D4A7] rounded-full opacity-0" />

                  {/* Glow effect */}
                  <div className="skill-glow absolute inset-0 opacity-0 pointer-events-none">
                    <div
                      className="absolute inset-0 blur-2xl"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(183, 162, 97, 0.4), transparent 70%)",
                      }}
                    />
                  </div>

                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#B7A261] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#B7A261] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="skill-icon relative z-10 text-5xl md:text-6xl text-white mb-3 transition-all duration-300">
                    {skill.icon}
                  </div>

                  {/* Skill name */}
                  <span className="relative z-10 font-bold text-center text-xs md:text-sm px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] to-[#E4D4A7]">
                    {skill.name}
                  </span>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute top-0 left-0 w-full h-full"
                      style={{
                        background:
                          "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                        transform: "translateX(-100%)",
                        transition: "transform 0.6s",
                      }}
                    />
                  </div>
                </div>

                {/* Floating badge on hover */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#B7A261] to-[#E4D4A7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg">
                  <span className="text-[10px] font-bold text-[#0a0a0a]">✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="flex justify-center mt-20">
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-[#B7A261] to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
