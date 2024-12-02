import { useEffect, useMemo } from "react";
import {
    FontAlignmentEnum,
    PropertiesActionType,
    PropertiesStateCategoryEnum,
    PropertiesStateElementType,
    PropertiesStateSelectedTextType,
} from "../../../../../types/properties";
import { InputNumber } from "../../../../atoms/input-number";
import { FontFamilyDropDown } from "../../../../molecules/fontFamilyDropdown";
import { ColorPicker } from "../../../../atoms/color-picker";
import { rgbToHex } from "../../../../../util/rgbToHex";
import { FontAlignmentDropDown } from "../../../../molecules/fontAlignmentDropdown";

export interface FontsPropertiesPropsType {
    selected: HTMLElement | null;
    stateData: PropertiesStateElementType | PropertiesStateSelectedTextType;
    dispatch: React.Dispatch<PropertiesActionType>;
}

export const FontsProperties = ({
    stateData,
    selected,
    dispatch,
}: FontsPropertiesPropsType) => {
    const { fontFamily, fontSize, fontColor } = stateData;
    const category =
        stateData.type === "element"
            ? PropertiesStateCategoryEnum.element
            : PropertiesStateCategoryEnum.selectedText;

    const fontAlignment =
        "fontAlignment" in stateData ? stateData.fontAlignment : "center";

    const { newFontFamily, newFontAlignment, newFontSize, newFontColor } =
        useMemo(() => {
            return {
                newFontFamily: selected
                    ? getComputedStyle(selected).fontFamily
                    : "Arial, sans-serif",
                newFontAlignment: selected
                    ? (getComputedStyle(selected)
                          .textAlign as FontAlignmentEnum)
                    : FontAlignmentEnum.left,
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
        dispatchFontAlignment(newFontAlignment);
        dispatchFontSize(newFontSize);
        dispatchFontColor(newFontColor);
    }, [newFontFamily, newFontSize, newFontColor, selected]);

    const dispatchFontFamily = (value: string) => {
        dispatch({
            category: category,
            value: { fontFamily: value },
        });
        selected!.style.fontFamily = value;
    };

    const dispatchFontAlignment = (value: FontAlignmentEnum) => {
        dispatch({
            category: category,
            value: { fontAlignment: value },
        });
        selected!.style.textAlign = value;
    };

    const dispatchFontSize = (value: number) => {
        dispatch({
            category: category,
            value: { fontSize: value },
        });
        selected!.style.fontSize = value + "px";
    };

    const dispatchFontColor = (value: string) => {
        dispatch({
            category: category,
            value: { fontColor: value },
        });
        selected!.style.color = value;
    };

    const handleFontFamilyChange = (font: string) => {
        dispatchFontFamily(font);
    };

    const handleFontAlignmentChange = (font: string) => {
        dispatchFontAlignment(font as FontAlignmentEnum);
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
            <FontFamilyDropDown
                value={fontFamily}
                onChange={handleFontFamilyChange}
            />

            {/* Text Alignment */}
            {stateData.type === "element" && (
                <FontAlignmentDropDown
                    value={fontAlignment}
                    onChange={handleFontAlignmentChange}
                />
            )}

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
