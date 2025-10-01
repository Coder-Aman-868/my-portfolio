import React from "react";
import ProjectCard from "@/components/ProjectCard";

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
        <div className="min-h-screen bg-[#0a0a0a] py-16 px-6">
            <h1 className="text-3xl font-bold text-center text-gradient mb-10">
                My Projects
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </div>
    );
};

export default Projects;