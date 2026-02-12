import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { FaLinkedin, FaGithub, FaTwitter, FaAward, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa";

import meImg from "../assets/me.png";

const About = () => {
    // Skills Data
    const skills = [
        "Flutter", "React", "Node.js", "AWS", "Python"
    ];

    // Experience Data (Merged from Experience.jsx)
    const experiences = [
        {
            role: "Flutter Development Intern",
            company: "Digontom pvt ltd",
            period: "Jan 2024 - Present",
            description: "Developing cross-platform mobile applications, optimizing app performance, and integrating RESTful APIs."
        },
        {
            role: "Android Development Intern",
            company: "Oasis Infobyte",
            period: "Jun 2023 - Dec 2023",
            description: "Built native Android apps using Kotlin, implemented complex UI designs, and collaborated with backend teams."
        },
        {
            role: "Android Domain Coordinator",
            company: "Inngeeks Tech Club, KIET College Ghaziabad",
            period: "Aug 2022 - May 2023",
            description: "Led a team of student developers, organized workshops, and mentored juniors in Android development."
        }
    ];

    return (
        <SectionWrapper id="about" className="pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Get to know more about my <br />
                        <span className="text-blue-600 dark:text-neon-blue bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neon-blue dark:to-purple-500">
                            background & skills
                        </span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neon-blue dark:to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* LEFT SIDEBAR (Profile) - Spans 4 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 space-y-8"
                    >
                        {/* Profile Card */}
                        <div className="bg-white dark:bg-deep-black/50 p-8 rounded-3xl border border-gray-200 dark:border-white/10 text-center relative overflow-hidden group shadow-sm dark:shadow-none">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-neon-blue/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-48 h-48 mx-auto rounded-full p-1 bg-gradient-to-tr from-neon-blue to-purple-500 mb-6">
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
                                        <img src={meImg} alt="Dhruv Srivastava" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dhruv Srivastava</h3>
                                <p className="text-blue-600 dark:text-neon-blue font-medium mb-4">Software Developer</p>

                                <div className="flex justify-center space-x-4 mb-8">
                                    <a href="https://www.linkedin.com/in/dhruv-srivastava-1317932a5/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-blue-100 dark:hover:bg-neon-blue/20 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-all">
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a href="https://github.com/Dhruvh-maker" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href="mailto:25dhruvsrivastava@gmail.com" className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-blue-100 dark:hover:bg-blue-400/20 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all">
                                        <FaEnvelope size={20} />
                                    </a>
                                </div>

                                {/* Skills Chips */}
                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="px-3 py-1 text-xs uppercase font-bold tracking-wider rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Award */}
                                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4 text-left">
                                    <div className="flex items-start gap-3">
                                        <FaAward className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                                        <div>
                                            <h4 className="text-gray-900 dark:text-white font-bold text-sm">1st Prize Winner</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Developer Nights Challenge - KIET University Hackathon</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coding Profiles & Certifications Placeholder */}
                        <div className="bg-white dark:bg-deep-black/50 p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
                            <h4 className="text-gray-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-neon-purple rounded-full"></span> Certifications
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600 dark:text-neon-blue">✓</span> AWS Cloud Practitioner
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600 dark:text-neon-blue">✓</span> AWS AI Practitioner
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT (About, Experience, Education) - Spans 8 columns */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Professional Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="text-purple-600 dark:text-neon-purple text-3xl">01.</span> Professional Summary
                            </h3>
                            <div className="bg-white dark:bg-deep-black/50 p-8 rounded-2xl border-l-4 border-purple-600 dark:border-neon-purple shadow-sm dark:shadow-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                    I am a passionate <span className="text-gray-900 dark:text-white font-semibold">Software Developer</span> with expertise in building scalable mobile applications and integrating AI solutions.
                                    With a strong background in <span className="text-gray-900 dark:text-white font-semibold">Flutter, React, and Cloud Technologies</span>, I create seamless user experiences that solve real-world problems.
                                    Currently identifying plants with AI (AyurScan) and optimizing bus travel (Darshan Trip), I am always pushing the boundaries of what's possible with code.
                                </p>
                            </div>
                        </motion.div>

                        {/* Work Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                                <span className="text-blue-600 dark:text-neon-blue text-3xl">02.</span> Work Experience
                            </h3>

                            <div className="space-y-8 pl-4 border-l-2 border-gray-200 dark:border-white/10 ml-3">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="relative pl-8">
                                        <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-deep-black border-2 border-blue-600 dark:border-neon-blue"></span>
                                        <div className="bg-white dark:bg-deep-black/50 p-6 rounded-xl hover:border-blue-500/50 dark:hover:border-neon-blue/50 transition-colors duration-300 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                                            <div className="flex flex-wrap justify-between items-start mb-2">
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h4>
                                                <span className="text-xs font-mono py-1 px-2 rounded bg-blue-50 dark:bg-white/5 text-blue-600 dark:text-neon-blue border border-blue-100 dark:border-neon-blue/20">{exp.period}</span>
                                            </div>
                                            <p className="text-purple-600 dark:text-neon-purple font-medium mb-3">{exp.company}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="text-green-600 dark:text-green-400 text-3xl">03.</span> Education
                            </h3>
                            <div className="bg-white dark:bg-deep-black/50 p-6 rounded-xl border border-gray-200 dark:border-white/5 flex items-start gap-4 shadow-sm dark:shadow-none">
                                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-400/10 text-green-600 dark:text-green-400">
                                    <FaGraduationCap size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Technology (B.Tech)</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Computer Science & Engineering</p>
                                    <p className="text-gray-500 text-sm mt-1">KIET Group of Institutions, Ghaziabad</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
