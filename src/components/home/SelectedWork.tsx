"use client"
import React, { useEffect, useRef } from 'react'
import Heading from '../common/Heading'
import Icons from '../common/Icons'
import { SelectedWorkData } from '@/utils/Helper'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const SelectedWork = () => {
  const boxRef = useRef<(HTMLDivElement | null)[]>([])
  const headingRef = useRef(null)

  useEffect(() => {
    if (headingRef.current) {
      const split = new SplitText(headingRef.current, {
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
            trigger: headingRef.current,
            start: "top 95%",
            end: "top 80%",
            scrub: 1,
            toggleActions: "play none none reverse"
          },
          duration: 1,
          ease: "back.out(1.7)"
        })

    };
    gsap.to(".arrowIcon", {
      x: 0,
      filter: "blur(0px)",
      rotate: 0,
      scrollTrigger: {
        trigger: ".arrowIcon",
        start: "top 95%",
        end: "top 80%",
        scrub: 1,
        toggleActions: "play none none reverse"
      },
      duration: 1,
      ease: "back.out(1.7)"
    })
    boxRef.current.forEach((box, index) => {
      if (index % 2 === 0) {
        gsap.fromTo(box, {
          x: -200,
          opacity: 0,
          filter: "blur(5px)",
        },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 3,
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
              markers: true,
              toggleActions: "play none none reverse"
            },
          })
      }
      else {
        gsap.fromTo(box, {
          x: 200,
          opacity: 0,
          filter: "blur(5px)",
        },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
              markers: true,
              toggleActions: "play none none reverse"
            },
          })
      }
    })
  }, [])
  return (
    <div className='px-5 overflow-hidden'>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center pb-8">
          <Heading ref={headingRef} className='md:text-custom-6xl! sm:text-5xl text-4xl satoshi font-light leading-110'>Selected <span className='italic'>Work</span></Heading>
          <div className="size-8 flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5 overflow-hidden">
            <Icons className='arrowIcon -translate-x-5 blur-[10px] rotate-90' icon="qualificationArrowIcon" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 sm:gap-8 gap-5">
          {
            SelectedWorkData.map((item, index) => (
              <div ref={(el) => { boxRef.current[index] = el }} className="relative" key={index}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={684}
                  height={513}
                />
                <div className="absolute w-full sm:bottom-8 bottom-4 left-0 sm:px-8 px-4">
                  <div className="border border-white/15 bg-white/5 backdrop-blur-[10px] rounded-xs px-4 py-3 w-full flex justify-between items-center">
                    <Heading className='max-sm:text-base!'>{item.title}</Heading>
                    <span className='tracking-[1.5px] uppercase leading-160 sm:text-custom-xs text-xs satoshi'>{item.paragraph}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SelectedWork