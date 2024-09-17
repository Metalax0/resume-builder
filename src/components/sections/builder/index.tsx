import { useEffect, useRef } from "react";
import { ComponentPicker } from "./component-picker";
import { Button } from "../../atoms/button";
import { BttnTypeEnum } from "../../../types/button";
import { Main } from "./main";
import { Header } from "./header";
import "./style.css";

export const Builder = () => {
    useEffect(() => {
        handleAddRow();
    }, []);
    const rowRef = useRef<null | HTMLDivElement>();
    const dragElemRef = useRef<null | HTMLDivElement>();
    const rowArr: HTMLDivElement[] = [];

    const handleAddRow = () => {
        const div = document.createElement("div");
        div.classList.add("section-row");
        div.addEventListener("dragover", (e) => e.preventDefault());
        div.addEventListener("drop", (e) => drop(e));
        div.addEventListener("click", () => handleRowSelected(div));
        document.getElementById("cv-main")!.appendChild(div);
        rowArr.push(div);
        rowRef.current = div;
        handleRowSelected(div);
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

    const drag = (e: any) => {
        dragElemRef.current = e.target;
    };

    const drop = (e: any) => {
        e.preventDefault();
        if (
            e.target.classList.contains("section-row") ||
            e.target.classList.contains("section-column") ||
            e.target.classList.contains("section-elements-collection")
        ) {
            e.target.appendChild(dragElemRef.current);
        }
    };

    // Tracks which row is selected (for actions like add/delete columns and delete rows)
    const handleRowSelected = (row: HTMLDivElement) => {
        rowArr.map((row) => row.classList.remove("active-row"));
        rowRef.current = row;
        rowRef.current!.classList.add("active-row");
    };

    return (
        <div className="flex flex-col justify-center gap-5 items-center px-5 w-full h-full">
            {/* Title and sub text */}
            <Header />

            {/* CV-Builder core */}
            <div className="flex gap-5 w-full h-[70%]">
                <Main />
                <ComponentPicker drag={drag} drop={drop} />
            </div>

            {/* Row/Column button wrapper */}
            <div className="flex gap-5">
                <Button
                    bttnName={"Add Row"}
                    bttnType={BttnTypeEnum.primary}
                    bttnAction={handleAddRow}
                />
                <Button
                    bttnName={"Add Column"}
                    bttnType={BttnTypeEnum.secondary}
                    bttnAction={handleAddColumn}
                />
            </div>
        </div>
    );
};
