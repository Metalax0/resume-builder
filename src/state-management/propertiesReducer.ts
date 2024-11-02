import {
    PropertiesActionType,
    PropertiesReducerActions,
    PropertiesStateCategoryEnum,
    PropertiesStateType,
} from "../types/properties";

export const propertiesInitialState: PropertiesStateType = {
    cell: {
        width: 0,
        height: 0,
        bgColor: "transparent",
    },
    element: {
        width: 0,
        height: 0,
    },
};

export const propertiesReducer = (
    state: PropertiesStateType,
    action: PropertiesActionType
) => {
    const { type, value, category } = action;
    const { setWidth, setHeight, setWidthHeight, setBgColor } =
        PropertiesReducerActions;

    if (category === PropertiesStateCategoryEnum.cell)
        // State.Cell
        switch (type) {
            case setWidthHeight:
                return {
                    ...state,
                    cell: {
                        ...state.cell,
                        width: value.width,
                        height: value.height,
                    },
                };

            case setWidth:
                return {
                    ...state,
                    cell: {
                        ...state.cell,
                        width: value,
                    },
                };

            case setHeight:
                return {
                    ...state,
                    cell: {
                        ...state.cell,
                        height: value,
                    },
                };

            case setBgColor:
                return {
                    ...state,
                    cell: {
                        ...state.cell,
                        bgColor: value,
                    },
                };

            default:
                return state;
        }
    // State.Element
    else
        switch (type) {
            case setWidthHeight:
                return {
                    ...state,
                    element: {
                        ...state.cell,
                        width: value.width,
                        height: value.height,
                    },
                };

            case setWidth:
                return {
                    ...state,
                    element: {
                        ...state.cell,
                        width: value,
                    },
                };

            case setHeight:
                return {
                    ...state,
                    element: {
                        ...state.cell,
                        height: value,
                    },
                };

            default:
                return state;
        }
};
