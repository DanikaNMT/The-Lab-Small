import React from 'react';
import { Product } from '@/models/Product';

interface ProductCardProps {
    product: Product;
    onDelete: (id: string) => void;
}

const ProductCardClaude: React.FC<ProductCardProps> = ({ product, onDelete }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
                <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-3">
                    <span className="text-purple-600 font-bold text-lg">${product.price.toFixed(2)}</span>
                    <span className="text-gray-600">Stock: {product.amount}</span>
                </div>
                <button
                    onClick={() => onDelete(product.id.toString())}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCardClaude;