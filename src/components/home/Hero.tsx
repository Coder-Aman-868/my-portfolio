import Image from 'next/image'
import React from 'react'
import Paragraph from '../common/Paragraph'

const Hero = () => {
    return (
        <div className='relative px-5'>
            <Image
                src={"/assets/images/png/home-page-header.png"}
                alt='man image'
                width={700}
                height={500}
                className='mx-auto sm:mt-3.5 mt-15'
            />
            <div className="max-w-[1025px] mx-auto w-full">
                <h1 className='xl:text-10xl lg:text-9xl md:text-8xl sm:text-6xl text-5xl text-center font-light leading-100 italic'>
                    Web Developer
                </h1>
                <Paragraph className='max-w-[600px] mx-auto pt-6 max-md:text-lg! max-sm:text-base!'>Premium web design, development, and SEO services to help your business stand out.</Paragraph>
            </div>
        </div>
    )
}

export default Hero