import {
    FontAlignmentEnum,
    FontDecorationEnum,
    FontStyleEnum,
    FontWeightEnum,
    PropertiesActionType,
    PropertiesStateCategoryEnum,
    PropertiesStateCellType,
    PropertiesStateElementType,
    PropertiesStateSelectedTextType,
    PropertiesStateType,
} from "../types/properties";

// Initial State
export const propertiesInitialState: PropertiesStateType = {
    cell: {
        type: "cell",
        width: 0,
        height: 0,
        bgColor: "#FFFFFF",
    },
    element: {
        type: "element",
        width: 0,
        height: 0,
        bgColor: "#FFFFFF",
        // Font
        fontFamily: "Arial, sans-serif",
        fontAlignment: FontAlignmentEnum.left,
        fontSize: 14,
        fontColor: "#000000",
        fontWeight: FontWeightEnum.normal,
        fontStyle: FontStyleEnum.normal,
        fontDecoration: FontDecorationEnum.none,
        // List
        listBulletVariation: "*",
        listCount: 3,
        // Link
        redirectURL: "#",
        // Img
        imgData: "",
    },
    selectedText: {
        type: "selectedText",
        bgColor: "#FFFFFF",
        fontColor: "#000000",
        fontFamily: "Arial, sans-serif",
        fontSize: 14,
        fontWeight: FontWeightEnum.normal,
        fontStyle: FontStyleEnum.normal,
        fontDecoration: FontDecorationEnum.none,
    },
};

// Helper to update category (either 'cell', 'element', or 'selectedText') with the given updates
const updateCategory = (
    state: PropertiesStateType,
    category: PropertiesStateCategoryEnum,
    updates: Partial<
        | PropertiesStateCellType
        | PropertiesStateElementType
        | PropertiesStateSelectedTextType
    >
): PropertiesStateType => {
    switch (category) {
        case PropertiesStateCategoryEnum.cell:
            return { ...state, cell: { ...state.cell, ...updates } };
        case PropertiesStateCategoryEnum.element:
            return { ...state, element: { ...state.element, ...updates } };
        case PropertiesStateCategoryEnum.selectedText:
            return {
                ...state,
                selectedText: { ...state.selectedText, ...updates },
            };
        default:
            throw new Error(`Unknown category: ${category}`);
    }
};

// Reducer Function
export const propertiesReducer = (
    state: PropertiesStateType,
    action: PropertiesActionType
): PropertiesStateType => {
    const { value, category } = action;
    return updateCategory(state, category, value);
};
