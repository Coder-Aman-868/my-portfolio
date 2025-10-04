"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ArrowLeft, ExternalLink, Github, Calendar, User, CheckCircle } from "lucide-react";
import projectData from "../../data/projectData.json";

const ProjectDetail = () => {
    const { id } = useParams();
    const router = useRouter();
    const [activeImage, setActiveImage] = useState(0);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    const data = (projectData as any)[id as string];

    useEffect(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline();

        // Hero section animation
        tl.fromTo(
            heroRef.current,
            { opacity: 0, scale: 0.9, filter: "blur(20px)" },
            { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" }
        );

        // Content sections staggered
        tl.fromTo(
            contentRef.current?.children || [],
            { opacity: 0, y: 60, filter: "blur(10px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            },
            "-=0.5"
        );

        // Gallery animation
        tl.fromTo(
            galleryRef.current?.children || [],
            { opacity: 0, scale: 0.8, rotation: 5 },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)"
            },
            "-=0.4"
        );
    }, []);

    if (!data) {
        return (
            <div className=" bg-[#0a0a0a] flex items-center justify-center">
                <p className="text-white text-xl">Project not found</p>
            </div>
        );
    }

    return (
        <div ref={containerRef} className=" bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#B7A261]/20 p-4">
                <div className="max-w-7xl mx-auto flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B7A261]/10 border border-[#B7A261]/30 hover:bg-[#B7A261] hover:text-[#111] transition-all duration-300"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </button>
                    <div className="flex-1" />
                    <div className="flex gap-3">
                        <a
                            href={data.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-[#FFD580] to-[#B7A261] text-[#111] font-semibold hover:scale-105 transition-all duration-300"
                        >
                            <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
                            Live Demo
                        </a>
                        <a
                            href={data.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-2 rounded-xl bg-white/10 border border-white/20 hover:border-[#B7A261] hover:text-[#B7A261] transition-all duration-300"
                        >
                            <Github size={18} />
                            Code
                        </a>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
                {/* Hero Section */}
                <section ref={heroRef} className="text-center space-y-8">
                    <div className="relative">
                        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD580] via-[#B7A261] to-[#E4D4A7] mb-4">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-[#B7A261] font-medium">
                            {data.subtitle}
                        </p>
                        {/* Floating status badge */}
                        <div className={`inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full ${data.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                            } border border-current/30`}>
                            <CheckCircle size={16} />
                            {data.status}
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="relative group max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD580]/20 to-[#E4D4A7]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <img
                            src={data.mainImage}
                            alt={data.title}
                            className="w-full rounded-3xl shadow-2xl border-2 border-[#B7A261]/30 cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
                            onClick={() => {
                                setActiveImage(0);
                                setIsImageModalOpen(true);
                            }}
                        />
                    </div>
                </section>

                {/* Content Grid */}
                <div ref={contentRef} className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Project Info Cards */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-6 rounded-2xl border border-[#B7A261]/20">
                                <Calendar className="w-8 h-8 text-[#FFD580] mb-3" />
                                <h3 className="font-semibold text-lg mb-2">Duration</h3>
                                <p className="text-gray-400">{data.duration}</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-6 rounded-2xl border border-[#B7A261]/20">
                                <User className="w-8 h-8 text-[#FFD580] mb-3" />
                                <h3 className="font-semibold text-lg mb-2">Client</h3>
                                <p className="text-gray-400">{data.client}</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-6 rounded-2xl border border-[#B7A261]/20">
                                <CheckCircle className="w-8 h-8 text-[#FFD580] mb-3" />
                                <h3 className="font-semibold text-lg mb-2">Status</h3>
                                <p className="text-gray-400">{data.status}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <section className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-8 rounded-3xl border border-[#B7A261]/20">
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD580] to-[#E4D4A7] mb-6">
                                About This Project
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-300 mb-6">
                                {data.longDescription}
                            </p>
                        </section>

                        {/* Highlights */}
                        <section>
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD580] to-[#E4D4A7] mb-8">
                                Key Highlights
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {data.highlights.map((highlight: any, index: number) => (
                                    <div
                                        key={index}
                                        className="group bg-gradient-to-br from-[#1a1a1a] to-[#111] p-6 rounded-2xl border border-[#B7A261]/20 hover:border-[#B7A261]/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="text-4xl mb-4">{highlight.icon}</div>
                                        <h3 className="font-semibold text-lg mb-2 text-[#FFD580]">{highlight.title}</h3>
                                        <p className="text-gray-400 text-sm">{highlight.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Technologies */}
                        <section className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-6 rounded-2xl border border-[#B7A261]/20">
                            <h3 className="text-xl font-bold text-[#FFD580] mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {data.technologies.map((tech: string, index: number) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-[#B7A261]/20 text-[#E4D4A7] rounded-full text-sm border border-[#B7A261]/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Features */}
                        <section className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-6 rounded-2xl border border-[#B7A261]/20">
                            <h3 className="text-xl font-bold text-[#FFD580] mb-4">Features</h3>
                            <ul className="space-y-2">
                                {data.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Gallery */}
                <section>
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD580] to-[#E4D4A7] mb-8">
                        Project Gallery
                    </h2>
                    <div ref={galleryRef} className="grid md:grid-cols-3 gap-6">
                        {data.gallery.map((image: string, index: number) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border-2 border-[#B7A261]/20 hover:border-[#B7A261]/50 transition-all duration-300 cursor-pointer"
                                onClick={() => {
                                    setActiveImage(index);
                                    setIsImageModalOpen(true);
                                }}
                            >
                                <img
                                    src={image}
                                    alt={`${data.title} screenshot ${index + 1}`}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ExternalLink className="text-white w-8 h-8" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Image Modal */}
            {isImageModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="relative max-w-5xl w-full">
                        <button
                            onClick={() => setIsImageModalOpen(false)}
                            className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                        >
                            ✕
                        </button>
                        <img
                            src={data.gallery[activeImage]}
                            alt={`${data.title} screenshot ${activeImage + 1}`}
                            className="w-full rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;