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
};

export const settingsReducer = (
    state: SettingsStateType,
    action: SettingsActionType
) => {
    const {
        updateSelectionPriority,
        toggleShowOutlines,
        toggleShowSelections,
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
    }
};
