"use client";
import React, { useEffect, useState } from 'react'
import Cta from './Cta'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (isMenuOpen === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);
    return (
        <div className='fixed sm:top-12 top-5 left-1/2 -translate-x-1/2 z-999 max-sm:w-full px-5'>
            <div className="p-3 pl-6 border border-off-gold/15 rounded-xs bg-off-gold/10 backdrop-blur-[10px] w-full relative">
                <div className='flex items-center gap-8  max-sm:justify-between'>
                    <h4 className='text-xl leading-100 satoshi'>Aman.</h4>
                    <div className='satoshi flex items-center gap-4'>
                        <ul className={`flex items-center gap-5 text-custom-xs leading-130 uppercase tracking-[1.5px] max-sm:absolute max-sm:top-110 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:border max-sm:border-off-gold/15 max-sm:rounded-xs max-sm:bg-off-gold/15 max-sm:w-full max-sm:h-[170px] duration-300 ${isMenuOpen ? "max-sm:opacity-100 max-sm:right-0" : "max-sm:opacity-0 max-sm:pointer-events-none max-sm:-right-100"}`}>
                            <li><a href="">Services</a></li>
                            <li><a href="">Work</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Pages</a></li>
                        </ul>
                        <Cta>Let’s talk</Cta>
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-[30px] flex flex-col gap-1.5 items-end cursor-pointer group sm:hidden relative">
                            <span className={`w-full h-1 rounded-xl bg-off-gold group-hover:w-full duration-300 ${isMenuOpen ? "absolute top-1/2 left-0 w-full -translate-y-1/2 rotate-45" : ""}`}></span>
                            <span className={`w-2/3 h-1 rounded-xl bg-off-gold group-hover:w-full duration-300 ${isMenuOpen ? "opacity-0 w-full" : ""}`}></span>
                            <span className={`w-1/3 h-1 rounded-xl bg-off-gold group-hover:w-full duration-300 ${isMenuOpen ? "absolute top-1/2 left-0 w-full -translate-y-1/2 -rotate-45" : ""}`}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header