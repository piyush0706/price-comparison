import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-dark py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 font-bold text-2xl text-white">
                    <ShoppingBag className="w-8 h-8 text-blue-500" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        PriceCompare
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#hero" className="text-gray-300 hover:text-white font-medium transition-colors">Home</a>
                    <a href="#features" className="text-gray-300 hover:text-white font-medium transition-colors">Features</a>
                    <a href="#demo" className="text-gray-300 hover:text-white font-medium transition-colors">Demo</a>
                    <a href="#about" className="text-gray-300 hover:text-white font-medium transition-colors">About</a>
                    <button className="px-5 py-2 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        Get Started
                    </button>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 glass-dark p-6 flex flex-col gap-4 border-t border-white/10"
                >
                    <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium">Home</a>
                    <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium">Features</a>
                    <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium">Demo</a>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium">About</a>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
