"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Heading from "./Heading";
import Link from "next/link";
import Icons from "./Icons";
import ConfettiCanvas from "../ConfettiCanvas";

const ProfileSideBar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  // Mobile toggle
  const toggleSidebar = () => {
    if (!sidebarRef.current) return;
    if (!open) {
      gsap.to(sidebarRef.current, { y: 0, duration: 0.7, ease: "power4.out" });
    } else {
      gsap.to(sidebarRef.current, { y: "-100%", duration: 0.6, ease: "power3.in" });
    }
    setOpen(!open);
  };

  useEffect(() => {
    if (sidebarRef.current) {
      if (window.innerWidth < 1536) {
        gsap.set(sidebarRef.current, { y: "-100%" });
      } else {
        gsap.set(sidebarRef.current, { y: "-100%" });
      }
    }
  }, []);

  const links = [
    { icon: "instagram", link: "/i" },
    { icon: "linkedin", link: "/i" },
    { icon: "github", link: "/i" },
    { icon: "twitter", link: "/i" },
  ];

  const myData = [
    { icon: "phone", text: "+91 786XX XX740", link: "tel:+91786XXXXX740" },
    { icon: "mail", text: "MyGmail@gmail.com", link: "mailto:MyGmail@gmail.com" },
    { icon: "location", text: "Surat, Gujarat", link: "mailto:MyGmail@gmail.com" },
    { icon: "date", text: "12, NOV. 2003" }
  ];

  return (
    <>
      {/* Rope for Mobile */}
      <div
        className={`fixed left-5 !z-[999]  w-10 h-16 bg-gradient-to-b from-[#C2B293] to-[#B7A261] rounded-b-full cursor-pointer flex items-center justify-center duration-300 hover:top-0 shadow-md ${open ? "top-0" : "-top-8"}`}
        onClick={toggleSidebar}
      >
        <span className="w-1.5 h-12 bg-[#4B3D10] rounded-full"></span>
      </div>

      {/* Sidebar Outer Gradient Border */}
      <div
        ref={sidebarRef}
        className="fixed rounded-2xl top-0 left-0 w-full z-40 h-screen
        p-1 bg-gradient-to-br from-[#B7A261] via-[#C2B293] to-[#FFD580]
        -translate-y-full"
      >
        {/* Sidebar Inner Card */}
        <div className="bg-[#1c1a17]/95 backdrop-blur-sm rounded-2xl p-8 flex flex-col sm:gap-5 gap-3 h-full overflow-y-auto hide-scrollbar overflow-x-clip">
          {/* Profile */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative p-[4px] rounded-full bg-gradient-to-tr from-[#B7A261] via-[#C2B293] to-[#FFD580] shadow-lg">
              <Image
                width={140}
                height={140}
                src="/assets/images/png/my-image.png"
                alt="profile-image"
                className="rounded-full border-4 border-[#1c1a17]"
              />
            </div>
            <Heading className="text-xl font-bold text-center bg-gradient-to-r from-[#FFD580] via-[#C2B293] to-[#B7A261] bg-clip-text text-transparent">
              Aman Siwach
            </Heading>
            <span className="text-sm text-[#B7A261] font-medium tracking-wide">
              Front-End-Developer
            </span>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-6 mt-4 flex-wrap">
            {links.map((link, i) => (
              <Link key={i} href={link.link} className="relative group">
                {/* Outer animated gradient ring */}
                <div className="
        p-[2px] rounded-full
        bg-gradient-to-tr from-[#FFD580] via-[#C2B293] to-[#B7A261]
        bg-[length:200%_200%] bg-left-top
        transition-all duration-1000 ease-in-out
        group-hover:bg-right-bottom
        group-hover:scale-110
        shadow-lg
      ">
                  {/* Inner circle */}
                  <div className="
          p-4 bg-[#1c1a17] rounded-full flex items-center justify-center
          transition-colors duration-500 ease-in-out
          group-hover:bg-[#272421]
          shadow-inner
        ">
                    {/* Icon */}
                    <Icons
                      icon={link.icon}
                      className=" w-8 h-8 "
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>


          {/* Info */}
          <div className="flex flex-col gap-4 mt-5">
            {myData.map((data, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#22201d] to-[#1a1816] border border-[#2e2b28]
                 hover:border-[#B7A261] hover:shadow-lg hover:shadow-[#B7A261]/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon Badge */}
                <div className="p-3 rounded-xl bg-gradient-to-tr from-[#B7A261]/20 to-[#FFD580]/20 border border-[#3B3729] flex items-center justify-center">
                  <Icons icon={data.icon} className="!fill-[#FFD580] w-5 h-5" />
                </div>

                {/* Text */}
                {data.link ? (
                  <Link
                    href={data.link}
                    className="text-sm sm:text-xs text-[#EADBC8] font-medium hover:text-[#FFD580] transition-colors duration-300"
                  >
                    {data.text}
                  </Link>
                ) : (
                  <span className="text-sm sm:text-xs text-[#EADBC8] font-medium">
                    {data.text}
                  </span>
                )}
              </div>
            ))}
          </div>
          {/* Resume Button */}
          <button className="relative w-full  min-h-[48px] py-3 rounded-xl font-bold text-base text-[#1c1a17] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 ease-in-out">
            {/* Gradient Background */}
            <span className="
    absolute inset-0
    bg-gradient-to-r from-[#FFD580] via-[#C2B293] to-[#B7A261]
    bg-[length:200%_100%] bg-left
    transition-all duration-500 ease-in-out
    hover:bg-right
  "></span>

            {/* Button Text */}
            <span className="relative z-10">View Resume</span>
          </button>

        </div>
      </div >
      <ConfettiCanvas />
    </>
  );
};

export default ProfileSideBar;
