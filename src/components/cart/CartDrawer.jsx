import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-xl">
                                    <ShoppingCart className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-dark">Your Cart</h2>
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{cart.length} Items</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-400" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                        <ShoppingCart className="w-10 h-10 text-gray-200" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-2">Cart is empty</h3>
                                    <p className="text-gray-400 text-sm max-w-[200px] mb-8">Looks like you haven't added anything to your cart yet.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="px-8 py-3 bg-dark text-white font-bold rounded-2xl hover:bg-primary transition-all"
                                    >
                                        Start Ordering
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        className="flex gap-4 group"
                                    >
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start mb-1 gap-2">
                                                <h4 className="font-bold text-dark truncate leading-tight">{item.name}</h4>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-1 text-gray-300 hover:text-primary transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-xs text-gray-400 mb-3">{item.category}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center bg-gray-50 rounded-xl border border-gray-100 p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-lg transition-all text-gray-500"
                                                    >
                                                        <Minus className="w-3.5 h-3.5" />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-bold text-dark">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-lg transition-all text-gray-500"
                                                    >
                                                        <Plus className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                                <span className="font-bold text-dark text-sm">
                                                    LKR {(item.price * item.quantity).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-6 border-t border-gray-100 bg-white space-y-4 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
                                <div className="flex justify-between items-center px-2">
                                    <span className="text-gray-400 font-medium">Subtotal</span>
                                    <span className="text-2xl font-black text-dark">LKR {cartTotal.toLocaleString()}</span>
                                </div>
                                <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest px-4">
                                    Delivery charges and taxes calculated at checkout
                                </p>
                                <Link
                                    to="/checkout"
                                    onClick={() => setIsCartOpen(false)}
                                    className="w-full py-4 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 group"
                                >
                                    Proceed to Checkout
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
