import { ReactNode } from "react";

// State Types for Cell and Element
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
    //
    listBulletVariation: string;
    listCount: number;
    //
    redirectURL: string;
}

// Complete State Type for both cell and element
export interface PropertiesStateType {
    cell: PropertiesStateCellType;
    element: PropertiesStateElementType;
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
