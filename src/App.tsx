import { Landing } from "./components/sections/hero";
import { Builder } from "./components/sections/builder";
import { StageProvider } from "./components/context/stageContext";
import { SettingsProvider } from "./components/context/settingsContext";

function App() {
    return (
        <div className="w-full h-full">
            <StageProvider>
                <SettingsProvider>
                    <Landing />
                    <Builder />
                </SettingsProvider>
            </StageProvider>
        </div>
    );
}

export default App;
