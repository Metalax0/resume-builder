import { ReactNode } from "react";

// Action Type
export type SettingsActionType = {
    value: Partial<SettingsStateType>;
};

// State Type
export interface SettingsStateType {
    selectionPriority: SelectionPriorityEnumType;
    showOutlines: boolean;
    showSelections: boolean;
    isRemoveRowBttnDisabled: boolean;
    isRemoveColBttnDisabled: boolean;
    pdfRef: React.RefObject<HTMLElement>;
    builderZoom: number;
}

// Selection Priority Enum
export enum SelectionPriorityEnumType {
    row,
    col,
}

// Provider Props Type
export interface SettingsProviderPropsType {
    children: ReactNode;
}

// Context Type
export interface SettingsContextType {
    settingsState: SettingsStateType;
    settingsDispatch: React.Dispatch<SettingsActionType>;
}
