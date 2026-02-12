import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

const TechStack = () => {
    const technologies = [
        "Flutter", "Dart", "Kotlin", "Java",
        "React", "Tailwind CSS", "Firebase", "Supabase",
        "REST APIs", "AWS", "Git", "Figma",
        "Python", "TensorFlow", "Gemini AI"
    ];

    return (
        <SectionWrapper id="tech-stack" className="py-10">
            <div className="text-center mb-10">
                <h3 className="text-2xl text-gray-400 font-mono mb-6">Technologies I work with</h3>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, rotate: Math.random() * 4 - 2 }}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium cursor-default hover:border-neon-purple hover:text-neon-purple transition-colors duration-300"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default TechStack;
