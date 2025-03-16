import { useNavigate } from "react-router-dom";
import {VersieKnoppen} from "@/components/versieknoppen.tsx";
import storeLogo from "@/assets/images/store_logo_handmatig.png";
import {Home, Plus} from "lucide-react";
import ProductFormHandmatig from "@/components/1. Handmatig/productFormHandmatig.tsx";

export function CreateProductHandmatig() {
    const navigate = useNavigate();

    return (
        <div className="w-screen min-h-screen bg-gray-100 p-2 flex flex-col">
            {/* Version buttons - full width on all screens */}
            <div className="w-full mb-2">
                <VersieKnoppen />
            </div>

            {/* Layout container to ensure full height */}
            <div className="flex flex-col md:grid md:grid-cols-[1.5fr_8fr] gap-2 flex-grow">
                {/* Left column (sidebar) on desktop / Top section on mobile */}
                <div className="flex flex-col gap-2 flex-grow">
                    {/* Logo */}
                    <div className="bg-blue-200 flex justify-center items-center p-1 rounded-xl">
                        <img
                            src={storeLogo}
                            alt="Logo of the store"
                            className="p-1 m-1 h-20 md:h-40 cursor-pointer"
                            onClick={() => navigate('/')}
                        />
                    </div>

                    {/* Navigation buttons */}
                    <div className="bg-green-200 flex flex-col p-3 md:p-5 rounded-xl space-y-2 md:space-y-4 flex-grow">
                        <button
                            className="bg-blue-300 hover:bg-blue-200 text-gray-800 font-bold py-2 px-4 flex items-center justify-center gap-3 w-full border-blue-400 hover:border-blue-300 rounded-xl"
                            onClick={() => navigate('/version4')}>
                            <Home className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                            Home
                        </button>

                        <button
                            className="bg-blue-300 hover:bg-blue-200 text-gray-800 font-bold py-2 px-4 flex items-center justify-center gap-3 w-full border-blue-400 hover:border-blue-300 rounded-xl"
                            onClick={() => navigate('/version4/create')}>
                            <Plus className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                            Create
                        </button>
                    </div>
                </div>

                {/* Right column on desktop / Bottom section on mobile */}
                <div className="flex flex-col gap-2 flex-grow">
                    {/* Header */}
                    <div className="bg-purple-200 flex justify-center items-center p-2 rounded-xl">
                        <h1 className="text-2xl m-14 md:text-5xl font-bold text-gray-900">The snuggle shop</h1>
                    </div>

                    {/* Products */}
                    <div className="bg-yellow-100 flex justify-center w-full rounded-xl overflow-hidden flex-grow">
                        <div className="w-full h-full max-h-full overflow-y-auto p-2 md:p-4 scrollbar-hide">
                            <ProductFormHandmatig />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProductHandmatig
