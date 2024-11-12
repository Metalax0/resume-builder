import { useStageContext } from "../../../context/stageContext";
import { useSettingsContext } from "../../../context/settingsContext";
import { SelectionPriorityEnumType } from "../../../../types/settings";
import { usePropertiesContext } from "../../../context/propertiesContext";
import { CommonProperties } from "./common";
import { FontsProperties } from "./fonts";
import { PropertiesStateCategoryEnum } from "../../../../types/properties";
import { Accordion } from "../../../atoms/accordian";

export const PropertiesTab = () => {
    const { rowRef, colRef } = useStageContext();
    const { settingsState } = useSettingsContext();
    const { propertiesState, propertiesDispatch } = usePropertiesContext();

    // tracks row/col selection
    const selectedCell =
        settingsState.selectionPriority === SelectionPriorityEnumType.row
            ? (rowRef.current as HTMLElement)
            : (colRef.current as HTMLElement);

    // tracks child element of colRef.current (currently active col)
    const selectedElement = colRef.current!.firstChild as HTMLElement | null;

    const getElementCategory = () => {
        if (selectedElement) return selectedElement.dataset.category;
        else return "none selected";
    };

    return (
        <div className="flex flex-col gap-3 flex-1 bg-red-500 text-left">
            {/* Cell Control */}
            <Accordion title={"Row & Column"}>
                <CommonProperties
                    category={PropertiesStateCategoryEnum.cell}
                    target={propertiesState.cell}
                    dispatch={propertiesDispatch}
                    selected={selectedCell}
                />
            </Accordion>
            {/* Elements Control */}
            <Accordion title={`Element - [ ${getElementCategory()} ]`}>
                {!selectedElement && (
                    <p className="text-black mt-3 italic font-semibold">
                        No element selected, click on an element
                    </p>
                )}
                {selectedElement && (
                    <div className="flex flex-col gap-2">
                        <Accordion title={"Basic"}>
                            <CommonProperties
                                category={PropertiesStateCategoryEnum.element}
                                target={propertiesState.element}
                                dispatch={propertiesDispatch}
                                selected={selectedElement}
                            />
                        </Accordion>

                        <Accordion title={"Fonts"}>
                            <FontsProperties
                                state={propertiesState}
                                dispatch={propertiesDispatch}
                                selected={selectedElement}
                            />
                        </Accordion>
                    </div>
                )}
            </Accordion>
        </div>
    );
};
