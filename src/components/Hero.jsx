import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, ArrowRight, TrendingUp } from 'lucide-react';

const Hero = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yBackground = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const suggestions = ['iPhone 15', 'Samsung S23', 'MacBook Air', 'Sony Headphones', 'OnePlus 12'];

    const handleSearchSubmit = () => {
        if (onSearch) {
            onSearch(searchQuery);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        if (onSearch) {
            onSearch(suggestion);
            setShowSuggestions(false);
        }
    };

    return (
        <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
            {/* Cinematic Background Effects */}
            <motion.div style={{ y: yBackground }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></motion.div>
            <motion.div style={{ y: yBackground }} className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></motion.div>
            <motion.div style={{ y: yBackground }} className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-pulse animation-delay-2000"></motion.div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    style={{ y: yText, opacity }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight text-white">
                        Price <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Comparison</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Experience the future of shopping. Compare prices across platforms in a unified, cinematic interface.
                    </p>

                    {/* Interactive Search Bar */}
                    <div className="max-w-2xl mx-auto relative mb-16">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative flex items-center bg-white/5 backdrop-blur-xl rounded-full border border-white/10 p-2 transition-all duration-300 focus-within:border-blue-500/50 focus-within:bg-white/10">
                                <Search className="w-6 h-6 text-gray-400 ml-4" />
                                <input
                                    type="text"
                                    className="flex-1 px-6 py-4 outline-none text-white bg-transparent text-lg placeholder-gray-500 font-light"
                                    placeholder="Search for products..."
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setShowSuggestions(true);
                                    }}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                                    onFocus={() => setShowSuggestions(true)}
                                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                />
                                <button
                                    onClick={handleSearchSubmit}
                                    className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-105"
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Suggestions Dropdown */}
                        {showSuggestions && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute top-full left-0 right-0 mt-4 bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden z-20 text-left shadow-2xl"
                            >
                                <div className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-white/5">
                                    {searchQuery ? 'Suggestions' : 'Trending Now'}
                                </div>
                                {(searchQuery ? suggestions.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())) : suggestions).map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleSuggestionClick(item)}
                                        className="px-6 py-4 hover:bg-white/5 cursor-pointer flex items-center gap-4 text-gray-300 transition-colors group"
                                    >
                                        <TrendingUp className="w-4 h-4 text-blue-500 group-hover:text-blue-400" />
                                        <span className="group-hover:text-white transition-colors">{item}</span>
                                    </div>
                                ))}
                                {searchQuery && suggestions.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                                    <div className="px-6 py-8 text-gray-500 text-center">No matches found</div>
                                )}
                            </motion.div>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="#demo" className="px-8 py-4 rounded-full bg-white/10 text-white border border-white/10 font-medium hover:bg-white/20 transition-all backdrop-blur-md flex items-center gap-2 group">
                            Start Comparing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
