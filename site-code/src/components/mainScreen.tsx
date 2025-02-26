import { useNavigate } from "react-router-dom"

export function MainScreen() {
    const navigate = useNavigate();

    return (
            <div className="flex bg-gray-300  justify-center items-center  col-span-2 p-2 rounded-xl">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-1 rounded-xl"
                onClick={() => navigate('/versie1')}>
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
    );
}
