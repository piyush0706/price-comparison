import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { X, Star, ExternalLink, CheckCircle2 } from 'lucide-react';

const SearchResults = ({ query, onClose }) => {
    // Combine all products
    const allProducts = useMemo(() => {
        return [
            ...products.phones.map(p => ({ ...p, category: 'phones' })),
            ...products.electronics.map(p => ({ ...p, category: 'electronics' })),
            ...products.extra.map(p => ({ ...p, category: 'extra' }))
        ];
    }, []);

    // Filter based on query
    const results = useMemo(() => {
        if (!query) return [];
        return allProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    }, [query, allProducts]);

    const getBestPrice = (product) => {
        const prices = [
            { store: 'Amazon', price: product.amazon },
            { store: 'Flipkart', price: product.flipkart },
            { store: 'Croma', price: product.croma }
        ];
        return prices.reduce((min, p) => p.price < min.price ? p : min, prices[0]);
    };

    return (
        <AnimatePresence>
            {query && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                            <div>
                                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                    Search Results
                                </h2>
                                <p className="text-gray-400 text-sm">Found {results.length} match{results.length !== 1 && 'es'} for "{query}"</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Results Grid */}
                        <div className="overflow-y-auto p-6 bg-black/50">
                            {results.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {results.map((product) => {
                                        const bestDeal = getBestPrice(product);
                                        return (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                key={product.id}
                                                className="bg-white/5 rounded-2xl shadow-lg overflow-hidden border border-white/5 hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all group"
                                            >
                                                {/* Image */}
                                                <div className="relative h-48 bg-white/5 p-4 flex items-center justify-center overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50"></div>
                                                    <img
                                                        src={product.image || "https://dummyimage.com/400x400/eee/aaa&text=Product"}
                                                        alt={product.name}
                                                        className="relative z-10 max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1 z-20">
                                                        <Star className="w-3 h-3 fill-current" /> Best Deal
                                                    </div>
                                                </div>

                                                {/* Details */}
                                                <div className="p-5">
                                                    <h3 className="font-bold text-lg mb-3 text-white line-clamp-1">{product.name}</h3>

                                                    <div className="space-y-2 mb-4">
                                                        {[
                                                            { name: 'Amazon', price: product.amazon },
                                                            { name: 'Flipkart', price: product.flipkart },
                                                            { name: 'Croma', price: product.croma }
                                                        ].map((store) => (
                                                            <div
                                                                key={store.name}
                                                                className={`flex justify-between items-center p-2 rounded-lg text-sm ${bestDeal.store === store.name
                                                                    ? 'bg-green-500/10 border border-green-500/30'
                                                                    : 'hover:bg-white/5'
                                                                    }`}
                                                            >
                                                                <span className="text-gray-400">{store.name}</span>
                                                                <div className="flex items-center gap-1.5">
                                                                    <span className={`font-bold ${bestDeal.store === store.name ? 'text-green-400' : 'text-gray-300'}`}>
                                                                        ₹{store.price.toLocaleString()}
                                                                    </span>
                                                                    {bestDeal.store === store.name && <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <button className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                                        View Deal <ExternalLink className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                                    <p className="text-xl font-medium mb-2">No products found</p>
                                    <p className="text-sm">Try searching for "iPhone", "Sony", or "MacBook"</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchResults;
