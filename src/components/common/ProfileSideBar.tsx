import Image from 'next/image'
import React from 'react'

const ProfileSideBar = () => {
  return (
    <div className='sticky top-0 left-0 text-white max-w-[329px] w-full pt-[63px]'>
        <div className="border-[3px] border-[#4B3D10] w-full flex flex-col items-center rounded-[13px]">
            <Image
             width={200}
             height={200}
             src={"/assets/images/png/my-image.png"}
             alt='profile-image'
             className='rounded-[14px] border-[5px] border-[#4B3D10] -translate-y-[63px] -mb-[63px]'
             />
        </div>
    </div>
  )
}

export default ProfileSideBar