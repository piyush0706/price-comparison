import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Wallet } from 'lucide-react';
import Reveal from './Reveal';

const Benefits = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={ref} className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-900/20 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                Maximize Your Savings with <span className="text-blue-500">Smart Insights</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Our platform doesn't just show prices; it analyzes trends to help you buy at the perfect moment.
                            </p>
                        </Reveal>

                        <div className="space-y-6">
                            <Reveal delay={0.3}>
                                <div className="flex gap-4">
                                    <div className="bg-blue-500/10 p-3 rounded-xl h-fit">
                                        <Wallet className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">Save up to 40%</h3>
                                        <p className="text-gray-400">Average savings per user on electronics and gadgets.</p>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={0.4}>
                                <div className="flex gap-4">
                                    <div className="bg-purple-500/10 p-3 rounded-xl h-fit">
                                        <TrendingUp className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">Price History Tracking</h3>
                                        <p className="text-gray-400">See how prices have changed over time to spot fake deals.</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <motion.div style={{ y }} className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative backdrop-blur-xl">
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Total Savings</p>
                                    <h3 className="text-4xl font-bold text-white">₹12,450</h3>
                                </div>
                                <div className="text-green-400 font-bold flex items-center gap-1">
                                    +24% <TrendingUp className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Fake Chart */}
                            <div className="h-40 flex items-end gap-2 justify-between">
                                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                    <div key={i} className="w-full bg-blue-500/20 rounded-t-lg relative group overflow-hidden" style={{ height: `${h}%` }}>
                                        <div className="absolute bottom-0 left-0 right-0 bg-blue-500 h-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
