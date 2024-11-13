import { ReactNode } from "react";

export interface PropertiesProviderPropsType {
    children: ReactNode;
}

export type PropertiesDispatch = React.Dispatch<PropertiesActionType>;

export interface PropertiesContextType {
    propertiesState: PropertiesStateType;
    propertiesDispatch: PropertiesDispatch;
}

export interface PropertiesStateCellType {
    width: number;
    height: number;
    bgColor: string;
}

export interface PropertiesStateElementType {
    width: number;
    height: number;
    bgColor: string;
    fontFamily: string;
    fontSize: number;
    fontColor: string;
    bulletPointsVariation: string;
}

export interface PropertiesStateType {
    cell: PropertiesStateCellType;
    element: PropertiesStateElementType;
}

// Properties
export enum PropertiesReducerActions {
    setWidth,
    setHeight,
    setWidthHeight,
    setBgColor,
    setFontFamily,
    setFontSize,
    setBulletPointsVariation,
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

export interface SetBulletPointsVariation {
    type: PropertiesReducerActions.setBulletPointsVariation;
    value: string;
    category: PropertiesStateCategoryEnum;
}
