import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import PageHeader from "../components/PageHeader";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowRight, FaMobileAlt, FaCloud, FaRobot, FaExternalLinkAlt } from "react-icons/fa";

// Assets
import pic3Img from "../assets/pic3.png";
import dhruv1Img from "../assets/dhruv1.png";
import dhruv2Img from "../assets/dhruv2.png";
import meImg from "../assets/me.png";
import soloAiLogo from "../assets/soloai.png";
import darshanLogo from "../assets/darshanlogo.png";
import ayurscanLogo from "../assets/ayurscan.png";

const CAROUSEL_IMAGES = [
    dhruv1Img,
    dhruv2Img,
    meImg
];

const TESTIMONIALS = [
    {
        name: "Akshit Malik",
        role: "Software Engineer III, Google",
        text: "Dhruv stands out as a reliable frontend contributor. His clean code consistently adds value.",
        avatar: "https://i.pravatar.cc/150?img=11",
        icon: "G"
    },
    {
        name: "Rahul Verma",
        role: "Project Manager, Digontom",
        text: "Exceptional Flutter skills. Delivered our mobile application ahead of schedule with flawless state management.",
        avatar: "https://i.pravatar.cc/150?img=15",
        icon: "D"
    },
    {
        name: "Yuvika Bhat",
        role: "Product Manager, Amazon",
        text: "Dhruv brings balanced technical expertise and great UI/UX sensibilities to Android development.",
        avatar: "https://i.pravatar.cc/150?img=5",
        icon: "A"
    },
    {
        name: "Gulshan Sharma",
        role: "SDE II, Big4",
        text: "His attention to detail and focus on creating smooth interfaces helped refine our work significantly.",
        avatar: "https://i.pravatar.cc/150?img=68",
        icon: "B"
    },
    {
        name: "Gaurav Pandey",
        role: "Senior Developer, Microsoft",
        text: "Dhruv brings balanced engineering and an unstoppable work ethic to everything he builds.",
        avatar: "https://i.pravatar.cc/150?img=33",
        icon: "M"
    }
];

const TestimonialCard = ({ item }) => (
    <div className="w-[350px] md:w-[450px] flex-shrink-0 bg-[#0C0C0C] rounded-3xl p-8 border border-white/5 mr-6 flex flex-col justify-between hover:border-white/10 transition-colors h-[280px]">
        <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">{item.name}</h4>
                    <p className="text-gray-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">{item.role}</p>
                </div>
            </div>
            <div className="text-3xl font-black text-white/5">{item.icon}</div>
        </div>
        <p className="text-white/90 text-sm md:text-lg font-bold leading-relaxed tracking-wide">"{item.text.toUpperCase()}"</p>
    </div>
);

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Image carousel logic (every 2.5s to let the rich animation breathe)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-pure-black"
        >
            {/* HERO SECTION */}
            <SectionWrapper id="hero" className="pt-0 pb-32">
                <PageHeader
                    title="DHRUV"
                    subtitle="I DESIGN AND BUILD PRODUCTS THAT"
                    italicText="deliver real impact."
                    isHome={true}
                    xLink="https://x.com/DHRUVSR22147335"
                />

                <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[50vh]">

                        {/* Left Content */}
                        <div className="flex flex-col text-left justify-center pt-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-6"
                            >
                                <span className="text-xl md:text-2xl text-gray-400 font-medium mb-2 block">
                                    Hello, I am
                                </span>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
                                    Dhruv Srivastava
                                </h1>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-gray-300"
                            >
                                Building the bridge between ideas and <span className="text-gradient italic font-serif pr-1">experiences.</span>
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.4 }}
                                className="text-gray-400 mt-8 space-y-4 text-sm md:text-base max-w-lg leading-relaxed"
                            >
                                <p>
                                    I'm an engineering-driven Mobile App Developer experienced in Flutter and Android development. I specialize in building scalable applications with Firebase, Supabase, and REST APIs.
                                </p>
                                <p>
                                    With a focus on performance optimization and production-ready architecture, my code is built to help startups scale securely.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="flex items-center gap-6 mt-12 text-gray-500"
                            >
                                <a href="https://linkedin.com/in/dhruv-srivastava-1317932a5/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaLinkedin size={22} /></a>
                                <a href="https://github.com/Dhruvh-maker" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub size={22} /></a>
                                <a href="mailto:25dhruvsrivastava@gmail.com" className="hover:text-white transition-colors"><FaTwitter size={22} /></a>
                            </motion.div>
                        </div>

                        {/* Right Content - 3D Coverflow Carousel */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="relative hidden lg:flex justify-center items-center h-[600px] w-full"
                        >
                            {/* Background abstract ambient glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-start/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-40"></div>

                            <div className="relative w-full max-w-[500px] h-[550px] flex justify-center items-center" style={{ perspective: 1000 }}>
                                {CAROUSEL_IMAGES.map((imgSrc, index) => {
                                    // Calculate position in the circular array
                                    let offset = index - currentImageIndex;
                                    const len = CAROUSEL_IMAGES.length;
                                    if (offset > Math.floor(len / 2)) offset -= len;
                                    else if (offset < -Math.floor(len / 2)) offset += len;

                                    return (
                                        <motion.img
                                            key={index}
                                            src={imgSrc}
                                            animate={{
                                                x: offset * 130, // 130px shift for side images
                                                scale: offset === 0 ? 1 : 0.85,
                                                zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
                                                opacity: offset === 0 ? 1 : 0.5,
                                                rotateY: offset * -20 // fold inwards
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                ease: [0.16, 1, 0.3, 1] // super smooth spring-like easing
                                            }}
                                            className="absolute w-[320px] h-[480px] rounded-[2rem] object-cover border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0C0C0C]"
                                            alt={`Dhruv Portfolio Card ${index + 1}`}
                                        />
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ABOUT PREVIEW */}
            <section className="py-24 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 flex justify-center">
                            <div className="glowing-card w-full max-w-sm h-80 p-8 flex flex-col justify-center">
                                <div className="text-white relative z-10">
                                    <h3 className="font-bold text-xl mb-4 text-gradient">Education & Experience</h3>
                                    <ul className="space-y-4 my-2 text-sm text-gray-400">
                                        <li><strong className="text-white">B.Tech IT</strong> - KIET Group of Institutions (2024-2028)</li>
                                        <li><strong className="text-white">Flutter Intern</strong> - Digontom Pvt Ltd</li>
                                        <li><strong className="text-white">Android Coordinator</strong> - Innogeeks Tech Club</li>
                                        <li><strong className="text-white">AWS Certified</strong> - Cloud & AI Practitioner</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Who am I?</h2>
                            <p className="text-text-muted text-lg mb-8 leading-relaxed">
                                I manage the entire stack with a focus on clean, reusable code. I've developed scalable apps featuring role-based access, local caching, and seamless Google Authentication. Outside of shipping top-tier apps, I mentor students in Flutter development.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-gradient font-bold hover:gap-2 transition-all">
                                Read Full Bio <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-text-muted font-mono text-sm tracking-widest uppercase block mb-4">Capabilities</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">What I Do</h2>
                        </div>
                        <Link to="/services" className="hidden md:flex items-center text-gray-400 hover:text-white hover:border-white transition-all gap-2 px-6 py-2 rounded-full border border-white/10">
                            View All <FaArrowRight />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="glowing-card h-72 p-8 flex flex-col justify-between group">
                            <div className="relative z-10 flex-grow">
                                <FaMobileAlt className="text-4xl text-white mb-8 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />
                                <h3 className="text-2xl font-bold text-white mb-4">Mobile App Dev</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Cross-platform Flutter & Kotlin Android apps with scalable architecture and optimized API calls.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="glowing-card h-72 p-8 flex flex-col justify-between group" style={{ animationDelay: '1s' }}>
                            <div className="relative z-10 flex-grow">
                                <FaRobot className="text-4xl text-white mb-8 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />
                                <h3 className="text-2xl font-bold text-white mb-4">AI Integration</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Intelligent video editing APIs, caption generators, and AI-powered skin disease prediction models.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="glowing-card h-72 p-8 flex flex-col justify-between group" style={{ animationDelay: '2s' }}>
                            <div className="relative z-10 flex-grow">
                                <FaCloud className="text-4xl text-white mb-8 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />
                                <h3 className="text-2xl font-bold text-white mb-4">Backend Systems</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Secure Firebase/Supabase setups with Cashfree payment gateways and role-based access controls.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECTS */}
            <section className="py-32 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-20">
                        <span className="text-text-muted font-mono text-sm tracking-widest uppercase block mb-4">Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Featured Work</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Solo AI */}
                        <div className="glowing-card group flex flex-col h-[460px]">
                            {/* Logo Area */}
                            <div className="h-48 bg-black relative flex items-center justify-center p-6 border-b border-white/5 overflow-hidden rounded-t-3xl">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10 pointer-events-none"></div>
                                <img src={soloAiLogo} alt="Solo AI" className="h-full w-full object-contain z-0 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="relative z-10 p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">Solo AI</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                    Intelligent Video Editing & Publishing App. Automated scheduling, AI captions, and realtime trends from Reddit & Google.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-black border border-white/10 text-gray-300">Flutter</span>
                                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-black border border-white/10 text-gray-300">Dart</span>
                                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-black border border-white/10 text-gray-300">OpenAI</span>
                                </div>
                                <button className="w-full py-3 bg-white/5 hover:bg-white text-white hover:text-black rounded-lg font-bold transition-colors">
                                    Coming Soon
                                </button>
                            </div>
                        </div>

                        {/* Darshan Trip */}
                        <div className="glowing-card group flex flex-col h-[460px]" style={{ animationDelay: '1.5s' }}>
                            {/* Logo Area */}
                            <div className="h-48 bg-black relative flex items-center justify-center p-6 border-b border-white/5 overflow-hidden rounded-t-3xl">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10 pointer-events-none"></div>
                                <img src={darshanLogo} alt="Darshan Trip" className="h-full w-full object-contain z-0 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="relative z-10 p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">Darshan Trip</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                    Flutter-based bus booking app available on Play Store. Live seat tracking, trip scheduling, and Cashfree payments.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-black border border-white/10 text-gray-300">Flutter</span>
                                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-black border border-white/10 text-gray-300">Node</span>
                                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-black border border-white/10 text-gray-300">Cashfree</span>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=com.arkapps.darshantrip" target="_blank" rel="noreferrer" className="w-full text-center py-3 bg-white/5 hover:bg-white text-white hover:text-black rounded-lg font-bold transition-colors block">
                                    View on Play Store
                                </a>
                            </div>
                        </div>

                        {/* AyurScan */}
                        <div className="glowing-card group flex flex-col h-[460px]" style={{ animationDelay: '0.8s' }}>
                            {/* Logo Area */}
                            <div className="h-48 bg-black relative flex items-center justify-center p-6 border-b border-white/5 overflow-hidden rounded-t-3xl">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10 pointer-events-none"></div>
                                <img src={ayurscanLogo} alt="AyurScan" className="h-full w-full object-contain z-0 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="relative z-10 p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">AyurScan</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                    AI-Powered Skin Disease Prediction App. Real-time dermatologist discovery via Maps, pharmacy search, and AI screening.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-black border border-white/10 text-gray-300">Flutter</span>
                                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-black border border-white/10 text-gray-300">Maps</span>
                                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-black border border-white/10 text-gray-300">AI APIs</span>
                                </div>
                                <Link to="/projects" className="w-full block text-center py-3 bg-gradient-start/10 border border-gradient-start/30 hover:bg-gradient-start text-white font-bold transition-colors">
                                    View details
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white transition-all font-semibold">
                            View All Projects <FaExternalLinkAlt size={12} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS (MARQUEE) */}
            <section className="py-32 bg-pure-black overflow-hidden relative border-b border-white/5">
                <div className="text-center mb-20 relative z-10">
                    <span className="text-text-muted font-mono text-sm tracking-widest uppercase block mb-4">WHAT OTHERS SAY</span>
                    <h2 className="text-5xl md:text-6xl font-black text-white px-4 tracking-tight">
                        The Voices <span className="text-gradient italic font-serif">Behind</span>
                    </h2>
                </div>

                {/* Marquee Row 1 (Left Sliding) */}
                <div className="relative w-full flex overflow-hidden group mb-6">
                    <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] shrink-0 w-[max-content]">
                        {TESTIMONIALS.map((item, i) => <TestimonialCard key={`test1-${i}`} item={item} />)}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] shrink-0 w-[max-content]" aria-hidden="true">
                        {TESTIMONIALS.map((item, i) => <TestimonialCard key={`test1-dup-${i}`} item={item} />)}
                    </div>
                </div>

                {/* Marquee Row 2 (Right Sliding - Reversed) */}
                <div className="relative w-full flex overflow-hidden group">
                    <div className="flex animate-[marquee_45s_linear_infinite_reverse] group-hover:[animation-play-state:paused] shrink-0 w-[max-content]">
                        {[...TESTIMONIALS].reverse().map((item, i) => <TestimonialCard key={`test2-${i}`} item={item} />)}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex animate-[marquee_45s_linear_infinite_reverse] group-hover:[animation-play-state:paused] shrink-0 w-[max-content]" aria-hidden="true">
                        {[...TESTIMONIALS].reverse().map((item, i) => <TestimonialCard key={`test2-dup-${i}`} item={item} />)}
                    </div>
                </div>

                {/* Fade Out Edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-pure-black to-transparent pointer-events-none z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-pure-black to-transparent pointer-events-none z-10"></div>
            </section>

            {/* PRE-FOOTER / LET'S CREATE MODULE */}
            <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
                <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-start/10 blur-[100px] mix-blend-screen pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

                    {/* Left Side: Inline Text & Avatar */}
                    <div className="text-left w-full">
                        <h2 className="text-5xl md:text-[5.5rem] lg:text-[7.5rem] font-bold tracking-tight leading-none flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-6 mb-2">
                            <span className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 inline-block align-middle shadow-[0_0_20px_rgba(255,255,255,0.1)] border-2 border-white/10">
                                <img src={pic3Img} alt="Dhruv" className="w-full h-full object-cover" />
                            </span>
                            <span className="text-white">Let's create</span>
                        </h2>
                        <h2 className="text-5xl md:text-[5.5rem] lg:text-[7.5rem] font-bold text-gray-500 tracking-tight leading-[1.1]">
                            something real.
                        </h2>
                    </div>

                    {/* Right Side: Liquid Morphing Blob (Premium Agency Effect) */}
                    <div className="hidden md:flex relative justify-center items-center w-32 h-32 lg:w-48 lg:h-48 shrink-0 mr-4 lg:mr-16 group">
                        {/* Interactive floating orbit system */}
                        <div className="absolute inset-[-20%] rounded-full border border-white/5 border-t-white/20 animate-[spin_10s_linear_infinite] group-hover:border-t-[#ff007f]/50 transition-colors duration-500"></div>
                        <div className="absolute inset-[-40%] rounded-full border border-white/5 border-b-white/20 animate-[spin_15s_linear_infinite_reverse] group-hover:border-b-[#3B82F6]/50 transition-colors duration-500"></div>

                        {/* Morphing Blob Core */}
                        <div className="liquid-blob absolute inset-0 z-10 filter blur-[1px]"></div>

                        {/* High-fidelity glass reflection over the blob */}
                        <div className="absolute inset-[-10px] bg-white/5 rounded-full backdrop-blur-[2px] z-20 border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <span className="text-white/50 font-mono text-[8px] tracking-widest uppercase">Interact</span>
                        </div>
                    </div>

                </div>
            </section>
        </motion.div>
    );
};

export default Home;
