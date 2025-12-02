import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Frown } from 'lucide-react';
import Reveal from './Reveal';

const Problem = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Problem</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Shopping online shouldn't be this hard.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <Clock className="w-10 h-10 text-red-400" />, title: "Wasting Time", desc: "Switching between 10 different tabs to find the price." },
                        { icon: <DollarSign className="w-10 h-10 text-orange-400" />, title: "Overpaying", desc: "Buying a product only to find it cheaper elsewhere later." },
                        { icon: <Frown className="w-10 h-10 text-yellow-400" />, title: "Confusion", desc: "Too many offers, coupons, and hidden charges." }
                    ].map((item, index) => (
                        <Reveal key={index} delay={index * 0.2} width="100%">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-all duration-300 h-full"
                            >
                                <div className="bg-white/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
