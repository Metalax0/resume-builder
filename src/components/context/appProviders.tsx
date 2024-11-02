import { ReactNode } from "react";
import { PropertiesProvider } from "./propertiesContext";
import { SettingsProvider } from "./settingsContext";
import { StageProvider } from "./stageContext";

interface AppProvidersPropsType {
    children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersPropsType) => (
    <StageProvider>
        <PropertiesProvider>
            <SettingsProvider>{children}</SettingsProvider>
        </PropertiesProvider>
    </StageProvider>
);
