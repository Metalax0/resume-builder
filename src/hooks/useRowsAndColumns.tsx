import { useStageContext } from "../components/context/stageContext";
import { isTargetOccupied, isTargetValidDropZone } from "../util/dragAndDrop";
import { useSettingsContext } from "../components/context/settingsContext";
import { SettingsReducerActions } from "../types/settingsReducer";
import { useSettings } from "./useSettings";

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

    const { settingsState, settingsDispatch } = useSettingsContext();
    const { manageSelectionHighlight } = useSettings();
    const { isAddBttnDisabled } = settingsState;

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
                    type: SettingsReducerActions.isRowRemoveBttnDisabled,
                    value: true,
                });
                break;

            case "rowRemoveEnable":
                settingsDispatch({
                    type: SettingsReducerActions.isRowRemoveBttnDisabled,
                    value: false,
                });
                break;

            case "colRemoveDisable":
                settingsDispatch({
                    type: SettingsReducerActions.isColRemoveBttnDisabled,
                    value: true,
                });
                break;

            case "colRemoveEnable":
                settingsDispatch({
                    type: SettingsReducerActions.isColRemoveBttnDisabled,
                    value: false,
                });
                break;
        }
    };

    const drag = (e: React.DragEvent<HTMLDivElement>) => {
        setDraggedElement(e.currentTarget);
    };

    const drop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
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
        div.classList.add("section-row", "section-grid", "grid-visible");
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) =>
            drop(e as unknown as React.DragEvent<HTMLDivElement>);
        div.onclick = () => handleRowSelected(div);
        document.getElementById("cv-main")!.appendChild(div);

        setRowRef(div);
        setRowArrRef([...(rowArrRef.current || []), div]);
        handleRowSelected(div);
    };

    const handleAddColumn = () => {
        const newColumn = createColumn();
        if (rowRef.current?.hasChildNodes()) {
            rowRef.current.appendChild(newColumn);
            setColRef(newColumn);
            handleColSelected(newColumn);
        } else {
            const secondColumn = createColumn();
            rowRef.current!.append(newColumn, secondColumn);
            setColRef(secondColumn);
            handleColSelected(secondColumn);
        }
    };

    const createColumn = () => {
        const div = document.createElement("div");
        div.classList.add("section-column", "section-grid", "grid-visible");
        div.onclick = () => handleColSelected(div);
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) =>
            drop(e as unknown as React.DragEvent<HTMLDivElement>);
        return div;
    };

    const handleRemoveRow = () => {
        if (
            rowRef.current &&
            rowArrRef.current &&
            rowArrRef.current.length !== 1
        ) {
            document.getElementById("cv-main")?.removeChild(rowRef.current);
            setRowArrRef(
                rowArrRef.current.filter(
                    (row: HTMLDivElement) => row !== rowRef.current
                )
            );
            setRowRef(rowArrRef.current[rowArrRef.current.length - 1]);
            handleRowSelected(rowRef.current);
        }
    };

    const handleRemoveColumn = () => {
        if (rowRef.current) {
            // const cols = rowRef.current.childNodes;
            // if (cols.length === 2) {
            //     rowRef.current.removeChild(cols[cols.length - 1]);
            //     rowRef.current.removeChild(cols[cols.length - 1]);
            // } else if (cols.length !== 0) {
            //     rowRef.current.removeChild(cols[cols.length - 1]);
            // }
        }

        // Remove selected column (colRef) and set say selected is null
        console.log(colRef.current);
        // handleColSelected(null);
    };

    const handleRowSelected = (row: HTMLDivElement) => {
        setRowRef(row);
        manageSelectionHighlight();
        controlBttnDisable();
    };

    const handleColSelected = (col: HTMLDivElement | null) => {
        console.log("col", col);
        setColRef(col);
        manageSelectionHighlight();
        controlBttnDisable();
    };

    const controlBttnDisable = () => {
        if (rowArrRef.current!.length >= 2)
            bttnDisableStateHelper("rowRemoveEnable");
        else bttnDisableStateHelper("rowRemoveDisable");

        if (rowRef.current) {
            const cols = rowRef.current.childNodes;
            if (cols.length <= 1) bttnDisableStateHelper("colRemoveDisable");
            else bttnDisableStateHelper("colRemoveEnable");
        }
    };

    return {
        isAddBttnDisabled,
        handleAddRow,
        handleAddColumn,
        handleRemoveRow,
        handleRemoveColumn,
        drag,
        drop,
    };
};
