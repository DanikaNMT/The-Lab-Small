// ProductCardDeepseek.tsx
import React from 'react';
import { Product } from '@/models/Product';
import { useProducts } from '@/hooks/useProducts';

interface ProductCardProps {
    product: Product;
    className?: string;
}

const ProductCardDeepseek: React.FC<ProductCardProps> = ({ product, className }) => {
    const { deleteProduct } = useProducts();

    const handleAddToCart = () => {
        deleteProduct(product.id.toString());
    };

    return (
        <div className={`h-full bg-white border-2 border-pink-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group hover:border-purple-100 ${className || ''}`}>
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden flex-shrink-0 rounded-t-xl">
                <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="w-full h-full rounded-3xl object-contain transform group-hover:scale-110 transition-transform duration-300 ease-out rounded-3xl"
                />
                {/* Stock Ribbon */}
                {product.amount > 0 && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
                        {product.amount} left!
                    </div>
                )}
            </div>

            {/* Product Details */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {product.name}
                </h3>

                {/* Price and Add to Cart Button */}
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">
                        ${product.price.toFixed(2)}
                    </span>
                    <button
                        className="bg-gradient-to-br from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl
                                 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-lg
                                 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform active:scale-95"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCardDeepseek;