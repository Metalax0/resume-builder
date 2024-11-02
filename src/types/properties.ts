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
}

export type PropertiesActionType =
    | SetWidthAction
    | SetHeightAction
    | SetWidthHeightAction
    | SetBgColorAction;

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
