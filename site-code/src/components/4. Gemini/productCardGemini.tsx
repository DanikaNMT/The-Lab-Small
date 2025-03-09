import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/models/Product";
import { BsCartFill, BsStarFill } from "react-icons/bs";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { deleteProduct } = useProducts();

    const handleAddToCart = () => {
        deleteProduct(product.id.toString());
    };

    return (
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg overflow-hidden m-4 w-72 transform transition-transform hover:scale-105">
            {/* Image Section - Brighter and More Engaging */}
            <div className="relative">
                <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="w-full h-60 object-cover rounded-t-2xl" // Rounded top for a softer look
                />
                {product.amount === 0 && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center rounded-t-2xl">
                        <span className="text-white text-xl font-bold">Oops! All Gone!</span>
                    </div>
                )}
                {product.amount > 0 && (
                    <div className="absolute top-2 right-2 bg-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Yay! We Have Some!
                    </div>
                )}
            </div>

            {/* Product Details Section - Kid-Friendly Language and Visuals */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
                    {product.name}
                </h2>

                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                        <BsStarFill className="h-5 w-5 text-yellow-500 mr-1" />
                        <span className="text-gray-600">Left: {product.amount}</span>
                    </div>
                    <span className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</span>
                </div>

                {product.amount > 0 && (
                    <button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-full w-full flex items-center justify-center"
                        onClick={handleAddToCart}
                    >
                        <BsCartFill className="h-5 w-5 mr-2" />
                        Get It Now!
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;