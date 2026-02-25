import React from 'react';
import Hero from '../components/home/Hero';
import PizzaCard from '../components/pizza/PizzaCard';
import { pizzas, categories } from '../data/pizzas';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, Utensils } from 'lucide-react';

const Home = () => {
    const { searchQuery, activeCategory, setActiveCategory } = useCart();

    const filteredPizzas = pizzas.filter(pizza => {
        const matchesSearch = pizza.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'All' || pizza.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const trendingPizzas = filteredPizzas.filter(p => p.isTrending);
    const otherPizzas = filteredPizzas.filter(p => !p.isTrending);

    return (
        <div className="pb-20">
            <Hero />

            {/* Features Section */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: <ShieldCheck className="w-6 h-6" />, title: "Premium Quality", desc: "100% Fresh Ingredients" },
                            { icon: <Truck className="w-6 h-6" />, title: "Fast Delivery", desc: "Within 45 Minutes" },
                            { icon: <Clock className="w-6 h-6" />, title: "24/7 Service", desc: "Always here for you" },
                            { icon: <Utensils className="w-6 h-6" />, title: "Sri Lankan Taste", desc: "Island Spices Twist" }
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-translate-y-1">
                                    {feature.icon}
                                </div>
                                <h4 className="font-bold text-dark text-sm mb-1">{feature.title}</h4>
                                <p className="text-gray-400 text-[11px] uppercase tracking-wider">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Pills */}
            <section className="py-8 sticky top-20 z-40 bg-light/95 backdrop-blur-md">
                <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-3 min-w-max pb-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all ${activeCategory === cat
                                        ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105'
                                        : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pizza Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    {trendingPizzas.length > 0 && (
                        <div className="mb-16">
                            <div className="flex items-end justify-between mb-8">
                                <div>
                                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">What's Hot</span>
                                    <h2 className="text-3xl font-black text-dark">Trending Now</h2>
                                </div>
                                <div className="h-px bg-gray-200 flex-1 mx-8 hidden sm:block" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {trendingPizzas.map((pizza) => (
                                    <motion.div
                                        key={pizza.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <PizzaCard product={pizza} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div>
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Our Full</span>
                                <h2 className="text-3xl font-black text-dark">Menu Gallery</h2>
                            </div>
                            <div className="h-px bg-gray-200 flex-1 mx-8 hidden sm:block" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherPizzas.map((pizza) => (
                                <motion.div
                                    key={pizza.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <PizzaCard product={pizza} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {filteredPizzas.length === 0 && (
                        <div className="py-20 text-center">
                            <div className="text-4xl mb-4">🍕</div>
                            <h3 className="text-xl font-bold text-dark mb-2">No pizzas found</h3>
                            <p className="text-gray-400">Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Promotions Banner */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="relative rounded-[40px] overflow-hidden bg-dark p-8 sm:p-16 h-[400px] flex items-center">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=2000&auto=format&fit=crop"
                                className="w-full h-full object-cover opacity-40"
                                alt="Promo"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
                        </div>
                        <div className="relative z-10 max-w-lg">
                            <span className="bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-widest uppercase">Limited Time Offer</span>
                            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">Get 20% Off on Your First Order!</h2>
                            <p className="text-gray-300 mb-8 text-lg">Use code <span className="text-secondary font-bold">PRIME20</span> at checkout to avail this discount.</p>
                            <button className="px-10 py-4 bg-white text-dark font-black rounded-2xl hover:bg-primary hover:text-white transition-all shadow-2xl">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
