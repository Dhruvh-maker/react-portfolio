import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Work", path: "/projects" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    // Close dropdowns on route change
    React.useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav className="fixed w-full top-0 z-50 pt-6 px-4 pointer-events-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">

                {/* LEFT: Logo */}
                <div className="flex-shrink-0 cursor-pointer text-white font-bold text-xl tracking-tight">
                    <Link to="/">DS</Link>
                </div>

                {/* CENTER: Nav Links (Desktop) - The Pill */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-full px-2 py-1.5 z-10">
                    {navLinks.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                    ? "bg-white text-black"
                                    : "text-gray-400 hover:text-white"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* RIGHT: Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-gray-400 hover:text-white w-9 h-9 flex items-center justify-center rounded-full bg-[#111111] border border-white/5 transition-colors">
                        <FaMoon size={14} />
                    </button>

                    <Link
                        to="/contact"
                        className="bg-surface-light border border-white/10 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-full bg-[#111111] border border-white/10 text-white"
                    >
                        {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 mx-4 bg-[#111111] border border-white/10 rounded-2xl p-4 pointer-events-auto shadow-2xl">
                    <div className="flex flex-col space-y-2">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                                        ? "bg-white text-black"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <div className="pt-4 mt-2 border-t border-white/10">
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-white text-black px-5 py-3 rounded-xl font-medium"
                            >
                                Book a Call
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
