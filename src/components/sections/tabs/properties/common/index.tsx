import { useEffect, useMemo } from "react";
import {
    PropertiesActionType,
    PropertiesDispatch,
    PropertiesReducerActions,
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
    dispatch: PropertiesDispatch;
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
    }, [width, height, bgColor]);

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

        dispatch({
            category,
            type: dispatchType,
            value: dispatchValue,
        } as PropertiesActionType);
    };

    const dispatchBgColor = (value: string) => {
        dispatch({
            category,
            type: PropertiesReducerActions.setBgColor,
            value,
        });
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
                value={target.width}
                handleChange={(value) => handleSliderChange("w", value)}
            />
            <Slider
                title="Height"
                value={target.height}
                handleChange={(value) => handleSliderChange("h", value)}
            />
        </>
    );
};
