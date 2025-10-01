"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  desc: string;
  image: string;
  live: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, desc, image, live, github }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Entry animation with stagger
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 100,
        rotateX: 25,
        scale: 0.9,
        transformPerspective: 1000
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 1.2,
      }
    )
      .fromTo(
        imageRef.current,
        { scale: 1.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.5"
      )
      .fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.4"
      );
  }, []);

  const handleMouseEnter = () => {
    const tl = gsap.timeline();

    // Card lift with 3D effect
    tl.to(cardRef.current, {
      y: -12,
      rotateX: 5,
      rotateY: -5,
      scale: 1.02,
      duration: 0.5,
      ease: "power2.out",
    })
      // Image zoom
      .to(imageRef.current, {
        scale: 1.15,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.5")
      // Glow effect
      .to(glowRef.current, {
        opacity: 0.6,
        scale: 1.05,
        duration: 0.5,
      }, "-=0.6")
      // Border animation
      .to(borderRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
      }, "-=0.5");
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline();

    tl.to(cardRef.current, {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut",
    })
      .to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: "power2.inOut",
      }, "-=0.5")
      .to(glowRef.current, {
        opacity: 0,
        scale: 1,
        duration: 0.4,
      }, "-=0.5")
      .to(borderRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 0.3,
      }, "-=0.4");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
    });

    // Move glow with cursor
    gsap.to(glowRef.current, {
      x: (x - centerX) * 0.3,
      y: (y - centerY) * 0.3,
      duration: 0.3,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative group rounded-2xl overflow-hidden bg-[#0a0a0a] shadow-2xl"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Animated glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(183, 162, 97, 0.4), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Animated border */}
      <div
        ref={borderRef}
        className="absolute inset-0 opacity-0 pointer-events-none z-10 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #B7A261, transparent, #B7A261)",
          padding: "2px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Main border */}
      <div className="absolute inset-0 rounded-2xl border border-[#B7A261]/30 pointer-events-none z-10" />

      {/* Image section */}
      <Link href={`/projects/${id}`} className="block relative overflow-hidden">
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
          <img
            ref={imageRef}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent opacity-60"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#B7A261]/0 via-[#B7A261]/0 to-[#B7A261]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#B7A261]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>

      {/* Content section */}
      <div ref={contentRef} className="relative p-6 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#B7A261] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {desc}
        </p>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-gradient-to-r from-[#B7A261] to-transparent mb-4 group-hover:w-full transition-all duration-500" />

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg bg-[#B7A261]/10 border border-[#B7A261]/30 text-[#B7A261] hover:bg-[#B7A261] hover:text-[#111] transition-all duration-300 text-sm font-medium"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
            }}
          >
            <ExternalLink size={16} className="group-hover/btn:rotate-45 transition-transform duration-300" />
            <span>Live Demo</span>
            <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-[#B7A261]/50 hover:text-[#B7A261] transition-all duration-300 text-sm font-medium backdrop-blur-sm"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
              gsap.to(e.currentTarget.querySelector('svg'), { rotate: 360, duration: 0.5 });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
              gsap.to(e.currentTarget.querySelector('svg'), { rotate: 0, duration: 0.5 });
            }}
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B7A261]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ProjectCard;