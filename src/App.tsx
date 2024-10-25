import { Landing } from "./components/sections/hero";
import { Builder } from "./components/sections/builder";
import { DragDropProvider } from "./components/context/dragDropContext";
import { SettingsProvider } from "./components/context/settingsContext";

function App() {
    return (
        <div className="w-full h-full">
            <DragDropProvider>
                <SettingsProvider>
                    <Landing />
                    <Builder />
                </SettingsProvider>
            </DragDropProvider>
        </div>
    );
}

export default App;
