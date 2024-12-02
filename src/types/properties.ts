import { ReactNode } from "react";

// State Types for Cell and Element
export interface PropertiesStateCellType {
    type: string;
    width: number | string;
    height: number | string;
    bgColor: string;
}

export enum FontAlignmentEnum {
    center = "center",
    left = "left",
    right = "right",
    justify = "justify",
}

export interface PropertiesStateElementType {
    type: string;
    width: number | string;
    height: number | string;
    bgColor: string;
    fontFamily: string;
    fontAlignment: FontAlignmentEnum;
    fontSize: number;
    fontColor: string;
    // List
    listBulletVariation: string;
    listCount: number;
    // Link
    redirectURL: string;
    // Img
    imgData: string;
}

export interface PropertiesStateSelectedTextType {
    type: string;
    bgColor: string;
    fontColor: string;
    fontFamily: string;
    fontSize: number;
}

// Complete State Type for both cell and element
export interface PropertiesStateType {
    cell: PropertiesStateCellType;
    element: PropertiesStateElementType;
    selectedText: PropertiesStateSelectedTextType;
}

// Action Types for dispatch
export type PropertiesActionType = {
    category: PropertiesStateCategoryEnum;
    value: Partial<PropertiesStateCellType | PropertiesStateElementType>;
};

// Enum to differentiate between cell and element categories
export enum PropertiesStateCategoryEnum {
    cell,
    element,
    selectedText,
}

// Provider Props Type
export interface PropertiesProviderPropsType {
    children: ReactNode;
}

// Context Type
export interface PropertiesContextType {
    propertiesState: PropertiesStateType;
    propertiesDispatch: React.Dispatch<PropertiesActionType>;
}
