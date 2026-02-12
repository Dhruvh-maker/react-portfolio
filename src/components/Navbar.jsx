import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    // Handle Theme Toggle
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/80 dark:bg-deep-black/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* LEFT: Logo */}
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link to="/" className="text-2xl font-bold font-mono tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-teal-400">
                                Dhruv
                            </span>
                        </Link>
                    </div>

                    {/* CENTER: Nav Links (Desktop) */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex items-baseline space-x-8">
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-colors duration-300 relative group ${isActive
                                            ? "text-blue-700 dark:text-neon-blue font-bold"
                                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue transition-colors focus:outline-none"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </button>

                        {/* Contact Me Button */}
                        <Link
                            to="/contact"
                            className="bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue transition-colors focus:outline-none"
                        >
                            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-neon-blue focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className="md:hidden bg-white dark:bg-deep-black border-t border-gray-200 dark:border-white/10">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium w-full text-left ${isActive
                                            ? "text-blue-700 dark:text-neon-blue bg-blue-50 dark:bg-white/5"
                                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue hover:bg-gray-50 dark:hover:bg-white/5"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            <div className="mt-4 px-3">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                    </div >
                )}
        </nav >
    );
};

export default Navbar;
