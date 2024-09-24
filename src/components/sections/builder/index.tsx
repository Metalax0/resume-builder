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

    return (
        <div className="flex flex-col justify-center gap-5 items-center px-5 w-full h-full">
            <Header />
            <div className="flex gap-5 w-full h-[70%]">
                <Main />
                <Tabs />
            </div>
        </div>
    );
};
