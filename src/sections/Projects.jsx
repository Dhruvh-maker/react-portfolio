import React, { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import PageHeader from "../components/PageHeader";
import { FaGithub, FaPlay, FaGooglePlay, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import soloAiLogo from "../assets/soloai.png";
import darshanLogo from "../assets/darshanlogo.png";
import ayurscanLogo from "../assets/ayurscan.png";
import skillGalaxyLogo from "../assets/skillgalaxy.png";
import soloAiVideo from "../assets/soloai.mp4";
import darshanVideo from "../assets/darshantrip.mp4";
import ayurscanVideo from "../assets/ayurscan.mp4";

// Project Data
const projectsData = [
    {
        title: "Solo AI",
        subtitle: "Intelligent Video Editing & Publishing App",
        description: "Built a Flutter-based video editing app with AI-powered caption generation and content enhancement. Implemented video recording, upload, and editing workflows. Integrated APIs to enable automated publishing to Instagram, YouTube, and Twitter.",
        tags: ["Flutter", "Dart", "REST APIs", "AI APIs"],
        logo: soloAiLogo,
        video: soloAiVideo,
        github: "#",
        imageStyle: "object-contain"
    },
    {
        title: "Darshan Trip",
        subtitle: "Bus Booking Application",
        description: "Developed a Flutter-based bus booking application published on the Play Store. Implemented live seat availability, booking management, and trip scheduling. Integrated Cashfree payment gateway for secure transactions.",
        tags: ["Flutter", "Dart", "REST APIs", "Cashfree Payment"],
        logo: darshanLogo,
        video: darshanVideo,
        github: "#",
        playStore: "https://play.google.com/store/apps/details?id=com.arkapps.darshantrip&pcampaignid=web_share",
        imageStyle: "object-contain"
    },
    {
        title: "AyurScan",
        subtitle: "AI-Powered Skin Disease Prediction App",
        description: "Developed an AI-powered Flutter application for preliminary skin disease detection. Implemented image scanning and AI prediction. Integrated real-time dermatologist discovery using location-based Google Maps, with features for nearby pharmacy search.",
        tags: ["Flutter", "Dart", "Google Maps API", "AI API", "REST APIs"],
        logo: ayurscanLogo,
        video: ayurscanVideo,
        github: "#",
        imageStyle: "object-contain"
    },
    {
        title: "SkillGalaxy",
        subtitle: "AI-Powered Career Navigator & Roadmap Builder",
        description: "A full-stack web app where users search any skill or career, and AI generates a detailed, gamified roadmap guiding them to their goal with curated resources, progress tracking, and an interactive 3D interface.",
        tags: ["React", "Node.js", "Prisma", "Mistral AI", "Three.js"],
        logo: skillGalaxyLogo,
        liveDemo: "https://skill-galaxy-psi.vercel.app/",
        github: "#",
        imageStyle: "object-cover object-top"
    }
];

const ProjectCard = ({ project, onPlayClick, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full flex flex-col"
        >
            <div className="glowing-card h-full flex flex-col group">
                {/* Image Area */}
                <div className="h-56 bg-black relative flex items-center justify-center p-6 border-b border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10 pointer-events-none"></div>
                    {project.logo ? (
                        <img
                            src={project.logo}
                            alt={project.title}
                            className={`h-full w-full z-0 group-hover:scale-110 transition-transform duration-500 ${project.imageStyle}`}
                        />
                    ) : (
                        <span className="text-4xl font-bold text-gray-700">{project.title[0]}</span>
                    )}
                </div>

                {/* Content Area */}
                <div className="p-8 flex-grow flex flex-col z-20">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        {project.github && project.github !== "#" && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaGithub size={22} />
                            </a>
                        )}
                    </div>
                    <p className="text-gradient italic text-sm font-medium mb-4">{project.subtitle}</p>

                    <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                    </p>

                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 text-xs font-mono rounded-full bg-black border border-white/5 text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {project.video && (
                                <button
                                    onClick={() => onPlayClick(project)}
                                    className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg bg-white/5 hover:bg-white text-gray-300 hover:text-black font-bold transition-all border border-white/10 hover:border-white"
                                >
                                    <FaPlay size={12} />
                                    <span>Watch Demo</span>
                                </button>
                            )}
                            {project.playStore && (
                                <a
                                    href={project.playStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg bg-gradient-start/10 hover:bg-gradient-start text-white font-bold transition-all border border-gradient-start/30"
                                >
                                    <FaGooglePlay size={16} />
                                    <span>Play Store</span>
                                </a>
                            )}
                            {project.liveDemo && (
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg bg-gradient-start/10 hover:bg-gradient-start text-white font-bold transition-all border border-gradient-start/30"
                                >
                                    <FaExternalLinkAlt size={14} />
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const VideoModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/5 bg-surface">
                    <h3 className="text-xl font-bold text-white"><span className="text-gradient hover:underline cursor-pointer">{project.title}</span> Showcase</h3>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-black/50 flex flex-col items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        &times;
                    </button>
                </div>

                {/* Video Player */}
                <div className="aspect-video bg-black relative">
                    <video
                        src={project.video}
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <SectionWrapper id="projects" className="pt-8 bg-pure-black min-h-screen">
            <PageHeader
                title="VENTURE SHOWCASE"
                subtitle="CRAFTING DIGITAL EXPERIENCES"
                italicText="with passion & code."
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6 w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            onPlayClick={setSelectedProject}
                        />
                    ))}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <VideoModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
