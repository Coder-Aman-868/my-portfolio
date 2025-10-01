"use client";
import React from "react";

interface Props {
    glowRef: React.RefObject<HTMLDivElement | null>;
    borderRef: React.RefObject<HTMLDivElement | null>;
}


const ProjectCardGlowBorder: React.FC<Props> = ({ glowRef, borderRef }) => (
    <>
        <div
            ref={glowRef}
            className="absolute inset-0 opacity-0 pointer-events-none z-0"
            style={{
                background: "radial-gradient(circle at center, rgba(183, 162, 97, 0.4), transparent 70%)",
                filter: "blur(40px)",
            }}
        />
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
        <div className="absolute inset-0 rounded-2xl border border-[#B7A261]/30 pointer-events-none z-10" />
    </>
);

export default ProjectCardGlowBorder;
