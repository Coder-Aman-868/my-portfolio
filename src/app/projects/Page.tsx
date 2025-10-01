import React from "react";
import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
    {
        id: "portfolio",
        title: "Portfolio Website",
        desc: "A modern portfolio built with Next.js, Tailwind & GSAP animations.",
        image: "https://s3-alpha.figma.com/hub/file/2852387665/f58b1b60-bbe2-4f80-8c40-7bdf1cbb5fd1-cover.png",
        live: "https://yourportfolio.com",
        github: "https://github.com/yourname/portfolio",
    },
    {
        id: "shopapp",
        title: "E-commerce App",
        desc: "Full-stack shop app with Next.js, Supabase & Stripe payments.",
        image: "https://s3-alpha.figma.com/hub/file/2852387665/f58b1b60-bbe2-4f80-8c40-7bdf1cbb5fd1-cover.png",
        live: "https://shopapp.com",
        github: "https://github.com/yourname/shopapp",
    },
];

const Projects = () => {
    return (
        <div className="min-h-screen py-16 px-6">
            <h2
                className="text-4xl md:text-5xl font-black leading-125 font-poppins text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#B7A261] via-[#E4D4A7] to-[#B7A261]"
                style={{ transformStyle: "preserve-3d" }}
            >
                My Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </div>
    );
};

export default Projects;