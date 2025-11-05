"use client";
import React, { useEffect, useRef, useState } from 'react'
import Cta from './Cta'
import Link from 'next/link';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Header = () => {
    const tl = gsap.timeline()
    const mainBoxref = useRef(null)
    const logoRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    //animate menu 
    useEffect(() => {
        tl.to(mainBoxref.current, {
            y: 0,
            duration: 1,
            ease: "back.out(1.7)"
        },)

        tl.fromTo(
            ".navLinks", {
            y: 20,
            rotate: 10,
            opacity: 0,
            filter: "blur(5px)",

        }, {
            y: 0,
            rotate: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: .2,
            ease: "back.out(1.7)",
        });

        tl.to(".rops", {
            y: -200,
            duration: 2,
            ease: "back.out(1.7)"
        })
        if (logoRef.current) {
            const split = new SplitText(logoRef.current, {
                type: "chars,words,lines",
                charsClass: "char",
                wordsClass: "word",
                linesClass: "line"
            })
            gsap.from(split.chars, {
                opacity: 0,
                y: 50,
                rotationX: -90,
                stagger: 0.08,
                duration: 1,
                delay: 1,
                ease: "back.out(1.7)"
            })

        }
    }, []);

    useEffect(() => {
        if (isMenuOpen === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);
    return (
        <div className='fixed sm:top-12 top-5 left-1/2 -translate-x-1/2 z-999 max-sm:w-full px-5'>
            <div ref={mainBoxref} className="p-3 pl-6 border border-off-gold/15 rounded-xs bg-off-gold/10 backdrop-blur-[10px] w-full relative -translate-y-[200px]">
                <div className='flex items-center gap-8  max-sm:justify-between'>
                    <h4 ref={logoRef} className='text-xl leading-100 satoshi'>Aman.</h4>
                    <div className='satoshi flex items-center gap-4'>
                        <ul className={`sm:flex hidden items-center gap-5 text-custom-xs leading-130 uppercase tracking-[1.5px]`}>
                            <li className='navLinks'><Link href="/services">Services</Link></li>
                            <li className='navLinks'><Link href="/work">Work</Link></li>
                            <li className='navLinks'><Link href="/about">About</Link></li>
                            <li className='navLinks'><Link href="/pages">Pages</Link></li>
                        </ul>
                        <Cta>Let’s talk</Cta>
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-[30px] flex flex-col gap-1.5 items-end cursor-pointer group sm:hidden relative">
                            <span className={`w-full h-1 rounded-xl bg-off-gold group-hover:w-full duration-300 ${isMenuOpen ? "absolute top-1/2 left-0 w-full -translate-y-1/2 rotate-45" : ""}`}></span>
                            <span className={`w-2/3 h-1 rounded-xl bg-off-gold group-hover:w-full duration-300 ${isMenuOpen ? "opacity-0 w-full" : ""}`}></span>
                            <span className={`w-1/3 h-1 rounded-xl bg-off-gold group-hover:w-full duration-300 ${isMenuOpen ? "absolute top-1/2 left-0 w-full -translate-y-1/2 -rotate-45" : ""}`}></span>
                        </div>
                    </div>
                </div>
                <div className="rops absolute -top-110 -z-10 h-110 left-10 border-2 border-off-gold"></div>
                <div className="rops absolute -top-110 -z-10 h-110 right-10 border-2 border-off-gold"></div>
            </div>
            <div className={`px-5 fixed top-[90px] duration-300 -right-100 w-full ${isMenuOpen ? "max-sm:opacity-100 max-sm:right-0" : "max-sm:opacity-0 max-sm:pointer-events-none max-sm:-right-100"}`}>
                <ul className={`flex sm:hidden backdrop-blur-2xl gap-5 text-custom-xs leading-130 uppercase tracking-[1.5px] flex-col justify-center items-center border border-off-gold/15 rounded-xs bg-off-gold/15 w-full h-[170px]`}>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/work">Work</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/pages">Pages</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header