import React from 'react';
import { Monitor, Server, Database, Layout } from 'lucide-react';

const Architecture = () => {
    const steps = [
        { icon: <Monitor />, title: "Frontend", subtitle: "Search Bar" },
        { icon: <Server />, title: "Backend", subtitle: "Node.js/Express" },
        { icon: <Database />, title: "Database", subtitle: "JSON Data" },
        { icon: <Layout />, title: "UI View", subtitle: "Comparison" },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-16">System Architecture</h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 w-48 z-10 relative">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-gray-800">{step.title}</h3>
                                <p className="text-sm text-gray-500">{step.subtitle}</p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="hidden md:block h-1 w-24 bg-gray-300 relative">
                                    <div className="absolute -right-1 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
                                </div>
                            )}
                            {index < steps.length - 1 && (
                                <div className="md:hidden w-1 h-12 bg-gray-300"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Architecture;
