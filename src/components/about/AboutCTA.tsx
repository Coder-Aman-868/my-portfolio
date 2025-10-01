"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Icons from "../common/Icons";

const AboutCTA = () => {
    const ctaRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!ctaRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            entry.target,
                            { opacity: 0, y: 50, scale: 0.9 },
                            { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.4)" }
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(ctaRef.current);

        return () => {
            if (ctaRef.current) observer.unobserve(ctaRef.current);
        };
    }, []);

    const handleHover = (entering: boolean) => {
        if (!buttonRef.current) return;
        const icon = buttonRef.current.querySelector(".cta-icon");
        const bg = buttonRef.current.querySelector(".button-bg");

        if (entering) {
            gsap.to(buttonRef.current, { scale: 1.08, duration: 0.4, ease: "back.out(1.7)" });
            gsap.to(icon, { x: 8, scale: 1.2, duration: 0.4 });
            gsap.to(bg, { backgroundPosition: "200% center", duration: 0.8 });
        } else {
            gsap.to(buttonRef.current, { scale: 1, duration: 0.4 });
            gsap.to(icon, { x: 0, scale: 1, duration: 0.4 });
            gsap.to(bg, { backgroundPosition: "0% center", duration: 0.8 });
        }
    };

    return (
        <div ref={ctaRef} className="relative mt-24 text-center">
            <div className="relative inline-block">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD580] via-[#B7A261] to-[#E4D4A7] blur-2xl opacity-50 animate-pulse" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-8 border-2 border-[#B7A261]/30 shadow-2xl">
                    <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD580] via-[#B7A261] to-[#E4D4A7] mb-3">
                        Let's Create Together
                    </h3>
                    <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
                        Ready to turn your ideas into stunning digital experiences
                    </p>

                    <button
                        ref={buttonRef}
                        className="group relative px-10 py-4 rounded-xl font-bold text-base text-black overflow-hidden shadow-2xl"
                        onMouseEnter={() => handleHover(true)}
                        onMouseLeave={() => handleHover(false)}
                    >
                        <div
                            className="button-bg absolute inset-0 bg-gradient-to-r from-[#FFD580] via-[#B7A261] to-[#E4D4A7]"
                            style={{
                                backgroundSize: "200% 100%",
                                backgroundPosition: "0% center",
                            }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            <span>Get In Touch</span>
                            <Icons icon="rightSideArrow" className="cta-icon w-5 h-5 !fill-black" />
                        </span>
                    </button>

                    {/* Corner sparkles */}
                    <div className="absolute top-2 left-2 text-2xl animate-pulse">✨</div>
                    <div className="absolute bottom-2 right-2 text-2xl animate-pulse" style={{ animationDelay: "0.5s" }}>✨</div>
                </div>
            </div>
        </div>
    );
};

export default AboutCTA;