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
        { name: "Experiance", icon: "experiance", link: "/experiance" },
        { name: "Projects", icon: "projects", link: "/projects" },
        { name: "Skills", icon: "skills", link: "/skills" },
        { name: "Contact", icon: "contact", link: "/contact-me" },
    ];

    const linkRefs = useRef<HTMLDivElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);
    const hideTimeout = useRef<NodeJS.Timeout | null>(null);


    const getHideDistance = () => {
        if (typeof window === "undefined") return 90; // default

        if (window.innerWidth < 640) return 180; // sm screens: hide more
        if (window.innerWidth < 1024) return 100; // md screens
        return 90; // lg screens
    };


    // Initial animation on page load
    useEffect(() => {
        if (!containerRef.current) return;

        gsap.set(containerRef.current, { y: getHideDistance() }); // start hidden

        const tl = gsap.timeline({
            onComplete: () => {
                // After animation, auto-hide
                hideNavbar();
            },
        });

        tl.to(containerRef.current, { y: -30, duration: 0.5, ease: "power3.out" });
        tl.from(linkRefs.current, { opacity: 0, y: 20, stagger: 0.15, duration: 0.6, ease: "power3.out" }, "-=0.3");
    }, []);

    // Show navbar
    const showNavbar = () => {
        if (containerRef.current) {
            gsap.to(containerRef.current, { y: -30, duration: 0.5, ease: "power3.out" });
        }
        setExpanded(true);

        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => {
            hideNavbar();
        }, 3000);
    };

    const hideNavbar = () => {
        if (containerRef.current) {
            gsap.to(containerRef.current, { y: getHideDistance(), duration: 0.5, ease: "power3.in" });
        }
        setExpanded(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (expanded && containerRef.current && !containerRef.current.contains(e.target as Node)) {
                hideNavbar();
                if (hideTimeout.current) clearTimeout(hideTimeout.current);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [expanded]);

    return (
        <>
            {/* Navbar Container */}
            <div ref={containerRef} className="fixed px-5 bottom-0 left-1/2 transform -translate-x-1/2 max-sm:w-full">
                <div className="flex flex-wrap gap-6 px-5 py-4 bg-black border-2 border-[#4B3D10] rounded-xl z-[999] cursor-pointer items-center justify-center max-sm:w-full"
                >
                    {links.map((link, index) => {
                        const isActive = pathname === link.link;
                        return (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) linkRefs.current[index] = el;
                                }}
                            >
                                <Link
                                    href={link.link}
                                    className={`flex flex-col gap-1 items-center justify-center w-16 h-16 rounded-md text-xs leading-100 duration-300 ${isActive
                                        ? "bg-[#B7A261] text-black font-bold"
                                        : "bg-[#3B3729] text-[#A89D9D] font-medium"
                                        }`}
                                >
                                    <Icons
                                        className={`duration-300 ${isActive ? "scale-125" : ""}`}
                                        pathClassName={isActive ? "!fill-black" : "!fill-[#A89D9D]"}
                                        icon={link.icon}
                                    />
                                    {link.name}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Arrow Toggle */}
            {!expanded && (
                <div
                    className="fixed bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer z-50 p-2 bg-black border-2 border-[#4B3D10] rounded-t-full"
                    onClick={showNavbar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#B7A261]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            )}
        </>
    );
};

export default NavBar;
