import { Main } from "./main";
import { Header } from "./header";
import { useRowsAndColumns } from "../../../hooks/useRowsAndColumns";
import { useEffect } from "react";
import { Tabs } from "../tabs";
import "./style.css";

export const Builder = () => {
    const { handleAddRow } = useRowsAndColumns();
    useEffect(() => {
        handleAddRow();
    }, []);

    const handleZoomChange = (e) => {
        console.log(e);
    };

    return (
        <div className="flex flex-col  justify-center items-center gap-10 px-5 w-full h-full">
            <Header />
            <div className="vertical flex relative gap-2 w-full h-[70%] vertical ">
                <Main />
                <input type="range" onChange={handleZoomChange} />
                <Tabs />
            </div>
        </div>
    );
};
