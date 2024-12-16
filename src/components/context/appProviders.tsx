import { ReactNode } from "react";
import { PropertiesProvider } from "./propertiesContext";
import { SettingsProvider } from "./settingsContext";
import { StageProvider } from "./stageContext";
import { TemplatesProvider } from "./templatesContext";
import { NotificationProvider } from "./notificationContext";

interface AppProvidersPropsType {
    children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersPropsType) => (
    <StageProvider>
        <PropertiesProvider>
            <SettingsProvider>
                <TemplatesProvider>
                    <NotificationProvider>{children}</NotificationProvider>
                </TemplatesProvider>
            </SettingsProvider>
        </PropertiesProvider>
    </StageProvider>
);
