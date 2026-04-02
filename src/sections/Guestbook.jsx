import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle, FaPaperPlane, FaClock, FaQuoteRight } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";

const Guestbook = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [signatures, setSignatures] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Load signatures from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("portfolio_guestbook_v2");
        if (saved) {
            setSignatures(JSON.parse(saved));
        } else {
            const initial = [
                { id: 1, name: "Dhruv Srivastava", date: "APR 1", message: "Welcome to my digital corner! Feel free to leave your signature below. ✨", pinned: true },
                { id: 2, name: "Arjun Mehta", date: "APR 1", message: "The animations on this portfolio are next level. Clean work!" },
                { id: 3, name: "Sanya K.", date: "MAR 31", message: "Love the pure black aesthetic. Very high-end." },
                { id: 4, name: "Marcus", date: "MAR 30", message: "Mythical portfolio pull. 🔥" },
            ];
            setSignatures(initial);
        }
    }, []);

    const saveSignatures = (newSignatures) => {
        setSignatures(newSignatures);
        localStorage.setItem("portfolio_guestbook_v2", JSON.stringify(newSignatures));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !message) return;

        setIsSubmitting(true);
        setTimeout(() => {
            const newSignature = {
                id: Date.now(),
                name,
                message,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase(),
            };
            saveSignatures([newSignature, ...signatures]);
            setName("");
            setMessage("");
            setIsSubmitting(false);
        }, 800);
    };

    return (
        <SectionWrapper id="guestbook" className="pt-20 pb-32 bg-pure-black min-h-screen selection:bg-[#ff007f]/30">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* 10K Agency Header */}
                <div className="relative mb-32 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10 text-center"
                    >
                        <span className="text-[#ff007f] font-mono text-[10px] uppercase tracking-[0.6em] mb-4 block">
                            The Collective Signature
                        </span>
                        <div className="relative inline-block">
                            <h1 className="text-8xl md:text-[12rem] font-black text-white leading-none uppercase tracking-tighter mix-blend-difference select-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                                GUEST
                            </h1>
                            <motion.h2
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-8 md:-bottom-12 right-0 md:-right-12 text-6xl md:text-[8rem] font-serif italic text-gray-500/40 leading-none select-none pointer-events-none"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                book
                            </motion.h2>
                        </div>
                    </motion.div>
                </div>

                {/* The Signature Dock (Input Area) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-3xl mx-auto mb-32 px-4"
                >
                    <div className="glowing-card p-8 rounded-[3rem] group relative">

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <FaUserCircle size={24} className="text-gray-400" />
                                </div>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Display Name"
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-white font-semibold text-xl focus:outline-none focus:border-[#ff007f]/50 transition-all placeholder:text-white/40"
                                />
                            </div>

                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="2"
                                placeholder="Write something memorable..."
                                className="w-full bg-transparent border-0 py-4 text-gray-300 text-lg focus:outline-none placeholder:text-white/40 resize-none"
                            ></textarea>

                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                    {message.length} / 500
                                </span>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    className="bg-white text-black px-10 py-3 rounded-full font-black text-xs tracking-[0.2em] uppercase flex items-center gap-3 hover:bg-[#ff007f] hover:text-white transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Recording...' : 'Record Signature'}
                                    <FaPaperPlane size={10} />
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* Signature Masonry Board */}
                <div className="space-y-16">
                    <div className="flex items-center gap-4 opacity-20">
                        <div className="h-[1px] flex-grow bg-white"></div>
                        <span className="text-[10px] font-mono uppercase tracking-[1em]">The Archives</span>
                        <div className="h-[1px] flex-grow bg-white"></div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence>
                            {signatures.map((sig, idx) => (
                                <motion.div
                                    key={sig.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className={`relative group bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:border-white/30 transition-all flex flex-col justify-between ${sig.pinned ? 'md:col-span-2 bg-gradient-to-br from-[#ff007f]/10 to-transparent' : ''}`}
                                >
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-sm font-black text-white border border-white/5">
                                                    {sig.name.charAt(0)}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-white font-bold tracking-tight">{sig.name}</span>
                                                    <span className="text-[10px] font-mono text-gray-500 flex items-center gap-2 uppercase tracking-tighter">
                                                        <FaClock size={8} /> {sig.date}
                                                    </span>
                                                </div>
                                            </div>
                                            <FaQuoteRight size={20} className="text-white/5 group-hover:text-[#ff007f]/20 transition-all" />
                                        </div>

                                        <p className="text-gray-400 text-lg leading-relaxed font-medium italic">
                                            "{sig.message}"
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#ff007f] rounded-full animate-pulse"></div>
                                        <span className="text-[10px] font-mono text-[#ff007f] uppercase tracking-widest">Verified Signature</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Guestbook;
