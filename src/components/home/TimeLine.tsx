"use client"
import { timeLineData } from '@/utils/Helper'
import React, { useEffect, useRef } from 'react'
import Paragraph from '../common/Paragraph'
import Heading from '../common/Heading'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TimeLine = () => {
  const boxRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    boxRef.current.forEach((box, index) => {
      if (index % 2 !== 0) {
        gsap.fromTo(box,
          {
            opacity: 0,
            x: -100,
            scale: 0.95,
            y: 50,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 3,
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "top 60%",
              scrub: 1,
              toggleActions: "play none none reverse"
            },
            ease: "back.out(1.7)"
          }
        )
      } else {
        gsap.fromTo(box,
          {
            opacity: 0,
            x: 100,
            scale: 0.95,
            y: 50,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 3,
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "top 60%",
              scrub: 1,
              toggleActions: "play none none reverse"
            },
            ease: "back.out(1.7)"
          }
        )
      }
    })
  })

  return (
    <div className='px-5 lg:pt-28 md:py-20 sm:py-14 py-8 lg:pb-40 overflow-y-hidden'>
      <div className="max-w-[1400px] mx-auto">
        <div className="">
          {
            timeLineData.map((item, index) => (
              <div key={index} className={`w-full flex relative lg:pl-0 sm:pl-15 pl-12 ${index % 2 !== 0 ? "lg:justify-start" : "lg:justify-end"} ${index === 0 ? "mt-0" : "lg:-mt-12"}`}>
                <div ref={(el) => { boxRef.current[index] = el }} className="lg:w-[45%] border border-off-gold/15 bg-off-gold/5 rounded-xs backdrop-blur-[10px] md:p-12 sm:p-9 p-6 mt-6">
                  <Paragraph className='uppercase text-custom-xs! tracking-[1.5px] opacity-60 text-start leading-160!'>{item.title}</Paragraph>
                  <Heading className='sm:text-2xl! text-xl! font-light tracking-[1px] uppercase mt-1'>{item.heading}</Heading>
                  <Paragraph className='sm:mt-4 mt-1 sm:text-base! text-sm! text-start leading-180 sm:mb-8 mb-4'>{item.paragraph}</Paragraph>
                  <ul className='list-disc pl-5 sm:space-y-4 space-y-1'>
                    {
                      item.list.map((listItem, listIndex) => (
                        <li className='chillax leading-180 sm:text-base text-sm' key={listIndex}>{listItem}</li>
                      ))
                    }
                  </ul>
                </div>
                <div className="absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 h-full flex items-center gap-4 flex-col justify-center">
                  <div className={`border border-off-gold/15 h-full ${index === 0 ? "opacity-0 pointer-events-none" : "flex"}`}></div>
                  <div className="sm:min-h-10 min-w-8 sm:min-w-10 min-h-8 flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
                    <span className='satoshi sm:text-custom-xs! text-xs tracking-[1.5px]  leading-160'>0{index + 1}</span>
                  </div>
                  <div className={`border border-off-gold/15 h-full ${index === timeLineData.length - 1 ? "opacity-0 pointer-events-none" : "flex"}`}></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TimeLine