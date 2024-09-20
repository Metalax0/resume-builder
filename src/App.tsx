import { Landing } from "./components/sections/hero";
import { Builder } from "./components/sections/builder";
import { SettingsProvider } from "./state-management/settingsContext";

function App() {
    return (
        <div className="w-full h-full">
            <SettingsProvider>
                <Landing />
                <Builder />
            </SettingsProvider>
        </div>
    );
}

export default App;
