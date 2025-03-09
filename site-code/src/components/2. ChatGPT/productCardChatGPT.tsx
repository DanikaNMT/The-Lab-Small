import React from "react";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/models/Product.ts";
import { useProducts } from "@/hooks/useProducts.ts";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { deleteProduct } = useProducts();

    const handleAddToCart = () => {
        deleteProduct(product.id.toString());
    };

    return (
        <div className="p-6 rounded-3xl shadow-2xl bg-gradient-to-br from-blue-300 to-purple-400 w-80 border border-gray-200 flex flex-col items-center transform transition hover:scale-105">
            <div className="relative w-full">
                <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-2xl bg-white p-2"
                />
                {product.amount === 0 && (
                    <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                        Oops! Gone!
                    </span>
                )}
            </div>
            <div className="w-full text-center mt-4 space-y-2 p-4 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-extrabold text-pink-600">{product.name}</h2>
                <p className="text-xl text-yellow-500 font-bold">${product.price.toFixed(2)}</p>
                <p className="text-md text-gray-700">Amount: {product.amount}</p>
            </div>
            <button
                onClick={handleAddToCart}
                className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50 transition-all transform hover:scale-110"
                disabled={product.amount === 0}
            >
                <ShoppingCart size={20} /> {product.amount > 0 ? "Yay! Add to Cart" : "All Gone!"}
            </button>
        </div>
    );
};

export default ProductCard;
