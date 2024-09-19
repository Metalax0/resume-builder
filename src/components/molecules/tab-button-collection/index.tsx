import { TabButtonCollectionPropsType } from "../../../types/tabButton";
import { TabsEnum } from "../../../types/tabs";
import { TabButton } from "../../atoms/tab-button";

export const TabButtonCollection = ({
    setActiveTab,
    activeTab,
}: TabButtonCollectionPropsType) => {
    return (
        <div className="flex bg-[#242424]">
            <TabButton
                isActive={activeTab === TabsEnum.settings}
                tabName={"Settings"}
                onClick={() => setActiveTab(TabsEnum.settings)}
            />
            <TabButton
                isActive={activeTab === TabsEnum.picker}
                tabName={"Picker"}
                onClick={() => setActiveTab(TabsEnum.picker)}
            />
            <TabButton
                isActive={activeTab === TabsEnum.properties}
                tabName={"Properties"}
                onClick={() => setActiveTab(TabsEnum.properties)}
            />
        </div>
    );
};
