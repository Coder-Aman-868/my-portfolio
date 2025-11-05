import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Icons from '../common/Icons'

const TheProcess = () => {
  return (
    <div className='px-5 lg:pt-40 md:pt-20 sm:pt-14 pt-8'>
      <div className="max-w-[710px] mx-auto flex flex-col items-center justify-center">
        <Paragraph className='uppercase text-custom-xs! tracking-[1.5px]'>THe PRocess</Paragraph>
        <Heading className='lg:text-9xl! md:text-8xl! sm:text-6xl! text-5xl! satoshi font-light leading-100! text-center sm:my-4 py-3'>Your Website <br /> <span className='italic'>in 5 steps</span></Heading>
        <Paragraph className='max-w-[500px] sm:text-xl! text-base!'>Our process ensures that we create a website tailored to your business needs.</Paragraph>
        <div className="size-[46px] sm:mt-12 mt-8 flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
          <Icons icon="downArrowIcon" />
        </div>
      </div>
    </div>
  )
}

export default TheProcess