import "./style.css";
import BuilderLayout from "./layout";
import { MenuBar } from "./menubar";
import { Main } from "./main";
import { AnimatedLoadingBar } from "@/components/molecules/animated-loading-bar";
import { useEffect } from "react";
import { useRowsAndColumns } from "@/hooks/useRowsAndColumns";
import { executeNTimes } from "@/util/executeNTimes";
import { useStageContext } from "@/components/context/stageContext";
import { useSettingsContext } from "@/components/context/settingsContext";
import { useDraggableElements } from "@/hooks/useDraggableElements";
import { useSelectionHighlight } from "@/hooks/useSelectionHighlight";
import { useGridsAndOutlines } from "@/hooks/useGridsAndOutlines";
import { useSettings } from "@/hooks/useSettings";

export const Builder = () => {
    const { handleAddRow } = useRowsAndColumns();

    const { settingsState } = useSettingsContext();
    const { manageSelectionHighlight, manageGridsAndOutlines } = useSettings();
    const { drag } = useRowsAndColumns();
    const { setDraggedElement, setSelectedRef } = useStageContext();

    useDraggableElements(drag, setDraggedElement, setSelectedRef);
    useSelectionHighlight(
        manageSelectionHighlight,
        settingsState.showSelections
    );
    useGridsAndOutlines(manageGridsAndOutlines, settingsState.showOutlines);

    useEffect(() => {
        executeNTimes(9, handleAddRow);
    }, [settingsState.builderZoom]);

    return (
        <div className="flex flex-col h-screen bg-zinc-400 dark:bg-zinc-800 overflow-hidden">
            <AnimatedLoadingBar duration={900}>
                <div className="flex flex-col h-screen ">
                    <MenuBar />
                    <BuilderLayout>
                        <div className="flex justify-center w-full h-full p-2">
                            <Main />
                        </div>
                    </BuilderLayout>
                </div>
            </AnimatedLoadingBar>
        </div>
    );
};
