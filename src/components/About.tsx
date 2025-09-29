"use client";

import React from "react";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Icons from "./common/Icons";

const About = () => {
  return (
    <div className="pt-10 px-6 md:px-12 2xl:px-20 bg-transparent">
      <Heading className="text-4xl md:text-5xl font-extrabold text-white md:mb-12 sm:mb-7 mb-4 text-center">
        About Me
      </Heading>

      <div className="flex flex-col sm:gap-8 gap-4">
        {/* Card 1 */}
        <div className="relative group rounded-3xl p-1  transition-all duration-300">
          <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#111111] rounded-3xl p-6 md:p-8 border border-[#333333]">
            <Paragraph className="sm:!text-[18px] !text-base leading-[1.6] text-white">
              Hi, I’m <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">Aman Siwach</span>, a curious mind from{" "}
              <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">Hisar, Haryana</span>, who fell in love with technology not by chance, but by choice.
            </Paragraph>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group rounded-3xl p-1  transition-all duration-300">
          <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#111111] rounded-3xl p-6 md:p-8 border border-[#333333]">
            <Paragraph className="sm:!text-[18px] !text-base leading-[1.6] text-white whitespace-pre-line">
              My <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">journey</span> began with a simple question: <br />
              <Icons icon="rightSideArrow" className="inline-block text-yellow-400" />{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">“How do websites actually work?”</span>
            </Paragraph>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group rounded-3xl p-1  transition-all duration-300">
          <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#111111] rounded-3xl p-6 md:p-8 border border-[#333333]">
            <Paragraph className="sm:!text-[18px] !text-base leading-[1.6] text-white">
              At first, it was just curiosity. I started exploring HTML and CSS, writing small pieces of code that could change the way a page looked. That small spark of excitement slowly turned into a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">burning passion for frontend development</span>.
            </Paragraph>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative group rounded-3xl p-1  transition-all duration-300">
          <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#111111] rounded-3xl p-6 md:p-8 border border-[#333333]">
            <Paragraph className="sm:!text-xl !text-[18px] font-semibold leading-[1.6] text-white">
              <Icons icon="rocket" className="inline-block text-yellow-400" />{" "} Growing Step by Step
            </Paragraph>
            <Paragraph className="sm:!text-[18px] !text-base leading-[1.6] text-white mt-2">
              From basic static pages, I moved on to <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">JavaScript</span>, learning how to add interactivity and bring real life to designs. Soon after, I explored <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">TypeScript</span> to write cleaner and more structured code.
            </Paragraph>
          </div>
        </div>

        {/* Card 5 */}
        <div className="relative group rounded-3xl p-1  transition-all duration-300">
          <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#111111] rounded-3xl p-6 md:p-8 border border-[#333333]">
            <Paragraph className="sm:!text-[18px] !text-base leading-[1.6] text-white">
              As I kept growing, I discovered the world of modern frontend frameworks — <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">React.js</span> and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">Next.js</span> became my daily companions. They opened doors to building dynamic, production-ready applications. Not stopping there, I also dived into <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">Vue.js</span> and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">Nuxt.js</span>, expanding my perspective on how different ecosystems solve similar problems.
            </Paragraph>
          </div>
        </div>

        {/* Card 6 */}
        <div className="relative group rounded-3xl p-1  transition-all duration-300">
          <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#111111] rounded-3xl p-6 md:p-8 border border-[#333333]">
            <Paragraph className="sm:!text-[18px] !text-base leading-[1.6] text-white">
              Alongside frameworks, I became deeply comfortable with styling systems like <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">Tailwind CSS</span> and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">Bootstrap</span>, which allowed me to design responsive, pixel-perfect, and elegant interfaces that work seamlessly across devices.
            </Paragraph>
          </div>
        </div>

        {/* Card 7 */}
        <div className="relative group rounded-3xl p-1  transition-all duration-300">
          <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#111111] rounded-3xl p-6 md:p-8 border border-[#333333]">
            <Paragraph className="sm:!text-xl !text-[18px] font-semibold leading-[1.6] text-white">
              <Icons icon="bullseye" className="inline-block text-yellow-400" />{" "} My Philosophy
            </Paragraph>
            <Paragraph className="sm:!text-[18px] !text-base leading-[1.6] text-white mt-2">
              For me, development is not just about building websites — it’s about <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">crafting experiences</span>. Every line of code I write, every interface I design, is driven by a desire to make technology <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">simpler, faster, and more impactful</span> for people.
            </Paragraph>
          </div>
        </div>

        {/* Card 8 */}
        <div className="relative group rounded-3xl p-1  transition-all duration-300">
          <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#111111] rounded-3xl p-6 md:p-8 border border-[#333333]">
            <Paragraph className="sm:!text-xl !text-[18px] font-semibold leading-[1.6] text-white">
              <Icons icon="crystalBall" className="inline-block text-yellow-400" />{" "} The Road Ahead
            </Paragraph>
            <Paragraph className="sm:!text-[18px] !text-base leading-[1.6] text-white mt-2">
              I see myself continuously growing, adapting to emerging technologies, and contributing to <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">real-world projects</span> that create value. My vision is to become a developer who doesn’t just code but <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">innovates solutions</span> that inspire and empower users.
            </Paragraph>
            <Paragraph className="sm:!text-[18px] !text-base leading-[1.6] text-white mt-2">
              Outside of coding, I enjoy exploring new tools, connecting with tech communities, and brainstorming creative ideas. For me, every project is an opportunity — not just to build something useful, but to <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">learn, evolve, and leave an impact.</span>
            </Paragraph>
          </div>
        </div>

        {/* Card 9 */}
        <div className="relative group rounded-3xl p-1  transition-all duration-300">
          <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261] group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#111111] rounded-3xl p-6 md:p-8 border border-[#333333]">
            <Paragraph className="sm:!text-xl !text-[18px] font-semibold leading-[1.6] text-white">
              <Icons icon="sparkles" className="inline-block text-yellow-400" />{" "}  In one line:
            </Paragraph>
            <Paragraph className="sm:!text-[18px] !text-base leading-[1.6] text-white mt-2">
              I’m <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">Aman Siwach</span>, a frontend developer who turns <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">ideas into digital experiences</span>, passionate about building projects that are as <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]">beautiful as they are functional.</span>
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;