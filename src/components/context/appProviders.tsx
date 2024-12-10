import { ReactNode } from "react";
import { PropertiesProvider } from "./propertiesContext";
import { SettingsProvider } from "./settingsContext";
import { StageProvider } from "./stageContext";
import { TemplatesProvider } from "./templatesContext";

interface AppProvidersPropsType {
    children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersPropsType) => (
    <StageProvider>
        <PropertiesProvider>
            <SettingsProvider>
                <TemplatesProvider>{children}</TemplatesProvider>
            </SettingsProvider>
        </PropertiesProvider>
    </StageProvider>
);
