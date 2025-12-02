import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { Filter, ArrowUpDown, ExternalLink, ShoppingCart, Star, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const Demo = ({ searchQuery }) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [sortOption, setSortOption] = useState('default');

    // Reset category to 'all' when search query changes
    useEffect(() => {
        if (searchQuery) {
            setActiveCategory('all');
        }
    }, [searchQuery]);

    // Combine all products for 'all' category
    const allProducts = useMemo(() => {
        return [
            ...products.phones.map(p => ({ ...p, category: 'phones' })),
            ...products.electronics.map(p => ({ ...p, category: 'electronics' })),
            ...products.extra.map(p => ({ ...p, category: 'extra' }))
        ];
    }, []);

    const filteredProducts = useMemo(() => {
        let items = activeCategory === 'all'
            ? allProducts
            : allProducts.filter(p => p.category === activeCategory);

        // Search Filter
        if (searchQuery) {
            items = items.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        if (sortOption === 'price-low') {
            items.sort((a, b) => Math.min(a.amazon, a.flipkart, a.croma) - Math.min(b.amazon, b.flipkart, b.croma));
        } else if (sortOption === 'price-high') {
            items.sort((a, b) => Math.min(b.amazon, b.flipkart, b.croma) - Math.min(a.amazon, a.flipkart, a.croma));
        } else if (sortOption === 'name') {
            items.sort((a, b) => a.name.localeCompare(b.name));
        }

        return items;
    }, [activeCategory, sortOption, allProducts, searchQuery]);

    const getBestPrice = (product) => {
        const prices = [
            { store: 'Amazon', price: product.amazon },
            { store: 'Flipkart', price: product.flipkart },
            { store: 'Croma', price: product.croma }
        ];
        return prices.reduce((min, p) => p.price < min.price ? p : min, prices[0]);
    };

    return (
        <section id="demo" className="py-20 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 flex flex-col items-center">
                    <Reveal>
                        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold animate-pulse">
                            Live Demo
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            {searchQuery ? `Results for "${searchQuery}"` : "Compare Prices Instantly"}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            {searchQuery ? "Showing best deals for your search." : "Select a category and see the best deals across top stores."}
                        </p>
                    </Reveal>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['all', 'phones', 'electronics', 'extra'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all capitalize border ${activeCategory === cat
                                    ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {cat === 'extra' ? 'Accessories' : cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                className="appearance-none bg-white/5 border border-white/10 text-gray-300 py-2.5 pl-5 pr-12 rounded-full focus:outline-none focus:border-blue-500 cursor-pointer hover:bg-white/10 transition-colors"
                            >
                                <option value="default" className="bg-black text-gray-300">Sort By</option>
                                <option value="price-low" className="bg-black text-gray-300">Price: Low to High</option>
                                <option value="price-high" className="bg-black text-gray-300">Price: High to Low</option>
                                <option value="name" className="bg-black text-gray-300">Name: A-Z</option>
                            </select>
                            <ArrowUpDown className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => {
                                const bestDeal = getBestPrice(product);

                                return (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        key={product.id}
                                        className="bg-white/5 rounded-3xl shadow-lg overflow-hidden border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 group"
                                    >
                                        {/* Image Area */}
                                        <div className="relative h-56 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden flex items-center justify-center p-6">
                                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <img
                                                src={product.image || "https://dummyimage.com/400x400/eee/aaa&text=Product"}
                                                alt={product.name}
                                                className="relative z-10 max-h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                                            />

                                            {/* Best Deal Badge */}
                                            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20 border border-white/10">
                                                <Star className="w-3 h-3 fill-current" /> Best Deal
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-5 text-white line-clamp-1 group-hover:text-blue-400 transition-colors">{product.name}</h3>

                                            <div className="space-y-3">
                                                {[
                                                    { name: 'Amazon', price: product.amazon },
                                                    { name: 'Flipkart', price: product.flipkart },
                                                    { name: 'Croma', price: product.croma }
                                                ].map((store) => (
                                                    <div
                                                        key={store.name}
                                                        className={`flex justify-between items-center p-3 rounded-xl transition-all ${bestDeal.store === store.name
                                                            ? 'bg-green-500/10 border border-green-500/20'
                                                            : 'hover:bg-white/5 border border-transparent'
                                                            }`}
                                                    >
                                                        <span className="font-medium text-gray-400">{store.name}</span>
                                                        <div className="flex items-center gap-2">
                                                            <span className={`font-bold text-lg ${bestDeal.store === store.name ? 'text-green-400' : 'text-gray-300'}`}>
                                                                ₹{store.price.toLocaleString()}
                                                            </span>
                                                            {bestDeal.store === store.name && (
                                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-6 pt-5 border-t border-white/10 flex justify-between items-center">
                                                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                                                    Lowest Price <br />
                                                    <span className="text-lg text-green-400 font-bold normal-case">₹{bestDeal.price.toLocaleString()}</span>
                                                </div>
                                                <button className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-0.5">
                                                    Buy Now <ExternalLink className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                        ) : (
                            <div className="col-span-full text-center py-20">
                                <p className="text-gray-500 text-xl">No products found matching your search.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Demo;
