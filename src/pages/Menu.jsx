import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, ChevronDown, Flame, UtensilsCrossed } from 'lucide-react';
import { pizzas, categories } from '../data/pizzas';
import PizzaCard from '../components/pizza/PizzaCard';
import { useCart } from '../context/CartContext';

const Menu = () => {
    const { searchQuery, setSearchQuery, activeCategory, setActiveCategory } = useCart();
    const [priceRange, setPriceRange] = useState(5000);
    const [spicePreference, setSpicePreference] = useState('All');
    const [sortBy, setSortBy] = useState('Recommended');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const spiceLevels = ['All', 'Low', 'Medium', 'High'];

    const filteredPizzas = useMemo(() => {
        let result = pizzas.filter(pizza => {
            const matchesSearch = pizza.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' || pizza.category === activeCategory;
            const matchesPrice = pizza.price <= priceRange;
            const matchesSpice = spicePreference === 'All' || pizza.spiceLevel === spicePreference;

            return matchesSearch && matchesCategory && matchesPrice && matchesSpice;
        });

        if (sortBy === 'Price: Low to High') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'Price: High to Low') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'Rating') {
            result.sort((a, b) => b.rating - a.rating);
        }

        return result;
    }, [searchQuery, activeCategory, priceRange, spicePreference, sortBy]);

    return (
        <div className="min-h-screen bg-light">
            {/* Header Section */}
            <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
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
                        <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Crafted for perfection</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Explore Our Menu</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            From stone-baked classics to Sri Lankan fusion specialties, find your perfect slice today.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 mb-20 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters (Desktop) */}
                    <aside className="hidden lg:block w-72 space-y-8">
                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 sticky top-32">
                            <div className="flex items-center gap-2 mb-8">
                                <SlidersHorizontal className="w-5 h-5 text-primary" />
                                <h3 className="font-bold text-dark uppercase tracking-widest text-sm">Filters</h3>
                            </div>

                            {/* Spice Level */}
                            <div className="mb-10">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Spice Level</h4>
                                <div className="flex flex-wrap gap-2">
                                    {spiceLevels.map(level => (
                                        <button
                                            key={level}
                                            onClick={() => setSpicePreference(level)}
                                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${spicePreference === level
                                                    ? 'bg-dark text-white'
                                                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                                }`}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="mb-10">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Max Price</h4>
                                    <span className="text-xs font-bold text-primary">LKR {priceRange.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1500"
                                    max="5000"
                                    step="100"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                    className="w-full accent-primary h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            {/* Clear */}
                            <button
                                onClick={() => {
                                    setPriceRange(5000);
                                    setSpicePreference('All');
                                    setActiveCategory('All');
                                    setSearchQuery('');
                                    setSortBy('Recommended');
                                }}
                                className="w-full py-4 text-xs font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="bg-white rounded-[32px] p-4 sm:p-6 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="flex flex-wrap items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-5 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${activeCategory === cat
                                                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden sm:block">Sort By</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-gray-50 border-none rounded-xl text-xs font-bold text-dark px-4 py-2 outline-none cursor-pointer appearance-none flex-1 md:flex-none"
                                >
                                    <option>Recommended</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Rating</option>
                                </select>
                            </div>
                        </div>

                        {/* Pizza Grid */}
                        {filteredPizzas.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                                {filteredPizzas.map((pizza) => (
                                    <motion.div
                                        layout
                                        key={pizza.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <PizzaCard product={pizza} />
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-32 text-center bg-white rounded-[40px] border-2 border-dashed border-gray-100">
                                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                                    <UtensilsCrossed className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black text-dark mb-2">No matching slices</h3>
                                <p className="text-gray-400 max-w-sm mx-auto">We couldn't find any pizzas matching your current filters. Try broadening your criteria!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
