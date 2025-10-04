'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Icons from './Icons'

const THEME_KEY = 'portfolio_theme_mode'

const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const circleRef = useRef<HTMLDivElement>(null)
  const darkIconRef = useRef<HTMLDivElement>(null)
  const lightIconRef = useRef<HTMLDivElement>(null)
  const shimmerRef = useRef<HTMLSpanElement>(null)

  // Load saved theme from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(THEME_KEY) as 'light' | 'dark' | null
      if (storedTheme === 'light' || storedTheme === 'dark') {
        setTheme(storedTheme)
        document.body.classList.remove('theme-light', 'theme-dark')
        document.body.classList.add(storedTheme === 'light' ? 'theme-light' : 'theme-dark')
      } else {
        // Default: dark mode
        document.body.classList.remove('theme-light', 'theme-dark')
        document.body.classList.add('theme-dark')
      }
    }
  }, [])

  // Whenever theme changes, update localStorage and body class
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_KEY, theme)
      document.body.classList.remove('theme-light', 'theme-dark')
      document.body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark')
    }
    if (circleRef.current && shimmerRef.current) {
      gsap.fromTo(
        circleRef.current,
        { boxShadow: '0 0 0 0 #B7A26180', scale: 1 },
        {
          boxShadow: '0 0 24px 6px #B7A26180',
          scale: 1.11,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: 'power1.inOut'
        }
      )
      gsap.fromTo(
        shimmerRef.current,
        { left: theme === 'light' ? '-80%' : '80%' },
        {
          left: theme === 'light' ? '80%' : '-80%',
          duration: 0.7,
          ease: 'expo.inOut'
        }
      )
    }
    if (darkIconRef.current && lightIconRef.current) {
      gsap.to(darkIconRef.current, {
        opacity: theme === 'dark' ? 1 : 0.15,
        scale: theme === 'dark' ? 1.09 : 0.81,
        duration: 0.35,
        ease: 'expo.out'
      })
      gsap.to(lightIconRef.current, {
        opacity: theme === 'light' ? 1 : 0.17,
        scale: theme === 'light' ? 1.09 : 0.81,
        duration: 0.35,
        ease: 'expo.out'
      })
    }
  }, [theme])

  const handleToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <header className="px-5 py-4 h-[10vh] flex justify-center items-center transition-all duration-200">
      <div className="max-w-[1140px] mx-auto w-full">
        <div className="flex justify-between items-center">
          {/* Portfolio Logo */}
          <Image
            width={234}
            height={62}
            src="/assets/images/svg/PortFolio.svg"
            alt="logo"
            className="md:h-[62px] sm:h-[25px] h-[20px] transition-all duration-300"
            priority
          />

          {/* Cinematic Theme Toggle */}
          <button
            onClick={handleToggle}
            aria-label="Toggle theme"
            className="relative w-[64px] h-[34px] rounded-full bg-gradient-to-tr from-[#B7A261] via-[#E4D4A7cc] to-[#1c1a17] border border-[#B7A26166] flex items-center transition-all duration-200 cursor-pointer overflow-hidden shadow-lg"
          >
            {/* Toggle Knob */}
            <div
              ref={circleRef}
              className="absolute top-1/2 -translate-y-1/2 z-10 w-[31px] h-[31px] rounded-full bg-gradient-to-tr from-[#E4D4A7ee] to-[#B7A261ee] shadow-lg border-2 border-[#fff3cbae] transition-all duration-400"
              style={{
                left: theme === 'light' ? '29px' : '4px',
                transition: 'left 0.37s cubic-bezier(0.7,0.1,0.4,1)',
              }}
            >
              {/* Gold shimmer sweep */}
              <span
                ref={shimmerRef}
                className="absolute top-0 left-[-80%] h-full w-[28px]"
                style={{
                  background: "linear-gradient(97deg, transparent 15%, #FFF2B3 50%, transparent 77%)",
                  opacity: 0.44,
                  filter: "blur(2px)",
                  borderRadius: "999px",
                  transition: "left 0.7s",
                }}
              ></span>
            </div>

            {/* Dark mode icon */}
            <div
              ref={darkIconRef}
              className="absolute left-[7px] top-1/2 -translate-y-1/2 transition-all duration-300"
              style={{ width: '18px', height: '18px' }}
            >
              <Icons icon="darkmode" className="w-full h-full" />
            </div>
            {/* Light mode icon */}
            <div
              ref={lightIconRef}
              className="absolute right-[7px] top-1/2 -translate-y-1/2 transition-all duration-300"
              style={{ width: '18px', height: '18px' }}
            >
              <Icons icon="lightmode" className="w-full h-full" />
            </div>
          </button>
        </div>
      </div>
      <style jsx global>{`
        body.theme-dark {
          background: linear-gradient(120deg,#19120C 75%,#B7A26114 100%);
          color: #E4D4A7;
        }
        body.theme-light {
          background: linear-gradient(120deg,#FFF8E2 75%,#B7A26119 100%);
          color: #232015;
        }
      `}
      </style>
    </header>
  )
}

export default Header
