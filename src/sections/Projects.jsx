import React, { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { FaGithub, FaPlay, FaGooglePlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import soloAiLogo from "../assets/soloai.png";
import darshanLogo from "../assets/darshanlogo.png";
import ayurscanLogo from "../assets/ayurscan.png";
import soloAiVideo from "../assets/soloai.mp4";
import darshanVideo from "../assets/darshantrip.mp4";
import ayurscanVideo from "../assets/ayurscan.mp4";

// Project Data
const projectsData = [
    {
        title: "Solo AI",
        description: "A multi-platform social media video editor and scheduler app with AI captions generator, fetching Realtime trends from Reddit and Google Trends. Realtime analysis of likes/Comments from social media.",
        tags: ["Flutter", "Node.js", "OpenAI"],
        logo: soloAiLogo,
        video: soloAiVideo,
        github: "#",
        classNames: {
            border: "hover:border-neon-purple/50",
            text: "text-neon-purple",
            shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]",
            button: "bg-gray-100 dark:bg-white/5 hover:bg-neon-purple hover:text-white border-gray-200 dark:border-white/10 hover:border-neon-purple",
            tag: "bg-gray-100 dark:bg-white/5 text-neon-purple border-neon-purple/20"
        },
        imageStyle: "object-contain"
    },
    {
        title: "AyurScan",
        description: "AI-powered skin disease prediction app, with realtime availability to dermatologists.",
        tags: ["Flutter", "TensorFlow", "Python"],
        logo: ayurscanLogo,
        video: ayurscanVideo,
        github: "#",
        classNames: {
            border: "hover:border-neon-blue/50",
            text: "text-neon-blue",
            shadow: "hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]",
            button: "bg-gray-100 dark:bg-white/5 hover:bg-neon-blue hover:text-black border-gray-200 dark:border-white/10 hover:border-neon-blue",
            tag: "bg-gray-100 dark:bg-white/5 text-neon-blue border-neon-blue/20"
        },
        imageStyle: "object-contain"
    },
    {
        title: "Darshan Trip",
        description: "Comprehensive bus booking application available on Play Store. Features real-time seat selection and secure payments.",
        tags: ["Flutter", "Dart", "REST API", "Google Maps"],
        logo: darshanLogo,
        video: darshanVideo,
        github: "#",
        playStore: "https://play.google.com/store/apps/details?id=com.arkapps.darshantrip&pcampaignid=web_share",
        classNames: {
            border: "hover:border-green-400/50",
            text: "text-green-400",
            shadow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.1)]",
            button: "bg-gray-100 dark:bg-white/5 hover:bg-green-400 hover:text-black border-gray-200 dark:border-white/10 hover:border-green-400",
            tag: "bg-gray-100 dark:bg-white/5 text-green-400 border-green-400/20"
        },
        imageStyle: "object-contain"
    }
];

const ProjectCard = ({ project, onPlayClick }) => {
    return (
        <div className={`group bg-white dark:bg-deep-black border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full ${project.classNames.border} ${project.classNames.shadow}`}>
            {/* Image Area */}
            <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-black/90 z-10"></div>
                {project.logo ? (
                    <img
                        src={project.logo}
                        alt={project.title}
                        className={`h-full w-full z-0 group-hover:scale-110 transition-transform duration-500 ${project.imageStyle}`}
                    />
                ) : (
                    <span className="text-4xl font-bold text-gray-400 dark:text-gray-700">{project.title[0]}</span>
                )}
            </div>

            {/* Content Area */}
            <div className="p-8 flex-grow flex flex-col relative z-20">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    {project.github && project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <FaGithub size={20} />
                        </a>
                    )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                            <span key={index} className={`px-3 py-1 text-xs font-mono rounded-full border ${project.classNames.tag}`}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        {project.video && (
                            <button
                                onClick={() => onPlayClick(project)}
                                className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-bold transition-all border ${project.classNames.button}`}
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
                                className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-bold transition-all border ${project.classNames.button}`}
                            >
                                <FaGooglePlay size={16} />
                                <span>Play Store</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
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
                className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-white/10">
                    <h3 className="text-xl font-bold text-white">{project.title} Demo</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors text-2xl"
                    >
                        &times;
                    </button>
                </div>

                {/* Video Player */}
                <div className="aspect-video bg-gray-900 relative">
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
        <SectionWrapper id="projects">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Featured <span className="text-neon-blue">Projects</span>
                </h2>
                <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
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
        </SectionWrapper>
    );
};

export default Projects;
