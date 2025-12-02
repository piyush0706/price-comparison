import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Clock } from 'lucide-react';
import Reveal from './Reveal';

const features = [
    {
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        title: "Real-Time Comparison",
        description: "Get up-to-the-minute prices from Amazon, Flipkart, and Croma instantly."
    },
    {
        icon: <Shield className="w-8 h-8 text-green-400" />,
        title: "Verified Deals",
        description: "We only show prices from trusted sellers to ensure a safe shopping experience."
    },
    {
        icon: <Globe className="w-8 h-8 text-blue-400" />,
        title: "All-in-One Platform",
        description: "No need to open multiple tabs. Compare everything in a single, unified dashboard."
    },
    {
        icon: <Clock className="w-8 h-8 text-purple-400" />,
        title: "Save Time & Money",
        description: "Find the lowest price in seconds and save significantly on every purchase."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Why Choose Us?</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            We bring you the most powerful tools to make smart shopping decisions.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Reveal key={index} delay={index * 0.1} width="100%">
                            <div
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group h-full"
                            >
                                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
