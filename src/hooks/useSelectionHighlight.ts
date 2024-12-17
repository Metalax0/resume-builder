import { useEffect } from "react";

export const useSelectionHighlight = (
    manageSelectionHighlight: () => void,
    showSelections: boolean
) => {
    useEffect(() => {
        manageSelectionHighlight();
    }, [manageSelectionHighlight, showSelections]);
};
