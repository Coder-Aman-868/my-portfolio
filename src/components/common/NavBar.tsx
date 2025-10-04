"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Icons from "./Icons";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

type LinkIcon = "about" | "experiance" | "projects" | "skills" | "contact";

interface NavLink {
    name: string;
    icon: LinkIcon;
    link: string;
}

const NavBar: React.FC = () => {
    const pathname = usePathname();
    const links: NavLink[] = [
        { name: "About", icon: "about", link: "/about" },
        { name: "Experience", icon: "experiance", link: "/experiance" },
        { name: "Projects", icon: "projects", link: "/projects" },
        { name: "Skills", icon: "skills", link: "/skills" },
        { name: "Contact", icon: "contact", link: "/contact-me" },
    ];

    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const activeIndicatorRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const hideTimeout = useRef<NodeJS.Timeout | null>(null);


    // Initial setup - hide navbar
    useEffect(() => {
        if (containerRef.current) {
            gsap.set(containerRef.current, {
                y: 100,
                scale: 0.8,
                opacity: 0,
                display: "none",
            });
        }
    }, []);

    // Toggle button entrance animation
    useEffect(() => {
        if (!toggleRef.current) return;

        const tl = gsap.timeline({ delay: 0.5 });

        tl.fromTo(
            toggleRef.current,
            { y: 100, scale: 0, opacity: 0 },
            { y: 0, scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
        );

        gsap.to(toggleRef.current, {
            scale: 1.1,
            duration: 0.6,
            repeat: 2,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5,
        });
    }, []);

    // Animate when navbar becomes visible
    useEffect(() => {
        if (isVisible && containerRef.current) {
            const tl = gsap.timeline();

            tl.set(containerRef.current, { display: "block" });

            tl.fromTo(
                containerRef.current,
                { y: 100, scale: 0.8, opacity: 0 },
                { y: 0, scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.4)" }
            );

            tl.fromTo(
                linkRefs.current.filter(Boolean),
                { y: 30, opacity: 0, scale: 0.5 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    stagger: 0.08,
                    ease: "back.out(1.7)",
                },
                "-=0.3"
            );
        }
    }, [isVisible]);

    // Update active indicator
    useEffect(() => {
        if (!isVisible) return;

        const activeIndex = links.findIndex((link) => link.link === pathname);
        if (activeIndex !== -1 && activeIndicatorRef.current && linkRefs.current[activeIndex]) {
            const activeLink = linkRefs.current[activeIndex];
            if (activeLink) {
                gsap.to(activeIndicatorRef.current, {
                    x: activeLink.offsetLeft,
                    width: activeLink.offsetWidth,
                    duration: 0.5,
                    ease: "power3.out",
                });
            }
        }
    }, [pathname, isVisible]);

    // Show navbar
    const showNavbar = () => {
        setIsVisible(true);

        // Auto-hide after delay
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => {
            hideNavbar();
        }, 5000);
    };

    // Hide navbar
    // Hide navbar
    const hideNavbar = () => {
        if (!containerRef.current) return;

        // state turant false kardo taki toggle button wapas aa jaye
        setIsVisible(false);

        const tl = gsap.timeline({
            onComplete: () => {
                if (containerRef.current) {
                    gsap.set(containerRef.current, { display: "none" });
                }
            },
        });

        tl.to(linkRefs.current.filter(Boolean), {
            y: 20,
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in",
        });

        tl.to(
            containerRef.current,
            {
                y: 100,
                scale: 0.9,
                opacity: 0,
                duration: 0.4,
                ease: "power2.in",
            },
            "-=0.2"
        );

        if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };



    // Handle link hover
    const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, entering: boolean) => {
        const link = e.currentTarget;
        const icon = link.querySelector(".nav-icon");
        const text = link.querySelector(".nav-text");

        if (entering) {
            gsap.to(link, {
                duration: 0.3,
                ease: "back.out(1.7)",
            });

            gsap.to(icon, {
                rotation: 5,
                duration: 0.3,
                ease: "back.out(1.7)",
            });

            gsap.to(text, {
                duration: 0.3,
                ease: "power2.out",
            });
        } else {
            gsap.to(link, {
                duration: 0.3,
                ease: "power2.inOut",
            });

            gsap.to(icon, {
                rotation: 0,
                duration: 0.3,
                ease: "power2.inOut",
            });

            gsap.to(text, {
                duration: 0.3,
                ease: "power2.inOut",
            });
        }
    };

    // Click outside to hide
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                isVisible &&
                containerRef.current &&
                !containerRef.current.contains(e.target as Node) &&
                toggleRef.current &&
                !toggleRef.current.contains(e.target as Node)
            ) {
                hideNavbar();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isVisible]);

    return (
        <>
            {/* Floating Navbar - Always rendered but hidden */}
            <div
                ref={containerRef}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999] px-4 pointer-events-none"
                style={{ display: "none" }}
                onMouseEnter={() => {
                    if (hideTimeout.current) clearTimeout(hideTimeout.current);
                }}
                onMouseLeave={() => {
                    if (isVisible) {
                        hideTimeout.current = setTimeout(hideNavbar, 3000);
                    }
                }}
            >
                <div className="relative pointer-events-auto">
                    {/* Backdrop glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B7A261]/20 via-[#E4D4A7]/20 to-[#B7A261]/20 blur-2xl opacity-60" />

                    {/* Main container */}
                    <div className="relative flex items-center gap-2 px-6 py-4 bg-black/40 backdrop-blur-2xl border border-[#B7A261]/30 rounded-2xl shadow-2xl shadow-[#B7A261]/20">
                        {/* Active indicator */}
                        <div
                            ref={activeIndicatorRef}
                            className="absolute bottom-1 left-0 h-1 bg-gradient-to-r from-[#B7A261] to-[#E4D4A7] rounded-full transition-all duration-500"
                            style={{ width: 0 }}
                        />

                        {/* Navigation Links */}
                        {links.map((link, index) => {
                            const isActive = pathname === link.link;
                            return (
                                <Link
                                    key={index}
                                    href={link.link}
                                    ref={(el) => {
                                        linkRefs.current[index] = el;
                                    }}
                                    onMouseEnter={(e) => handleLinkHover(e, true)}
                                    onMouseLeave={(e) => handleLinkHover(e, false)}
                                    className={`relative flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
                                        ? "bg-gradient-to-br from-[#B7A261] to-[#E4D4A7] text-black"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {/* Hover glow effect */}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-[#B7A261]/0 group-hover:bg-[#B7A261]/10 rounded-xl transition-all duration-300" />
                                    )}

                                    {/* Icon */}
                                    <div className="nav-icon relative z-10">
                                        <Icons
                                            className={`w-6 h-6 transition-all duration-300 ${isActive ? "drop-shadow-lg" : ""
                                                }`}
                                            pathClassName={
                                                isActive
                                                    ? "!fill-black"
                                                    : "!fill-gray-400 group-hover:!fill-[#B7A261]"
                                            }
                                            icon={link.icon}
                                        />
                                    </div>

                                    {/* Text */}
                                    <span
                                        className={`nav-text relative z-10 text-[10px] font-semibold tracking-wide ${isActive ? "text-black" : "text-gray-400 group-hover:text-[#B7A261]"
                                            }`}
                                    >
                                        {link.name}
                                    </span>

                                    {/* Active dot indicator */}
                                    {isActive && (
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full animate-pulse" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Bottom shine effect */}
                    <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#B7A261]/50 to-transparent" />
                </div>
            </div>

            {/* Toggle Button */}
            {!isVisible && (
                <div
                    ref={toggleRef}
                    onClick={showNavbar}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[998] cursor-pointer group"
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-[#B7A261]/30 blur-xl group-hover:bg-[#B7A261]/50 transition-all duration-300" />

                    {/* Button */}
                    <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#B7A261] to-[#E4D4A7] rounded-full shadow-lg shadow-[#B7A261]/30 group-hover:shadow-2xl group-hover:shadow-[#B7A261]/50 transition-all duration-300">
                        {/* Animated chevron */}
                        <svg
                            className="w-6 h-6 text-black animate-bounce"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 15l7-7 7 7"
                            />
                        </svg>

                        {/* Ripple effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-[#B7A261] animate-ping opacity-20" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm text-[#B7A261] text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Navigation Menu
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;