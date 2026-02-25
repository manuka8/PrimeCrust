import React from 'react';
import { ShoppingCart, Star, Flame } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const PizzaCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    {product.isTrending && (
                        <span className="bg-secondary text-dark text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                            <Flame className="w-3 h-3 text-primaryFill fill-primary" />
                            TRENDING
                        </span>
                    )}
                    <span className="bg-white/90 backdrop-blur-sm text-dark text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                        {product.category}
                    </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-2xl flex items-center gap-1 shadow-lg">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold">{product.rating}</span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                    <div className="flex flex-col items-end">
                        {product.spiceLevel === 'High' && <span className="text-[10px] text-primary font-bold">🌶️ SPICY</span>}
                    </div>
                </div>

                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                    <div>
                        <span className="text-xs text-gray-400 block mb-1">Price</span>
                        <span className="text-2xl font-black text-dark">
                            LKR {product.price.toLocaleString()}
                        </span>
                    </div>
                    <button
                        onClick={() => addToCart(product)}
                        className="w-12 h-12 bg-dark text-white rounded-2xl flex items-center justify-center hover:bg-primary transition-all shadow-lg hover:shadow-primary/30 active:scale-95 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300"
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;
