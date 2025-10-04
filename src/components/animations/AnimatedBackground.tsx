"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // ==== STARS ====
        const createStars = () => {
            const layers = [
                { count: 60, size: [2, 4], depth: "near" },
                { count: 80, size: [1.5, 3], depth: "mid" },
                { count: 100, size: [1, 2], depth: "far" },
            ];
            const allStars: HTMLDivElement[] = [];
            layers.forEach((layer, layerIndex) => {
                for (let i = 0; i < layer.count; i++) {
                    const star = document.createElement("div");
                    star.className = `star star-${layer.depth}`;
                    star.dataset.depth = String(layerIndex);

                    const size = gsap.utils.random(layer.size[0], layer.size[1]);
                    const x = gsap.utils.random(0, window.innerWidth);
                    const y = gsap.utils.random(0, window.innerHeight);
                    const isGold = Math.random() > 0.7;
                    const color = isGold ? "#B7A261" : "#ffffff";
                    const glowSize = size * (isGold ? 6 : 4);

                    gsap.set(star, {
                        width: size,
                        height: size,
                        x,
                        y,
                        position: "absolute",
                        borderRadius: "50%",
                        backgroundColor: color,
                        opacity: gsap.utils.random(0.5, 1),
                        boxShadow: `
              0 0 ${glowSize}px ${color},
              0 0 ${glowSize * 2}px ${color}60,
              0 0 ${glowSize * 3}px ${color}30
            `,
                        pointerEvents: "none",
                    });
                    containerRef.current?.appendChild(star);
                    allStars.push(star);

                    // Twinkle
                    gsap.to(star, {
                        opacity: gsap.utils.random(0.3, 1),
                        duration: gsap.utils.random(2, 5),
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    });

                    // Pulse larger stars
                    if (size > 2.5) {
                        gsap.to(star, {
                            scale: gsap.utils.random(1.1, 1.4),
                            duration: gsap.utils.random(3, 6),
                            repeat: -1,
                            yoyo: true,
                            ease: "sine.inOut",
                        });
                    }

                    // Smooth floating movement
                    gsap.to(star, {
                        x: `+=${gsap.utils.random(-30, 30)}`,
                        y: `+=${gsap.utils.random(-30, 30)}`,
                        duration: gsap.utils.random(9, 18),
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    });
                }
            });
            return allStars;
        };

        // ==== ORBS ====
        const createOrbs = () => {
            const orbs = [
                { size: 600, x: "20%", y: "20%", color: "#B7A261" },
                { size: 700, x: "80%", y: "70%", color: "#E4D4A7" },
                { size: 550, x: "50%", y: "50%", color: "#B7A261" },
                { size: 500, x: "10%", y: "80%", color: "#E4D4A7" },
                { size: 450, x: "90%", y: "30%", color: "#B7A261" },
            ];
            orbs.forEach((orbData, index) => {
                const orb = document.createElement("div");
                orb.className = `orb orb-${index}`;
                orb.dataset.index = String(index);
                gsap.set(orb, {
                    width: orbData.size,
                    height: orbData.size,
                    position: "absolute",
                    left: orbData.x,
                    top: orbData.y,
                    xPercent: -50,
                    yPercent: -50,
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 35% 35%, ${orbData.color}50, ${orbData.color}20, transparent 70%)`,
                    filter: `blur(${gsap.utils.random(80, 120)}px)`,
                    opacity: 0.3,
                    pointerEvents: "none",
                });
                containerRef.current?.appendChild(orb);

                gsap.to(orb, {
                    x: gsap.utils.random(-150, 150),
                    y: gsap.utils.random(-150, 150),
                    scale: gsap.utils.random(1.1, 1.3),
                    duration: gsap.utils.random(20, 35),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
                gsap.to(orb, {
                    opacity: gsap.utils.random(0.25, 0.45),
                    duration: gsap.utils.random(5, 9),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });
        };

        // ==== GRADIENT MESH ====
        const animateGradientMesh = () => {
            const mesh1 = containerRef.current?.querySelector(".gradient-mesh-1");
            const mesh2 = containerRef.current?.querySelector(".gradient-mesh-2");
            const mesh3 = containerRef.current?.querySelector(".gradient-mesh-3");
            if (mesh1 && mesh2 && mesh3) {
                gsap.to(mesh1, {
                    x: 200,
                    y: -150,
                    scale: 1.25,
                    rotate: 45,
                    duration: 20,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
                gsap.to(mesh2, {
                    x: -180,
                    y: 200,
                    scale: 0.9,
                    rotate: -60,
                    duration: 25,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
                gsap.to(mesh3, {
                    x: 150,
                    y: 100,
                    rotate: 120,
                    scale: 1.2,
                    duration: 30,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }
        };

        // Initialize
        const stars = createStars();
        createOrbs();
        animateGradientMesh();

        // Cleanup
        return () => {
            stars.forEach((star) => star.remove());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 overflow-hidden bg-[#000000]"
            style={{ perspective: "1000px" }}
        >
            {/* Deep space gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#000000] to-[#0f0f0f]" />

            {/* Animated gradient meshes */}
            <div
                className="gradient-mesh-1 absolute top-0 right-0 w-[800px] h-[800px]"
                style={{
                    background: "radial-gradient(circle at 40% 40%, #B7A26140, #B7A26120, transparent 65%)",
                    filter: "blur(100px)",
                    opacity: 0.35,
                }}
            />
            <div
                className="gradient-mesh-2 absolute bottom-0 left-0 w-[750px] h-[750px]"
                style={{
                    background: "radial-gradient(circle at 60% 60%, #E4D4A740, #E4D4A720, transparent 65%)",
                    filter: "blur(120px)",
                    opacity: 0.4,
                }}
            />
            <div
                className="gradient-mesh-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px]"
                style={{
                    background: "radial-gradient(ellipse, #B7A26135, #B7A26115, transparent 60%)",
                    filter: "blur(90px)",
                    opacity: 0.3,
                }}
            />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `
            linear-gradient(#B7A26130 1px, transparent 1px),
            linear-gradient(90deg, #B7A26130 1px, transparent 1px)
          `,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Radial vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.7) 100%)",
                    opacity: 0.6,
                }}
            />

            {/* Corner accent glows */}
            <div
                className="absolute top-0 left-0 w-[400px] h-[400px]"
                style={{
                    background: "radial-gradient(circle at top left, rgba(183,162,97,0.25), transparent 70%)",
                    filter: "blur(70px)",
                }}
            />
            <div
                className="absolute bottom-0 right-0 w-[400px] h-[400px]"
                style={{
                    background: "radial-gradient(circle at bottom right, rgba(228,212,167,0.25), transparent 70%)",
                    filter: "blur(70px)",
                }}
            />

            {/* Noise overlay */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "overlay",
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
