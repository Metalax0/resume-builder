import { useEffect, useMemo } from "react";
import {
    PropertiesActionType,
    PropertiesStateCategoryEnum,
    PropertiesStateCellType,
    PropertiesStateElementType,
} from "../../../../../types/properties";
import { ColorPicker } from "../../../../atoms/color-picker";
import { Slider } from "../../../../atoms/slider";
import { rgbToHex } from "../../../../../util/rgbToHex";

export interface CommonPropertiesPropsType {
    category: PropertiesStateCategoryEnum;
    target: PropertiesStateCellType | PropertiesStateElementType;
    selected: HTMLElement | null;
    dispatch: React.Dispatch<PropertiesActionType>;
}

export const CommonProperties = ({
    category,
    target,
    selected,
    dispatch,
}: CommonPropertiesPropsType) => {
    const { width, height, bgColor } = useMemo(() => {
        return {
            width: selected?.offsetWidth || 0,
            height: selected?.offsetHeight || 0,
            bgColor: rgbToHex(
                getComputedStyle(selected as Element).backgroundColor
            ),
        };
    }, [selected]);

    useEffect(() => {
        dispatchWidthHeight("wh", { width, height });
        dispatchBgColor(bgColor);
    }, [width, height, bgColor, selected]);

    const handleColorChange = (value: string) => {
        dispatchBgColor(value);
        selected!.style["backgroundColor"] = value;
    };

    const handleSliderChange = (type: "w" | "h", value: number) => {
        const propertyType = type === "w" ? "width" : "height";
        selected!.style[propertyType] = `${value}px`;
        dispatchWidthHeight(type, value);
    };

    const dispatchWidthHeight = (
        type: "w" | "h" | "wh",
        value: number | { width: number; height: number }
    ) => {
        let newValue = {};
        if (type === "w") {
            newValue = { width: value };
        } else if (type === "h") {
            newValue = { height: value };
        } else {
            if (typeof value === "object" && value !== null) {
                newValue = { width: value.width, height: value.height };
            } else {
                throw new Error(
                    "Invalid value type for width and height dispatch"
                );
            }
        }

        dispatch({
            category,
            value: newValue,
        } as PropertiesActionType);
    };

    const dispatchBgColor = (value: string) => {
        dispatch({
            category,
            value: { bgColor: value },
        });
    };

    const handleDimensionReset = () => {
        selected!.style.width = "initial";
        selected!.style.height = "initial";
    };

    return (
        <>
            <ColorPicker
                title="Background Color"
                color={target.bgColor}
                handleChange={handleColorChange}
            />
            <Slider
                title="Width"
                value={Number(target.width)}
                handleChange={(value) => handleSliderChange("w", value)}
            />
            <Slider
                min={20}
                title="Height"
                value={Number(target.height)}
                handleChange={(value) => handleSliderChange("h", value)}
            />
            <button
                onClick={handleDimensionReset}
                type="button"
                className="text-gray-300 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700"
            >
                Reset Dimensions
            </button>
        </>
    );
};
