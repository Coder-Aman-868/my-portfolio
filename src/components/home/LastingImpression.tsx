import Image from 'next/image'
import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Icons from '../common/Icons'

const LastingImpression = () => {
  return (
    <div className='overflow-hidden relative '>
      <div className="flex items-center gap-10 justify-center">
        <Heading className='text-9xl! leading-100! font-light! text-nowrap!'>Arik <span className='italic'>Andersson</span></Heading>
        <Image
          src='/assets/images/png/home-page-header.png'
          alt='Lasting Impression'
          width={880}
          height={769}
          className='min-w-[700px]'
        />
        <Heading className='text-9xl! leading-100! font-light! text-nowrap!'>Arik <span className='italic'>Andersson</span></Heading>
      </div>
      <div className="max-w-[1200px] mx-auto flex gap-16">
        <Heading className='text-5xl! max-w-[568px] w-full'>A website that leaves
          <p className='italic'>a lasting impression!</p></Heading>
        <div className="max-w-[568px] w-full">
          <Paragraph className='text-lg! text-start mb-8'>Hi, I'm Arik Andersson - a freelancer specializing in premium web design, development, and SEO services. I'm passionate about creating unique and effective solutions for my clients, and I bring a personal touch to every project. Let's work together to bring your vision to life!</Paragraph>
          <div className="flex gap-2.5 items-center">
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