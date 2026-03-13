import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { FaMobileAlt, FaBrain, FaServer, FaRocket, FaCode, FaPaintBrush, FaLaptopCode, FaRobot, FaNetworkWired } from "react-icons/fa";

const ServiceCard = ({ title, icon, points, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-deep-black border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-blue-500/50 dark:hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-neon-blue/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-blue-600 dark:text-neon-blue mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-100 dark:border-white/5 group-hover:border-blue-200 dark:group-hover:border-neon-blue/30">
                    {icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-neon-blue transition-colors">
                    {title}
                </h3>

                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                    {points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-500 dark:text-neon-purple mt-1">▹</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Services = () => {
    const services = [
        {
            title: "Mobile App Development",
            icon: <FaMobileAlt size={24} />,
            points: [
                "Cross-platform Flutter apps",
                "Native Android (Kotlin/Java)",
                "iOS compatibility & adjustments",
                "Performance optimization"
            ]
        },
        {
            title: "AI Integration",
            icon: <FaBrain size={24} />,
            points: [
                "Gemini & OpenAI API integration",
                "Machine Learning models (TensorFlow)",
                "Smart automation features",
                "Predictive analytics & chatbots"
            ]
        },
        {
            title: "Backend & API",
            icon: <FaServer size={24} />,
            points: [
                "RESTful API development",
                "Firebase & Supabase integration",
                "Database design (SQL/NoSQL)",
                "Secure authentication systems"
            ]
        },
        {
            title: "UI/UX Implementation",
            icon: <FaPaintBrush size={24} />,
            points: [
                "Pixel-perfect design conversion",
                "Smooth animations (Framer Motion)",
                "Responsive layouts for all screens",
                "Dark/Light mode support"
            ]
        },
        {
            title: "MVP Development",
            icon: <FaRocket size={24} />,
            points: [
                "Rapid prototyping for startups",
                "Scalable architecture setup",
                "Feature prioritization",
                "Post-launch iteration support"
            ]
        },
        {
            title: "Code Consulting",
            icon: <FaCode size={24} />,
            points: [
                "Code review & refactoring",
                "Technical stack selection",
                "Performance auditing",
                "Best practices mentorship"
            ]
        },
        {
            title: "Website Development",
            icon: <FaLaptopCode size={24} />,
            points: [
                "Modern React.js applications",
                "Advanced JavaScript logic",
                "Responsive Design",
                "SEO Optimized Architecture"
            ]
        },
        {
            title: "Agentic AI Dev",
            icon: <FaRobot size={24} />,
            points: [
                "Autonomous AI Agents",
                "LangChain & AutoGPT integration",
                "Complex workflow automation",
                "Intelligent decision systems"
            ]
        },
        {
            title: "ML Models Development",
            icon: <FaNetworkWired size={24} />,
            points: [
                "Custom model training",
                "Predictive analytics solutions",
                "NLP & Computer Vision",
                "TensorFlow & PyTorch"
            ]
        }
    ];

    return (
        <SectionWrapper id="services">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    My <span className="text-blue-600 dark:text-neon-blue">Services</span>
                </h2>
                <div className="w-20 h-1 bg-blue-600 dark:bg-neon-blue mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Delivering premium technical solutions tailored to your business needs, from concept to deployment.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Services;
