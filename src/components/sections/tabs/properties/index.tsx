import { useStageContext } from "../../../context/stageContext";
import { useSettingsContext } from "../../../context/settingsContext";
import { SelectionPriorityEnumType } from "../../../../types/settings";
import { usePropertiesContext } from "../../../context/propertiesContext";
import { CommonProperties } from "./common";
import { FontsProperties } from "./fonts";
import { PropertiesStateCategoryEnum } from "../../../../types/properties";
import { Accordion } from "../../../atoms/accordian";
import { ListExclusive } from "./list-exclusive";
import { LinkExclusive } from "./link-exclusive";
import { ImgExclusive } from "./img-exclusive";

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

    const elementCategory = getElementCategory();

    return (
        <div className="flex flex-col gap-3 flex-1 bg-red-500 text-left">
            {/* Cell Control */}
            <strong className="text-gray-800">Row & Column</strong>
            <Accordion title={"Basic"}>
                <CommonProperties
                    category={PropertiesStateCategoryEnum.cell}
                    target={propertiesState.cell}
                    dispatch={propertiesDispatch}
                    selected={selectedCell}
                />
            </Accordion>

            <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Elements Control */}
            <strong className="text-gray-800">
                {`Element - [ ${elementCategory} ]`}
            </strong>
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

                    {/* Excluding Images */}
                    {elementCategory != "img" && (
                        <Accordion title={"Fonts"}>
                            <FontsProperties
                                stateData={propertiesState.element}
                                dispatch={propertiesDispatch}
                                selected={selectedElement}
                            />
                        </Accordion>
                    )}

                    {/* List Exclusive Properties */}
                    {elementCategory === "list" && (
                        <Accordion title={"Structure"}>
                            <ListExclusive
                                stateData={propertiesState.element}
                                dispatch={propertiesDispatch}
                                selected={selectedElement}
                            />
                        </Accordion>
                    )}

                    {/* Link Exclusive */}
                    {elementCategory === "link" && (
                        <Accordion title={"Redirect"}>
                            <LinkExclusive
                                stateData={propertiesState.element}
                                dispatch={propertiesDispatch}
                                selected={selectedElement}
                            />
                        </Accordion>
                    )}

                    {/* Link Exclusive */}
                    {elementCategory === "img" && (
                        <Accordion title={"File"}>
                            <ImgExclusive
                                stateData={propertiesState.element}
                                dispatch={propertiesDispatch}
                                selected={selectedElement}
                            />
                        </Accordion>
                    )}
                </div>
            )}
        </div>
    );
};
