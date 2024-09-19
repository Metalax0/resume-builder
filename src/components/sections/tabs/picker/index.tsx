import { PickerTabType } from "../../../../types/tabs";

export const PickerTab = ({ drag, drop }: PickerTabType) => {
    return (
        <div
            className="section-elements-collection flex-1 flex flex-col gap-2"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => drop(e)}
        >
            <strong className="text-black">Drag & drop to place items</strong>

            <p
                draggable
                onDragStart={(e) => drag(e)}
                className="flex justify-center items-center flex-[1] bg-green-400 text-center w-full h-full text-black border-black border-2"
            >
                About Me
            </p>

            <p
                draggable
                onDragStart={(e) => drag(e)}
                className="flex justify-center items-center flex-[1] bg-green-400 text-center w-full h-full text-black border-black border-2"
            >
                Education
            </p>

            <p
                draggable
                onDragStart={(e) => drag(e)}
                className="flex justify-center items-center flex-[1] bg-green-400 text-center w-full h-full text-black border-black border-2"
            >
                Experience
            </p>
        </div>
    );
};
