import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Filter } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { categories } from '../../data/pizzas';

const Header = () => {
    const { cartCount, setIsCartOpen, searchQuery, setSearchQuery, activeCategory, setActiveCategory } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl group-hover:rotate-12 transition-transform">
                        P
                    </div>
                    <span className="text-xl font-bold tracking-tight text-dark flex flex-col leading-none">
                        PrimeCrust
                        <span className="text-[10px] text-primary uppercase tracking-[0.2em]">Pizzeria LK</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link to="/" className="text-dark hover:text-primary transition-colors">Home</Link>
                    <Link to="/menu" className="text-dark hover:text-primary transition-colors">Menu</Link>
                    <Link to="/offers" className="text-dark hover:text-primary transition-colors">Offers</Link>
                </nav>

                {/* Search Bar */}
                <div className="flex-1 max-w-md relative hidden sm:block">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search your pizza..."
                            className="w-full h-11 bg-gray-100 border-none rounded-2xl pl-10 pr-12 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                            <Filter className={`w-4 h-4 ${showFilters ? 'text-primary' : 'text-gray-500'}`} />
                        </button>
                    </div>

                    {/* Search Filters Dropdown */}
                    {showFilters && (
                        <div className="absolute top-14 left-0 w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-4 animate-slide-in-up z-20">
                            <h4 className="text-xs font-bold uppercase text-gray-400 mb-3 tracking-wider">Quick Filters</h4>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setActiveCategory(cat);
                                            setShowFilters(false);
                                            navigate('/menu');
                                        }}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${activeCategory === cat
                                                ? 'bg-primary text-white shadow-md shadow-primary/20'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2.5 bg-dark text-white rounded-2xl hover:bg-primary transition-all group shadow-lg shadow-dark/10"
                    >
                        <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-dark text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button
                        className="md:hidden p-2.5 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4 animate-slide-in-down">
                    <Link to="/" className="text-lg font-semibold px-4 py-2 hover:bg-gray-50 rounded-xl">Home</Link>
                    <Link to="/menu" className="text-lg font-semibold px-4 py-2 hover:bg-gray-50 rounded-xl">Menu</Link>
                    <Link to="/offers" className="text-lg font-semibold px-4 py-2 hover:bg-gray-50 rounded-xl">Offers</Link>
                    <div className="sm:hidden px-4 mt-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full h-11 bg-gray-100 rounded-xl pl-10 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
