// Settings
export enum SettingsReducerActions {
    toggleSelectionPriority,
    toggleShowOutlines,
    toggleShowSelections,
    isRowRemoveBttnDisabled,
    isColRemoveBttnDisabled,
}

export type SettingsActionType =
    | ToggleSelectionPriorityAction
    | ToggleShowOutlinesAction
    | ToggleShowSelectionsAction
    | IsRowRemoveBttnDisabled
    | IsColRemoveBttnDisabled;

export interface SettingsStateType {
    selectionPriority: SelectionPriorityEnumType;
    showOutlines: boolean;
    showSelections: boolean;
    isAddBttnDisabled: {
        row: boolean;
        col: boolean;
    };
}

// Settings / Selection Priority
export enum SelectionPriorityEnumType {
    row,
    col,
}

export interface ToggleSelectionPriorityAction {
    type: SettingsReducerActions.toggleSelectionPriority;
}

// Settings / Show Outlines
export interface ToggleShowOutlinesAction {
    type: SettingsReducerActions.toggleShowOutlines;
}

// Settings / Show Selections
export interface ToggleShowSelectionsAction {
    type: SettingsReducerActions.toggleShowSelections;
}

// Settings / isBttnDisabled (Row)
export interface IsRowRemoveBttnDisabled {
    type: SettingsReducerActions.isRowRemoveBttnDisabled;
    value: boolean;
}

// Settings / isBttnDisabled (Col)
export interface IsColRemoveBttnDisabled {
    type: SettingsReducerActions.isColRemoveBttnDisabled;
    value: boolean;
}
