import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import { FaArrowRight, FaMobileAlt, FaBrain, FaServer, FaExternalLinkAlt } from "react-icons/fa";

// Assets
import pic3Img from "../assets/pic3.png";
import ayurscanLogo from "../assets/ayurscan.png";
import soloAiLogo from "../assets/soloai.png";

const Home = () => {
    return (
        <>
            {/* HERO SECTION */}
            <SectionWrapper id="hero" className="pt-32 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div className="text-left space-y-6">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-blue-600 dark:text-neon-blue font-mono text-xl md:text-2xl mb-4 block"
                        >
                            Hello, I am
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
                        >
                            Dhruv <br /> Srivastava
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: 0.4 }}
                            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light"
                        >
                            Full Stack{" "}
                            <span className="text-neon-purple font-semibold relative inline-block">
                                Mobile App Developer
                                <span className="absolute -bottom-1 left-0 w-full h-1 bg-neon-purple/50 blur-[2px]"></span>
                            </span>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-gray-600 dark:text-gray-400 max-w-lg text-lg"
                        >
                            Building scalable Flutter & Android apps with AI integration.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <Link to="/projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-neon-blue dark:to-cyan-400/80 text-white dark:text-black font-bold hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all duration-300">
                                View Projects
                            </Link>
                            <Link to="/contact" className="px-8 py-3 rounded-full border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                Hire Me
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Content - 3D Floating Card (Restored) */}
                    <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
                        <div className="absolute w-72 h-72 bg-neon-blue/20 rounded-full blur-[80px] animate-pulse"></div>
                        <div className="absolute w-56 h-56 bg-neon-purple/20 rounded-full blur-[60px] top-10 right-20 animate-bounce"></div>

                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl flex items-center justify-center transform preserve-3d rotate-12"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-neon-purple/10 rounded-2xl"></div>
                            <div className="grid grid-cols-2 gap-4 p-6">
                                <div className="w-20 h-20 bg-black/50 rounded-lg flex items-center justify-center border border-white/10">
                                    <span className="text-3xl">📱</span>
                                </div>
                                <div className="w-20 h-20 bg-black/50 rounded-lg flex items-center justify-center border border-white/10">
                                    <span className="text-3xl">🤖</span>
                                </div>
                                <div className="w-20 h-20 bg-black/50 rounded-lg flex items-center justify-center border border-white/10">
                                    <span className="text-3xl">☁️</span>
                                </div>
                                <div className="w-20 h-20 bg-black/50 rounded-lg flex items-center justify-center border border-white/10">
                                    <span className="text-3xl">🚀</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ABOUT PREVIEW */}
            <section className="py-20 bg-gray-50 dark:bg-black/30">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left: User Photo */}
                        <div className="flex justify-center md:justify-end">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-neon-blue to-purple-600">
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-black bg-gray-900">
                                        <img src={pic3Img} alt="Dhruv Srivastava" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                                I am a passionate Software Developer with expertise in building scalable mobile applications and integrating AI solutions.
                                With a strong background in Flutter, React, and Cloud Technologies, I create seamless user experiences that solve real-world problems.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-blue-600 dark:text-neon-blue font-bold hover:gap-2 transition-all">
                                Read Full Bio <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Services</h2>
                            <div className="w-20 h-1 bg-neon-blue rounded-full"></div>
                        </div>
                        <Link to="/services" className="hidden md:flex items-center text-gray-400 hover:text-white transition-colors gap-2">
                            View All <FaArrowRight />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-deep-black/50 p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-neon-blue/50 transition-all group shadow-sm dark:shadow-none">
                            <FaMobileAlt className="text-3xl text-blue-600 dark:text-neon-blue mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mobile Development</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Cross-platform Flutter & Native Android apps with clean architecture.</p>
                        </div>
                        <div className="bg-white dark:bg-deep-black/50 p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-neon-purple/50 transition-all group shadow-sm dark:shadow-none">
                            <FaBrain className="text-3xl text-purple-600 dark:text-neon-purple mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Integration</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Smart automation and predictive models using Gemini & OpenAI.</p>
                        </div>
                        <div className="bg-white dark:bg-deep-black/50 p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-green-500/50 dark:hover:border-green-400/50 transition-all group shadow-sm dark:shadow-none">
                            <FaServer className="text-3xl text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Backend Systems</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Robust APIs and database architecture with Firebase & Supabase.</p>
                        </div>
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/services" className="inline-flex items-center text-neon-blue font-medium gap-2">
                            View All Services <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* PROJECTS PREVIEW - Redesigned Cards */}
            <section className="py-20 bg-gradient-to-b from-black/0 to-neon-blue/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Work</h2>
                        <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* AyurScan Card */}
                        <div className="group bg-white dark:bg-deep-black border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] flex flex-col">
                            {/* Image Area */}
                            <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center p-6">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-black/90 z-10"></div>
                                <img src={ayurscanLogo} alt="AyurScan" className="h-full w-auto object-contain z-0 group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            {/* Content Area */}
                            <div className="p-8 flex-grow flex flex-col relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AyurScan</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    AI-powered skin disease prediction app, with realtime availability to dermatologists.
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-neon-blue border border-neon-blue/20">Flutter</span>
                                        <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-neon-blue border border-neon-blue/20">TensorFlow</span>
                                        <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-neon-blue border border-neon-blue/20">Python</span>
                                    </div>

                                    <Link to="/projects" className="w-full block text-center py-3 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-neon-blue hover:text-black text-gray-900 dark:text-white font-bold transition-all border border-gray-200 dark:border-white/10 hover:border-neon-blue">
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Solo AI Card */}
                        <div className="group bg-white dark:bg-deep-black border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-neon-purple/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] flex flex-col">
                            {/* Image Area */}
                            <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center p-6">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-black/90 z-10"></div>
                                <img src={soloAiLogo} alt="Solo AI" className="h-full w-auto object-contain z-0 group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            {/* Content Area */}
                            <div className="p-8 flex-grow flex flex-col relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Solo AI</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    A multi-platform social media video editor and scheduler app with AI captions generator, fetching Realtime trends from Reddit and Google Trends. Realtime analysis of likes/Comments from social media.
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-neon-purple border border-neon-purple/20">Flutter</span>
                                        <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-neon-purple border border-neon-purple/20">Node.js</span>
                                        <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-neon-purple border border-neon-purple/20">OpenAI</span>
                                    </div>

                                    <Link to="/projects" className="w-full block text-center py-3 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-neon-purple hover:text-white text-gray-900 dark:text-white font-bold transition-all border border-gray-200 dark:border-white/10 hover:border-neon-purple">
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                            View Bundle <FaExternalLinkAlt size={14} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CONTACT CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="glass p-10 rounded-3xl border border-neon-blue/30 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-purple-600"></div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to start a project?</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                            Let's collaborate to bring your ideas to life with cutting-edge technology.
                        </p>
                        <Link to="/contact" className="px-8 py-3 rounded-full bg-neon-blue text-black font-bold hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
