import {
    applicationTemplateArr,
    defaultInitialTemplate,
} from "../../../../data/templateData";
import { BttnTypeEnum } from "../../../../types/button";
import { TemplateType } from "../../../../types/templates";
import {
    recreateDOM,
    serializeDOM,
} from "../../../../util/JsonAndDomConversion";
import { Button } from "../../../atoms/button";
import { ToggleSwitch } from "../../../atoms/toggle-switch";
import { useSettingsContext } from "../../../context/settingsContext";
import { useTemplatesContext } from "../../../context/templatesContext";

export const TemplatesTab = () => {
    const { templatesState, templatesDispatch } = useTemplatesContext();
    const { settingsState, settingsDispatch } = useSettingsContext();
    const currentStage = settingsState.pdfRef.current as HTMLElement;

    const updatePdfRef = (newStage: HTMLElement) => {
        const newPdfRef = { current: newStage } as React.RefObject<HTMLElement>;
        settingsDispatch({ value: { pdfRef: newPdfRef } });
        currentStage.replaceWith(newStage);
    };

    const handleTemplateTypeToggle = () => {
        templatesDispatch({
            value: { showAppTemplate: !templatesState.showAppTemplate },
        });
    };

    const handleTemplateReset = () => {
        const newStage = recreateDOM(defaultInitialTemplate) as HTMLElement;
        updatePdfRef(newStage);
    };

    const handleTemplateSave = () => {
        const serializedDOM = serializeDOM(currentStage);
        console.log("DOM as JSON is: ", serializedDOM);
        // Save to IndexedDB or another storage mechanism
    };

    const handleTemplateLoad = (index: number, isTemplateApp: boolean) => {
        let newStage = currentStage;

        if (isTemplateApp) {
            newStage = recreateDOM(
                applicationTemplateArr[index]
            ) as HTMLElement;
        } else {
            // const templateFromIndexDB = "fetch from indexDB";
            // newStage = recreateDOM(templateFromIndexDB) as HTMLElement;
        }

        if (currentStage !== newStage) {
            updatePdfRef(newStage);
        }
    };

    const handleTemplateClick = (index: number) => {
        const isAppTemplate = templatesState.showAppTemplate;
        const activeProperty = isAppTemplate
            ? "activeAppTemplateIndex"
            : "activeUserTemplateIndex";
        const inactiveProperty = isAppTemplate
            ? "activeUserTemplateIndex"
            : "activeAppTemplateIndex";

        if (templatesState[activeProperty] !== index) {
            templatesDispatch({
                value: {
                    [activeProperty]: index,
                    [inactiveProperty]: -1,
                },
            });
        }

        handleTemplateLoad(index, isAppTemplate);
    };

    const renderTemplates = (
        templates: TemplateType[],
        activeIndex: number
    ) => {
        return (
            <div className="flex gap-2 flex-wrap">
                {templates.map((_, index: number) => (
                    <div
                        key={`template-${index}`}
                        className={`${
                            activeIndex === index
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-yellow-300 hover:bg-yellow-400"
                        } p-5 border-2 border-blue-800 hover:cursor-pointer rounded-lg`}
                        onClick={() => handleTemplateClick(index)}
                    >
                        Template {index}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div
            className="flex flex-col items-start flex-1 gap-6 bg-red-500 font-semibold text-gray-800"
            onDragOver={(e) => e.preventDefault()}
        >
            <div className="flex flex-col items-start">
                <p className="font-bold">Template Type</p>
                <small className="mb-2 italic">
                    App provided or user's saved templates
                </small>
                <ToggleSwitch
                    id="template-toggle"
                    labelOn="Application"
                    labelOff="User"
                    isToggled={templatesState.showAppTemplate}
                    action={handleTemplateTypeToggle}
                />
            </div>

            <div className="flex flex-col items-start gap-2">
                <p className="font-bold">Actions</p>
                <small className="mb-2 italic">
                    Save as new template or reset to initial
                </small>
                <div className="flex gap-2">
                    <Button
                        bttnName="Save"
                        bttnType={BttnTypeEnum.primary}
                        bttnAction={handleTemplateSave}
                    />
                    <Button
                        bttnName="Reset"
                        bttnType={BttnTypeEnum.tersary}
                        bttnAction={handleTemplateReset}
                    />
                </div>
            </div>

            <div className="flex flex-col items-start gap-2">
                <p className="font-bold">Available Templates</p>
                <small className="mb-2 italic">
                    Click the cards below to load template
                </small>
                {templatesState.showAppTemplate
                    ? renderTemplates(
                          applicationTemplateArr,
                          templatesState.activeAppTemplateIndex
                      )
                    : renderTemplates(
                          [],
                          templatesState.activeUserTemplateIndex
                      )}
            </div>
        </div>
    );
};
