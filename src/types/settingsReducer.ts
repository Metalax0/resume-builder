// Settings
export enum SettingsReducerActions {
    updateSelectionPriority,
    toggleShowOutlines,
    toggleShowSelections,
    isRowRemoveBttnDisabled,
    isColRemoveBttnDisabled,
}

export type SettingsActionType =
    | UpdateSelectionPriorityAction
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
    column,
}

export interface UpdateSelectionPriorityAction {
    type: SettingsReducerActions.updateSelectionPriority;
    value: SelectionPriorityEnumType;
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
