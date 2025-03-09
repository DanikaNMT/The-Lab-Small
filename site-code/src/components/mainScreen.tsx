import { useNavigate } from "react-router-dom"

export function MainScreen() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center gap-2 p-2  w-screen h-screen rounded-xl bg-white shadow-md">
            {[1, 2, 3, 4, 5].map((version) => (
                <button
                    key={version}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-all"
                    onClick={() => navigate(`/versie${version}`)}
                >
                    versie {version}
                </button>
            ))}
        </div>
    );
}
