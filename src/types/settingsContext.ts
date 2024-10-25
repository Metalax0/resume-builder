import { ReactNode } from "react";
import {
    SelectionPriorityEnumType,
    SettingsActionType,
} from "./settingsReducer";

export interface SettingsProviderPropsType {
    children: ReactNode;
}

export interface SettingsState {
    selectionPriority: SelectionPriorityEnumType;
    showOutlines: boolean;
    showSelections: boolean;
    isAddBttnDisabled: {
        row: boolean;
        col: boolean;
    };
}

export type SettingsDispatch = React.Dispatch<SettingsActionType>;

export interface SettingsContextType {
    settingsState: SettingsState;
    settingsDispatch: SettingsDispatch;
}
