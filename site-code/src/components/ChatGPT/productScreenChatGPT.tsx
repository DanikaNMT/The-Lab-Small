import { useNavigate } from "react-router-dom";
import { Home, Plus } from "lucide-react";
import storeLogo from "@/assets/images/store_logo_handmatig.png";
import {ProductOverviewHandmatig} from "@/components/Handmatig/productOverviewHandmatig.tsx";

export function ProductScreenChatGPT() {
    const navigate = useNavigate();

    return (
        <div className="grid grid-rows-[auto_1fr_8fr] grid-cols-[1.5fr_8fr] w-screen h-screen gap-2 p-2 border border-gray-200 bg-gray-100">
            {/* Full-width top row */}
            <div className="flex bg-gray-300  col-span-2 p-2 rounded-xl">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-1 rounded-xl">
                    versie 1
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-1 rounded-xl">
                    versie 2
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-1 rounded-xl">
                    versie 3
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-1 rounded-xl">
                    versie 4
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-1 rounded-xl">
                    versie 5
                </button>
            </div>

            {/* Sidebar */}
            <div className="bg-blue-200 flex justify-center items-center p-1 rounded-xl">
                <img
                    src={storeLogo}
                    alt="Logo of the store"
                    className="p-1 h-40 cursor-pointer"
                    onClick={() => navigate('/')}
                />
            </div>

            {/* Main header */}
            <div className="bg-purple-200 flex justify-center items-center rounded-xl">
                <h1 className="text-5xl font-bold text-gray-900">The snuggle shop</h1>
            </div>

            {/* Sidebar content */}
            <div className="bg-green-200 flex flex-col p-5 rounded-xl space-y-4">
                <button
                    className="bg-blue-300 hover:bg-blue-200 text-gray-800 font-bold pt-2 px-4 flex items-center justify-center gap-3 w-full border-blue-400 hover:border-blue-300 rounded-xl"
                    onClick={() => navigate('/')}>
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                </button>

                <button
                    className="bg-blue-300 hover:bg-blue-200 text-gray-800 font-bold py-2 px-4 flex items-center justify-center gap-3 w-full border-blue-400 hover:border-blue-300 rounded-xl"
                    onClick={() => navigate('/create')}>
                    <Plus className="w-5 h-5" />
                    <span>Add product</span>
                </button>
            </div>

            {/* Main content */}
            <div className="bg-yellow-100 flex justify-center w-full rounded-xl overflow-hidden">
                <div className="w-full h-full overflow-y-auto p-4">
                    <ProductOverviewHandmatig />
                </div>
            </div>
        </div>
    );
}
