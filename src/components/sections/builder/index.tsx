import { ComponentPicker } from "./component-picker";
import { Button } from "../../atoms/button";
import { BttnTypeEnum } from "../../../types/button";
import { Main } from "./main";
import { Header } from "./header";
import "./style.css";
import { useRowsAndColumns } from "../../../hooks/useRowsAndColumns";
import { useEffect } from "react";

export const Builder = () => {
    const {
        bttnDisabled,
        handleAddRow,
        handleAddColumn,
        handleRemoveRow,
        handleRemoveColumn,
        drag,
        drop,
    } = useRowsAndColumns();

    useEffect(() => {
        handleAddRow();
    }, []);

    return (
        <div className="flex flex-col justify-center gap-5 items-center px-5 w-full h-full">
            <Header />
            <div className="flex gap-5 w-full h-[70%]">
                <Main />
                <ComponentPicker drag={drag} drop={drop} />
            </div>
            <div className="flex items-start flex-col gap-2">
                <div className="flex justify-center items-center gap-3">
                    <label className="w-10">
                        <b>Row</b>
                    </label>
                    <Button
                        bttnName={"+"}
                        bttnType={BttnTypeEnum.primary}
                        bttnAction={handleAddRow}
                    />
                    <Button
                        bttnName={"-"}
                        bttnType={BttnTypeEnum.secondary}
                        bttnAction={handleRemoveRow}
                        isDisabled={bttnDisabled.rowRemove}
                    />
                </div>
                <div className="flex justify-center items-center gap-3">
                    <label className="w-10">
                        <b>Col</b>
                    </label>
                    <Button
                        bttnName={"+"}
                        bttnType={BttnTypeEnum.primary}
                        bttnAction={handleAddColumn}
                    />
                    <Button
                        bttnName={"-"}
                        bttnType={BttnTypeEnum.secondary}
                        bttnAction={handleRemoveColumn}
                        isDisabled={bttnDisabled.colRemove}
                    />
                </div>
            </div>
        </div>
    );
};
