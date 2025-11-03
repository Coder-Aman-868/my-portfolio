import { QualificationData } from '@/utils/Helper'
import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'

const Qualification = () => {
    return (
        <div className='px-5 pt-20 pb-40'>
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="flex flex-wrap gap-8 items-stretch justify-center">
                    {
                        QualificationData.map((item, index) => (
                        <div className="p-12 border border-off-gold/15 bg-off-gold/5 rounded-xs max-w-[445px]" key={index}>
                            <span className='satoshi text-custom-xs leading-130 uppercase opacity-60 tracking-[1.5px]'>0{item.id}</span>
                            <Heading className='mt-1 mb-2'>{item.title}</Heading>
                            <Paragraph className='text-base! text-start'>{item.paragraph}</Paragraph>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Qualification