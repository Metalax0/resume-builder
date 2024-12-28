import "./style.css";
import BuilderLayout from "./layout";
import { MenuBar } from "./menubar";

export const Builder = () => {
    return (
        <div className="flex flex-col h-screen bg-zinc-50 dark:bg-zinc-800">
            <MenuBar />
            <BuilderLayout>
                <div className="flex h-auto p-2">
                    <h1 className="text-zinc-900"> Stage Will be here</h1>
                </div>
            </BuilderLayout>
        </div>
    );
};
