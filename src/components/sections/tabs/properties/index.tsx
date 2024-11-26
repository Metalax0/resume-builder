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
import { useAccordion } from "../../../context/accordianContext";

export const PropertiesTab = () => {
    const { rowRef, colRef, selectedRef } = useStageContext();
    const { settingsState } = useSettingsContext();
    const { propertiesState, propertiesDispatch } = usePropertiesContext();
    const { accordionStates, setAccordionState } = useAccordion();

    const handleAccordionToggle = (title: string) => {
        setAccordionState(title, !accordionStates[title]);
    };

    // tracks row/col selection
    const selectedCell =
        settingsState.selectionPriority === SelectionPriorityEnumType.row
            ? (rowRef.current as HTMLElement)
            : (colRef.current as HTMLElement);

    const selectedElement = selectedRef.current;

    const getElementCategory = () => {
        if (selectedElement) return selectedElement.dataset.category;
        else return "none selected";
    };

    const elementCategory = getElementCategory();

    // const selectedText = window.document.getSelection()?.toString();

    // console.log("hmm", selectedText);

    // styleSelectedText("#FF0000");

    return (
        <div className="flex flex-col gap-3 flex-1 bg-red-500 text-left">
            {/* Cell Control */}
            <strong className="text-gray-800">Row & Column</strong>
            <Accordion
                title={"Basic"}
                isOpen={accordionStates["properties/cell/basic"]}
                onToggle={() => handleAccordionToggle("properties/cell/basic")}
            >
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
                    <Accordion
                        title={"Basic"}
                        isOpen={accordionStates["properties/element/basic"]}
                        onToggle={() =>
                            handleAccordionToggle("properties/element/basic")
                        }
                    >
                        <CommonProperties
                            category={PropertiesStateCategoryEnum.element}
                            target={propertiesState.element}
                            dispatch={propertiesDispatch}
                            selected={selectedElement}
                        />
                    </Accordion>

                    {/* Excluding Images */}
                    {elementCategory != "img" && (
                        <Accordion
                            title={"Fonts"}
                            isOpen={accordionStates["properties/element/fonts"]}
                            onToggle={() =>
                                handleAccordionToggle(
                                    "properties/element/fonts"
                                )
                            }
                        >
                            <FontsProperties
                                stateData={propertiesState.element}
                                dispatch={propertiesDispatch}
                                selected={selectedElement}
                            />
                        </Accordion>
                    )}

                    {/* List Exclusive Properties */}
                    {elementCategory === "list" && (
                        <Accordion
                            title={"Structure"}
                            isOpen={
                                accordionStates["properties/element/structure"]
                            }
                            onToggle={() =>
                                handleAccordionToggle(
                                    "properties/element/structure"
                                )
                            }
                        >
                            <ListExclusive
                                stateData={propertiesState.element}
                                dispatch={propertiesDispatch}
                                selected={selectedElement}
                            />
                        </Accordion>
                    )}

                    {/* Link Exclusive */}
                    {elementCategory === "link" && (
                        <Accordion
                            title={"Redirect"}
                            isOpen={
                                accordionStates["properties/element/redirect"]
                            }
                            onToggle={() =>
                                handleAccordionToggle(
                                    "properties/element/redirect"
                                )
                            }
                        >
                            <LinkExclusive
                                stateData={propertiesState.element}
                                dispatch={propertiesDispatch}
                                selected={selectedElement}
                            />
                        </Accordion>
                    )}

                    {/* Link Exclusive */}
                    {elementCategory === "img" && (
                        <Accordion
                            title={"File"}
                            isOpen={accordionStates["properties/element/file"]}
                            onToggle={() =>
                                handleAccordionToggle("properties/element/file")
                            }
                        >
                            <ImgExclusive
                                stateData={propertiesState.element}
                                dispatch={propertiesDispatch}
                                selected={selectedElement}
                            />
                        </Accordion>
                    )}

                    {/*  */}

                    {/* {selectedText && (
                        <Accordion
                            title="Selected Text"
                            isOpen={
                                accordionStates["properties/selection/text"]
                            }
                            onToggle={() =>
                                handleAccordionToggle(
                                    "properties/selection/text"
                                )
                            }
                        >
                            <p> {selectedText} </p>
                        </Accordion>
                    )} */}
                </div>
            )}
        </div>
    );
};
