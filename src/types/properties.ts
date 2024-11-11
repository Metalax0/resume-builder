import { ReactNode } from "react";

export interface PropertiesProviderPropsType {
    children: ReactNode;
}

export type PropertiesDispatch = React.Dispatch<PropertiesActionType>;

export interface PropertiesContextType {
    propertiesState: PropertiesStateType;
    propertiesDispatch: PropertiesDispatch;
}

export interface PropertiesStateType {
    cell: {
        width: number;
        height: number;
        bgColor: string;
    };
    element: {
        fontFamily: string;
        fontSize: number;
        fontColor: string;
        width: number;
        height: number;
    };
}

// Properties
export enum PropertiesReducerActions {
    setWidth,
    setHeight,
    setWidthHeight,
    setBgColor,
    setFontFamily,
    setFontSize,
    setFontColor,
}

export type PropertiesActionType =
    | SetWidthAction
    | SetHeightAction
    | SetWidthHeightAction
    | SetBgColorAction
    | SetFontFamily
    | SetFontSize
    | SetFontColor;

export enum PropertiesStateCategoryEnum {
    cell,
    element,
}

export interface SetWidthAction {
    type: PropertiesReducerActions.setWidth;
    value: number;
    category: PropertiesStateCategoryEnum;
}

export interface SetHeightAction {
    type: PropertiesReducerActions.setHeight;
    value: number;
    category: PropertiesStateCategoryEnum;
}

export interface SetWidthHeightAction {
    type: PropertiesReducerActions.setWidthHeight;
    value: { width: number; height: number };
    category: PropertiesStateCategoryEnum;
}

export interface SetBgColorAction {
    type: PropertiesReducerActions.setBgColor;
    value: string;
    category: PropertiesStateCategoryEnum;
}

export interface SetFontFamily {
    type: PropertiesReducerActions.setFontFamily;
    value: string;
    category: PropertiesStateCategoryEnum;
}

export interface SetFontSize {
    type: PropertiesReducerActions.setFontSize;
    value: number;
    category: PropertiesStateCategoryEnum;
}

export interface SetFontColor {
    type: PropertiesReducerActions.setFontColor;
    value: string;
    category: PropertiesStateCategoryEnum;
}
