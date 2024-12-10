import { useState } from "react";
import { TabsEnum } from "../../../types/tabs";
import { PickerTab } from "./picker";
import { SettingsTab } from "./settings";
import { PropertiesTab } from "./properties";
import { TabButtonCollection } from "../../molecules/tab-button-collection";
import { useSettings } from "../../../hooks/useSettings";
import { useSettingsContext } from "../../context/settingsContext";
import { useRowsAndColumns } from "../../../hooks/useRowsAndColumns";
import { useStageContext } from "../../context/stageContext";
import { useDraggableElements } from "../../../hooks/useDraggableElements";
import { useSelectionHighlight } from "../../../hooks/useSelectionHighlight";
import { useGridsAndOutlines } from "../../../hooks/useGridsAndOutlines";
import { TemplatesTab } from "./templates";

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.picker);
    const { settingsState } = useSettingsContext();
    const { manageSelectionHighlight, manageGridsAndOutlines } = useSettings();
    const { drag } = useRowsAndColumns();
    const { setDraggedElement, setSelectedRef } = useStageContext();

    // Hooks for managing behavior
    useDraggableElements(drag, setDraggedElement, setSelectedRef);
    useSelectionHighlight(
        manageSelectionHighlight,
        settingsState.showSelections
    );
    useGridsAndOutlines(manageGridsAndOutlines, settingsState.showOutlines);

    const renderTab = () => {
        switch (activeTab) {
            case TabsEnum.settings:
                return <SettingsTab />;
            case TabsEnum.picker:
                return <PickerTab />;
            case TabsEnum.properties:
                return <PropertiesTab />;
            case TabsEnum.templates:
                return <TemplatesTab />;
            default:
                return (
                    <strong className="text-blue-600">Invalid Tab Type</strong>
                );
        }
    };

    return (
        <div
            className="flex flex-col flex-1 h-[650px]"
            onDragOver={(e) => e.preventDefault()}
        >
            <TabButtonCollection
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div className="flex flex-1 gap-5 p-2 bg-red-500 overflow-auto">
                {renderTab()}
            </div>
        </div>
    );
};
