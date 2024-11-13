import { createContext, useReducer, useContext } from "react";
import {
    propertiesInitialState,
    propertiesReducer,
} from "../../state-management/propertiesReducer";
import {
    PropertiesContextType,
    PropertiesProviderPropsType,
} from "../../types/properties";

// Create a context with the PropertiesContextType or null
const PropertiesContext = createContext<PropertiesContextType | null>(null);

// PropertiesProvider component
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

// Custom hook to use the properties context
export const usePropertiesContext = () => {
    const context = useContext(PropertiesContext);
    if (!context) {
        throw new Error(
            "usePropertiesContext must be used within a PropertiesProvider"
        );
    }
    return context;
};
