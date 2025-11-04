import { timeLineData } from '@/utils/Helper'
import React from 'react'
import Paragraph from '../common/Paragraph'
import Heading from '../common/Heading'

const TimeLine = () => {
  const timeLineIndex = []
  for (let i = 1; i < timeLineData.length + 1; i++) {
    timeLineIndex.push(i)
  }
  return (
    <div className='px-5 pt-28 pb-40'>
      <div className="max-w-[1400px] mx-auto">
        <div className="">
          {
            timeLineData.map((item, index) => (
              <div key={index} className={`w-full flex relative ${index % 2 !== 0 ? "justify-start" : "justify-end"} ${index === 0 ? "mt-0" : "-mt-12"}`}>
                <div className="w-[45%] border border-off-gold/15 bg-off-gold/5 rounded-xs backdrop-blur-[10px] p-12">
                  <Paragraph className='uppercase text-custom-xs! tracking-[1.5px] opacity-60 text-start leading-160!'>{item.title}</Paragraph>
                  <Heading className='text-2xl! font-light tracking-[1px] uppercase mt-1'>{item.heading}</Heading>
                  <Paragraph className='mt-4 text-base! text-start leading-180 mb-8'>{item.paragraph}</Paragraph>
                  <ul className='list-disc pl-5 space-y-4'>
                    {
                      item.list.map((listItem, listIndex) => (
                        <li className='chillax leading-180' key={listIndex}>{listItem}</li>
                      ))
                    }
                  </ul>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex items-center gap-4 flex-col justify-center">
                  <div className="border border-off-gold/15 h-full"></div>
                  <div className="min-h-10 min-w-10 flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
                    <span className='satoshi text-custom-xs! tracking-[1.5px]  leading-160'>0{index + 1}</span>
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