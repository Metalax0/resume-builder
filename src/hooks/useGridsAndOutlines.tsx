import { useEffect } from "react";

export const useGridsAndOutlines = (
    manageGridsAndOutlines: () => void,
    showOutlines: boolean
) => {
    useEffect(() => {
        manageGridsAndOutlines();
    }, [manageGridsAndOutlines, showOutlines]);
};
