import { useStageContext } from "../../../context/stageContext";
import { useSettingsContext } from "../../../context/settingsContext";
import { SelectionPriorityEnumType } from "../../../../types/settings";
import { usePropertiesContext } from "../../../context/propertiesContext";
import { CommonProperties } from "./common";

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

    return (
        <div className="flex flex-col flex-1 bg-red-500">
            {/* Cell Control */}
            <div className="text-left">
                <strong className="text-black">Row & Column</strong>
                <CommonProperties
                    state={propertiesState}
                    dispatch={propertiesDispatch}
                    selected={selectedCell}
                />
            </div>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            {/* Elements Control */}
            <div className="text-left mt-3">
                {/* 
                    - Display like this : Element (paragraph)  or Element (list)
                    - Need to get info on what type of element is being selected
                    - This info can be used to render element specific proeprties
                */}
                <strong className="text-black"> Element</strong>
                {!selectedElement && (
                    <p className="text-black mt-3 italic font-semibold">
                        No element selected, click on an element
                    </p>
                )}
                {selectedElement && (
                    <>
                        <CommonProperties
                            state={propertiesState}
                            dispatch={propertiesDispatch}
                            selected={selectedElement}
                        />
                    </>
                )}
            </div>
        </div>
    );
};
