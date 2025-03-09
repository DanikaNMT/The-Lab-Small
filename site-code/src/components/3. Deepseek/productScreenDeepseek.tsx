// ProductScreenDeepseek.tsx
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import ProductCardDeepseek from "@/components/3. Deepseek/ProductCardDeepseek.tsx";
import { FaHome, FaPlus } from "react-icons/fa";
import {VersieKnoppen} from "@/components/versieknoppen.tsx";

export function ProductScreenDeepseek() {
    const navigate = useNavigate();
    const { isLoading, isError, products } = useProducts();

    if (isLoading) return <div className="text-center text-lg p-8"><div className="animate-bounce text-4xl">🎠</div>Loading magical toys...</div>;
    if (isError) return <div className="text-center p-8"><div className="text-4xl">😢</div><p className="text-red-500 mt-2">Oops! Toys are hiding!</p></div>;
    if (!products) return <div className="text-center p-8"><div className="text-4xl">🧸</div><p className="mt-2">No toys found in the magic box!</p></div>;

    return (
        <div className="flex flex-col w-screen h-screen bg-gradient-to-b from-sky-100 to-pink-100">
            {/* Version Buttons (unchanged) */}
            <VersieKnoppen />
            {/* Playful Header */}
            <header className="text-center py-6 bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-repeat bg-[length:100px_100px]"
                     style={{backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+")'}} />
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative">
                    <div className="flex-1" />

                    <div className="flex-1 text-center">
                        <h1 className="text-5xl font-bold text-white font-bubblegum drop-shadow-md [text-shadow:_2px_2px_2px_rgb(255_105_180_/_40%)]">
                            ToyVerse 🪅
                        </h1>
                        <p className="text-xl text-white mt-3 animate-pulse">
                            Where Magic Lives! 🌈
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex-1 flex justify-end gap-4">
                        <button
                            className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-2xl
                                      transition-all duration-300 text-lg flex items-center gap-2
                                      shadow-lg hover:shadow-xl hover:scale-105 border-2 border-white"
                            onClick={() => navigate("/versie5")}
                        >
                            <FaHome className="text-xl" />
                            Home 🏡
                        </button>
                        <button
                            className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-2xl
                                      transition-all duration-300 text-lg flex items-center gap-2
                                      shadow-lg hover:shadow-xl hover:scale-105 border-2 border-white"
                            onClick={() => navigate("/versie5/create/")}
                        >
                            <FaPlus className="text-xl" />
                            Create ✨
                        </button>
                    </div>
                </div>
            </header>

            {/* Product Cards Container */}
            <div className="flex-1 p-5 overflow-y-auto">
                <div className="flex flex-row flex-wrap gap-6 justify-center">
                    {products.map((product) => (
                        // In ProductScreenDeepseek.tsx
                        <div key={product.id} className="w-80 transform hover:-rotate-1 transition-transform">
                            <ProductCardDeepseek
                                product={product}
                                className="rounded-3xl border-4 border-pink-200 hover:border-purple-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="fixed bottom-0 right-0 -z-10">
                <div className="w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply opacity-30 blur-xl animate-float"></div>
            </div>
        </div>
    );
}

export default ProductScreenDeepseek;