import { useRef, useState } from "react";
import { useDragDrop } from "../components/context/dragDropContext";
import { isTargetOccupied, isTargetValidDropZone } from "../util/dragAndDrop";

// Custom hook for managing rows and columns
export const useRowsAndColumns = () => {
    const rowArr = useRef<HTMLDivElement[]>([]);
    const rowRef = useRef<null | HTMLDivElement>();
    const { draggedElementRef, setDraggedElement } = useDragDrop();
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
        setDraggedElement(e.currentTarget);
    };

    const drop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log("Drop detected");
        const target = e.currentTarget;
        if (isTargetValidDropZone(target))
            if (
                draggedElementRef.current &&
                draggedElementRef.current != null &&
                !isTargetOccupied(target)
            ) {
                target.appendChild(draggedElementRef.current);
                setDraggedElement(null);
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

    const createColumn = () => {
        const div = document.createElement("div");
        div.classList.add("section-column");
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) =>
            drop(e as unknown as React.DragEvent<HTMLDivElement>);
        return div;
    };

    const handleAddColumn = () => {
        const newColumn = createColumn();

        if (rowRef.current?.hasChildNodes()) {
            rowRef.current.appendChild(newColumn);
        } else {
            const secondColumn = createColumn();
            rowRef.current!.append(newColumn, secondColumn);
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
