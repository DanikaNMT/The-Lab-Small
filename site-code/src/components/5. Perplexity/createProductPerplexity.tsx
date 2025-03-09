import { useProducts } from "@/hooks/useProducts";
import { VersieKnoppen } from "@/components/versieknoppen.tsx";
import { useNavigate } from "react-router-dom";
import ProductFormPerplexity from "@/components/5. Perplexity/productFormPerplexity.tsx";

export function CreateProductPerplexity() {
    const { isLoading, isError, products } = useProducts();
    const navigate = useNavigate();

    if (isLoading) return <p className="text-center text-lg text-blue-600">🎠 Loading your toys... Hang tight! 🎠</p>;
    if (isError) return <p className="text-center text-red-500">🚨 Oops! Something went wrong. Try again later! 🚨</p>;
    if (!products) return <p className="text-center text-lg text-gray-600">🧸 No toys found. Let's add some fun! 🧸</p>;

    return (
        <div className="flex flex-col w-screen h-screen gap-4 p-4 bg-gradient-to-b from-blue-100 to-purple-200">
            {/* Top Section with Version Buttons */}
            <VersieKnoppen />

            {/* Banner Section */}
            <div className="w-full bg-yellow-400 text-white py-3 text-center shadow-md rounded-md">
                <h1 className="text-3xl font-bold font-serif drop-shadow-md">🎉 Welcome to Happy Toys! 🎉</h1>
                <p className="text-lg font-medium">Explore, play, and create your toy collection!</p>
            </div>

            {/* Button Section */}
            <div className="flex justify-center gap-6 mt-4">
                <button
                    className="bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110"
                    onClick={() => navigate("/versie3")}
                >
                    🏠 Home
                </button>
                <button
                    className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110"
                    onClick={() => navigate("/versie3/create")}
                >
                    ✨ Add a Toy!
                </button>
            </div>

            {/* Product Flexbox Container */}
            <div className="flex-1 flex flex-wrap justify-center gap-8 mt-6">
                <ProductFormPerplexity/>
            </div>

            {/* Footer Section */}
            <footer className="w-full bg-blue-300 text-white py-4 text-center rounded-md mt-auto">
                <p className="font-semibold">🧸 Happy Toys - Where Fun Lives! 🧸</p>
            </footer>
        </div>
    );
}

export default { CreateProductPerplexity };
