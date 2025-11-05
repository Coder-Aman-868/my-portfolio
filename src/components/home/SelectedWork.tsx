import React from 'react'
import Heading from '../common/Heading'
import Icons from '../common/Icons'
import { SelectedWorkData } from '@/utils/Helper'
import Image from 'next/image'

const SelectedWork = () => {
  return (
    <div className='px-5'>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center pb-8">
          <Heading className='md:text-custom-6xl! sm:text-5xl text-4xl satoshi font-light leading-110'>Selected <span className='italic'>Work</span></Heading>
          <div className="size-8 flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
            <Icons icon="qualificationArrowIcon" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 sm:gap-8 gap-5">
          {
            SelectedWorkData.map((item, index) => (
              <div className="relative" key={index}>
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