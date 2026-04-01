import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { FaMobileAlt, FaBrain, FaServer, FaCode, FaRobot, FaNetworkWired } from "react-icons/fa";

const ServiceCard = ({ title, icon, points, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <div className="glowing-card h-full p-8 flex flex-col group">
                <div className="relative z-10 flex-grow">
                    <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                        {icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 transition-colors">
                        {title}
                    </h3>

                    <ul className="space-y-3 text-text-muted text-sm my-6">
                        {points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-gray-500 mt-0.5">▹</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    const services = [
        {
            title: "Flutter Development",
            icon: <FaMobileAlt size={24} />,
            points: [
                "Cross-platform applications combining iOS & Android",
                "Scalable mobile architecture & efficient state management",
                "Local caching optimization for rapid performance",
                "Pixel-perfect responsive UI implementation"
            ]
        },
        {
            title: "Android Native Dev",
            icon: <FaCode size={24} />,
            points: [
                "Native apps using Java & Kotlin",
                "Android Studio optimization & tooling",
                "Hardware API & permission integration",
                "Legacy codebase maintenance & refactoring"
            ]
        },
        {
            title: "Backend Integration",
            icon: <FaServer size={24} />,
            points: [
                "Secure RESTful API integration",
                "Firebase & Supabase real-time databases",
                "Google Authentication & Role-based sessions",
                "Cashfree Payment Gateway integration"
            ]
        },
        {
            title: "AI & ML Implementation",
            icon: <FaBrain size={24} />,
            points: [
                "Gemini & OpenAI API connectivity",
                "TensorFlow model integration",
                "Predictive AI skin scanning models",
                "Real-time smart caption generation"
            ]
        },
        {
            title: "Database Architecting",
            icon: <FaNetworkWired size={24} />,
            points: [
                "Relational & NoSQL database planning",
                "Live seat tracking system architectures",
                "Data fetching route optimization",
                "Fast reliable network call reductions"
            ]
        },
        {
            title: "Automation & APIs",
            icon: <FaRobot size={24} />,
            points: [
                "Automated social media publishing workflows",
                "Reddit & Google Trends data scraping APIs",
                "Realtime location mapping via Google Maps",
                "Seamless 3rd party SDK installations"
            ]
        }
    ];

    return (
        <SectionWrapper id="services" className="pt-24 bg-pure-black relative overflow-hidden text-center min-h-screen">
            <PageHeader
                title="EXPERTISE"
                subtitle="DELIVERING HIGH QUALITY"
                italicText="mobile solutions."
            />

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-start/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 w-full text-center mb-16 relative z-10">
                <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                    Production-grade mobile engineering spanning from intuitive front-end fluid interfaces to robust, AI-powered backends.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Services;
