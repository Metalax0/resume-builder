import { TabButtonPropsType } from "../../../types/tabButton";

export const TabButton = ({
    tabName,
    isActive,
    onClick,
}: TabButtonPropsType) => {
    const activeClass = isActive ? "bg-green-500" : "bg-red-800";
    return (
        <button
            className={`p-3 hover:bg-green-600 global-transition ${activeClass}`}
            onClick={onClick}
        >
            {tabName}
        </button>
    );
};
