import React from 'react';
import { Code2, Database, Server } from 'lucide-react';

const TechStack = () => {
    const stacks = [
        {
            icon: <Code2 className="w-8 h-8 text-blue-500" />,
            title: "Frontend",
            tech: "React.js / Tailwind CSS",
            desc: "Responsive UI with Glassmorphism"
        },
        {
            icon: <Server className="w-8 h-8 text-green-500" />,
            title: "Backend",
            tech: "Node.js + Express",
            desc: "REST API Architecture"
        },
        {
            icon: <Database className="w-8 h-8 text-purple-500" />,
            title: "Database",
            tech: "JSON Data",
            desc: "Local Data Storage (Demo)"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tech Stack</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {stacks.map((stack, index) => (
                        <div key={index} className="glass p-8 rounded-2xl hover:bg-gray-50 transition-colors border border-gray-100 shadow-lg">
                            <div className="mb-4 p-3 bg-gray-100 rounded-lg inline-block">
                                {stack.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{stack.title}</h3>
                            <p className="text-blue-600 font-semibold mb-2">{stack.tech}</p>
                            <p className="text-gray-500 text-sm">{stack.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500">Tools: VS Code, GitHub</p>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
