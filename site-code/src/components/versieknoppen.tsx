import {useNavigate} from "react-router-dom";

export function VersieKnoppen(){

    const navigate = useNavigate();
    return(

        <div className="flex col-span-2 p-2 rounded-xl">
            <div className="flex justify-start gap-2 p-2 ">
                {[1, 2, 3, 4, 5, 6].map((version) => (
                    <button
                        key={version}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-all"
                        onClick={() => navigate(`/versie${version}`)}
                    >
                        versie {version}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default { VersieKnoppen };