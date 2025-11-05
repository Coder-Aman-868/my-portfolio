import React from 'react'
import Marquee from 'react-fast-marquee'
import Paragraph from '../common/Paragraph'
import Heading from '../common/Heading'
import Cta from '../common/Cta'
import Icons from '../common/Icons'

const ProjectInMind = () => {
  return (
    <>
      <div className="w-full">
        <Marquee autoFill={true} speed={100} className='bg-off-gold/10 py-4 border-t border-b border-off-gold/15'>
          <span className='satoshi text-custom-xs tracking-[1.5px] leading-160 uppercase pl-8'>Let’s talk</span>
          <span className='satoshi text-custom-xs tracking-[1.5px] leading-160 uppercase pl-8'>+++</span>
        </Marquee>
      </div>
      <div className="px-5 2xl:py-40 lg:py-25 md:py-20 sm:py-14 py-8 bg-off-gold/5">
        <div className="max-w-[843px] w-full mx-auto flex flex-col items-center justify-center">
          <Paragraph className='uppercase text-custom-xs! tracking-[1.5px]'>Project in mind?</Paragraph>
          <Heading className='lg:text-9xl! md:text-8xl! sm:text-6xl! text-5xl! satoshi font-light leading-100! text-center my-2'>Let’s make your <br /> <span className='italic'>Website shine</span></Heading>
          <Paragraph className='max-w-[500px] text-xl!'>Premium web design, webflow, and SEO services to help your business stand out.</Paragraph>
          <Cta className='flex justify-center items-center gap-3 mt-8'>Get in touch <Icons pathClassName='fill-off-black!' icon='qualificationArrowIcon' /></Cta>
        </div>
      </div>
    </>
  )
}

export default ProjectInMind