import { createContext, useReducer, useContext } from "react";
import {
    SettingsContextType,
    SettingsProviderPropsType,
} from "../../types/settingsContext";
import {
    settingsInitialState,
    settingsReducer,
} from "../../state-management/settingsReducer";

const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider = ({ children }: SettingsProviderPropsType) => {
    const [settingsState, settingsDispatch] = useReducer(
        settingsReducer,
        settingsInitialState
    );

    return (
        <SettingsContext.Provider value={{ settingsState, settingsDispatch }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    return context;
};
