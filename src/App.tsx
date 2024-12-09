import { Landing } from "./components/sections/hero";
import { Builder } from "./components/sections/builder";
import { AppProviders } from "./components/context/appProviders";

function App() {
    return (
        <div className="w-full h-full">
            <AppProviders>
                <Landing />
                <Builder />
            </AppProviders>
        </div>
    );
}

export default App;
