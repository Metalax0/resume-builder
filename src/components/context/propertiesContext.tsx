import { createContext, useReducer, useContext } from "react";

import {
    propertiesInitialState,
    propertiesReducer,
} from "../../state-management/propertiesReducer";
import {
    PropertiesContextType,
    PropertiesProviderPropsType,
} from "../../types/properties";

const PropertiesContext = createContext<PropertiesContextType | null>(null);

export const PropertiesProvider = ({
    children,
}: PropertiesProviderPropsType) => {
    const [propertiesState, propertiesDispatch] = useReducer(
        propertiesReducer,
        propertiesInitialState
    );

    return (
        <PropertiesContext.Provider
            value={{ propertiesState, propertiesDispatch }}
        >
            {children}
        </PropertiesContext.Provider>
    );
};

export const usePropertiesContext = () => {
    const context = useContext(PropertiesContext);
    if (!context) {
        throw new Error(
            "usePropertiesContext must be used within a PropertiesProvider"
        );
    }
    return context;
};
