import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { districts, calculateDelivery } from '../utils/delivery';
import { motion } from 'framer-motion';
import { CreditCard, Truck, ClipboardList, CheckCircle2, ArrowRight, CreditCard as CardIcon, Wallet, Banknote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const [selectedDistrict, setSelectedDistrict] = useState('Colombo');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const deliveryFee = calculateDelivery(selectedDistrict);
    const total = cartTotal + deliveryFee;

    const handleOrder = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate payment processing
        setTimeout(() => {
            setLoading(false);
            clearCart();
            navigate('/success');
        }, 2000);
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h2 className="text-3xl font-black text-dark mb-4">Your cart is empty!</h2>
                <p className="text-gray-400 mb-8">Add some delicious pizzas before checking out.</p>
                <button
                    onClick={() => navigate('/')}
                    className="px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all"
                >
                    View Menu
                </button>
            </div>
        );
    }

    return (
        <div className="bg-light min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Form */}
                    <div className="flex-1 space-y-8">
                        <h1 className="text-4xl font-black text-dark mb-2">Checkout</h1>
                        <p className="text-gray-400">Please provide your delivery details and choose a payment method.</p>

                        <form onSubmit={handleOrder} id="checkout-form" className="space-y-8">
                            {/* Delivery Info */}
                            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-primary/10 rounded-xl text-primary">
                                        <Truck className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark">Delivery details</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                                        <input required type="text" placeholder="e.g. Kamal Perera" className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Phone Number</label>
                                        <input required type="tel" placeholder="e.g. 077 123 4567" className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Delivery Address</label>
                                        <textarea required placeholder="Street name, landmark, etc." className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all min-h-[100px]" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">District</label>
                                        <select
                                            value={selectedDistrict}
                                            onChange={(e) => setSelectedDistrict(e.target.value)}
                                            className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            {districts.map(d => <option key={d} value={d}>{d}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-primary/10 rounded-xl text-primary">
                                        <CreditCard className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark">Payment method</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { id: 'card', name: 'Card Payment', icon: <CardIcon className="w-5 h-5" /> },
                                        { id: 'cod', name: 'Cash on Delivery', icon: <Banknote className="w-5 h-5" /> },
                                        { id: 'wallet', name: 'Mobile Wallet', icon: <Wallet className="w-5 h-5" /> }
                                    ].map((method) => (
                                        <button
                                            key={method.id}
                                            type="button"
                                            onClick={() => setPaymentMethod(method.id)}
                                            className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${paymentMethod === method.id
                                                    ? 'border-primary bg-primary/5 text-primary'
                                                    : 'border-gray-50 bg-gray-50 text-gray-400 hover:border-gray-200'
                                                }`}
                                        >
                                            {method.icon}
                                            <span className="text-sm font-bold">{method.name}</span>
                                        </button>
                                    ))}
                                </div>

                                {paymentMethod === 'card' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="mt-8 space-y-4"
                                    >
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Card Details</label>
                                            <input type="text" placeholder="Card Number" className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 outline-none" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <input type="text" placeholder="MM/YY" className="h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 outline-none" />
                                            <input type="text" placeholder="CVC" className="h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 outline-none" />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-[400px]">
                        <div className="bg-dark rounded-[32px] p-8 text-white sticky top-32 shadow-2xl">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-white/10 rounded-xl text-secondary">
                                    <ClipboardList className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold">Order Summary</h3>
                            </div>

                            <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-sm truncate">{item.name}</p>
                                            <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-bold text-sm">LKR {(item.price * item.quantity).toLocaleString()}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-6 border-t border-white/10">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Subtotal</span>
                                    <span className="font-bold">LKR {cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Delivery Fee ({selectedDistrict})</span>
                                    <span className={`font-bold ${deliveryFee === 0 ? 'text-green-400' : ''}`}>
                                        {deliveryFee === 0 ? 'FREE' : `LKR ${deliveryFee.toLocaleString()}`}
                                    </span>
                                </div>
                                <div className="pt-4 flex justify-between items-end border-t border-white/10">
                                    <span className="text-lg font-bold">Total</span>
                                    <span className="text-3xl font-black text-secondary">LKR {total.toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                form="checkout-form"
                                disabled={loading}
                                className="w-full mt-10 py-5 bg-primary text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-primary-dark transition-all shadow-xl shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {loading ? (
                                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Confirm Order
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            <p className="mt-6 text-[10px] text-gray-500 text-center uppercase tracking-widest flex items-center justify-center gap-2">
                                <CheckCircle2 className="w-3 h-3 text-secondary" />
                                Secure Checkout Powered by Simulation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
