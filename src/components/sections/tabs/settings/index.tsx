import { ToggleSwitch } from "../../../atoms/toggle-switch";

export const SettingsTab = () => {
    return (
        <div className="flex flex-col items-start flex-1 gap-5 bg-red-500">
            <div className="flex items-center">
                <span>Show Selection</span>
                <ToggleSwitch id="selection" />
            </div>

            <div className="flex items-center">
                <span>Show Outlines</span>
                <ToggleSwitch id="outlines" />
            </div>

            <p>Toggle Selection </p>
            <p>Add/ Remove Row </p>
            <p>Add/ Remove Col </p>
            <p>Download as PDF </p>
        </div>
    );
};
