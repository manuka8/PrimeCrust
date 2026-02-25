import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
    {
        id: 1,
        title: "Hot & Spicy Sri Lankan Special",
        subtitle: "Experience the authentic heat of island spices on a crispy crust.",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2000&auto=format&fit=crop",
        cta: "Order Now",
        path: "/menu",
        color: "bg-primary"
    },
    {
        id: 2,
        title: "Family Combo Deals",
        subtitle: "Share the love with our 2-for-1 large pizza offers every weekend.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop",
        cta: "View Packs",
        path: "/family-packs",
        color: "bg-secondary"
    },
    {
        id: 3,
        title: "Weekend Discounts up to 30%",
        subtitle: "Flat 30% off on all Seafood Pizzas from 6 PM to 10 PM.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000&auto=format&fit=crop",
        cta: "View Offers",
        path: "/offers",
        color: "bg-dark"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[600px] w-full overflow-hidden bg-dark">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-transparent z-10" />
                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-12 md:px-24 container mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-secondary font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
                        >
                            Premium Pizzeria
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white max-w-2xl leading-tight mb-6"
                        >
                            {slides[current].title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-gray-300 text-lg max-w-xl mb-10 leading-relaxed"
                        >
                            {slides[current].subtitle}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button
                                onClick={() => navigate(slides[current].path)}
                                className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
                            >
                                {slides[current].cta}
                            </button>
                            <button
                                onClick={() => navigate('/menu')}
                                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/10"
                            >
                                View Menu
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute bottom-12 right-12 z-30 flex gap-4">
                <button
                    onClick={prev}
                    className="w-14 h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 text-white rounded-full flex items-center justify-center transition-all group"
                >
                    <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                    onClick={next}
                    className="w-14 h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 text-white rounded-full flex items-center justify-center transition-all group"
                >
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-12 left-12 z-30 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${current === idx ? 'w-12 bg-primary' : 'w-4 bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
