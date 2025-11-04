import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Icons from '../common/Icons'

const TheProcess = () => {
  return (
    <div className='px-5 pt-40'>
      <div className="max-w-[710px] mx-auto flex flex-col items-center justify-center">
        <Paragraph className='uppercase text-custom-xs! tracking-[1.5px]'>THe PRocess</Paragraph>
        <Heading className='text-9xl! satoshi font-light leading-100! text-center my-4'>Your Website <span className='italic'>in 5 steps</span></Heading>
        <Paragraph className='max-w-[500px] text-xl!'>Our process ensures that we create a website tailored to your business needs.</Paragraph>
        <div className="size-[46px] mt-12 flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
          <Icons icon="downArrowIcon" />
        </div>
      </div>
    </div>
  )
}

export default TheProcess