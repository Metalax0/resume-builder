import { useEffect, useMemo } from "react";
import {
    PropertiesDispatch,
    PropertiesReducerActions,
    PropertiesStateCategoryEnum,
    PropertiesStateType,
} from "../../../../../types/properties";
import { InputNumber } from "../../../../atoms/input-number";
import { FontsDropDown } from "../../../../molecules/fontsDropdown";
import { ColorPicker } from "../../../../atoms/color-picker";
import { rgbToHex } from "../../../../../util/rgbToHex";

export interface FontsPropertiesPropsType {
    selected: HTMLElement | null;
    state: PropertiesStateType;
    dispatch: PropertiesDispatch;
}

export const FontsProperties = ({
    state,
    selected,
    dispatch,
}: FontsPropertiesPropsType) => {
    const { fontFamily, fontSize, fontColor } = useMemo(() => {
        return {
            fontFamily: selected
                ? getComputedStyle(selected).fontFamily
                : "Arial, sans-serif",
            fontSize: selected
                ? parseFloat(getComputedStyle(selected).fontSize)
                : 50,
            fontColor: selected
                ? rgbToHex(getComputedStyle(selected).color)
                : "#FF0000",
        };
    }, [selected]);

    useEffect(() => {
        dispatchFontFamily(fontFamily);
        dispatchFontSize(fontSize);
        dispatchFontColor(fontColor);
    }, [fontFamily, fontSize, fontColor]);

    const dispatchFontFamily = (value: string) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            type: PropertiesReducerActions.setFontFamily,
            value,
        });
        selected!.style.fontFamily = value;
    };

    const dispatchFontSize = (value: number) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            type: PropertiesReducerActions.setFontSize,
            value,
        });
        selected!.style.fontSize = value + "px";
    };

    const dispatchFontColor = (value: string) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            type: PropertiesReducerActions.setFontColor,
            value,
        });
        selected!.style.color = value;
    };

    const handleFontFamilyChange = (newFont: string) => {
        dispatchFontFamily(newFont);
    };

    const handleFontSizeChange = (newSize: number) => {
        dispatchFontSize(newSize);
    };

    const handleFontColorChange = (newColor: string) => {
        dispatchFontColor(newColor);
    };

    return (
        <>
            {/* Font Family */}
            <FontsDropDown
                value={state.element.fontFamily}
                onChange={handleFontFamilyChange}
            />
            {/* Font Size */}
            <InputNumber
                title={"Font Size"}
                value={state.element.fontSize}
                onChange={handleFontSizeChange}
            />
            {/* Foreground Color */}
            <ColorPicker
                title="Text Color"
                color={state.element.fontColor}
                handleChange={handleFontColorChange}
            />
        </>
    );
};
