import { useStageContext } from "../components/context/stageContext";
import { isTargetOccupied, isTargetValidDropZone } from "../util/dragAndDrop";
import { useSettingsContext } from "../components/context/settingsContext";
import { useSettings } from "./useSettings";
import { useCallback, useEffect } from "react";

// Custom hook for managing rows and columns
export const useRowsAndColumns = () => {
    const {
        rowRef,
        colRef,
        rowArrRef,
        draggedElementRef,
        setRowRef,
        setColRef,
        setRowArrRef,
        setDraggedElement,
    } = useStageContext();

    const { settingsDispatch } = useSettingsContext();
    const { manageSelectionHighlight } = useSettings();

    const drag = (e: React.DragEvent<HTMLElement>) => {
        setDraggedElement(e.currentTarget);
    };

    const drop = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            e.preventDefault();
            e.stopPropagation();

            const target = e.target as HTMLElement;

            // Check if the target is a valid drop zone
            if (isTargetValidDropZone(target) && !isTargetOccupied(target)) {
                if (draggedElementRef.current) {
                    target.appendChild(draggedElementRef.current);
                    setDraggedElement(null);
                }
            }
        },
        [draggedElementRef, setDraggedElement]
    );

    useEffect(() => {
        const container = document.getElementById("cv-main");
        if (!container) return;

        const handleDrop = (e: Event) => {
            drop(e as unknown as React.DragEvent<HTMLElement>);
        };

        const handleDragOver = (e: Event) => {
            e.preventDefault();
        };

        container.addEventListener("drop", handleDrop);
        container.addEventListener("dragover", handleDragOver);

        return () => {
            container.removeEventListener("drop", handleDrop);
            container.removeEventListener("dragover", handleDragOver);
        };
    }, [drop]);

    // Helper function to update button states
    const bttnDisableStateHelper = (
        action:
            | "rowRemoveDisable"
            | "rowRemoveEnable"
            | "colRemoveDisable"
            | "colRemoveEnable"
    ) => {
        switch (action) {
            case "rowRemoveDisable":
                settingsDispatch({
                    value: {
                        isRemoveRowBttnDisabled: true,
                    },
                });
                break;

            case "rowRemoveEnable":
                settingsDispatch({
                    value: {
                        isRemoveRowBttnDisabled: false,
                    },
                });
                break;

            case "colRemoveDisable":
                settingsDispatch({
                    value: {
                        isRemoveColBttnDisabled: true,
                    },
                });

                break;

            case "colRemoveEnable":
                settingsDispatch({
                    value: {
                        isRemoveColBttnDisabled: false,
                    },
                });
                break;
        }
    };

    const handleAddRow = () => {
        const newRow = createRowNode();
        const currentRow = rowRef.current;

        if (currentRow && currentRow.parentNode) {
            currentRow.parentNode?.insertBefore(newRow, currentRow.nextSibling);
            const currentIndex = rowArrRef.current!.indexOf(currentRow);
            const updatedRowArr = [
                ...rowArrRef.current!.slice(0, currentIndex + 1),
                newRow,
                ...rowArrRef.current!.slice(currentIndex + 1),
            ];

            setRowArrRef(updatedRowArr);
        } else {
            document.getElementById("cv-main")!.appendChild(newRow);
            setRowArrRef([...(rowArrRef.current || []), newRow]);
        }

        setRowRef(newRow);
        handleAddColumn();
    };

    const handleAddColumn = () => {
        const newColumn = createColNode();
        const currentRow = rowRef.current;

        if (currentRow) {
            const currentCol = colRef.current;

            if (currentCol && currentRow.contains(currentCol)) {
                currentRow.insertBefore(newColumn, currentCol.nextSibling);
            } else {
                currentRow.appendChild(newColumn);
            }

            setColRef(newColumn);
            handleCellSelection(newColumn);
        }
    };

    const handleRemoveRow = () => {
        if (
            rowRef.current &&
            rowArrRef.current &&
            rowArrRef.current.length !== 1
        ) {
            document.getElementById("cv-main")?.removeChild(rowRef.current);
            setRowArrRef(
                rowArrRef.current.filter((row) => row !== rowRef.current)
            );
            setRowRef(rowArrRef.current[rowArrRef.current.length - 1]);
            handleCellSelection(
                rowRef.current.childNodes[
                    rowRef.current.childNodes.length - 1
                ] as HTMLElement
            );
        }
    };

    const handleRemoveColumn = () => {
        if (rowRef.current && colRef.current) {
            const cols = rowRef.current.childNodes;
            if (cols.length !== 0) rowRef.current.removeChild(colRef.current);

            handleCellSelection(
                rowRef.current.childNodes[
                    rowRef.current.childNodes.length - 1
                ] as HTMLElement
            );
        }
    };

    const createRowNode = () => {
        const div = document.createElement("div");
        div.classList.add("section-row", "section-grid", "grid-visible");
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) => drop(e as unknown as React.DragEvent<HTMLElement>);
        return div;
    };

    const createColNode = () => {
        const div = document.createElement("div");
        div.classList.add("section-col", "section-grid", "grid-visible");
        div.onclick = () => handleCellSelection(div);
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) => drop(e as unknown as React.DragEvent<HTMLElement>);
        return div;
    };

    const handleCellSelection = (elem: HTMLElement) => {
        setColRef(elem);
        const parent = elem.parentElement;
        setRowRef(parent);
        manageSelectionHighlight();
        controlBttnDisable();
    };

    const controlBttnDisable = () => {
        // Enable or disable row removal based on row count
        if (rowArrRef.current && rowArrRef.current.length >= 2) {
            bttnDisableStateHelper("rowRemoveEnable");
        } else {
            bttnDisableStateHelper("rowRemoveDisable");
        }

        // Enable or disable column removal based on column count in the selected row
        if (rowRef.current) {
            const cols = rowRef.current.childNodes;
            if (cols.length <= 1) {
                bttnDisableStateHelper("colRemoveDisable");
            } else {
                bttnDisableStateHelper("colRemoveEnable");
            }
        }
    };

    return {
        handleAddRow,
        handleAddColumn,
        handleRemoveRow,
        handleRemoveColumn,
        drag,
        drop,
    };
};
