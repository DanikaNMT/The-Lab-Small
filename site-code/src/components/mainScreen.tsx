import {VersieKnoppen} from "@/components/versieknoppen.tsx";

export function MainScreen() {

    return (
        <div className="flex justify-center items-center gap-2 p-2  w-screen h-screen rounded-xl bg-white shadow-md">
            <VersieKnoppen/>
        </div>
    );
}
