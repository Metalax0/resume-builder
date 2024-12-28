import "./style.css";
import BuilderLayout from "./layout";
import { MenuBar } from "./menubar";
import { Main } from "./main";
import { AnimatedLoadingBar } from "@/components/molecules/animated-loading-bar";

export const Builder = () => {
    return (
        <div className="flex flex-col h-screen bg-zinc-400 dark:bg-zinc-800">
            <AnimatedLoadingBar duration={900}>
                <div className="flex flex-col h-screen ">
                    <MenuBar />
                    <BuilderLayout>
                        <div className="flex h-auto p-2">
                            <Main />
                        </div>
                    </BuilderLayout>
                </div>
            </AnimatedLoadingBar>
        </div>
    );
};
