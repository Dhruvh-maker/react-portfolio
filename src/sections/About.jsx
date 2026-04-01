import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import PageHeader from "../components/PageHeader";
import { FaLinkedin, FaGithub, FaTwitter, FaAward, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa";

import meImg from "../assets/me.png";
import dhruv1Img from "../assets/dhruv1.png";
import dhruv2Img from "../assets/dhruv2.png";

const CAROUSEL_IMAGES = [dhruv1Img, dhruv2Img, meImg];

const About = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);
    // Resume Skills
    const skills = [
        "Flutter", "Dart", "Kotlin", "Java", "Firebase", "Supabase", "REST APIs", "AWS"
    ];

    // Resume Experience
    const experiences = [
        {
            role: "Flutter Development Intern",
            company: "Digontom Private Limited",
            period: "Dec 2025 - Feb 2026",
            description: "Developed a Course Management Mobile Application using Flutter and Supabase backend. Implemented Google authentication, role-based access, and secure user sessions. Integrated REST APIs and optimized network calls to reduce response time, alongside local caching for state management."
        },
        {
            role: "Android Domain Coordinator",
            company: "Innogeeks Tech Club",
            period: "Aug 2024 - Present",
            description: "Mentored students in Android and Flutter development. Conducted workshops, project reviews, and technical guidance sessions. Assisted in organizing hackathons and developer events."
        }
    ];

    return (
        <SectionWrapper id="about" className="pt-24 pb-20 bg-pure-black min-h-screen">
            <PageHeader
                title="ABOUT ME"
                subtitle="GET TO KNOW MORE ABOUT"
                italicText="who i am."
            />

            {/* ── A LITTLE ABOUT ME ── */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-text-muted font-mono text-xs tracking-[0.25em] uppercase mb-5">A LITTLE ABOUT ME</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            Nice to meet you. I'm{" "}
                            <span className="font-serif italic text-[#ff007f]">Dhruv</span>
                        </h2>

                        <div className="space-y-5 text-text-muted leading-relaxed text-[15px]">
                            <p>
                                I build things that live on screens — mobile apps, web experiences, and everything in between. As a <span className="text-white font-medium">Flutter & Full Stack Developer</span>, I care deeply about clean architecture and performance that actually matters to users.
                            </p>
                            <p>
                                Beyond code, I understand how products work end-to-end. From tinkering with AI tools like <span className="text-white font-medium">Solo AI</span> and <span className="text-white font-medium">AyurScan</span>, I've learned to build, ship, and iterate in fast-paced environments.
                            </p>
                            <p>
                                My philosophy is simple: every interaction should feel intentional. I help turn rough ideas into polished, real-world products — from first commit to final deploy.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-5 mt-8 mb-6">
                            <a
                                href="https://www.linkedin.com/in/dhruv-srivastava-1317932a5/"
                                target="_blank" rel="noreferrer"
                                className="text-gray-500 hover:text-[#0A66C2] transition-all duration-300 hover:-translate-y-0.5"
                                style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                                onMouseEnter={e => e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(10,102,194,0.7))"}
                                onMouseLeave={e => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
                            >
                                <FaLinkedin size={22} />
                            </a>
                            <a
                                href="https://github.com/Dhruvh-maker"
                                target="_blank" rel="noreferrer"
                                className="text-gray-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                                style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                                onMouseEnter={e => e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(255,255,255,0.6))"}
                                onMouseLeave={e => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
                            >
                                <FaGithub size={22} />
                            </a>
                            <a
                                href="https://x.com/DHRUVSR22147335"
                                target="_blank" rel="noreferrer"
                                className="text-gray-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                                style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                                onMouseEnter={e => e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(255,255,255,0.6))"}
                                onMouseLeave={e => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
                            >
                                <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.15H5.059z"></path></svg>
                            </a>
                        </div>

                        {/* Dive in deeper CTA */}
                        <a href="#about-detail" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group border-b border-white/10 hover:border-white/40 pb-0.5">
                            Dive in deeper
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </motion.div>

                    {/* Right: 3D Coverflow Carousel (same as Home) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="relative hidden lg:flex justify-center items-center h-[520px] w-full"
                    >
                        {/* Ambient glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#ff007f]/10 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="relative w-full max-w-[460px] h-[500px] flex justify-center items-center" style={{ perspective: 1000 }}>
                            {CAROUSEL_IMAGES.map((imgSrc, index) => {
                                let offset = index - currentImageIndex;
                                const len = CAROUSEL_IMAGES.length;
                                if (offset > Math.floor(len / 2)) offset -= len;
                                else if (offset < -Math.floor(len / 2)) offset += len;

                                return (
                                    <motion.img
                                        key={index}
                                        src={imgSrc}
                                        animate={{
                                            x: offset * 120,
                                            scale: offset === 0 ? 1 : 0.82,
                                            zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
                                            opacity: offset === 0 ? 1 : 0.45,
                                            rotateY: offset * -20
                                        }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute w-[280px] h-[420px] rounded-[2rem] object-cover border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0C0C0C]"
                                        alt={`Dhruv Photo ${index + 1}`}
                                    />
                                );
                            })}
                        </div>

                        {/* Dot indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                            {CAROUSEL_IMAGES.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImageIndex(i)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-white w-4' : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* ── THE EXPERIENCE TIMELINE ── */}
            <div id="about-detail" className="max-w-7xl mx-auto px-4 md:px-8 mt-4 pb-16">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <p className="text-text-muted font-mono text-xs tracking-[0.3em] uppercase mb-4">THE EXPERIENCE</p>
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                        Experience That
                    </h2>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
                        Brings <span className="font-serif italic text-[#ff007f]">Ideas to Life</span>
                    </h2>
                </motion.div>

                {/* Timeline Container */}
                <TimelineSection experiences={experiences} skills={skills} />

            </div>
        </SectionWrapper>
    );
};

/* ─── TIMELINE COMPONENT WITH SCROLL-TRACKING ORB ─── */
const TimelineSection = ({ experiences, skills }) => {
    const timelineRef = React.useRef(null);
    const [scrollProgress, setScrollProgress] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;
            const rect = timelineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalHeight = rect.height;

            // Calculate how far through the timeline we've scrolled
            const scrolled = windowHeight * 0.4 - rect.top;
            const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const items = [
        ...experiences.map(exp => ({ type: 'experience', data: exp })),
        { type: 'education', data: { role: 'Bachelor of Technology (B.Tech)', company: 'KIET Group of Institutions, Ghaziabad', period: '2024 - 2028', description: 'Information Technology — Focused on software engineering, mobile development, and cloud computing. Active member of Innogeeks Tech Club.' } },
        { type: 'certifications', data: { skills } },
    ];

    return (
        <div ref={timelineRef} className="relative">
            {/* The glowing vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5">
                {/* Filled progress line */}
                <motion.div
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#ff007f] via-[#ff4d6d] to-[#ff007f] origin-top"
                    style={{ height: `${scrollProgress * 100}%` }}
                />
                {/* Glowing orb tracker */}
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-20"
                    style={{ top: `${scrollProgress * 100}%` }}
                >
                    <div className="w-full h-full rounded-full bg-[#ff007f] shadow-[0_0_20px_#ff007f,0_0_40px_rgba(255,0,127,0.4)] border-2 border-white/30 animate-pulse" />
                    {/* Inner shine */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/80" />
                </motion.div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-24 relative z-10">
                {items.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    if (item.type === 'certifications') {
                        return (
                            <motion.div
                                key="certs"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="flex justify-center"
                            >
                                <div className="bg-[#0C0C0C] border border-white/5 rounded-3xl p-8 max-w-lg w-full text-center">
                                    <h4 className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-3">
                                        <span className="w-2 h-2 bg-[#ff007f] rounded-full"></span> Certifications & Skills
                                    </h4>
                                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                                        {item.data.skills.map((skill, i) => (
                                            <span key={i} className="glowing-pill px-4 py-1.5 text-xs font-mono tracking-wider text-gray-300 hover:text-white transition-colors cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <ul className="space-y-3 text-sm text-text-muted text-left">
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#ffcf75] mt-0.5">✦</span> AWS Certified Cloud Practitioner
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#ffcf75] mt-0.5">✦</span> AWS Certified AI Practitioner
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#ffcf75] mt-0.5">✦</span> Android Development Essential Training
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    }

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex items-start gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            {/* Content Side */}
                            <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
                                <p className="text-text-muted font-mono text-xs tracking-widest uppercase mb-2">{item.data.period}</p>
                                <h4 className="text-white font-serif italic text-2xl mb-1">{item.data.company}</h4>
                                {item.type === 'education' && (
                                    <p className="text-text-muted text-sm">📍 Ghaziabad, India</p>
                                )}
                            </div>

                            {/* Center dot (on the line) */}
                            <div className="w-2/12 flex justify-center relative">
                                <div className="w-3 h-3 rounded-full bg-white/20 border border-white/30 mt-2" />
                            </div>

                            {/* Detail Side */}
                            <div className="w-5/12">
                                <h3 className="text-xl font-bold text-white mb-4">{item.data.role}</h3>
                                <p className="text-text-muted leading-relaxed text-sm">{item.data.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default About;
