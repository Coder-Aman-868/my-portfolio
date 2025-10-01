"use client";

import React, { forwardRef, useRef } from "react";
import Icons from "../common/Icons";
import { gsap } from "gsap";

interface AboutCardProps {
    icon: string;
    title: string;
    content: string;
    color: string;
}

const AboutCard = forwardRef<HTMLDivElement, AboutCardProps>(
    ({ icon, title, content, color }, ref) => {
        const localRef = useRef<HTMLDivElement>(null);
        const glowRef = useRef<HTMLDivElement>(null);

        function hover(enter: boolean) {
            if (!localRef.current) return;
            let tl = gsap.timeline();
            if (enter) {
                tl.to(localRef.current, {
                    scale: 1.045,
                    y: -9,
                    boxShadow: "0 8px 60px 0px #B7A26140, 0 1.5px 10px #FFD58022",
                    duration: 0.32,
                    ease: "power2.out",
                });
                gsap.to(glowRef.current, {
                    opacity: 0.33,
                    scale: 1.14,
                    duration: 0.34,
                });
            } else {
                tl.to(localRef.current, {
                    scale: 1,
                    y: 0,
                    boxShadow: "0 1px 8px #00000014",
                    duration: 0.36,
                });
                gsap.to(glowRef.current, {
                    opacity: 0.11,
                    scale: 1,
                    duration: 0.4,
                });
            }
        }

        return (
            <div
                ref={el => {
                    localRef.current = el;
                    if (typeof ref === "function") ref(el);
                    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
                }}
                tabIndex={0}
                className="group relative rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#222018] p-6 pt-8 border border-[#FFD580]/15 shadow-lg backdrop-blur-sm transition-transform overflow-hidden"
                onMouseEnter={() => hover(true)}
                onMouseLeave={() => hover(false)}
                onFocus={() => hover(true)}
                onBlur={() => hover(false)}
                style={{ zIndex: 1 }}
            >
                {/* Glowing radial effect */}
                <div
                    ref={glowRef}
                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-radial from-[#FFD580]/40 via-transparent to-transparent scale-100 opacity-15 blur-xl transition-all duration-700`}
                    style={{ zIndex: 0 }}
                />

                <span
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border-2 border-[#FFD580]/40 bg-gradient-to-br ${color} shadow-inner mb-5 relative z-10`}
                >
                    <Icons icon={icon} className="w-6 h-6 !fill-black" />
                </span>
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD580] via-[#B7A261] to-[#E4D4A7] font-bold text-lg mb-2 uppercase tracking-wide">
                    {title}
                </h2>
                <p className="text-[#edeae2] text-sm sm:text-base leading-relaxed">
                    {content}
                </p>
            </div>
        );
    }
);

AboutCard.displayName = "AboutCard";
export default AboutCard;
