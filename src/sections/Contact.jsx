import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="py-20">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Let's <span className="text-neon-blue">Connect</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-neon-blue mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Whether you have a project in mind or just want to chat about AI & Mobile Dev, I'm always open to new opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

                        <div className="glass p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-neon-blue/30 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-neon-blue/10 rounded-full flex items-center justify-center text-neon-blue">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email Me</p>
                                    <a href="mailto:25dhruvsrivastava@gmail.com" className="text-gray-900 dark:text-white font-medium hover:text-neon-blue transition-colors">
                                        25dhruvsrivastava@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-neon-blue/30 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-neon-purple/10 rounded-full flex items-center justify-center text-neon-purple">
                                    <FaPhone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Call Me</p>
                                    <a href="tel:+918004987795" className="text-gray-900 dark:text-white font-medium hover:text-neon-purple transition-colors">
                                        +91 8004987795
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-neon-blue/30 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center text-green-400">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="text-gray-900 dark:text-white font-medium">Ghaziabad, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href="https://www.linkedin.com/in/dhruv-srivastava-1317932a5/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-neon-blue hover:bg-neon-blue/10 dark:hover:text-white dark:hover:bg-neon-blue/20 transition-all">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/Dhruvh-maker" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-black hover:bg-gray-200 dark:hover:text-white dark:hover:bg-white/20 transition-all">
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/10"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" className="w-full bg-gray-50 dark:bg-deep-black/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-gray-50 dark:bg-deep-black/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-gray-50 dark:bg-deep-black/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue transition-colors" placeholder="How can I help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-neon-blue to-blue-600 text-black font-bold py-4 rounded-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
