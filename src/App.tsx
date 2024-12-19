import { AppProviders } from "./components/context/appProviders";
import { Routing } from "./routing";

function App() {
    return (
        <div className="w-full h-full">
            <AppProviders>
                <Routing />
            </AppProviders>
        </div>
    );
}

export default App;
