"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Paragraph from '../common/Paragraph'
import gsap from 'gsap';

gsap.registerPlugin();

const Hero = () => {
    const tl = gsap.timeline()
    const mainHeadingRef = useRef(null)
    const paragraphRef = useRef(null)
    useEffect(() => {
        tl.to(
            mainHeadingRef.current,
            {
                y: 0,
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: .8,
                ease: "quad",
                delay:1
            });
        tl.to(paragraphRef.current,
            {
                y: 0,
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: .8,
                ease: "quad"
            });
    }, [])
    return (
        <div className='relative px-5'>
            <Image
                src={"/assets/images/png/home-page-header.png"}
                alt='man image'
                width={700}
                height={500}
                className='mx-auto sm:mt-3.5 mt-15'
            />
            <div className="max-w-[1025px] mx-auto w-full">
                <h1 ref={mainHeadingRef} className='xl:text-10xl lg:text-9xl md:text-8xl sm:text-6xl text-5xl text-center font-light leading-100 italic blur-2xl scale-95 opacity-0 translate-y-[100px]'>
                    Web Developer
                </h1>
                <Paragraph ref={paragraphRef} className='max-w-[600px] mx-auto pt-6 max-md:text-lg! max-sm:text-base! blur-2xl scale-95 opacity-0 translate-y-[100px]'>Premium web design, development, and SEO services to help your business stand out.</Paragraph>
            </div>
        </div>
    )
}

export default Hero