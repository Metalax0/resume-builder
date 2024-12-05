import "./style.css";
import { Main } from "./main";
import { Header } from "./header";
import { useRowsAndColumns } from "../../../hooks/useRowsAndColumns";
import { useEffect } from "react";
import { Tabs } from "../tabs";
import { ZoomSlider } from "../../molecules/zoomSlider";
import { AccordionProvider } from "../../context/accordianContext";
import { executeNTimes } from "../../../util/executeNTimes";

export const Builder = () => {
    const { handleAddRow } = useRowsAndColumns();
    useEffect(() => {
        executeNTimes(5, handleAddRow);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-10 px-5 w-full h-full">
            <Header />
            <div className="flex relative gap-2 w-full h-[70%] ">
                <Main />
                <ZoomSlider />
                <AccordionProvider>
                    <Tabs />
                </AccordionProvider>
            </div>
        </div>
    );
};
