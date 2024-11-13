import {
    PropertiesActionType,
    PropertiesReducerActions,
    PropertiesStateCategoryEnum,
    PropertiesStateCellType,
    PropertiesStateElementType,
    PropertiesStateType,
} from "../types/properties";

export const propertiesInitialState: PropertiesStateType = {
    cell: {
        width: 0,
        height: 0,
        bgColor: "#FFFFFF",
    },
    element: {
        width: 0,
        height: 0,
        bgColor: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
        fontSize: 14,
        fontColor: "#000000",
        bulletPointsVariation: "*",
    },
};

const updateCategory = (
    state: PropertiesStateType,
    category: PropertiesStateCategoryEnum,
    updates: Partial<PropertiesStateCellType | PropertiesStateElementType>
) => {
    if (category === PropertiesStateCategoryEnum.cell) {
        return {
            ...state,
            cell: {
                ...state.cell,
                ...updates,
            },
        };
    } else {
        return {
            ...state,
            element: {
                ...state.element,
                ...updates,
            },
        };
    }
};

export const propertiesReducer = (
    state: PropertiesStateType,
    action: PropertiesActionType
): PropertiesStateType => {
    const { type, value, category } = action;

    switch (type) {
        case PropertiesReducerActions.setWidthHeight:
            return updateCategory(state, category, {
                width: (value as { width: number }).width,
                height: (value as { height: number }).height,
            });

        case PropertiesReducerActions.setWidth:
            return updateCategory(state, category, { width: value as number });

        case PropertiesReducerActions.setHeight:
            return updateCategory(state, category, { height: value as number });

        case PropertiesReducerActions.setBgColor:
            return updateCategory(state, category, {
                bgColor: value as string,
            });

        case PropertiesReducerActions.setFontFamily:
            return updateCategory(state, category, {
                fontFamily: value as string,
            });

        case PropertiesReducerActions.setFontSize:
            return updateCategory(state, category, {
                fontSize: value as number,
            });

        case PropertiesReducerActions.setFontColor:
            return updateCategory(state, category, {
                fontColor: value as string,
            });

        default:
            return state;
    }
};
