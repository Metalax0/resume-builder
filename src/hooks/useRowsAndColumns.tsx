import { useStageContext } from "../components/context/stageContext";
import { isTargetOccupied, isTargetValidDropZone } from "../util/dragAndDrop";
import { useSettingsContext } from "../components/context/settingsContext";
import { SettingsReducerActions } from "../types/settingsReducer";
import { useSettings } from "./useSettings";

// Custom hook for managing rows and columns
export const useRowsAndColumns = () => {
    const {
        rowRef,
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
        const newRow = createRowNode();
        document.getElementById("cv-main")!.appendChild(newRow);
        setRowRef(newRow);
        setRowArrRef([...(rowArrRef.current || []), newRow]);
        handleAddColumn();
    };

    const handleAddColumn = () => {
        const newColumn = createColNode();
        if (rowRef.current) {
            rowRef.current.appendChild(newColumn);
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
                rowArrRef.current.filter(
                    (row: HTMLDivElement) => row !== rowRef.current
                )
            );
            setRowRef(rowArrRef.current[rowArrRef.current.length - 1]);
            handleCellSelection(
                rowRef.current.childNodes[
                    rowRef.current.childNodes.length - 1
                ] as HTMLDivElement
            );
        }
    };

    const handleRemoveColumn = () => {
        if (rowRef.current) {
            const cols = rowRef.current.childNodes;
            if (cols.length !== 0)
                rowRef.current.removeChild(cols[cols.length - 1]);

            handleCellSelection(
                rowRef.current.childNodes[
                    rowRef.current.childNodes.length - 1
                ] as HTMLDivElement
            );
        }
    };

    const createRowNode = () => {
        const div = document.createElement("div");
        div.classList.add("section-row", "section-grid", "grid-visible");
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) =>
            drop(e as unknown as React.DragEvent<HTMLDivElement>);
        return div;
    };

    const createColNode = () => {
        const div = document.createElement("div");
        div.classList.add("section-col", "section-grid", "grid-visible");
        div.onclick = () => handleCellSelection(div);
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) =>
            drop(e as unknown as React.DragEvent<HTMLDivElement>);
        return div;
    };

    const handleCellSelection = (elem: HTMLDivElement) => {
        setColRef(elem);
        const parent = elem.parentElement as HTMLDivElement;
        setRowRef(parent);
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
