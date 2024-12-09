import { useStageContext } from "../components/context/stageContext";
import { isTargetOccupied, isTargetValidDropZone } from "../util/dragAndDrop";
import { useSettingsContext } from "../components/context/settingsContext";
import { useSettings } from "./useSettings";
import { useCallback, useEffect, useRef } from "react";
import { updateMinHeightOnDrop } from "../util/interceptDropEvent";

// Custom hook for managing rows and columns
export const useRowsAndColumns = () => {
    const {
        rowRef,
        colRef,
        rowArrRef,
        draggedElementRef,
        setSelectedRef,
        setRowRef,
        setColRef,
        setRowArrRef,
        setDraggedElement,
    } = useStageContext();

    const { settingsState, settingsDispatch } = useSettingsContext();
    const { manageSelectionHighlight, manageGridsAndOutlines } = useSettings();
    const previousPdfRef = useRef(settingsState.pdfRef);

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

        // Add global event listeners only once
        if (!container.dataset.eventsInitialized) {
            container.addEventListener("drop", handleDrop);
            container.addEventListener("dragover", handleDragOver);
            container.dataset.eventsInitialized = "true"; // Mark as initialized
        }

        if (
            settingsState.pdfRef.current &&
            settingsState.pdfRef !== previousPdfRef.current
        ) {
            // 1. Add event listeners to "section-col" divs
            const sectionCols =
                container.querySelectorAll<HTMLDivElement>(".section-col");
            sectionCols.forEach((div) => {
                if (!div.dataset.eventsInitialized) {
                    div.onclick = () => handleCellSelection(div);
                    div.ondragover = (e) => e.preventDefault();
                    div.ondrop = (e) => {
                        drop(e as unknown as React.DragEvent<HTMLElement>);
                        updateMinHeightOnDrop();
                    };
                    div.dataset.eventsInitialized = "true"; // Mark as initialized
                }
            });

            // 2. Add event listeners to "section-row" divs and build the array
            const sectionRows = Array.from(
                container.querySelectorAll<HTMLDivElement>(".section-row")
            );
            sectionRows.forEach((div) => {
                if (!div.dataset.eventsInitialized) {
                    div.ondragover = (e) => e.preventDefault();
                    div.dataset.eventsInitialized = "true"; // Mark as initialized
                }
            });

            // 3. Update row-related state
            setRowArrRef(sectionRows);
            if (sectionRows.length > 0) {
                setRowRef(sectionRows[sectionRows.length - 1]);
            } else {
                setRowRef(null);
            }
        }

        previousPdfRef.current = settingsState.pdfRef;
    }, [drop, setRowArrRef, setRowRef, settingsState.pdfRef]);

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
            manageGridsAndOutlines();
        }
    };

    const handleRemoveRow = () => {
        if (
            rowRef.current &&
            rowArrRef.current &&
            rowArrRef.current.length !== 1
        ) {
            settingsState.pdfRef.current?.removeChild(rowRef.current);
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
        return div;
    };

    const createColNode = () => {
        const div = document.createElement("div");
        div.classList.add("section-col", "section-grid", "grid-visible");
        div.onclick = () => handleCellSelection(div);
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) => {
            drop(e as unknown as React.DragEvent<HTMLElement>);
            updateMinHeightOnDrop();
        };
        return div;
    };

    const handleCellSelection = (elem: HTMLElement) => {
        setColRef(elem);
        const parent = elem.parentElement;
        setRowRef(parent);
        manageSelectionHighlight();
        controlBttnDisable();
    };

    const handleElementSelection = (elem: HTMLElement) => {
        setSelectedRef(elem);
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
        handleElementSelection,
        handleAddRow,
        handleAddColumn,
        handleRemoveRow,
        handleRemoveColumn,
        drag,
        drop,
    };
};
