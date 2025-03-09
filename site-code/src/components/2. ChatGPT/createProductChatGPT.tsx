import { useNavigate } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { VersieKnoppen } from "@/components/versieknoppen.tsx";
import ProductFormChatGPT from "./productFormChatGPT";

export function createProductChatGPT() {
    const navigate = useNavigate();
    const { isLoading, isError, products } = useProducts();

    if (isLoading) return <p className="text-center text-lg text-blue-600 font-bold">Loading awesome toys...</p>;
    if (isError) return <p className="text-center text-red-500 font-bold">Oops! Something went wrong.</p>;
    if (!products) return <p className="text-center text-lg text-gray-700">No toys available right now.</p>;

    return (
        <div className="flex flex-col w-screen h-screen gap-4 p-6 bg-gradient-to-br from-yellow-200 to-pink-300">
            {/* Navigatiebalk */}
            <VersieKnoppen />

            {/* Producten flex layout */}
            <div className="">
                {/* Header */}
                <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-xl mb-6 border border-yellow-300">
                    <h1 className="text-4xl font-extrabold text-purple-600">🎉 Toy Wonderland 🎈</h1>
                    <div className="flex gap-4">
                        <button onClick={() => navigate("/versie1")} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-xl transition-all shadow-md">
                            🏠 Home
                        </button>
                        <button onClick={() => navigate("/versie1/create")} className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-xl transition-all shadow-md">
                            ✨ Create
                        </button>
                    </div>
                </div>

                {/* Flexbox lay-out voor producten */}
                <div className="flex flex-wrap justify-center gap-6 p-6 bg-white shadow-xl rounded-3xl border border-pink-300">
                    <ProductFormChatGPT/>
                </div>
            </div>
        </div>
    );
}

export default createProductChatGPT;
