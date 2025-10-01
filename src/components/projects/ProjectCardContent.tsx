"use client";
import React, { useRef, useEffect } from "react";
import ProjectCardActions from "./ProjectCardActions";

interface Props {
    title: string;
    desc: string;
    live: string;
    github: string;
    contentRef: React.RefObject<HTMLDivElement | null>;
}

const ProjectCardContent: React.FC<Props> = ({ title, desc, live, github, contentRef }) => {
    const dividerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!dividerRef.current) return;
        dividerRef.current.style.width = '48px';
    }, []);

    return (
        <div ref={contentRef} className="relative p-6 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#B7A261] transition-colors duration-300">
                {title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">{desc}</p>
            <div ref={dividerRef} className="w-12 h-[2px] bg-gradient-to-r from-[#B7A261] to-transparent mb-4 group-hover:w-full transition-all duration-500" />
            <ProjectCardActions live={live} github={github} />
        </div>
    );
};

export default ProjectCardContent;
