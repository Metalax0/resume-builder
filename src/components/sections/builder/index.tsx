import "./style.css";
import { Main } from "./main";
import { Header } from "./header";
import { useRowsAndColumns } from "../../../hooks/useRowsAndColumns";
import { useEffect } from "react";
import { Tabs } from "../tabs";
import { ZoomSlider } from "../../molecules/zoom-slider";
import { AccordionProvider } from "../../context/accordianContext";
import { executeNTimes } from "../../../util/executeNTimes";

export const Builder = () => {
    const { handleAddRow } = useRowsAndColumns();
    useEffect(() => {
        executeNTimes(5, handleAddRow);
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-10 px-5">
            <Header />
            <div className="flex relative gap-2 w-full h-[650px] max-w-7xl">
                <Main />
                <ZoomSlider />
                <AccordionProvider>
                    <Tabs />
                </AccordionProvider>
            </div>
        </div>
    );
};
