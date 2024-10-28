import { useSettingsContext } from "../components/context/settingsContext";
import { useStageContext } from "../components/context/stageContext";
import { SelectionPriorityEnumType } from "../types/settingsReducer";

export const useSettings = () => {
    const { rowRef, colRef, rowArrRef } = useStageContext();
    const { settingsState } = useSettingsContext();

    const resetAllSelection = () => {
        rowArrRef.current!.forEach((r) => {
            r.childNodes.forEach((c) => {
                if (c instanceof Element) {
                    c.classList.remove("active-cell");
                }
            });
            r.classList.remove("active-cell");
        });
    };

    const manageSelectionHighlight = () => {
        resetAllSelection();
        if (settingsState.showSelections) {
            if (
                settingsState.selectionPriority ===
                SelectionPriorityEnumType.row
            )
                rowRef.current?.classList.add("active-cell");
            else colRef.current?.classList.add("active-cell");
        }
    };

    const manageGridsAndOutlines = () => {
        const grids = document.querySelectorAll(".section-grid");

        if (settingsState.showOutlines)
            grids.forEach((elem) => {
                elem.classList.add("grid-visible");
            });
        else
            grids.forEach((elem) => {
                elem.classList.remove("grid-visible");
            });
    };

    return {
        manageSelectionHighlight,
        manageGridsAndOutlines,
    };
};
