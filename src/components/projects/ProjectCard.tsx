"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import ProjectCardGlowBorder from "./ProjectCardGlowBorder";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardContent from "./ProjectCardContent";

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
    // Entry animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(cardRef.current, { opacity: 0, y: 100, rotateX: 25, scale: 0.9 }, {
      opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 1.1,
    })
      .fromTo(imageRef.current, { scale: 1.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.8")
      .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.5")
      .fromTo(contentRef.current?.children || [], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.4");
  }, []);

  const handleMouseEnter = () => {
    const tl = gsap.timeline();
    tl.to(cardRef.current, { y: -12, rotateX: 5, rotateY: -5, scale: 1.02, duration: 0.5, ease: "power2.out" })
      .to(imageRef.current, { scale: 1.15, duration: 0.6, ease: "power2.out" }, "-=0.5")
      .to(glowRef.current, { opacity: 0.6, scale: 1.05, duration: 0.5 }, "-=0.6")
      .to(borderRef.current, { opacity: 1, scale: 1, duration: 0.4 }, "-=0.5");
  };
  const handleMouseLeave = () => {
    const tl = gsap.timeline();
    tl.to(cardRef.current, { y: 0, rotateX: 0, rotateY: 0, scale: 1, duration: 0.5, ease: "power2.inOut" })
      .to(imageRef.current, { scale: 1, duration: 0.6, ease: "power2.inOut" }, "-=0.5")
      .to(glowRef.current, { opacity: 0, scale: 1, duration: 0.4 }, "-=0.5")
      .to(borderRef.current, { opacity: 0, scale: 0.98, duration: 0.3 }, "-=0.4");
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const centerX = rect.width / 2, centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8, rotateY = ((x - centerX) / centerX) * 8;
    gsap.to(cardRef.current, {
      rotateX, rotateY, duration: 0.3, ease: "power2.out", transformPerspective: 1000
    });
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
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <ProjectCardGlowBorder glowRef={glowRef} borderRef={borderRef} />
      <Link href={`/projects/${id}`} className="block relative overflow-hidden">
        <ProjectCardImage src={image} alt={title} overlayRef={overlayRef} imageRef={imageRef} />
      </Link>
      <ProjectCardContent title={title} desc={desc} live={live} github={github} contentRef={contentRef} />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B7A261]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ProjectCard;
