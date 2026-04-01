import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

// X (Twitter) Logo SVG
const XLogo = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.15H5.059z"></path>
    </svg>
);

const Footer = () => {
    return (
        <footer className="w-full px-4 md:px-8 pb-8 pt-20 bg-pure-black">
            <div className="max-w-7xl mx-auto bg-surface rounded-[2rem] p-8 md:p-16 border border-white/5">
                <div className="flex flex-col lg:flex-row justify-between gap-16">

                    {/* Brand / Description Section */}
                    <div className="lg:max-w-sm">
                        <Link to="/" className="text-4xl font-black text-white tracking-tighter mb-6 block">
                            DHRUV
                        </Link>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Building digital experiences that matter, one line of code at a time. Crafting interfaces that feel alive, solving problems that make a difference, and turning ideas into reality. Every pixel has a purpose. Every interaction tells a story.
                        </p>
                    </div>

                    {/* Columns Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 w-full lg:w-auto">

                        {/* General Column */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-white font-medium mb-2">General</h4>
                            <Link to="/" className="text-text-muted hover:text-white transition-colors text-sm font-medium">Home</Link>
                            <Link to="/about" className="text-text-muted hover:text-white transition-colors text-sm font-medium">About</Link>
                            <Link to="/projects" className="text-text-muted hover:text-white transition-colors text-sm font-medium">Projects</Link>
                            <Link to="/services" className="text-text-muted hover:text-white transition-colors text-sm font-medium">Services</Link>
                        </div>

                        {/* About/Social Column */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-white font-medium mb-2">Connect</h4>
                            <a href="https://github.com/Dhruvh-maker" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors text-sm font-medium">GitHub</a>
                            <a href="https://www.linkedin.com/in/dhruv-srivastava-1317932a5/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
                            <a href="mailto:25dhruvsrivastava@gmail.com" className="text-text-muted hover:text-white transition-colors text-sm font-medium">Email</a>
                            <Link to="/contact" className="text-text-muted hover:text-white transition-colors text-sm font-medium">Contact</Link>
                        </div>

                        {/* Projects Column */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-white font-medium mb-2">Work</h4>
                            <span className="text-text-muted hover:text-white transition-colors text-sm font-medium cursor-pointer">SkillGalaxy</span>
                            <span className="text-text-muted hover:text-white transition-colors text-sm font-medium cursor-pointer">ReactPortfolio</span>
                            <span className="text-text-muted hover:text-white transition-colors text-sm font-medium cursor-pointer">Startups</span>
                        </div>

                        {/* Legal Column */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-white font-medium mb-2">Legal</h4>
                            <span className="text-text-muted hover:text-white transition-colors text-sm font-medium cursor-pointer">Privacy Policy</span>
                            <span className="text-text-muted hover:text-white transition-colors text-sm font-medium cursor-pointer">Terms & Conditions</span>

                            <div className="mt-8 pt-4 border-t border-white/10">
                                <p className="text-[10px] text-text-muted leading-tight">
                                    This site is protected. Read our <span className="underline cursor-pointer">Privacy Policy</span> & <span className="underline cursor-pointer">Terms</span>.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Shiny Social Icons (Outside the card) */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 px-4">
                <p className="text-xs text-text-muted font-bold font-mono tracking-widest uppercase">© {new Date().getFullYear()} DHRUV SRIVASTAVA. ALL RIGHTS RESERVED.</p>

                <div className="flex items-center gap-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/Dhruvh-maker"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white style-glow-white"
                        style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                        onMouseEnter={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 10px rgba(255,255,255,0.8))"}
                        onMouseLeave={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 10 0 0 12 2z"></path></svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/dhruv-srivastava-1317932a5/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-[#0A66C2]"
                        style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                        onMouseEnter={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 10px rgba(10,102,194,0.8))"}
                        onMouseLeave={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
                    >
                        <FaLinkedin size={20} />
                    </a>

                    {/* X (Twitter) */}
                    <a
                        href="https://x.com/DHRUVSR22147335"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                        style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                        onMouseEnter={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 10px rgba(255,255,255,0.8))"}
                        onMouseLeave={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
                    >
                        <XLogo />
                    </a>

                    {/* Mail */}
                    <a
                        href="mailto:25dhruvsrivastava@gmail.com"
                        className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-[#EA4335]"
                        style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                        onMouseEnter={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 10px rgba(234,67,53,0.8))"}
                        onMouseLeave={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
                    >
                        <FaEnvelope size={20} />
                    </a>

                    {/* Instagram */}
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-[#E1306C]"
                        style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                        onMouseEnter={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 10px rgba(225,48,108,0.8))"}
                        onMouseLeave={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
