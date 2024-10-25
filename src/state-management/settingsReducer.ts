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
};

export const settingsReducer = (
    state: SettingsStateType,
    action: SettingsActionType
) => {
    const {
        updateSelectionPriority,
        toggleShowOutlines,
        toggleShowSelections,
        isRowRemoveBttnDisabled,
        isColRemoveBttnDisabled,
    } = SettingsReducerActions;

    switch (action.type) {
        case updateSelectionPriority:
            return {
                ...state,
                selectionPriority: action.value,
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
    }
};
