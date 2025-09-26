"use client"
import Link from 'next/link';
import React from 'react'
import Icons from './Icons';
import { usePathname } from "next/navigation";

type LinkIcon = "about" | "experiance" | "projects" | "skills" | "contact";

interface NavLink {
    name: string;
    icon: LinkIcon;
    link: string;
}

const NavBar = () => {
    const pathname = usePathname();
    const links: NavLink[] = [
        {
            name: "About",
            icon: "about",
            link: "/about"
        },
        {
            name: "Experiance",
            icon: "experiance",
            link: "/experiance"
        },
        {
            name: "Projects",
            icon: "projects",
            link: "/projects"
        },
        {
            name: "Skills",
            icon: "skills",
            link: "/skills"
        },
        {
            name: "Contact",
            icon: "contact",
            link: "/contact-me"
        },
    ]
    return (
        <div className='sticky top-0 right-0 border-[3px] border-[#4B3D10] bg-black px-[28px] py-[31px] max-w-max rounded-[15px] flex flex-col gap-[24px]'>
            {
                links.map((link, index) => {
                    const isActive = pathname === link.link;
                    return (
                        <Link className={`flex flex-col gap-[3px] items-center justify-center w-[71px] h-[66px]  rounded-[6px] text-xs  leading-100 font-medium ${isActive ? "bg-[#B7A261] text-black" : "bg-[#3B3729] text-[#A89D9D]"}`} key={index} href={link.link}>
                            <Icons pathClassName={isActive ? "!fill-black" : "!fill-[#A89D9D]"} icon={link.icon} />
                            {link.name}
                        </Link>)
                })
            }
        </div>
    )
}

export default NavBar