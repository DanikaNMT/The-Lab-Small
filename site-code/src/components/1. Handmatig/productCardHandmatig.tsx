import { useProducts } from "@/hooks/useProducts";
import {Product} from "@/models/Product.ts";
import { ShoppingCart } from "lucide-react";


interface ProductCardProps {
    product: Product
}

export function ProductCardHandmatig({product}: ProductCardProps) {
    const { deleteProduct } = useProducts();

    const handleAddToCart = () => {
        deleteProduct(product.id.toString());
    };


    return (
        <div className="w-72 flex flex-col rounded-xl overflow-hidden shadow-lg bg-orange-200 transition-transform hover:scale-105">
            <img className="h-64 p-1 w-full object-cover rounded-xl" src={product.imgUrl} alt={`image of ${product.name}`} />
            <div className="flex flex-col flex-grow px-6 pb-4 pt-1">
                <div className="font-bold text-xl mb-2 text-gray-800">{product.name}</div>
                <p className="text-gray-700 text-base">Price: € {product.price}</p>
                <p className="text-gray-700 text-base">Amount {product.amount}</p>
                <button
                    onClick={handleAddToCart}
                    className="bg-orange-300 border border-orange-400/50 hover:bg-orange-400 hover:border-orange-500/50
               text-white font-bold py-2 px-4 rounded w-full mt-4 flex items-center justify-center gap-2"
                >
                    <ShoppingCart className="w-6 h-6 text-white" />
                    Buy Product
                </button>

            </div>

        </div>
    );

}
