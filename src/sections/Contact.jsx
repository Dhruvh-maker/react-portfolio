import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaArrowRight } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="pt-24 pb-20 bg-pure-black min-h-screen">
            <div className="max-w-6xl mx-auto px-4 md:px-8">

                {/* Minimalist Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20"
                >
                    <p className="text-[#ff007f] font-mono text-xs tracking-[0.25em] uppercase mb-4">04. What's Next?</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-text-muted text-[15px] max-w-xl leading-relaxed">
                        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">

                    {/* LEFT: Contact Details (Spans 5) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-5 space-y-10"
                    >
                        {/* Direct Email */}
                        <div>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Direct Line</p>
                            <a
                                href="mailto:25dhruvsrivastava@gmail.com"
                                className="text-white text-lg md:text-xl font-medium hover:text-[#ff007f] transition-colors border-b border-white/10 hover:border-[#ff007f]/50 pb-1"
                            >
                                25dhruvsrivastava@gmail.com
                            </a>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Socials</p>
                            <div className="flex flex-col gap-4">
                                <a href="https://linkedin.com/in/dhruv-srivastava-1317932a5/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group w-fit">
                                    <FaLinkedin size={18} />
                                    <span className="text-sm font-medium">LinkedIn</span>
                                    <FaArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ff007f]" />
                                </a>
                                <a href="https://github.com/Dhruvh-maker" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group w-fit">
                                    <FaGithub size={18} />
                                    <span className="text-sm font-medium">GitHub</span>
                                    <FaArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ff007f]" />
                                </a>
                                <a href="https://x.com/DHRUVSR22147335" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group w-fit">
                                    <FaTwitter size={18} />
                                    <span className="text-sm font-medium">Twitter / X</span>
                                    <FaArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ff007f]" />
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 border-l border-[#ff007f] pl-3 py-0.5">
                                Based in<br /><span className="text-gray-300">Ghaziabad, India</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT: Sophisticated Form (Spans 7) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-7"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff007f]/50 focus:bg-[#111] transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff007f]/50 focus:bg-[#111] transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff007f]/50 focus:bg-[#111] transition-all"
                                    placeholder="Mobile App Project"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff007f]/50 focus:bg-[#111] transition-all resize-none"
                                    placeholder="Tell me about your idea..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors mt-2"
                            >
                                Send Message
                                <FaArrowRight size={12} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
