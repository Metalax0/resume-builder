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

    return { manageSelectionHighlight };
};
