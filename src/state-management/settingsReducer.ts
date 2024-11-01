import { createRef } from "react";
import {
    SelectionPriorityEnumType,
    SettingsActionType,
    SettingsReducerActions,
    SettingsStateType,
} from "../types/settingsReducer";

export const settingsInitialState: SettingsStateType = {
    selectionPriority: SelectionPriorityEnumType.row,
    showOutlines: true,
    showSelections: true,
    isAddBttnDisabled: {
        row: true,
        col: false,
    },
    pdfRef: createRef<HTMLElement>(),
};

export const settingsReducer = (
    state: SettingsStateType,
    action: SettingsActionType
) => {
    const {
        toggleSelectionPriority,
        toggleShowOutlines,
        toggleShowSelections,
        isRowRemoveBttnDisabled,
        isColRemoveBttnDisabled,
        setPdfRef,
    } = SettingsReducerActions;

    switch (action.type) {
        case toggleSelectionPriority:
            return {
                ...state,
                selectionPriority:
                    state.selectionPriority === SelectionPriorityEnumType.row
                        ? SelectionPriorityEnumType.col
                        : SelectionPriorityEnumType.row,
            };

        case toggleShowOutlines:
            return {
                ...state,
                showOutlines: !state.showOutlines,
            };

        case toggleShowSelections:
            return {
                ...state,
                showSelections: !state.showSelections,
            };

        case isRowRemoveBttnDisabled:
            return {
                ...state,
                isAddBttnDisabled: {
                    ...state.isAddBttnDisabled,
                    row: action.value,
                },
            };

        case isColRemoveBttnDisabled:
            return {
                ...state,
                isAddBttnDisabled: {
                    ...state.isAddBttnDisabled,
                    col: action.value,
                },
            };

        case setPdfRef: {
            return {
                ...state,
                pdfRef: action.value,
            };
        }
    }
};
