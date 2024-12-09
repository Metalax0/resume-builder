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
} from "../../../../util/PDFExportHelper";
import {
    recreateDOM,
    serializeDOM,
} from "../../../../util/JsonAndDomConversion";
import { templateData } from "../../../../data/templateData";

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

    const handleTextSelectionToggle = () => {
        settingsDispatch({
            value: { enableTextSelection: !settingsState.enableTextSelection },
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

    const handleTemplateSave = () => {
        const toJson = serializeDOM(
            settingsState.pdfRef.current as HTMLElement
        );
        console.log("dom as json is : ", toJson);
    };

    const handleTemplateLoad = () => {
        // const fromJson = settingsState.
        // save and load only new template. (this will persist)
        // two categories of template, app template and user template
        const currentStage = settingsState.pdfRef.current as HTMLElement;
        const newStage = recreateDOM(templateData) as HTMLElement;
        const newPdfRef = { current: newStage } as React.RefObject<HTMLElement>;
        settingsDispatch({
            value: { pdfRef: newPdfRef },
        });
        currentStage.replaceWith(newStage);
    };

    const handleExportPDF = () => {
        handleTasksBeforeExport();
        reactToPrintFn();
        handleTasksAfterExport();
    };

    return (
        <div
            className="flex flex-col items-start flex-1 gap-6 bg-red-500 font-semibold text-gray-800"
            onDragOver={(e) => e.preventDefault()}
        >
            <div className="flex flex-col items-start">
                <p className="font-bold">Selection Priority</p>
                <small className="mb-2 italic">
                    whether to select row or col on click
                </small>
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

            <div className="flex flex-col items-start ">
                <p className="font-bold">Selection Highlight</p>
                <small className="mb-2 italic">border around active item</small>
                <ToggleSwitch
                    id="selection-highlight"
                    labelOn={"On"}
                    labelOff={"Off"}
                    isToggled={settingsState.showSelections}
                    action={handleSelectionHighlightToggle}
                />
            </div>

            <div className="flex flex-col items-start ">
                <p className="font-bold">Enable Text slection</p>
                <small className="mb-2 italic">
                    for styling a word (properties tab)
                </small>
                <ToggleSwitch
                    id="text-selection"
                    labelOn={"On"}
                    labelOff={"Off"}
                    isToggled={settingsState.enableTextSelection}
                    action={handleTextSelectionToggle}
                />
            </div>

            <div className="flex flex-col items-start ">
                <p className="font-bold">Grids & Outlines</p>
                <small className="mb-2 italic">show/hide all borders</small>
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
                <p className="font-bold">Row Controls</p>
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
                <p className="font-bold">Col Controls</p>
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
                <p className="font-bold">Template</p>
                <div className="flex gap-2">
                    <Button
                        bttnName={"Save"}
                        bttnType={BttnTypeEnum.primary}
                        bttnAction={handleTemplateSave}
                    />
                    <Button
                        bttnName={"Load"}
                        bttnType={BttnTypeEnum.primary}
                        bttnAction={handleTemplateLoad}
                    />
                </div>
            </div>

            <div className="flex flex-col items-start gap-2 pb-5">
                <p className="font-bold">Export</p>
                <Button
                    bttnName={"PDF"}
                    bttnType={BttnTypeEnum.primary}
                    bttnAction={handleExportPDF}
                />
            </div>
        </div>
    );
};
