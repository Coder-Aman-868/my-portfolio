"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorGlowRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // ==================== IMPROVED MOUSE FOLLOWER (Ultra Smooth) ====================
        let xTo: any, yTo: any, xRingTo: any, yRingTo: any, xDotTo: any, yDotTo: any;

        if (cursorGlowRef.current && cursorRingRef.current && cursorDotRef.current) {
            // Use GSAP quickTo for buttery smooth cursor following
            xTo = gsap.quickTo(cursorGlowRef.current, "x", { duration: 0.6, ease: "power3" });
            yTo = gsap.quickTo(cursorGlowRef.current, "y", { duration: 0.6, ease: "power3" });

            xRingTo = gsap.quickTo(cursorRingRef.current, "x", { duration: 0.3, ease: "power2" });
            yRingTo = gsap.quickTo(cursorRingRef.current, "y", { duration: 0.3, ease: "power2" });

            xDotTo = gsap.quickTo(cursorDotRef.current, "x", { duration: 0.15, ease: "power2" });
            yDotTo = gsap.quickTo(cursorDotRef.current, "y", { duration: 0.15, ease: "power2" });
        }

        // ==================== LAYERED STARS WITH DEPTH ====================
        const createStars = () => {
            const layers = [
                { count: 60, size: [2, 4], depth: "near", speed: 0.003 },
                { count: 80, size: [1.5, 3], depth: "mid", speed: 0.002 },
                { count: 100, size: [1, 2], depth: "far", speed: 0.001 },
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
                        x: x,
                        y: y,
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
                }
            });

            return allStars;
        };

        // ==================== SHOOTING STARS ====================
        const createShootingStars = () => {
            const shootStar = () => {
                const star = document.createElement("div");
                const startX = gsap.utils.random(0, window.innerWidth);
                const startY = gsap.utils.random(-100, window.innerHeight / 3);
                const length = gsap.utils.random(80, 180);

                gsap.set(star, {
                    width: length,
                    height: 2,
                    x: startX,
                    y: startY,
                    position: "absolute",
                    background: "linear-gradient(90deg, transparent, rgba(183,162,97,0.8), rgba(228,212,167,0.9), rgba(255,255,255,1), transparent)",
                    opacity: 0.9,
                    boxShadow: `
            0 0 20px rgba(183,162,97,0.8),
            0 0 40px rgba(228,212,167,0.5),
            0 0 60px rgba(255,255,255,0.3)
          `,
                    pointerEvents: "none",
                    rotate: -45,
                });

                containerRef.current?.appendChild(star);

                gsap.to(star, {
                    x: `+=${gsap.utils.random(500, 900)}`,
                    y: `+=${gsap.utils.random(500, 900)}`,
                    opacity: 0,
                    duration: gsap.utils.random(1.2, 2),
                    ease: "power2.in",
                    onComplete: () => star.remove(),
                });
            };

            const interval = setInterval(() => {
                if (Math.random() > 0.75) shootStar();
            }, 2500);

            return () => clearInterval(interval);
        };

        // ==================== ENHANCED GLOWING ORBS ====================
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

                // Organic movement
                gsap.to(orb, {
                    x: gsap.utils.random(-150, 150),
                    y: gsap.utils.random(-150, 150),
                    scale: gsap.utils.random(1.1, 1.3),
                    duration: gsap.utils.random(20, 35),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });

                // Breathing glow
                gsap.to(orb, {
                    opacity: gsap.utils.random(0.25, 0.45),
                    duration: gsap.utils.random(5, 9),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });
        };

        // ==================== SMOOTH MOUSE TRAIL ====================
        let trailTimeout: NodeJS.Timeout;
        const createMouseTrail = (x: number, y: number) => {
            const trail = document.createElement("div");
            const size = gsap.utils.random(15, 35);
            const color = gsap.utils.random([0, 1]) === 0 ? "#B7A261" : "#E4D4A7";

            gsap.set(trail, {
                width: size,
                height: size,
                x: x,
                y: y,
                xPercent: -50,
                yPercent: -50,
                position: "fixed",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${color}, transparent 70%)`,
                opacity: 0.7,
                pointerEvents: "none",
                zIndex: 9998,
                boxShadow: `
          0 0 ${size}px ${color}80,
          0 0 ${size * 2}px ${color}40
        `,
            });

            document.body.appendChild(trail);

            gsap.to(trail, {
                scale: 2.5,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out",
                onComplete: () => trail.remove(),
            });
        };

        // ==================== ENHANCED MOUSE INTERACTIONS ====================
        let mouseX = 0, mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Update cursor followers with quickTo (ultra smooth)
            if (xTo && yTo) {
                xTo(mouseX);
                yTo(mouseY);
            }
            if (xRingTo && yRingTo) {
                xRingTo(mouseX);
                yRingTo(mouseY);
            }
            if (xDotTo && yDotTo) {
                xDotTo(mouseX);
                yDotTo(mouseY);
            }

            // Throttled trail creation
            clearTimeout(trailTimeout);
            trailTimeout = setTimeout(() => {
                if (Math.random() > 0.7) {
                    createMouseTrail(mouseX, mouseY);
                }
            }, 50);

            // Smooth parallax on stars
            const stars = containerRef.current?.querySelectorAll(".star");
            stars?.forEach((star) => {
                const depth = parseInt((star as HTMLElement).dataset.depth || "0");
                const speed = (depth + 1) * 0.008;
                const moveX = (mouseX - window.innerWidth / 2) * speed;
                const moveY = (mouseY - window.innerHeight / 2) * speed;

                gsap.to(star, {
                    x: `+=${moveX}`,
                    y: `+=${moveY}`,
                    duration: 2,
                    ease: "power1.out",
                    overwrite: "auto",
                });
            });

            // Magnetic effect on orbs
            const orbs = containerRef.current?.querySelectorAll(".orb");
            orbs?.forEach((orb) => {
                const index = parseInt((orb as HTMLElement).dataset.index || "0");
                const speed = (index + 1) * 0.025;
                const moveX = (mouseX - window.innerWidth / 2) * speed;
                const moveY = (mouseY - window.innerHeight / 2) * speed;

                gsap.to(orb, {
                    x: moveX,
                    y: moveY,
                    duration: 2.5,
                    ease: "power2.out",
                    overwrite: "auto",
                });
            });

            // Subtle mesh movement
            const meshes = containerRef.current?.querySelectorAll("[class*='gradient-mesh']");
            meshes?.forEach((mesh, index) => {
                const speed = (index + 1) * 0.012;
                const moveX = (mouseX - window.innerWidth / 2) * speed;
                const moveY = (mouseY - window.innerHeight / 2) * speed;

                gsap.to(mesh, {
                    x: moveX,
                    y: moveY,
                    duration: 3.5,
                    ease: "power1.out",
                    overwrite: "auto",
                });
            });
        };

        // ==================== CLICK BURST WITH ENHANCED PARTICLES ====================
        const handleMouseClick = (e: MouseEvent) => {
            const burstCount = 16;

            for (let i = 0; i < burstCount; i++) {
                const particle = document.createElement("div");
                const angle = (Math.PI * 2 * i) / burstCount;
                const distance = gsap.utils.random(80, 200);
                const size = gsap.utils.random(4, 10);
                const color = gsap.utils.random([0, 1]) === 0 ? "#B7A261" : "#E4D4A7";

                gsap.set(particle, {
                    width: size,
                    height: size,
                    x: e.clientX,
                    y: e.clientY,
                    position: "fixed",
                    borderRadius: "50%",
                    backgroundColor: color,
                    opacity: 1,
                    boxShadow: `
            0 0 ${size * 4}px ${color},
            0 0 ${size * 8}px ${color}80,
            0 0 ${size * 12}px ${color}40
          `,
                    pointerEvents: "none",
                    zIndex: 10000,
                });

                document.body.appendChild(particle);

                gsap.to(particle, {
                    x: e.clientX + Math.cos(angle) * distance,
                    y: e.clientY + Math.sin(angle) * distance,
                    opacity: 0,
                    scale: 0,
                    rotation: gsap.utils.random(-180, 180),
                    duration: gsap.utils.random(1.2, 2),
                    ease: "power3.out",
                    onComplete: () => particle.remove(),
                });
            }

            // Ripple effect
            const ripple = document.createElement("div");
            gsap.set(ripple, {
                width: 100,
                height: 100,
                x: e.clientX,
                y: e.clientY,
                xPercent: -50,
                yPercent: -50,
                position: "fixed",
                borderRadius: "50%",
                border: "2px solid #B7A261",
                opacity: 0.8,
                pointerEvents: "none",
                zIndex: 9999,
            });

            document.body.appendChild(ripple);

            gsap.to(ripple, {
                width: 300,
                height: 300,
                opacity: 0,
                borderWidth: 0,
                duration: 1,
                ease: "power2.out",
                onComplete: () => ripple.remove(),
            });
        };

        // ==================== ANIMATED GRADIENT MESH ====================
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
        const cleanupShootingStar = createShootingStars();
        animateGradientMesh();

        // Event listeners
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleMouseClick);

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleMouseClick);
            cleanupShootingStar();
            stars.forEach((star) => star.remove());
            clearTimeout(trailTimeout);
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

            {/* Multi-layered cursor glow (ultra smooth) */}
            <div
                ref={cursorGlowRef}
                className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                    width: "400px",
                    height: "400px",
                    background: `
            radial-gradient(circle, rgba(183,162,97,0.4) 0%, rgba(183,162,97,0.2) 30%, transparent 70%)
          `,
                    filter: "blur(80px)",
                    zIndex: 9999,
                    mixBlendMode: "screen",
                }}
            />

            {/* Cursor ring follower */}
            <div
                ref={cursorRingRef}
                className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: "40px",
                    height: "40px",
                    border: "2px solid rgba(183,162,97,0.5)",
                    borderRadius: "50%",
                    zIndex: 10000,
                    opacity: 0.6,
                }}
            />

            {/* Cursor dot */}
            <div
                ref={cursorDotRef}
                className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#B7A261",
                    borderRadius: "50%",
                    boxShadow: "0 0 10px #B7A261, 0 0 20px #B7A26180",
                    zIndex: 10001,
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