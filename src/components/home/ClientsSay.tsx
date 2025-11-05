"use client";
import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Image from 'next/image'
import { clientsData } from '@/utils/Helper'

const ClientsSay = () => {
  return (
    <div className='px-5'>
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[600px] mx-auto md:mb-16 mb-10">
          <Heading className='lg:text-9xl! md:text-8xl! sm:text-6xl! text-5xl! satoshi font-light leading-100! text-center sm:mb-4 mb-3'>What my <br /> <span className='italic'>clients say</span></Heading>
          <Paragraph className='sm:text-lg! text-base!'>See what my clients have to say about working with me and the results I helped them achieve.</Paragraph>
        </div>
        <div className="w-full grid lg:grid-cols-2 sm:gap-8 gap-5">
          {
            clientsData.map((item, index) => (
              <div key={index} className="border border-off-gold/15 bg-off-gold/5 backdrop-blur-[10px] md:p-12 sm:p-9 p-6 rounded-xs">
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={100}
                  height={100}
                  className='w-auto! h-auto!'
                />
                <Heading className='sm:mt-8 mt-4 sm:mb-2 mb-1 sm:text-2xl! text-xl!'>{item.heading}</Heading>
                <Paragraph className='leading-180 sm:text-base! text-sm! text-start sm:mb-8 mb-4'>{item.paragraph}</Paragraph>
                <div className="flex gap-4 items-center">
                  <Image
                    src={item.clientImage}
                    alt={item.name}
                    width={60}
                    height={60}
                    className='rounded-[999px] sm:size-[60px] size-[50px] object-cover'
                  />
                  <div>
                    <Heading className='text-custom-xs! tracking-[1.5px] uppercase leading-160'>{item.name}</Heading>
                    <Paragraph className='text-sm! text-start leading-160 font-light'>{item.company}</Paragraph>
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

export default ClientsSay