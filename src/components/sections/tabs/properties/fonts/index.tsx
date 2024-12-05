import { useEffect, useMemo } from "react";
import {
    FontAlignmentEnum,
    FontDecorationEnum,
    FontStyleEnum,
    FontWeightEnum,
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
import { FontWeightDropDown } from "../../../../molecules/fontWeightDropdown";
import { FontStyleDropDown } from "../../../../molecules/fontStyleDropdown";
import { FontDecorationDropDown } from "../../../../molecules/fontDecorationDropdown";
import { fontWeightHelper } from "../../../../../util/fontWeightHelper";

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
    const {
        fontFamily,
        fontSize,
        fontColor,
        fontStyle,
        fontWeight,
        fontDecoration,
    } = stateData;
    const category =
        stateData.type === "element"
            ? PropertiesStateCategoryEnum.element
            : PropertiesStateCategoryEnum.selectedText;

    const fontAlignment =
        "fontAlignment" in stateData ? stateData.fontAlignment : "center";

    const {
        newFontFamily,
        newFontAlignment,
        newFontSize,
        newFontColor,
        newFontStyle,
        newFontWeight,
        newFontDecoration,
    } = useMemo(() => {
        return {
            newFontFamily: selected
                ? getComputedStyle(selected).fontFamily
                : "Arial, sans-serif",
            newFontAlignment: selected
                ? (getComputedStyle(selected).textAlign as FontAlignmentEnum)
                : FontAlignmentEnum.left,
            newFontSize: selected
                ? parseFloat(getComputedStyle(selected).fontSize)
                : 50,
            newFontColor: selected
                ? rgbToHex(getComputedStyle(selected).color)
                : "#FF0000",
            newFontStyle: selected
                ? (getComputedStyle(selected).fontStyle as FontStyleEnum)
                : FontStyleEnum.normal,
            newFontWeight: selected
                ? (fontWeightHelper(
                      getComputedStyle(selected).fontWeight
                  ) as FontWeightEnum)
                : FontWeightEnum.normal,
            newFontDecoration: selected
                ? (getComputedStyle(selected).textDecoration.split(
                      " "
                  )[0] as FontDecorationEnum)
                : FontDecorationEnum.none,
        };
    }, [selected]);

    useEffect(() => {
        dispatchFontFamily(newFontFamily);
        dispatchFontAlignment(newFontAlignment);
        dispatchFontSize(newFontSize);
        dispatchFontColor(newFontColor);
        dispatchFontStyle(newFontStyle);
        dispatchFontWeight(newFontWeight);
        dispatchFontDecoration(newFontDecoration);
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

    //

    const dispatchFontStyle = (value: FontStyleEnum) => {
        dispatch({
            category: category,
            value: { fontStyle: value },
        });
        selected!.style.fontStyle = value;
    };

    const dispatchFontWeight = (value: FontWeightEnum) => {
        dispatch({
            category: category,
            value: { fontWeight: value },
        });
        selected!.style.fontWeight = fontWeightHelper(value);
    };

    const dispatchFontDecoration = (value: FontDecorationEnum) => {
        dispatch({
            category: category,
            value: { fontDecoration: value },
        });
        selected!.style.textDecoration = value;
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

    const handleFontStyleChange = (style: string) => {
        dispatchFontStyle(style as FontStyleEnum);
    };

    const handleFontWeightChange = (weight: string) => {
        dispatchFontWeight(weight as FontWeightEnum);
    };

    const handleFontDecorationChange = (decoration: string) => {
        dispatchFontDecoration(decoration as FontDecorationEnum);
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

            {/* Font Style */}
            <FontStyleDropDown
                value={fontStyle}
                onChange={handleFontStyleChange}
            />

            {/* Font Weight */}
            <FontWeightDropDown
                value={fontWeight}
                onChange={handleFontWeightChange}
            />

            {/* Font Decoration */}
            <FontDecorationDropDown
                value={fontDecoration}
                onChange={handleFontDecorationChange}
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
