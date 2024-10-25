import { useEffect, useState } from "react";
import { TabsEnum } from "../../../types/tabs";
import { PickerTab } from "./picker";
import { SettingsTab } from "./settings";
import { PropertiesTab } from "./properties";
import { TabButtonCollection } from "../../molecules/tab-button-collection";
import { useRowsAndColumns } from "../../../hooks/useRowsAndColumns";
import { useDragDrop } from "../../context/dragDropContext";

// display tabs selection (settings, properties and component picker)
export const Tabs = () => {
    const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.picker);
    const { drag } = useRowsAndColumns();
    const { setDraggedElement } = useDragDrop();

    // Use Effect to re-attach event listeners on draggable components
    useEffect(() => {
        const draggables = document.querySelectorAll(".draggable-element");

        draggables.forEach((draggable) => {
            const element = draggable as HTMLElement;
            element.addEventListener(
                "dragstart",
                drag as unknown as EventListener
            );
            element.addEventListener("dragend", () => setDraggedElement(null));
        });

        return () => {
            draggables.forEach((draggable) => {
                const element = draggable as HTMLElement;
                element.removeEventListener(
                    "dragstart",
                    drag as unknown as EventListener
                );
            });
        };
    }, [activeTab]);

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
            className="flex flex-col flex-1"
            onDragOver={(e) => e.preventDefault()}
        >
            <TabButtonCollection
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div className="flex flex-1 gap-5 p-5 bg-red-500">
                {renderTab()}
            </div>
        </div>
    );
};
