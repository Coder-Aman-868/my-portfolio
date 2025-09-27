import Image from 'next/image'
import React from 'react'
import Icons from './Icons'

const Header = () => {
  return (
    <div className='px-5 py-9'>
        <div className="max-w-[1140px] mx-auto">
            <div className="flex justify-between items-center">
                <Image
                width={234}
                height={62}
                src={'/assets/images/svg/PortFolio.svg'}
                alt='logo'
                />
                <div className="size-[59px] bg-light-dart rounded-[999px] flex flex-col gap-10 overflow-hidden dark:justify-start justify-center duration-300 ease-in-out items-center cursor-pointer pt-[17px] pb-4">
                    <Icons className='!min-w-[26px] !min-h-[26px]' icon='darkmode' />
                    <Icons className='!min-w-[19px] !min-h-[26px]' icon='lightmode' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header