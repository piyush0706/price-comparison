import React from 'react';
import { ShoppingBag, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="flex items-center gap-2 font-bold text-2xl text-white mb-4 md:mb-0">
                        <ShoppingBag className="w-8 h-8 text-blue-500" />
                        <span>PriceCompare</span>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; 2024 PriceCompare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
