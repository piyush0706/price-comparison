import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2 } from 'lucide-react';

const Objective = () => {
    return (
        <section className="py-20 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold">
                            Our Mission
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Simplifying Your <br /><span className="text-purple-500">Shopping Experience</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We aim to build the ultimate price comparison engine that empowers users to make informed decisions instantly.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Aggregate prices from top e-commerce stores.",
                                "Provide real-time data accuracy.",
                                "Ensure a user-friendly, ad-free experience.",
                                "Help users save money on every purchase."
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <div className="relative bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-xl">
                            <Target className="w-24 h-24 text-purple-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Target Audience</h3>
                            <p className="text-gray-400 mb-6">
                                Designed for smart shoppers, tech enthusiasts, and anyone who loves getting the best value for their money.
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-white/5 px-4 py-2 rounded-lg text-sm text-gray-300">Students</div>
                                <div className="bg-white/5 px-4 py-2 rounded-lg text-sm text-gray-300">Professionals</div>
                                <div className="bg-white/5 px-4 py-2 rounded-lg text-sm text-gray-300">Families</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Objective;
