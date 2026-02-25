import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Zap, Users, Gift, ArrowRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Offers = () => {
    const navigate = useNavigate();

    const flashDeals = [
        {
            id: 1,
            title: "Seafood Saturday",
            discount: "30% OFF",
            desc: "Get flat 30% off on all seafood pizzas every Saturday after 6 PM.",
            code: "SSEA30",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
            type: "flash"
        },
        {
            id: 2,
            title: "Family Night Out",
            discount: "FREE LARGE",
            desc: "Buy 2 Large Pizzas and get a 1.5L Coke + Garlic Bread absolutely FREE.",
            code: "FAMILYFREE",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
            type: "combo"
        }
    ];

    const coupons = [
        { title: "First Order", value: "20% OFF", code: "PRIME20", icon: <Gift /> },
        { title: "Student Deal", value: "15% OFF", code: "STUDENT15", icon: <Users /> },
        { title: "Flash Sale", value: "LKR 500 OFF", code: "QUICK500", icon: <Zap /> }
    ];

    return (
        <div className="min-h-screen bg-light pb-20">
            {/* Hero Section */}
            <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <span className="bg-secondary text-dark font-bold px-4 py-1.5 rounded-full text-xs mb-6 inline-block uppercase tracking-widest">Limited Availability</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Unbeatable Deals</h1>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg mb-10">
                            Grab your favorite slices at prices you'll love. Exclusive offers for our Prime Members.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => navigate('/menu')} className="bg-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary hover:text-dark transition-all shadow-xl">
                                Order Now
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Animated background circles */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-20">
                {/* Coupon Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {coupons.map((coupon, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-3xl p-6 shadow-xl shadow-dark/5 border border-gray-100 flex items-center justify-between group hover:border-secondary transition-all"
                        >
                            <div className="flex items-center gap-4 text-left">
                                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    {coupon.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark text-sm">{coupon.title}</h4>
                                    <p className="text-lg font-black text-primary">{coupon.value}</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 px-3 py-2 rounded-xl border border-dashed border-gray-300">
                                <span className="text-xs font-mono font-bold text-gray-500 uppercase">{coupon.code}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Flash Deals Section */}
                <div className="space-y-12">
                    <div className="flex items-end justify-between">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Hot Deals</span>
                            <h2 className="text-3xl font-black text-dark">Current Promotions</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {flashDeals.map((deal) => (
                            <motion.div
                                key={deal.id}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-xl shadow-dark/5 border border-gray-100"
                            >
                                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                                    <img src={deal.image} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt={deal.title} />
                                </div>
                                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${deal.type === 'flash' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                                            }`}>
                                            {deal.type === 'flash' ? 'Flash Deal' : 'Combo Pack'}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black text-dark mb-2">{deal.title}</h3>
                                    <div className="text-3xl font-black text-primary mb-4">{deal.discount}</div>
                                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                        {deal.desc}
                                    </p>
                                    <div className="mt-auto space-y-4">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Apply Code</span>
                                            <span className="text-sm font-mono font-bold text-dark">{deal.code}</span>
                                        </div>
                                        <button
                                            onClick={() => navigate('/menu')}
                                            className="w-full py-4 bg-dark text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-primary transition-all group"
                                        >
                                            Use Offer
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Membership Banner */}
                <div className="mt-20 relative rounded-[40px] overflow-hidden bg-dark p-8 md:p-16 h-[400px] flex items-center">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2000&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                            alt="bg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                    </div>
                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Prime Rewards Program</h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Join our royalty program and earn 1 slice point for every LKR 100 spent. Redeem points for free cheesy garlic bread and more!
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-10 py-4 bg-secondary text-dark font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-secondary/10">
                                Join Prime Now
                            </button>
                            <button className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2">
                                Learn More <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
