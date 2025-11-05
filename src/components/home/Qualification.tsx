"use client"
import { QualificationData } from '@/utils/Helper'
import React, { useEffect, useRef } from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Icons from '../common/Icons'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Qualification = () => {
    const boxRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        boxRef.current.forEach((box, index) => {
            if (box) {
                gsap.fromTo(box,
                    {
                        y: 100,
                        opacity: 0,
                        filter: "blur(10px)",
                        scale: 0.95,
                        stagger: .1
                    },
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        scale: 1,
                        scrollTrigger: {
                            trigger: box,
                            markers: true,
                            start: "top 90%",
                            end: "top 60%",
                            scrub: 1,
                            toggleActions: "play none none reverse"
                        },
                        ease: "power3.out",

                    }
                )
            }
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])
    return (
        <div className='px-5 md:pt-20 sm:pt-14 pt-8 lg:pb-40 md:pb-20 sm:pb-14 pb-8'>
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="flex flex-wrap sm:gap-8 gap-5 items-stretch justify-center">
                    {
                        QualificationData.map((item, index) => (
                            <div ref={(el) => { boxRef.current[index] = el }} className="md:p-12 sm:p-9 p-6 border border-off-gold/15 bg-off-gold/5 rounded-xs md:max-w-[445px] blur-[10px] translate-y-[30px]" key={index}>
                                <span className='satoshi text-custom-xs leading-130 uppercase opacity-60 tracking-[1.5px]'>0{item.id}</span>
                                <Heading className='mt-1 mb-2'>{item.title}</Heading>
                                <Paragraph className='text-base! text-start'>{item.paragraph}</Paragraph>
                                <div className="size-8 sm:mt-8 mt-4 flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
                                    <Icons icon="qualificationArrowIcon" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Qualification