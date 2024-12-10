import { TemplatesActionType, TemplatesStateType } from "../types/templates";

// Initial State
export const templatesInitialState: TemplatesStateType = {
    activeAppTemplateIndex: -1,
    activeUserTemplateIndex: -1,
    showAppTemplate: true,
    arr: [],
};

// Helper to update templates data
const updateTemplates = (
    state: TemplatesStateType,
    updates: Partial<TemplatesStateType>
): TemplatesStateType => {
    return { ...state, ...updates };
};

// Reducer Function - Updates the entire templates state directly
export const templatesReducer = (
    state: TemplatesStateType,
    action: TemplatesActionType
): TemplatesStateType => {
    const { value } = action;
    return updateTemplates(state, value);
};
