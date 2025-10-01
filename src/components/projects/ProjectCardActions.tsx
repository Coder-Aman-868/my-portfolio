"use client";
import React from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

interface Props {
    live: string;
    github: string;
}

const ProjectCardActions: React.FC<Props> = ({ live, github }) => {
    return (
        <div className="flex gap-3">
            <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg bg-[#B7A261]/10 border border-[#B7A261]/30 text-[#B7A261] hover:bg-[#B7A261] hover:text-[#111] transition-all duration-300 text-sm font-medium"
                onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })}
                onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
            >
                <ExternalLink size={16} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                <span>Live Demo</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </a>
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-[#B7A261]/50 hover:text-[#B7A261] transition-all duration-300 text-sm font-medium backdrop-blur-sm"
                onMouseEnter={e => {
                    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
                    gsap.to(e.currentTarget.querySelector('svg'), { rotate: 360, duration: 0.5 });
                }}
                onMouseLeave={e => {
                    gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                    gsap.to(e.currentTarget.querySelector('svg'), { rotate: 0, duration: 0.5 });
                }}
            >
                <Github size={16} />
                <span>Code</span>
            </a>
        </div>
    );
};

export default ProjectCardActions;
