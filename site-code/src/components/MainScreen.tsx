import { JobTable } from "@/components/jobs/jobTable.tsx";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

export function MainScreen() {
    const navigate = useNavigate();

    return (
        <div className="grid grid-rows-[1fr_8fr] grid-cols-[1.5fr_8fr] w-screen h-screen gap-2 border border-orange-50 bg-orange-50">
            <div className="bg-blue-300 flex justify-center items-center p-1">
                <img
                    src="src/assets/logo-KDG.png"
                    alt="Image of a gameboard"
                    className="p-1 h-40 cursor-pointer"
                    onClick={() => navigate('/')}
                />
            </div>

            <div className="bg-gray-300 flex justify-center items-center">
                <h1 className="text-7 font-bold text-gray-900">GPU Lab</h1>
            </div>

            <div className="bg-purple-300 flex justify-center items-center"></div>

            <div className="bg-green-300 flex justify-center pt-10 w-full">
            </div>
        </div>
    );
}
