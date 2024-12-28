import "./style.css";
import BuilderLayout from "./layout";
import { MenuBar } from "./menubar";

export const Builder = () => {
    return (
        <div className="flex flex-col h-screen">
            <MenuBar />
            <BuilderLayout>
                <div className="flex h-auto p-2">
                    <h1> Stage Will be here</h1>
                </div>
            </BuilderLayout>
        </div>
    );
};
