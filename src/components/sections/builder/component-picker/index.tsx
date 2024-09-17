import { ComponentPickerType } from "../../../../types/component-picker";

export const ComponentPicker = ({ drag, drop }: ComponentPickerType) => {
    return (
        <div className="flex flex-1 gap-5 ">
            <div
                className="section-elements-collection flex-1 bg-red-500 p-10 flex flex-col gap-2"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => drop(e)}
            >
                <strong className="text-black">
                    Drag and drop them inside rows & columns
                </strong>

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
        </div>
    );
};
