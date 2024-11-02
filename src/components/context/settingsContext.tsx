import { createContext, useReducer, useContext } from "react";

import {
    settingsInitialState,
    settingsReducer,
} from "../../state-management/settingsReducer";
import {
    SettingsContextType,
    SettingsProviderPropsType,
} from "../../types/settings";

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

export const useSettingsContext = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error(
            "useSettingsContext must be used within a SettingsProvider"
        );
    }
    return context;
};
