"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactMe: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const formRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Overall fade in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "expo.inOut" }
    );
    // Card swoop in
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 80, scale: 0.92, filter: "blur(22px)" },
      { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "expo.out", delay: 0.25 }
    );
    // Icon pop
    gsap.fromTo(
      iconRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1.1, duration: 1.1, ease: "elastic.out(1,0.8)", delay: 0.41 }
    );
    // Form items fade and float in
    formRefs.current.forEach((el, i) => {
      if (el)
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.02, ease: "expo.out", delay: 0.6 + i * 0.11 }
        );
    });
    // Button glow
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.88 },
      { opacity: 1, scale: 1, duration: 1.06, ease: "expo.out", delay: 0.9 }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-full flex items-center justify-center px-2 py-10"
      style={{
        boxShadow: "0 0 80px 24px #B7A26117, 0 8px 40px 0 #000A",
      }}
    >
      {/* Contact glass card */}
      <div
        ref={cardRef}
        className="w-full max-w-md mx-auto py-12 px-8 rounded-3xl bg-gradient-to-br from-[#17120Ccc] via-[#B7A26129] to-[#18120C] border border-[#B7A26199] shadow-[0_14px_46px_rgba(183,162,97,0.12)] flex flex-col items-center backdrop-blur-2xl relative"
        style={{ boxShadow: "0 10px 80px #B7A26124" }}
      >
        {/* Floating gold envelope */}
        <div
          ref={iconRef}
          className="absolute -top-14 left-1/2 -translate-x-1/2 w-[82px] h-[82px] rounded-full bg-gradient-to-tr from-[#B7A261] via-[#E4D4A7] to-[#B7A261] flex items-center justify-center shadow-[0_0_60px_8px_#B7A261cc] border-4 border-[#E4D4A7cc] text-[2.5rem] animate-pulse"
        >
          ✉️
        </div>

        {/* Title */}
        <h2 className="font-extrabold text-transparent bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] bg-clip-text text-3xl mb-2 drop-shadow-[0_5px_18px_rgba(183,162,97,0.48)] text-center"
          style={{ letterSpacing: "0.17em" }}>
          Let's Connect
        </h2>
        <p className="text-[#E4D4A7c9] font-medium mb-8 text-base text-center">
          Email: <span className="text-[#B7A261]">developeraman868@gmail.com</span>
        </p>

        <form className="w-full flex flex-col gap-6 mt-2">
          <div ref={(el: HTMLDivElement | null) => { (formRefs.current[0] = el) }} className="relative w-full">
            <input
              type="text"
              className="w-full bg-transparent border-b-2 border-[#B7A26131] text-[#E4D4A7] font-medium py-3 px-3 placeholder-[#CFC6A5cc] focus:outline-none focus:border-[#B7A261] transition-all"
              placeholder="Your Name"
              required
            />
          </div>
          <div ref={(el: HTMLDivElement | null) => { (formRefs.current[1] = el) }} className="relative w-full">
            <input
              type="email"
              className="w-full bg-transparent border-b-2 border-[#B7A26131] text-[#E4D4A7] font-medium py-3 px-3 placeholder-[#CFC6A5cc] focus:outline-none focus:border-[#B7A261] transition-all"
              placeholder="your@email.com"
              required
            />
          </div>
          <div ref={(el: HTMLDivElement | null) => { (formRefs.current[2] = el) }} className="relative w-full">
            <textarea
              className="w-full bg-transparent border-b-2 border-[#B7A26131] text-[#E4D4A7] font-medium py-3 px-3 h-[100px] placeholder-[#CFC6A5cc] focus:outline-none focus:border-[#B7A261] transition-all resize-none"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            ref={buttonRef}
            type="submit"
            className="w-full mt-7 py-3 text-lg rounded-full font-bold bg-gradient-to-r from-[#E4D4A7ee] to-[#B7A261ee]
              text-[#19120C] shadow-lg hover:scale-105 transition-transform outline-none border-0 active:scale-95 relative overflow-hidden"
          >
            <span>Send Message</span>
            <span className="absolute left-[-70%] top-0 h-full w-[60%] pointer-events-none"
              style={{
                background: "linear-gradient(110deg, transparent 4%, #FFF9CF 40%, #B7A261b7 60%, transparent 82%)",
                opacity: 0.18,
                filter: "blur(8px)",
                borderRadius: "2rem",
                transition: "opacity 0.4s",
              }}
            ></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;