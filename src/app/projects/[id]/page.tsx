"use client";
import React, { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";

const projectData: any = {
    portfolio: {
        title: "Portfolio Website",
        desc: "This is a full portfolio website made with Next.js 15, Tailwind CSS, and GSAP. It includes smooth animations, responsive design, and modern UI/UX.",
        image: "https://s3-alpha.figma.com/hub/file/2852387665/f58b1b60-bbe2-4f80-8c40-7bdf1cbb5fd1-cover.png",
    },
    shopapp: {
        title: "E-commerce App",
        desc: "A feature-rich e-commerce web app with authentication, payment integration, and admin dashboard.",
        image: "https://s3-alpha.figma.com/hub/file/2852387665/f58b1b60-bbe2-4f80-8c40-7bdf1cbb5fd1-cover.png",
    },
};

const ProjectDetail = () => {
    const { id } = useParams();
    const contentRef = useRef<HTMLDivElement>(null);
    const data = projectData[id as string];

    useEffect(() => {
        if (!contentRef.current) return;
        gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }, []);

    if (!data) return <p className="text-white">Project not found</p>;

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex justify-center items-center px-6">
            <div
                ref={contentRef}
                className="max-w-3xl w-full p-8 rounded-xl bg-[#111] border border-[#B7A261]/40 shadow-lg"
            >
                <img src={data.image} alt={data.title} className="w-full rounded-lg mb-6" />
                <h1 className="text-2xl font-bold text-white mb-4">{data.title}</h1>
                <p className="text-gray-300 leading-relaxed">{data.desc}</p>
            </div>
        </div>
    );
};

export default ProjectDetail;