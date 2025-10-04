import React from "react";
import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
    {
        id: "restro",
        title: "Restro - Productivity Platform",
        desc: "Modern productivity landing page with Vue.js, Tailwind CSS for team collaboration.",
        image: "/assets/images/png/restro.png",
        live: "https://restro-green.vercel.app/",
        github: "https://github.com/Coder-Aman-868/Restro",
    },
];

const Projects = () => {
    return (
        <div className="py-16 px-6">
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