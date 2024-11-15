import { useEffect, useMemo } from "react";
import {
    PropertiesActionType,
    PropertiesStateCategoryEnum,
    PropertiesStateElementType,
} from "../../../../../types/properties";
import { InputNumber } from "../../../../atoms/input-number";
import { FontsDropDown } from "../../../../molecules/fontsDropdown";
import { ColorPicker } from "../../../../atoms/color-picker";
import { rgbToHex } from "../../../../../util/rgbToHex";

export interface FontsPropertiesPropsType {
    selected: HTMLElement | null;
    stateData: PropertiesStateElementType;
    dispatch: React.Dispatch<PropertiesActionType>;
}

export const FontsProperties = ({
    stateData,
    selected,
    dispatch,
}: FontsPropertiesPropsType) => {
    const { fontFamily, fontSize, fontColor } = stateData;

    const { newFontFamily, newFontSize, newFontColor } = useMemo(() => {
        return {
            newFontFamily: selected
                ? getComputedStyle(selected).fontFamily
                : "Arial, sans-serif",
            newFontSize: selected
                ? parseFloat(getComputedStyle(selected).fontSize)
                : 50,
            newFontColor: selected
                ? rgbToHex(getComputedStyle(selected).color)
                : "#FF0000",
        };
    }, [selected]);

    useEffect(() => {
        dispatchFontFamily(newFontFamily);
        dispatchFontSize(newFontSize);
        dispatchFontColor(newFontColor);
    }, [newFontFamily, newFontSize, newFontColor]);

    const dispatchFontFamily = (value: string) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            value: { fontFamily: value },
        });
        selected!.style.fontFamily = value;
    };

    const dispatchFontSize = (value: number) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            value: { fontSize: value },
        });
        selected!.style.fontSize = value + "px";
    };

    const dispatchFontColor = (value: string) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            value: { fontColor: value },
        });
        selected!.style.color = value;
    };

    const handleFontFamilyChange = (font: string) => {
        dispatchFontFamily(font);
    };

    const handleFontSizeChange = (size: number) => {
        dispatchFontSize(size);
    };

    const handleFontColorChange = (color: string) => {
        dispatchFontColor(color);
    };

    return (
        <>
            {/* Font Family */}
            <FontsDropDown
                value={fontFamily}
                onChange={handleFontFamilyChange}
            />

            {/* Font Size */}
            <InputNumber
                title={"Font Size"}
                value={fontSize}
                onChange={handleFontSizeChange}
            />

            {/* Foreground Color */}
            <ColorPicker
                title="Text Color"
                color={fontColor}
                handleChange={handleFontColorChange}
            />
        </>
    );
};
