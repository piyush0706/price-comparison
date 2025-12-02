import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import dashboardMockup from '../assets/dashboard_mockup.png';

const Mockups = () => {
    return (
        <section className="py-20 bg-black overflow-hidden">
            <div className="container mx-auto px-6 text-center flex flex-col items-center">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">Beautiful on Every Device</h2>
                </Reveal>

                <div className="relative max-w-4xl mx-auto w-full">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                    <Reveal delay={0.2} width="100%">
                        <motion.div
                            className="relative z-10 bg-white/5 border border-white/10 rounded-3xl p-4 shadow-2xl backdrop-blur-xl"
                        >
                            <div className="aspect-video bg-black rounded-2xl flex items-center justify-center overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                                <img
                                    src={dashboardMockup}
                                    alt="App Dashboard"
                                    className="relative z-10 w-full h-full object-cover rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                        </motion.div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Mockups;

