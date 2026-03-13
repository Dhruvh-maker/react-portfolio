import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = ({ children, id, className = "", bottomContent }) => {
    return (
        <section id={id} className={`min-h-[calc(100vh-4rem)] flex flex-col justify-center relative py-20 px-4 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative"
            >
                {children}
            </motion.div>
            {bottomContent}
        </section>
    );
};

export default SectionWrapper;
