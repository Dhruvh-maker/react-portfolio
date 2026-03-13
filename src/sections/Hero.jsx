import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";

const Hero = () => {
    return (
        <SectionWrapper
            id="home"
            className="pt-32"
            bottomContent={
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        opacity: { delay: 1.5, duration: 1 }
                    }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
                    onClick={() => {
                        const aboutSection = document.getElementById('about');
                        if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    <span className="text-gray-400 text-sm mb-2 font-light tracking-wider">Scroll to explore</span>
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            className="w-3 h-3 rounded-full bg-gray-400 mb-1"
                        />
                    </div>
                </motion.div>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div className="text-left space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-neon-blue font-mono text-lg tracking-wide"
                    >
                        Hello, I am
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white leading-tight"
                    >
                        Dhruv <br /> Srivastava
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.4 }}
                        className="text-2xl md:text-3xl text-gray-400 font-light"
                    >
                        AI-Powered{" "}
                        <span className="text-neon-purple font-semibold relative inline-block">
                            Mobile App Developer
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-neon-purple/50 blur-[2px]"></span>
                        </span>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-gray-400 max-w-lg text-lg"
                    >
                        Building scalable Flutter & Android apps with AI integration.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <Link to="/projects" className="px-8 py-3 rounded-full bg-neon-blue/10 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 font-bold shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]">
                            View Projects
                        </Link>
                        <Link to="/contact" className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            Hire Me
                        </Link>
                    </motion.div>
                </div>

                {/* Right Content - 3D Abstract Representation */}
                <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
                    {/* Animated Circles/Glow */}
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
    );
};

export default Hero;
