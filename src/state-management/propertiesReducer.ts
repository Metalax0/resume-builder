import {
    PropertiesActionType,
    PropertiesStateCategoryEnum,
    PropertiesStateCellType,
    PropertiesStateElementType,
    PropertiesStateType,
} from "../types/properties";

// Initial State
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

// Helper to update category (either 'cell' or 'element') with the given updates
const updateCategory = (
    state: PropertiesStateType,
    category: PropertiesStateCategoryEnum,
    updates: Partial<PropertiesStateCellType | PropertiesStateElementType>
): PropertiesStateType => {
    return category === PropertiesStateCategoryEnum.cell
        ? { ...state, cell: { ...state.cell, ...updates } }
        : { ...state, element: { ...state.element, ...updates } };
};

// Reducer Function
export const propertiesReducer = (
    state: PropertiesStateType,
    action: PropertiesActionType
): PropertiesStateType => {
    const { value, category } = action;
    return updateCategory(state, category, value);
};
