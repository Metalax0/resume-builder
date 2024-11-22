import { useEffect, useState } from "react";
import { TabsEnum } from "../../../types/tabs";
import { PickerTab } from "./picker";
import { SettingsTab } from "./settings";
import { PropertiesTab } from "./properties";
import { TabButtonCollection } from "../../molecules/tab-button-collection";
import { useSettings } from "../../../hooks/useSettings";
import { useSettingsContext } from "../../context/settingsContext";
import { useRowsAndColumns } from "../../../hooks/useRowsAndColumns";
import { useStageContext } from "../../context/stageContext";

// display tabs selection (settings, properties and component picker)
export const Tabs = () => {
    const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.picker);
    const { settingsState } = useSettingsContext();
    const { manageSelectionHighlight, manageGridsAndOutlines } = useSettings();
    const { drag } = useRowsAndColumns();
    const { setDraggedElement } = useStageContext();

    useEffect(() => {
        const draggables = document.querySelectorAll(".draggable-element");

        const handleDragStart = (e: Event) => {
            e.stopPropagation();

            const dragEvent = e as unknown as React.DragEvent<HTMLElement>;
            drag(dragEvent);
            setDraggedElement(dragEvent.currentTarget as HTMLElement);
        };

        const handleDragEnd = () => {
            setDraggedElement(null);
        };

        draggables.forEach((draggable) => {
            const element = draggable as HTMLElement;
            element.addEventListener("dragstart", handleDragStart);
            element.addEventListener("dragend", handleDragEnd);
        });

        return () => {
            draggables.forEach((draggable) => {
                const element = draggable as HTMLElement;
                element.removeEventListener("dragstart", handleDragStart);
                element.removeEventListener("dragend", handleDragEnd);
            });
        };
    }, [activeTab, drag, setDraggedElement]);

    useEffect(() => {
        manageSelectionHighlight();
    }, [manageSelectionHighlight, settingsState.showSelections]);

    useEffect(() => {
        manageGridsAndOutlines();
    }, [settingsState.showOutlines]);

    const renderTab = () => {
        switch (activeTab) {
            case TabsEnum.settings:
                return <SettingsTab />;
            case TabsEnum.picker:
                return <PickerTab />;
            case TabsEnum.properties:
                return <PropertiesTab />;
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
