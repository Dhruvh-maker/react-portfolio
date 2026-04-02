import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCode } from "react-icons/fa";

// X (Twitter) Logo SVG Component
const XLogo = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-3 h-3 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.15H5.059z"></path>
    </svg>
);

const PageHeader = ({ title, subtitle, italicText, isHome = false, xLink = "#" }) => {
    return (
        <div className={`relative w-full flex flex-col items-center justify-center text-center overflow-hidden z-10 ${isHome ? "h-[65vh] md:h-[75vh] pt-0 pb-12" : "pt-4 pb-12"}`}>
            {/* Subtle giant ambient glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>

            {/* X Button (Only on Home) */}
            {isHome && (
                <motion.a
                    href={xLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glowing-pill relative z-20 flex items-center gap-2 px-6 py-2 mb-8 text-gray-400 hover:text-white transition-colors text-xs font-medium group block"
                >
                    <span className="relative z-10 flex items-center gap-2 w-full justify-center">
                        Say hi on <XLogo /> <span className="ml-1 opacity-50 font-serif group-hover:opacity-100 group-hover:translate-x-1 transition-all">&gt;</span>
                    </span>
                </motion.a>
            )}

            <motion.h1
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[14vw] md:text-[8rem] lg:text-[14rem] font-black text-white leading-none tracking-tighter uppercase mb-6 relative z-10 w-full"
                style={{ textShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
            >
                {title}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="relative z-10 mt-4 px-4"
            >
                <p className="text-gray-400 font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-2 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
                {italicText && (
                    <p className="text-4xl md:text-5xl lg:text-5xl font-serif italic text-white/90 lowercase tracking-tight">
                        {italicText}
                    </p>
                )}
            </motion.div>

            {/* Corner Indicators (Only on Home) */}
            {isHome && (
                <div className="absolute bottom-6 md:bottom-10 w-full left-0 z-20 px-4 pointer-events-none">
                    <div className="max-w-7xl mx-auto w-full flex justify-between items-end pointer-events-auto">
                        {/* Bottom Left - Location */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-left"
                        >
                            <div className="flex flex-col items-start gap-1">
                                <FaMapMarkerAlt className="text-green-500 mb-1" size={16} />
                                <h4 className="text-white font-bold text-xs md:text-sm tracking-wider uppercase">BASED IN GHAZIABAD,</h4>
                                <p className="text-gray-500 font-mono text-[10px] md:text-xs tracking-widest uppercase">INDIA</p>
                            </div>
                        </motion.div>

                        {/* Bottom Right - Role */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-right flex flex-col items-end"
                        >
                            <div className="flex flex-col items-end gap-1">
                                <FaCode className="text-blue-500 mb-1" size={18} />
                                <h4 className="text-white font-bold text-xs md:text-sm tracking-wider uppercase">FULL STACK DEV,</h4>
                                <p className="text-gray-500 font-mono text-[10px] md:text-xs tracking-widest uppercase">& DESIGNER</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PageHeader;
