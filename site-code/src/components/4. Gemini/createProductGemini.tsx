import {useProducts} from "@/hooks/useProducts";
import {VersieKnoppen} from "@/components/versieknoppen.tsx";
import {FaHome, FaPlus} from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import ProductFormGemini from "./productFormGemini";

export function ProductScreenGemini() {
    const {isLoading, isError, products} = useProducts();
    const navigate = useNavigate();

    if (isLoading) return <p className="text-center text-lg">Loading products...</p>;
    if (isError) return <p className="text-center text-red-500">Error loading products.</p>;
    if (!products) return <p className="text-center text-lg">No products found.</p>;

    return (
        <div className="flex flex-col min-h-screen w-screen bg-gradient-to-b from-blue-100 to-pink-100">
            <div className="p-4">
                <VersieKnoppen/>
            </div>

            <header className="text-center py-6 relative">

                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative">

                    <div className="flex-1 text-center">
                        <h1 className="text-4xl font-extrabold text-indigo-700 mb-2 animate-bounce">
                            Sparkle Toy Box!
                        </h1>
                        <p className="text-lg text-gray-600">Where every toy tells a story!</p>

                        <div className="flex-1 flex justify-end gap-4">
                            <button
                                className="flex items-center bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-lg"
                                onClick={() => navigate("/versie6")}>
                            <FaHome className="mr-2"/> Home
                            </button>
                            <button
                                className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-lg"
                                onClick={() => navigate("/versie6/create")}>
                                <FaPlus className="mr-2"/> Create
                            </button>
                        </div>
                    </div>
                </div>

            </header>

            <div className="flex flex-wrap justify-center p-4 overflow-y-auto flex-grow">
                <ProductFormGemini/>
            </div>
        </div>
    );
}

export default ProductScreenGemini;