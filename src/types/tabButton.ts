import { TabsEnum } from "./tabs";

export interface TabButtonCollectionPropsType {
    activeTab: TabsEnum;
    setActiveTab: React.Dispatch<React.SetStateAction<TabsEnum>>;
}

export interface TabButtonPropsType {
    tabName: string;
    isActive: boolean;
    onClick: () => void;
}
