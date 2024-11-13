import { createRef } from "react";
import {
    SelectionPriorityEnumType,
    SettingsActionType,
    SettingsStateType,
} from "../types/settings";

// Initial State - Unified settings state
export const settingsInitialState: SettingsStateType = {
    selectionPriority: SelectionPriorityEnumType.row,
    showOutlines: true,
    showSelections: true,
    isRemoveRowBttnDisabled: true,
    isRemoveColBttnDisabled: true,
    pdfRef: createRef<HTMLElement>(),
    builderZoom: 70,
};

// Helper to update settings category with the given updates
const updateSettingsCategory = (
    state: SettingsStateType,
    updates: Partial<SettingsStateType>
): SettingsStateType => {
    return { ...state, ...updates };
};

// Reducer Function - Updates the entire settings state directly
export const settingsReducer = (
    state: SettingsStateType,
    action: SettingsActionType
): SettingsStateType => {
    const { value } = action;
    return updateSettingsCategory(state, value);
};
