import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Image from 'next/image'
import { clientsData } from '@/utils/Helper'

const ClientsSay = () => {
  return (
    <div className='px-5'>
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[600px] mx-auto mb-16">
          <Heading className='text-9xl! satoshi font-light leading-100! text-center mb-4'>What my <span className='italic'>clients say</span></Heading>
          <Paragraph className='text-lg!'>See what my clients have to say about working with me and the results I helped them achieve.</Paragraph>
        </div>
        <div className="w-full grid grid-cols-2 gap-8">
          {
            clientsData.map((item, index) => (
              <div className="border border-off-gold/15 bg-off-gold/5 backdrop-blur-[10px] p-12 rounded-xs">
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={100}
                  height={100}
                  className='w-auto! h-auto!'
                />
                <Heading className='mt-8 mb-2 text-2xl!'>{item.heading}</Heading>
                <Paragraph className='leading-180 text-base! text-start mb-8'>{item.paragraph}</Paragraph>
                <div className="flex gap-4 items-center">
                  <Image
                    src={item.clientImage}
                    alt={item.name}
                    width={60}
                    height={60}
                    className='rounded-[999px]'
                  />
                  <div className="">
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