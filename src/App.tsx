import { Hero } from "./components/sections/hero";
import { Builder } from "./components/sections/builder";
import { AppProviders } from "./components/context/appProviders";
import { HiredAt } from "./components/sections/hired-at";

function App() {
    return (
        <div className="w-full h-full">
            <AppProviders>
                <Hero />
                <HiredAt />
                <Builder />
            </AppProviders>
        </div>
    );
}

export default App;
