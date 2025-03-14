import { useNavigate } from "react-router-dom";
import { Home, Plus } from "lucide-react";
import storeLogo from "@/assets/images/store_logo_handmatig.png";
import {ProductOverviewHandmatig} from "@/components/1. Handmatig/productOverviewHandmatig.tsx";
import {VersieKnoppen} from "@/components/versieknoppen.tsx";

export function ProductScreenHandmatig() {
    const navigate = useNavigate();

    return (
        <div className="grid grid-rows-[auto_1fr_8fr] grid-cols-[1.5fr_8fr] w-screen h-screen gap-2 p-2 border border-gray-200 bg-gray-100">
            {/* Full-width top row */}
            <VersieKnoppen />


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
                    onClick={() => navigate('/versie4')}>
                    <Home className="w-5 h-5 text-gray-800" />
                    Home
                </button>

                <button
                    className="bg-blue-300 hover:bg-blue-200 text-gray-800 font-bold py-2 px-4 flex items-center justify-center gap-3 w-full border-blue-400 hover:border-blue-300 rounded-xl"
                    onClick={() => navigate('/versie4/create')}>
                    <Plus className="w-5 h-5  text-gray-800" />
                    Create
                </button>
            </div>

            {/* Main content */}
            <div className="bg-yellow-100 flex justify-center w-full rounded-xl overflow-hidden">
                <div className="w-full h-full overflow-y-auto p-4  scrollbar-hide">
                    <ProductOverviewHandmatig />
                </div>
            </div>
        </div>
    );
}
