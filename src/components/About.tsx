import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'

const About = () => {
  return (
    <div className='pt-[29px] pr-[55px] pl-[43px] pb-[43px]'>
      <Heading>About</Heading>
      <Paragraph className='mt-4 !text-xl'>Hi, I’m <b>Aman Siwach</b>, a curious mind from <span className='italic font-semibold'>Hisar, Haryana</span>, who fell in love with technology not by chance, but by choice.</Paragraph>
      <Paragraph className='mt-4 !text-xl'>My journey began with a simple question: <br />  “How do websites actually work?”</Paragraph>
    </div>
  )
}

export default About