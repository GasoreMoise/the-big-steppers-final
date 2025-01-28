import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Navigation links with proper spacing
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Services', path: '/services' },
    { name: 'Skills', path: '/skills' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Reduced threshold for earlier background change
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen 
          ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg border-b border-amber-500/10' 
          : 'bg-gradient-to-b from-[#1a1a1a]/80 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 z-50 hover:opacity-80 transition-opacity"
          >
            GNM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm lg:text-base relative group ${
                  location.pathname === link.path 
                    ? 'text-amber-500 font-medium' 
                    : 'text-gray-300 hover:text-amber-500'
                } transition-colors`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : 'w-0'
                }`} />
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-amber-500/10 text-amber-500 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.2 }}
          className={`md:hidden fixed inset-0 top-16 bg-[#1a1a1a]/98 backdrop-blur-md ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg flex items-center space-x-2 ${
                  location.pathname === link.path 
                    ? 'text-amber-500 font-medium' 
                    : 'text-gray-300'
                } hover:text-amber-500 transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="block w-1.5 h-1.5 rounded-full bg-amber-500"
                  />
                )}
              </Link>
            ))}
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-colors"
            >
              <span>{isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}</span>
              <span>Toggle Theme</span>
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

