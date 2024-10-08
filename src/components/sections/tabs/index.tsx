import { useState } from "react";
import { useRowsAndColumns } from "../../../hooks/useRowsAndColumns";
import { TabsEnum } from "../../../types/tabs";
import { PickerTab } from "./picker";
import { SettingsTab } from "./settings";
import { PropertiesTab } from "./properties";
import { TabButtonCollection } from "../../molecules/tab-button-collection";

// display tabs selection (settings, properties and component picker)
export const Tabs = () => {
    const { drag, drop } = useRowsAndColumns();
    const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.picker);

    const renderTab = () => {
        switch (activeTab) {
            case TabsEnum.settings:
                return <SettingsTab />;

            case TabsEnum.picker:
                return <PickerTab drag={drag} drop={drop} />;

            case TabsEnum.properties:
                return <PropertiesTab />;

            default:
                return (
                    <strong className="text-blue-600">Invalid Tab Type</strong>
                );
        }
    };

    return (
        <div className="flex flex-col flex-1 bg-red-500">
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
