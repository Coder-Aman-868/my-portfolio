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
                className='mx-auto mt-3.5'
            />
            <div className="max-w-[1025px] mx-auto w-full">
                <h1 className='text-10xl text-center font-light leading-100 italic'>
                    Web Developer
                </h1>
                <Paragraph className='max-w-[600px] mx-auto pt-4'>Premium web design, development, and SEO services to help your business stand out.</Paragraph>
            </div>
        </div>
    )
}

export default Hero