// Settings
export enum SettingsReducerActions {
    toggleSelectionPriority,
    toggleShowOutlines,
    toggleShowSelections,
    isRowRemoveBttnDisabled,
    isColRemoveBttnDisabled,
    setPdfRef,
}

export type SettingsActionType =
    | ToggleSelectionPriorityAction
    | ToggleShowOutlinesAction
    | ToggleShowSelectionsAction
    | IsRowRemoveBttnDisabled
    | IsColRemoveBttnDisabled
    | SetPdfRef;

export interface SettingsStateType {
    selectionPriority: SelectionPriorityEnumType;
    showOutlines: boolean;
    showSelections: boolean;
    isAddBttnDisabled: {
        row: boolean;
        col: boolean;
    };
    pdfRef: React.RefObject<HTMLElement>;
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

export interface SetPdfRef {
    type: SettingsReducerActions.setPdfRef;
    value: React.RefObject<HTMLElement>;
}
