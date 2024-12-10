import { createContext, useReducer, useContext } from "react";

import {
    templatesInitialState,
    templatesReducer,
} from "../../state-management/templatesReducer";
import {
    TemplatesContextType,
    TemplatesProviderPropsType,
} from "../../types/templates";

const TemplatesContext = createContext<TemplatesContextType | null>(null);

export const TemplatesProvider = ({ children }: TemplatesProviderPropsType) => {
    const [templatesState, templatesDispatch] = useReducer(
        templatesReducer,
        templatesInitialState
    );

    return (
        <TemplatesContext.Provider
            value={{ templatesState, templatesDispatch }}
        >
            {children}
        </TemplatesContext.Provider>
    );
};

export const useTemplatesContext = () => {
    const context = useContext(TemplatesContext);
    if (!context) {
        throw new Error(
            "useTemplatesContext must be used within a TemplatesProvider"
        );
    }
    return context;
};
