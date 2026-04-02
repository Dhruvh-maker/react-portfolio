import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import spinImg from "../assets/spin.png";
import { 
    FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGithub 
} from "react-icons/fa";
import { 
    SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, 
    SiFirebase, SiPrisma, SiFramer, SiFlutter, SiExpo 
} from "react-icons/si";

const TechStack = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
    const skills = [
        { name: "ReactJS", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "NextJS", icon: <SiNextdotjs className="text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
        { name: "Motion", icon: <SiFramer className="text-white" /> },
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
        { name: "NodeJS", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Prisma", icon: <SiPrisma className="text-white" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "Expo", icon: <SiExpo className="text-white" /> },
        { name: "Git", icon: <FaGithub className="text-white" /> },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
    ];

    const MARQUEE_WORDS = [
        "CAPTIVATING", "USER-FRIENDLY", "ADAPTIVE", "FLUID", "FUTURE-PROOF", "SEO-READY", "IMMERSIVE"
    ];
    return (
        <section id="tech-stack" ref={sectionRef} className="py-24 bg-pure-black relative overflow-hidden min-h-[800px] flex flex-col justify-between">
            
            <div className="max-w-5xl mx-auto px-4 w-full flex-grow flex flex-col items-center pt-10 relative z-10">
                {/* Header Section with Spinner Background */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative w-full flex flex-col items-center justify-center p-12 overflow-visible"
                >
                    {/* Background Spin - Mirrored and Joined, centered behind text */}
                    <motion.div 
                        style={{ rotate }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[-1] translate-y-[-150px]"
                    >
                        <div className="relative w-[350px] h-[350px] flex items-center justify-center">
                            {/* Original */}
                            <img 
                                src={spinImg} 
                                alt="Background Spin"
                                className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] brightness-110 opacity-70"
                            />
                            {/* Mirrored Copy */}
                            <img 
                                src={spinImg} 
                                alt="Background Spin Mirror"
                                className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] brightness-110 opacity-70 scale-y-[-1]"
                            />
                        </div>
                    </motion.div>

                    <span className="text-text-muted font-mono text-sm tracking-[0.2em] uppercase mb-4 block relative z-10">
                        MY SKILLSET
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight relative z-10">
                        The Magic <br className="md:hidden" /><span className="text-gradient italic font-serif pr-2">Behind</span>
                    </h2>
                </motion.div>

                {/* Grid of Skill Pills */}
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto relative z-10">
                    {skills.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 px-5 py-3 rounded-full pill-glass text-gray-200 text-sm font-medium"
                        >
                            <span className="text-lg">{tech.icon}</span>
                            {tech.name}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Infinite Ribbons Marquee */}
            <div className="relative h-[250px] mt-24 w-full flex items-center justify-center overflow-hidden">
                
                {/* Ribbon 1 - Angled Right */}
                <div className="absolute w-[120%] h-16 bg-ribbon-red transform rotate-2 top-20 flex items-center shadow-2xl z-10 box-border overflow-hidden border-y border-white/5">
                    <div className="flex animate-marquee whitespace-nowrap min-w-full items-center">
                        {[...Array(2)].map((_, i) => (
                            <div key={`ribbon1-${i}`} className="flex items-center">
                                {MARQUEE_WORDS.map((word, wIdx) => (
                                    <React.Fragment key={`${i}-${wIdx}`}>
                                        <span className="text-white font-bold text-xl md:text-2xl tracking-widest px-8">
                                            {word}
                                        </span>
                                        <span className="text-white/50 text-2xl">✦</span>
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ribbon 2 - Angled Left */}
                <div className="absolute w-[120%] h-16 bg-ribbon-crimson transform -rotate-3 top-24 flex items-center shadow-2xl z-0 overflow-hidden mix-blend-multiply border-y border-black/20">
                    <div className="flex animate-[marquee_30s_linear_infinite_reverse] whitespace-nowrap min-w-full items-center">
                        {[...Array(2)].map((_, i) => (
                            <div key={`ribbon2-${i}`} className="flex items-center opacity-80">
                                {MARQUEE_WORDS.reverse().map((word, wIdx) => (
                                    <React.Fragment key={`${i}-${wIdx}-rev`}>
                                        <span className="text-white font-bold text-xl md:text-2xl tracking-widest px-8">
                                            {word}
                                        </span>
                                        <span className="text-white/50 text-2xl">✦</span>
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
