import React from 'react'
import Icons from './Icons'
import Paragraph from './Paragraph'
import { footerLinksData } from '@/utils/Helper'
import Heading from './Heading'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='px-5 py-16'>
      <div className="max-w-[1600px] mx-auto w-full justify-between">
        <div className="flex gap-16 justify-between">
          <div className="max-w-[200px] w-full">
            <a href="/">
              <h4 className='text-xl leading-100 satoshi'>aman.</h4>
            </a>
            <div className="flex flex-col gap-4 pt-[43px]">
              <div className="flex gap-4 items-center">
                <div className="min-h-[38px] min-w-[38px] flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
                  <span className='satoshi text-custom-xs! tracking-[1.5px]  leading-160'>
                    <Icons icon='instagramIcon' />
                  </span>
                </div>
                <Paragraph className='text-custom-xs! leading-160 tracking-[1.5px] uppercase'>Instagram</Paragraph>
              </div>
              <div className="flex gap-4 items-center">
                <div className="min-h-[38px] min-w-[38px] flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
                  <span className='satoshi text-custom-xs! tracking-[1.5px]  leading-160'>
                    <Icons icon='twitterIcon' />
                  </span>
                </div>
                <Paragraph className='text-custom-xs! leading-160 tracking-[1.5px] uppercase'>twitter</Paragraph>
              </div>
            </div>

          </div>
          <div className="flex justify-between max-w-[1076px] w-full">
            {
              footerLinksData.map((item, index) => (
                <div key={index} className="max-w-[316px] w-full">
                  <Heading className='text-xl! tracking-[1px]'>{item.title}</Heading>
                  <ul className='flex flex-col gap-4 pt-8'>
                    {
                      item.links.map((linkItem, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={linkItem.url}><Paragraph className='text-custom-xs! leading-160 tracking-[1.5px] uppercase text-start'>{linkItem.name}</Paragraph></Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer