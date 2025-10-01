"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface Props {
    src: string;
    alt: string;
    overlayRef: React.RefObject<HTMLDivElement | null>;
    imageRef: React.RefObject<HTMLImageElement | null>;
}

const ProjectCardImage: React.FC<Props> = ({ src, alt, overlayRef, imageRef }) => {
    useEffect(() => {
        if (!imageRef.current || !overlayRef.current) return;
        gsap.set(imageRef.current, { scale: 1, opacity: 1 });
        gsap.set(overlayRef.current, { opacity: 1 });
    }, []);

    return (
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
            <img ref={imageRef} src={src} alt={alt} className="w-full h-full object-cover" />
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#B7A261]/0 via-[#B7A261]/0 to-[#B7A261]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#B7A261]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

export default ProjectCardImage;
