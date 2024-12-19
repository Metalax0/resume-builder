import { Hero } from "./components/sections/hero";
import { Builder } from "./components/sections/builder";
import { AppProviders } from "./components/context/appProviders";
import { HiredAt } from "./components/sections/hired-at";
import { UserReviews } from "./components/molecules/user-reveiws";

function App() {
    return (
        <div className="w-full h-full">
            <AppProviders>
                <Hero />
                <HiredAt />
                <UserReviews />
                <Builder />
            </AppProviders>
        </div>
    );
}

export default App;
