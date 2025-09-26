import Image from 'next/image'
import React from 'react'
import Heading from './Heading'
import Link from 'next/link'
import Icons from './Icons'
interface LinkItem {
    icon: string;
    link: string;
}

interface MyDataItem {
    icon: string;
    text: string;
    link?: string; // optional, kyunki last object me nahi hai
}

const ProfileSideBar = () => {
    const links: LinkItem[] = [
        {
            icon: "instagram",
            link: "/i"
        },
        {
            icon: "linkedin",
            link: "/i"
        },
        {
            icon: "github",
            link: "/i"
        },
        {
            icon: "twitter",
            link: "/i"
        }
    ]
    const myData: MyDataItem[] = [
        {
            icon: "phone",
            text: "+91 786XX XX740",
            link: "+91 786XX XX740"
        },
        {
            icon: "mail",
            text: "MyGmail@gmail.com",
            link: "MyGmail@gmail.com"
        },
        {
            icon: "location",
            text: "Surat, Gujarat",
            link: ""
        },
        {
            icon: "date",
            text: "12, NOV. 2003",
        },
    ]
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
                <Heading className='py-2.5'>Vishu K. Bhingradiya</Heading>
                <span className="border border-[#4B3D10] bg-[#272522] py-2.5 px-5 rounded-[6px] text-[#CCC0C0] font-medium text-sm leading-100 font-inter mb-[34px]">MERN + Flutter Dev.</span>
                <div className="flex items-center gap-4 mb-10">
                    {
                        links.map((link, index) => (
                            <Link key={index} href={link.link} >
                                <Icons icon={link.icon} />
                            </Link>
                        ))
                    }
                </div>
                <div className="bg-[#3B3729] rounded-[12px] p-5 flex flex-col gap-[11px]">
                    {
                        myData.map((data, index) => (
                            <>
                                <div key={index} className=" flex items-center gap-5">
                                    <Icons icon={data.icon} />
                                    {data.link ? (
                                        <Link className='text-[15px] text-[#CCC0C0] leading-100 font-medium font-inter' href={data.link}>{data.text}</Link>
                                    ) : (
                                        <span className='text-[15px] text-[#CCC0C0] leading-100 font-medium font-inter'>{data.text}</span>
                                    )}
                                </div>
                                <div className={`border border-black opacity-10 w-full ${index === 3 ? "hidden" : "flex"}`}></div></>
                        ))
                    }
                </div>
                <button className='bg-[#C2B293] border-2 border-[#4B3D10] px-[31px] py-3 rounded-[8px] font-black text-[21px] leading-100 text-[#3B3729] font-merriweather-sans mt-[30px] mb-[46px]'>View Resume</button>
            </div>
        </div>
    )
}

export default ProfileSideBar