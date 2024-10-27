import { useSettingsContext } from "../components/context/settingsContext";
import { useStageContext } from "../components/context/stageContext";

export const useSettings = () => {
    const { rowRef, rowArrRef } = useStageContext();
    const { settingsState } = useSettingsContext();

    const manageSelectionHighlight = () => {
        if (rowArrRef.current && rowArrRef.current.length != 0) {
            rowArrRef.current!.forEach((r) => r.classList.remove("active-row"));
        }
        if (rowRef.current && settingsState.showSelections) {
            rowRef.current!.classList.add("active-row");
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

    return { manageSelectionHighlight, manageGridsAndOutlines };
};
