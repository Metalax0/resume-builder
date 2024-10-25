import { useDragDrop } from "../components/context/dragDropContext";
import { isTargetOccupied, isTargetValidDropZone } from "../util/dragAndDrop";
import { useSettings } from "../components/context/settingsContext";
import { SettingsReducerActions } from "../types/settingsReducer";

// Custom hook for managing rows and columns
export const useRowsAndColumns = () => {
    const {
        rowRef,
        rowArrRef,
        draggedElementRef,
        setRowRef,
        setRowArrRef,
        setDraggedElement,
    } = useDragDrop();

    const { settingsState, settingsDispatch } = useSettings();
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
        div.classList.add("section-row");
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) =>
            drop(e as unknown as React.DragEvent<HTMLDivElement>);
        div.onclick = () => handleRowSelected(div);
        document.getElementById("cv-main")!.appendChild(div);

        setRowRef(div);
        setRowArrRef([...(rowArrRef.current || []), div]);

        handleRowSelected(div);
        controlBttnDisable();
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

    const createColumn = () => {
        const div = document.createElement("div");
        div.classList.add("section-column");
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
                rowArrRef.current.filter((row) => row !== rowRef.current)
            );
            setRowRef(rowArrRef.current[rowArrRef.current.length - 1]);
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
        rowArrRef.current!.forEach((r) => r.classList.remove("active-row"));
        setRowRef(row);
        rowRef.current!.classList.add("active-row");
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
