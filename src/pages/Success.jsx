import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Home, Package, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    const orderId = "PC-" + Math.floor(100000 + Math.random() * 900000);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-4xl font-black text-dark mb-4">Order Confirmed!</h1>
                    <p className="text-gray-500 mb-8 px-4">
                        Thank you for choosing PrimeCrust. Your order <span className="text-primary font-bold">#{orderId}</span> is being prepared and will be with you shortly.
                    </p>

                    <div className="bg-gray-50 rounded-3xl p-6 mb-10 space-y-4">
                        <div className="flex items-center gap-4 text-left">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0">
                                <Package className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-dark text-sm">On its way</h4>
                                <p className="text-xs text-gray-400">Estimated delivery: 45-60 mins</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="w-full py-4 bg-dark text-white font-bold rounded-2xl hover:bg-primary transition-all flex items-center justify-center gap-3 group"
                        >
                            <Home className="w-5 h-5" />
                            Return to Home
                        </button>
                        <button
                            className="w-full py-4 bg-gray-100 text-dark font-bold rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center gap-3"
                        >
                            Track Order
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Success;
