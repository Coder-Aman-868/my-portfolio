"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
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

    useEffect(() => {
        gsap.from(linkRefs.current, {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
        });
    }, []);

    return (
        <div className="2xl:sticky fixed bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 px-5 py-4 bg-black border-2 border-[#4B3D10] rounded-xl 2xl:flex-col 2xl:top-0 2xl:right-0 2xl:bottom-auto 2xl:left-auto 2xl:translate-x-0">
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
    );
};

export default NavBar;
