import Image from 'next/image'
import React from 'react'
import Icons from './Icons'

const Header = () => {
  return (
    <div className='px-5 py-4 h-[10vh] flex justify-center items-center'>
      <div className="max-w-[1140px] mx-auto w-full">
        <div className="flex justify-between items-center">
          <Image
            width={234}
            height={62}
            src={'/assets/images/svg/PortFolio.svg'}
            alt='logo '
            className='md:!h-[62px] sm:!h-[25px] !h-[20px] '
          />
          <div className="md:size-[59px] sm:size-[40px] size-[30px] bg-light-dart rounded-[999px] flex flex-col gap-10 overflow-hidden dark:justify-start justify-center duration-300 ease-in-out items-center cursor-pointer md:pt-[17px] sm:py-[10px] py-[6px] md:pb-4">
            <Icons className='md:!min-w-[26px] sm:min-w-[20px] min-w-[18px] md:!min-h-[26px] sm:min-h-[20px] min-h-[18px]' icon='darkmode' />
            <Icons className='md:!min-w-[26px] sm:min-w-[20px] min-w-[18px] md:!min-h-[26px] sm:min-h-[20px] min-h-[18px]' icon='lightmode' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header