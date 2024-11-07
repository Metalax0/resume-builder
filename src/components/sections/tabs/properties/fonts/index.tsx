import { useEffect, useMemo } from "react";
import {
    PropertiesDispatch,
    PropertiesReducerActions,
    PropertiesStateCategoryEnum,
    PropertiesStateType,
} from "../../../../../types/properties";
import { InputNumber } from "../../../../atoms/input-number";
import { FontsDropDown } from "../../../../molecules/fontsDropdown";

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
            fontFamily: selected?.style.fontFamily || "Arial, sans-serif",
            fontSize: selected?.style.fontSize || 15,
            fontColor: selected?.style.color || "#000000",
        };
    }, [selected]);

    useEffect(() => {
        dispatchFontFamily(fontFamily);
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

    const handleFontFamilyChange = (newFont: string) => {
        dispatchFontFamily(newFont);
    };

    const handleFontSizeChange = (newSize: number) => {
        dispatchFontSize(newSize);
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
        </>
    );
};
