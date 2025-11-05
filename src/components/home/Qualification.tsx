import { QualificationData } from '@/utils/Helper'
import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Icons from '../common/Icons'

const Qualification = () => {
    return (
        <div className='px-5 md:pt-20 sm:pt-14 pt-8 lg:pb-40 md:pb-20 sm:pb-14 pb-8'>
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="flex flex-wrap sm:gap-8 gap-5 items-stretch justify-center">
                    {
                        QualificationData.map((item, index) => (
                            <div className="md:p-12 sm:p-9 p-6 border border-off-gold/15 bg-off-gold/5 rounded-xs md:max-w-[445px]" key={index}>
                                <span className='satoshi text-custom-xs leading-130 uppercase opacity-60 tracking-[1.5px]'>0{item.id}</span>
                                <Heading className='mt-1 mb-2'>{item.title}</Heading>
                                <Paragraph className='text-base! text-start'>{item.paragraph}</Paragraph>
                                <div className="size-8 sm:mt-8 mt-4 flex justify-center items-center rounded-[999px] border border-off-gold/15 bg-off-gold/5">
                                    <Icons icon="qualificationArrowIcon" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Qualification