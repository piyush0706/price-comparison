
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Scenario = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Current Scenario vs. Us</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        See why thousands of users are switching to PriceCompare.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Old Way */}
                    <div className="space-y-6">
                        {['Amazon', 'Flipkart', 'Croma'].map((store, i) => (
                            <motion.div
                                key={store}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between opacity-50"
                            >
                                <span className="font-bold text-gray-400">{store}</span>
                                <span className="text-sm text-gray-500">Checking...</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                        <div className="bg-blue-500/10 p-6 rounded-full animate-pulse">
                            <ArrowRight className="w-12 h-12 text-blue-500" />
                        </div>
                    </div>

                    {/* New Way */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-3xl"
                    >
                        <div className="bg-black p-8 rounded-[22px] h-full text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Unified Dashboard</h3>
                            <p className="text-gray-400 mb-6">All prices in one place. Best deal highlighted automatically.</p>
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                10x Faster
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Scenario;
