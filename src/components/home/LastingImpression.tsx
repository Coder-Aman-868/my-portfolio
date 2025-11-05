import Image from 'next/image'
import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Icons from '../common/Icons'

const LastingImpression = () => {
  return (
    <div className='overflow-hidden relative 2xl:pb-[223px] lg:pb-25 md:pb-20 sm:pb-14 pb-8'>
      <div className="flex max-md:flex-col items-center xl:gap-10 justify-center max-md:pb-0 max-sm:pt-15 max-sm:px-5">
        <Heading className='xl:text-9xl! lg:text-7xl sm:text-6xl text-4xl leading-100! font-light! text-nowrap!'>Arik <span className='italic'>Andersson</span></Heading>
        <Image
          src='/assets/images/png/home-page-header.png'
          alt='Lasting Impression'
          width={880}
          height={769}
          className='md:min-w-[700px] max-w-[300px] w-auto'
        />
        <Heading className='xl:text-9xl! lg:text-7xl sm:text-6xl text-4xl leading-100! font-light! text-nowrap! md:flex hidden'>Arik <span className='italic'>Andersson</span></Heading>
      </div>
      <div className="max-w-[1200px] mx-auto flex md:flex-row flex-col max-md:items-center lg:gap-16 sm:gap-10 gap-5 px-5">
        <Heading className='lg:text-5xl! text-4xl max-md:text-center max-w-[568px] w-full'>A website that leaves <br />
          <p className='italic'>a lasting impression!</p></Heading>
        <div className="max-w-[568px] w-full">
          <Paragraph className='text-lg! md:text-start text-center sm:mb-8 mb-5'>Hi, I'm Arik Andersson - a freelancer specializing in premium web design, development, and SEO services. I'm passionate about creating unique and effective solutions for my clients, and I bring a personal touch to every project. Let's work together to bring your vision to life!</Paragraph>
          <div className="flex gap-2.5 items-center max-md:justify-center">
            <div className="min-h-[46px] min-w-[46px] flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
            <Icons icon='twitterIcon'/>
            </div>
            <div className="min-h-[46px] min-w-[46px] flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
            <Icons icon='instagramIcon'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastingImpression