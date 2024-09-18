import { useRef, useState } from "react";

// Custom hook for managing rows and columns
export const useRowsAndColumns = () => {
    const rowArr = useRef<HTMLDivElement[]>([]);
    const rowRef = useRef<null | HTMLDivElement>();
    const dragElemRef = useRef<null | HTMLDivElement>();
    const [bttnDisabled, setBttnDisabled] = useState({
        rowRemove: true,
        colRemove: true,
    });

    // Helper function to update button states
    const bttnDisableStateHelper = (
        action:
            | "rowRemoveDisable"
            | "rowRemoveEnable"
            | "colRemoveDisable"
            | "colRemoveEnable"
    ) => {
        setBttnDisabled((prev) => ({
            rowRemove:
                action === "rowRemoveDisable"
                    ? true
                    : action === "rowRemoveEnable"
                    ? false
                    : prev.rowRemove,
            colRemove:
                action === "colRemoveDisable"
                    ? true
                    : action === "colRemoveEnable"
                    ? false
                    : prev.colRemove,
        }));
    };

    const drag = (e: React.DragEvent<HTMLDivElement>) => {
        dragElemRef.current = e.currentTarget;
    };

    const drop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.currentTarget;
        if (
            target.classList.contains("section-row") ||
            target.classList.contains("section-column") ||
            target.classList.contains("section-elements-collection")
        ) {
            if (dragElemRef.current) target.appendChild(dragElemRef.current);
        }
    };

    const handleAddRow = () => {
        const div = document.createElement("div");
        div.classList.add("section-row");
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) =>
            drop(e as unknown as React.DragEvent<HTMLDivElement>);
        div.onclick = () => handleRowSelected(div);
        document.getElementById("cv-main")!.appendChild(div);
        rowArr.current.push(div);

        rowRef.current = div;
        handleRowSelected(div);
        controlBttnDisable();
    };

    const handleAddColumn = () => {
        const div = document.createElement("div");
        div.classList.add("section-column");
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) =>
            drop(e as unknown as React.DragEvent<HTMLDivElement>);

        if (rowRef.current?.hasChildNodes()) rowRef.current!.appendChild(div);
        else {
            const div2 = document.createElement("div");
            div2.classList.add("section-column");
            rowRef.current!.append(div, div2);
        }
        controlBttnDisable();
    };

    const handleRemoveRow = () => {
        if (rowRef.current && rowArr.current.length !== 1) {
            document.getElementById("cv-main")?.removeChild(rowRef.current);
            rowArr.current = rowArr.current.filter(
                (row) => row !== rowRef.current
            );
            rowRef.current = rowArr.current[rowArr.current.length - 1];
            handleRowSelected(rowRef.current);
        }
        controlBttnDisable();
    };

    const handleRemoveColumn = () => {
        if (rowRef.current) {
            const cols = rowRef.current.childNodes;
            if (cols.length === 2) {
                rowRef.current.removeChild(cols[cols.length - 1]);
                rowRef.current.removeChild(cols[cols.length - 1]);
            } else if (cols.length !== 0) {
                rowRef.current.removeChild(cols[cols.length - 1]);
            }
        }
        controlBttnDisable();
    };

    const handleRowSelected = (row: HTMLDivElement) => {
        rowArr.current.forEach((r) => r.classList.remove("active-row"));
        rowRef.current = row;
        rowRef.current!.classList.add("active-row");
        controlBttnDisable();
    };

    const controlBttnDisable = () => {
        if (rowArr.current.length >= 2)
            bttnDisableStateHelper("rowRemoveEnable");
        else bttnDisableStateHelper("rowRemoveDisable");

        if (rowRef.current) {
            const cols = rowRef.current.childNodes;
            if (cols.length <= 1) bttnDisableStateHelper("colRemoveDisable");
            else bttnDisableStateHelper("colRemoveEnable");
        }
    };

    return {
        bttnDisabled,
        handleAddRow,
        handleAddColumn,
        handleRemoveRow,
        handleRemoveColumn,
        drag,
        drop,
    };
};
