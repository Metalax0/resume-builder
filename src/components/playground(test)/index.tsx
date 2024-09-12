import { useRef } from "react";
import "./style.css";

export const Playground = () => {
    const rowRef = useRef<null | HTMLDivElement>();
    const dragElemRef = useRef<null | HTMLDivElement>();

    const handleAddRow = () => {
        const div = document.createElement("div");
        div.classList.add("section-row");
        div.addEventListener("click", () => handleRowSelected(div));
        div.addEventListener("dragover", (e) => e.preventDefault());
        div.addEventListener("drop", (e) => drop(e));

        document.getElementById("cv-main")!.appendChild(div);
        rowRef.current = div;
    };

    const handleAddColumn = () => {
        const div = document.createElement("div");
        div.classList.add("section-column");
        div.addEventListener("dragover", (e) => e.preventDefault());
        div.addEventListener("drop", (e) => drop(e));

        // adds two columns if adding column for the first time
        if (rowRef.current?.hasChildNodes()) rowRef.current!.appendChild(div);
        else {
            const div2 = document.createElement("div");
            div2.classList.add("section-column");
            rowRef.current!.append(div, div2);
        }
    };

    const handleRowSelected = (row: HTMLDivElement) => {
        rowRef.current!.classList.remove("active-col");
        rowRef.current = row;
        rowRef.current!.classList.add("active-col");
    };

    const drag = (e) => {
        dragElemRef.current = e.target;
    };

    const drop = (e) => {
        e.preventDefault();
        if (
            e.target.classList.contains("section-row") ||
            e.target.classList.contains("section-column") ||
            e.target.classList.contains("section-elements-collection")
        ) {
            e.target.appendChild(dragElemRef.current);
        }
    };

    return (
        <div className="flex flex-col justify-center gap-5 items-center px-5 w-full h-full">
            <h1> PlayGround (Test) </h1>

            <div className=" flex gap-5 w-full h-[70%]">
                <div className="flex-[2]" id="cv-main" />
                <div
                    className="section-elements-collection flex-1 bg-red-500 p-10 flex flex-col gap-2"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => drop(e)}
                >
                    <strong className="text-black">
                        Drag and drop them inside rows and columns
                    </strong>
                    <p
                        draggable
                        onDragStart={(e) => drag(e)}
                        className="flex justify-center items-center flex-[1] bg-green-400 p-3 text-center w-full h-full text-black border-2"
                    >
                        About Me
                    </p>

                    <p
                        draggable
                        onDragStart={(e) => drag(e)}
                        className="flex justify-center items-center flex-[1] bg-green-400 p-3 text-center w-full h-full text-black border-2"
                    >
                        Education
                    </p>

                    <p
                        draggable
                        onDragStart={(e) => drag(e)}
                        className="flex justify-center items-center flex-[1] bg-green-400 p-3 text-center w-full h-full text-black border-2"
                    >
                        Experience
                    </p>
                </div>
            </div>

            <div className="flex gap-5">
                <button
                    className="bg-blue-500 py-3 px-10 rounded-md"
                    onClick={handleAddRow}
                >
                    Add Row
                </button>

                <button
                    className="bg-green-500 py-3 px-10 rounded-md"
                    onClick={handleAddColumn}
                >
                    Add Column
                </button>
            </div>
        </div>
    );
};
