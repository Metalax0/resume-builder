// Settings
export enum SettingsReducerActions {
    updateSelectionPriority,
    toggleShowOutlines,
    toggleShowSelections,
}

export type SettingsActionType =
    | UpdateSelectionPriorityAction
    | ToggleShowOutlinesAction
    | ToggleShowSelectionsAction;

export interface SettingsStateType {
    selectionPriority: SelectionPriorityEnumType;
    showOutlines: boolean;
    showSelections: boolean;
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
