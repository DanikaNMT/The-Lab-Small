import { useNavigate } from "react-router-dom";

export function VersieKnoppen() {
    const navigate = useNavigate();
    return (
        <div className="flex col-span-2 p-2 rounded-xl">
            <div className="flex flex-wrap justify-start gap-2 p-2">
                {[1, 2, 3, 4, 5, 6].map((version) => (
                    <button
                        key={version}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base rounded-xl transition-all"
                        onClick={() => navigate(`/version${version}`)}
                    >
                        version {version}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default { VersieKnoppen };