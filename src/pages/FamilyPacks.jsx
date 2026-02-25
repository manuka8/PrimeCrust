import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, CheckCircle2, ShoppingCart, ArrowRight } from 'lucide-react';
import { familyPacks } from '../data/pizzas';
import { useCart } from '../context/CartContext';

const FamilyPacks = () => {
    const { addToCart } = useCart();

    return (
        <div className="min-h-screen bg-light pb-20">
            {/* Hero Section */}
            <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop"
                        className="w-full h-full object-cover"
                        alt="bg"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Better Together</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Family Pack Deals</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Unlock massive savings and feed the whole squad with our curated family combos and party packs.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {familyPacks.map((pack, idx) => (
                        <motion.div
                            key={pack.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-xl shadow-dark/5 border border-gray-100 group"
                        >
                            {/* Image Side */}
                            <div className="md:w-1/2 h-72 md:h-auto overflow-hidden relative">
                                <img
                                    src={pack.image}
                                    alt={pack.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 flex flex-col gap-2">
                                    <span className="bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-widest">
                                        {pack.discount}
                                    </span>
                                    <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-2xl flex items-center gap-1 shadow-lg w-fit">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        <span className="text-sm font-bold">{pack.rating}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="md:w-1/2 p-8 flex flex-col">
                                <div className="flex items-center gap-2 mb-3 text-secondary">
                                    <Users className="w-4 h-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Family Size</span>
                                </div>
                                <h3 className="text-2xl font-black text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {pack.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {pack.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {pack.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Deal Price</span>
                                        <span className="text-2xl font-black text-dark">LKR {pack.price.toLocaleString()}</span>
                                    </div>
                                    <button
                                        onClick={() => addToCart(pack)}
                                        className="h-14 px-6 bg-dark text-white rounded-2xl flex items-center gap-3 hover:bg-primary transition-all shadow-xl shadow-dark/10 group/btn"
                                    >
                                        <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                        <span className="font-bold text-sm">Add Deal</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Combo Banner */}
                <div className="mt-20 relative rounded-[40px] overflow-hidden bg-primary p-8 md:p-16 h-[400px] flex items-center justify-center text-center">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2000&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                            alt="bg"
                        />
                    </div>
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Want a Custom Combo?</h2>
                        <p className="text-white/80 mb-10 text-lg">
                            Hosting a bigger event? Let us customize a bulk order package specifically for your party needs with special group discounts.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-4 bg-dark text-white font-black rounded-2xl hover:bg-secondary hover:text-dark transition-all shadow-2xl flex items-center gap-2">
                                Contact for Bulk Orders <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamilyPacks;
