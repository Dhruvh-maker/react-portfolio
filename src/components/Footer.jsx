import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-black pt-16 pb-8 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold font-mono text-gray-900 dark:text-white tracking-tighter flex items-center gap-2">
                            <span className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-blue-800 dark:from-neon-blue dark:to-blue-600 flex items-center justify-center text-white dark:text-black">D</span>
                            Dhruv
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Full Stack Developer specializing in creating beautiful, functional web and mobile applications with AI integration.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/dhruv-srivastava-1317932a5/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                            <a href="https://github.com/Dhruvh-maker" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"><FaGithub size={20} /></a>
                            <a href="mailto:25dhruvsrivastava@gmail.com" className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-white transition-colors"><FaEnvelope size={20} /></a>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="text-gray-900 dark:text-white font-bold mb-6">Navigation</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link to="/" className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors">About</Link></li>
                            <li><Link to="/projects" className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-gray-900 dark:text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li>App Development</li>
                            <li>Web Development</li>
                            <li>AI Integration</li>
                            <li>UI/UX Design</li>
                            <li>Backend Systems</li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-gray-900 dark:text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-blue-600 dark:text-neon-blue" />
                                <span>25dhruvsrivastava@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-blue-600 dark:text-neon-blue" />
                                <span>Ghaziabad, India</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <Link to="/contact" className="inline-block px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-blue-700 dark:bg-white dark:text-black font-bold text-sm dark:hover:bg-neon-blue transition-colors">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 dark:text-gray-600 text-xs">
                        &copy; {currentYear} Dhruv Srivastava. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-xs text-gray-500 dark:text-gray-600">
                        <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
