import { useRowsAndColumns } from "../../../../hooks/useRowsAndColumns";
import { BttnTypeEnum } from "../../../../types/button";
import { Button } from "../../../atoms/button";
import { ToggleSwitch } from "../../../atoms/toggle-switch";

export const SettingsTab = () => {
    const {
        bttnDisabled,
        handleAddRow,
        handleAddColumn,
        handleRemoveRow,
        handleRemoveColumn,
    } = useRowsAndColumns();

    const handleExportPDF = () => {
        alert("Comming Soon..");
    };

    return (
        <div
            className="flex flex-col items-start flex-1 gap-6 bg-red-500 font-semibold"
            onDragOver={(e) => e.preventDefault()}
        >
            <div className="flex flex-col items-start gap-2">
                <p className="text-gray-800 font-bold">Selection Priority</p>
                <ToggleSwitch id="selection" labelOn={"Row"} labelOff={"Col"} />
            </div>

            <div className="flex flex-col items-start gap-2">
                <p className="text-gray-800 font-bold">Selection Highlight</p>
                <ToggleSwitch
                    id="selection-highlight"
                    labelOn={"On"}
                    labelOff={"Off"}
                />
            </div>

            <div className="flex flex-col items-start gap-2">
                <p className="text-gray-800 font-bold">Grids & Outlines</p>
                <ToggleSwitch id="outlines" labelOn={"On"} labelOff={"Off"} />
            </div>

            <hr className="w-full border-gray-800 border-px" />

            <div className="flex flex-col items-start gap-2">
                <p className="text-gray-800 font-bold">Row Controls</p>
                <div className="flex gap-2">
                    <Button
                        bttnName={"+"}
                        bttnType={BttnTypeEnum.primary}
                        bttnAction={handleAddRow}
                        isCircular
                    />
                    <Button
                        bttnName={"-"}
                        bttnType={BttnTypeEnum.secondary}
                        bttnAction={handleRemoveRow}
                        isDisabled={bttnDisabled.rowRemove}
                        isCircular
                    />
                </div>
            </div>

            <div className="flex flex-col items-start gap-2">
                <p className="text-gray-800 font-bold">Col Controls</p>
                <div className="flex gap-2">
                    <Button
                        bttnName={"+"}
                        bttnType={BttnTypeEnum.primary}
                        bttnAction={handleAddColumn}
                        isCircular
                    />
                    <Button
                        bttnName={"-"}
                        bttnType={BttnTypeEnum.secondary}
                        bttnAction={handleRemoveColumn}
                        isDisabled={bttnDisabled.colRemove}
                        isCircular
                    />
                </div>
            </div>

            <div className="flex flex-col items-start gap-2">
                <p className="text-gray-800 font-bold">Export</p>
                <Button
                    bttnName={"PDF"}
                    bttnType={BttnTypeEnum.primary}
                    bttnAction={handleExportPDF}
                />
            </div>
        </div>
    );
};
