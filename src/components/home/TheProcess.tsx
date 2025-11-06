"use client"
import React, { useEffect, useRef } from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Icons from '../common/Icons'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

const TheProcess = () => {
  const smallHeadiingRef = useRef(null)
  const mainHeadiingRef = useRef(null)
  const mainHeadiingSpanRef = useRef(null)
  const paragraphRef = useRef(null)
  const arrowRef = useRef(null)

  useEffect(() => {
    if (smallHeadiingRef.current) {
      const split = new SplitText(smallHeadiingRef.current, {
        type: "chars,words,lines",
        charsClass: "char",
        wordsClass: "word",
        linesClass: "line"
      })
      gsap.fromTo(split.chars, {
        opacity: 0,
        y: 50,
        rotationX: -90,
      },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: smallHeadiingRef.current,
            start: "top 85%",
            end: "top 70%",
            scrub: 1,
            toggleActions: "play none none reverse"
          },
          duration: 1,
          ease: "back.out(1.7)"
        })
    };
    gsap.fromTo(mainHeadiingRef.current,
      {
        opacity: 0,
        x: -100,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 3,
        scrollTrigger: {
          trigger: mainHeadiingRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
          toggleActions: "play none none reverse"
        },
        ease: "back.out(1.7)"
      });
    gsap.fromTo(mainHeadiingSpanRef.current,
      {
        opacity: 0,
        x: 100,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 3,
        scrollTrigger: {
          trigger: mainHeadiingSpanRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
          toggleActions: "play none none reverse"
        },
        ease: "back.out(1.7)"
      });
    gsap.fromTo(paragraphRef.current,
      {
        opacity: 0,
        y: 100,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 3,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
          toggleActions: "play none none reverse"
        },
        ease: "back.out(1.7)"
      });
    gsap.fromTo(arrowRef.current,
      {
        x: 100,
        rotate: 180,
        opacity: 0
      },
      {
        x: 0,
        rotate: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: arrowRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
          toggleActions: "play none none reverse"
        },
        duration: 1,
      }
    )
  }, [])
  return (
    <div className='px-5 lg:pt-40 md:pt-20 sm:pt-14 pt-8'>
      <div className="max-w-[710px] mx-auto flex flex-col items-center justify-center">
        <Paragraph ref={smallHeadiingRef} className='uppercase text-custom-xs! tracking-[1.5px]'>THe PRocess</Paragraph>
        <Heading ref={mainHeadiingRef} className='lg:text-9xl! md:text-8xl! sm:text-6xl! text-5xl! satoshi font-light leading-100! text-center sm:mt-4 mt-3'>Your Website</Heading>
        <Heading ref={mainHeadiingSpanRef} className='lg:text-9xl! md:text-8xl! sm:text-6xl! text-5xl! satoshi font-light leading-100! text-center sm:mb-4 mb-3 italic'>in 5 steps</Heading>
        <Paragraph ref={paragraphRef} className='max-w-[500px] sm:text-xl! text-base!'>Our process ensures that we create a website tailored to your business needs.</Paragraph>
        <div ref={arrowRef} className="size-[46px] sm:mt-12 mt-8 flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
          <Icons icon="downArrowIcon" />
        </div>
      </div>
    </div>
  )
}

export default TheProcess