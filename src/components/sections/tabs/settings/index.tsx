import { useReactToPrint } from "react-to-print";
import { useRowsAndColumns } from "../../../../hooks/useRowsAndColumns";
import { BttnTypeEnum } from "../../../../types/button";
import { Button } from "../../../atoms/button";
import { ToggleSwitch } from "../../../atoms/toggle-switch";
import { useSettingsContext } from "../../../context/settingsContext";
import { SelectionPriorityEnumType } from "../../../../types/settings";
import {
    handleTasksAfterExport,
    handleTasksBeforeExport,
} from "../../../../util/exportPDFhelper";

export const SettingsTab = () => {
    const {
        handleAddRow,
        handleAddColumn,
        handleRemoveRow,
        handleRemoveColumn,
    } = useRowsAndColumns();
    const { settingsState, settingsDispatch } = useSettingsContext();
    const reactToPrintFn = useReactToPrint({
        contentRef: settingsState.pdfRef,
    });

    const handleExportPDF = () => {
        handleTasksBeforeExport();
        reactToPrintFn();
        handleTasksAfterExport();
    };

    const handleGridToggle = () => {
        settingsDispatch({
            value: { showOutlines: !settingsState.showOutlines },
        });
    };

    const handleSelectionHighlightToggle = () => {
        settingsDispatch({
            value: { showSelections: !settingsState.showSelections },
        });
    };

    const handleSelectionPriority = () => {
        const newPriority =
            settingsState.selectionPriority === SelectionPriorityEnumType.row
                ? SelectionPriorityEnumType.col
                : SelectionPriorityEnumType.row;
        settingsDispatch({
            value: { selectionPriority: newPriority },
        });
    };

    return (
        <div
            className="flex flex-col items-start flex-1 gap-6 bg-red-500 font-semibold"
            onDragOver={(e) => e.preventDefault()}
        >
            <div className="flex flex-col items-start gap-2">
                <p className="text-gray-800 font-bold">Selection Priority</p>
                <ToggleSwitch
                    id="selection"
                    labelOn={"Row"}
                    labelOff={"Col"}
                    isToggled={
                        settingsState.selectionPriority ===
                        SelectionPriorityEnumType.row
                            ? true
                            : false
                    }
                    action={handleSelectionPriority}
                />
            </div>

            <div className="flex flex-col items-start gap-2">
                <p className="text-gray-800 font-bold">Selection Highlight</p>
                <ToggleSwitch
                    id="selection-highlight"
                    labelOn={"On"}
                    labelOff={"Off"}
                    isToggled={settingsState.showSelections}
                    action={handleSelectionHighlightToggle}
                />
            </div>

            <div className="flex flex-col items-start gap-2">
                <p className="text-gray-800 font-bold">Grids & Outlines</p>
                <ToggleSwitch
                    id="outlines"
                    labelOn={"On"}
                    labelOff={"Off"}
                    isToggled={settingsState.showOutlines}
                    action={handleGridToggle}
                />
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
                        isDisabled={settingsState.isRemoveRowBttnDisabled}
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
                        isDisabled={settingsState.isRemoveColBttnDisabled}
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
