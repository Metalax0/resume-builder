import { useEffect, useMemo } from "react";
import { ColorPicker } from "../../../atoms/color-picker";
import { Slider } from "../../../atoms/slider";
import { useStageContext } from "../../../context/stageContext";
import { useSettingsContext } from "../../../context/settingsContext";
import { SelectionPriorityEnumType } from "../../../../types/settings";
import { usePropertiesContext } from "../../../context/propertiesContext";
import {
    PropertiesActionType,
    PropertiesReducerActions,
    PropertiesStateCategoryEnum,
} from "../../../../types/properties";
import { rgbToHex } from "../../../../util/rgbToHex";

export const PropertiesTab = () => {
    const { rowRef, colRef } = useStageContext();
    const { settingsState } = useSettingsContext();
    const { propertiesState, propertiesDispatch } = usePropertiesContext();

    const selectedCell =
        settingsState.selectionPriority === SelectionPriorityEnumType.row
            ? rowRef.current
            : colRef.current;

    const { width, height, bgColor } = useMemo(() => {
        return {
            width: selectedCell?.offsetWidth || 0,
            height: selectedCell?.offsetHeight || 0,
            bgColor: rgbToHex(
                getComputedStyle(selectedCell as Element).backgroundColor
            ),
        };
    }, [selectedCell]);

    useEffect(() => {
        dispatchWidthHeight("wh", { width, height });
        dispatchBgColor(bgColor);
    }, [width, height, bgColor]);

    const handleColorChange = (value: string) => {
        dispatchBgColor(value);
        selectedCell!.style["backgroundColor"] = value;
    };

    const handleSliderChange = (type: "w" | "h", value: number) => {
        const propertyType = type === "w" ? "width" : "height";
        selectedCell!.style[propertyType] = `${value}px`;
        dispatchWidthHeight(type, value);
    };

    const dispatchWidthHeight = (
        type: "w" | "h" | "wh",
        value: number | { width: number; height: number }
    ) => {
        let dispatchType: PropertiesReducerActions;
        let dispatchValue: number | { width: number; height: number };

        if (type === "w") {
            dispatchType = PropertiesReducerActions.setWidth;
            dispatchValue = value;
        } else if (type === "h") {
            dispatchType = PropertiesReducerActions.setHeight;
            dispatchValue = value;
        } else {
            dispatchType = PropertiesReducerActions.setWidthHeight;
            if (typeof value === "object" && value !== null) {
                dispatchValue = { width: value.width, height: value.height };
            } else {
                throw new Error(
                    "Invalid value type for width and height dispatch"
                );
            }
        }

        propertiesDispatch({
            category: PropertiesStateCategoryEnum.cell,
            type: dispatchType,
            value: dispatchValue,
        } as PropertiesActionType);
    };

    const dispatchBgColor = (value: string) => {
        propertiesDispatch({
            category: PropertiesStateCategoryEnum.cell,
            type: PropertiesReducerActions.setBgColor,
            value,
        });
    };

    return (
        <div className="flex flex-col flex-1 gap-5 bg-red-500">
            {/* Cell Control */}
            <div className="text-left">
                <strong className="text-black">Row & Column</strong>
                <ColorPicker
                    title="Background Color"
                    color={propertiesState.cell.bgColor}
                    handleChange={handleColorChange}
                />
                <Slider
                    title="Width"
                    value={propertiesState.cell.width}
                    handleChange={(value) => handleSliderChange("w", value)} // Pass the width type
                />
                <Slider
                    title="Height"
                    value={propertiesState.cell.height} // Make sure to use height here
                    handleChange={(value) => handleSliderChange("h", value)} // Pass the height type
                />
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Elements Control */}
            <div className="text-left">
                <strong className="text-black">Selected Element</strong>
            </div>
        </div>
    );
};
