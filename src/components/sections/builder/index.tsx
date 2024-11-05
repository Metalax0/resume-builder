import { Main } from "./main";
import { Header } from "./header";
import { useRowsAndColumns } from "../../../hooks/useRowsAndColumns";
import { useEffect } from "react";
import { Tabs } from "../tabs";
import "./style.css";
import { ZoomSlider } from "../../molecules/zoomSlider";

export const Builder = () => {
    const { handleAddRow } = useRowsAndColumns();
    useEffect(() => {
        handleAddRow();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-10 px-5 w-full h-full">
            <Header />
            <div className="flex relative gap-2 w-full h-[70%] ">
                <Main />
                <ZoomSlider />
                <Tabs />
            </div>
        </div>
    );
};
