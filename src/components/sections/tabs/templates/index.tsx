import { MouseEvent, useEffect, useState } from "react";
import {
    applicationTemplateArr,
    defaultInitialTemplate,
} from "../../../../data/templateData";
import { BttnTypeEnum } from "../../../../types/button";
import { TemplateRefinedType } from "../../../../types/templates";
import {
    recreateDOM,
    serializeDOM,
} from "../../../../util/JsonAndDomConversion";
import { Button } from "../../../atoms/button";
import { ToggleSwitch } from "../../../atoms/toggle-switch";
import { useSettingsContext } from "../../../context/settingsContext";
import { useTemplatesContext } from "../../../context/templatesContext";
import {
    deleteTemplateFromIndexDB,
    fetchAllTemplatesFromIndexDB,
    fetchTemplateFromIndexDB,
    saveTemplatetoIndexDB,
} from "../../../../index-db/db";

export const TemplatesTab = () => {
    const { templatesState, templatesDispatch } = useTemplatesContext();
    const { settingsState, settingsDispatch } = useSettingsContext();
    const [indexDBTemplatesArr, setIndexDBTemplatesArr] = useState<
        TemplateRefinedType[]
    >([{ id: -1, data: null }]);

    useEffect(() => {
        handleFetchAllTemplates();
    }, [settingsState.pdfRef, templatesState.showAppTemplate]);

    const currentStage = settingsState.pdfRef.current as HTMLElement;

    const handleFetchAllTemplates = async () => {
        const templateArr = await fetchAllTemplatesFromIndexDB();
        setIndexDBTemplatesArr(templateArr as TemplateRefinedType[]);
    };

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
        const newStage = recreateDOM(
            defaultInitialTemplate.data
        ) as HTMLElement;
        updatePdfRef(newStage);
    };

    const handleTemplateSave = () => {
        const serializedDOM = serializeDOM(currentStage);
        saveTemplatetoIndexDB(serializedDOM);
        handleFetchAllTemplates();
    };

    const handleTemplateLoad = async (id: number, isTemplateApp: boolean) => {
        let newStage = currentStage;

        if (isTemplateApp) {
            // app template arr ko map garera id match
            const templateJSON = applicationTemplateArr.filter(
                (item) => item.id === id
            );
            newStage = recreateDOM(templateJSON[0].data) as HTMLElement;
        } else {
            const templateFromIndexDB = await fetchTemplateFromIndexDB(id);

            if (templateFromIndexDB)
                newStage = recreateDOM(templateFromIndexDB) as HTMLElement;
        }

        if (currentStage !== newStage) {
            updatePdfRef(newStage);
        }
    };

    const handleTemplateClick = (id: number) => {
        const isAppTemplate = templatesState.showAppTemplate;
        const activeProperty = isAppTemplate
            ? "activeAppTemplateIndex"
            : "activeUserTemplateIndex";
        const inactiveProperty = isAppTemplate
            ? "activeUserTemplateIndex"
            : "activeAppTemplateIndex";

        if (templatesState[activeProperty] !== id) {
            templatesDispatch({
                value: {
                    [activeProperty]: id,
                    [inactiveProperty]: -1,
                },
            });
        }

        handleTemplateLoad(id, isAppTemplate);
    };

    const handleTemplateDelete = (
        e: MouseEvent<HTMLButtonElement>,
        id: number
    ) => {
        e.stopPropagation();
        deleteTemplateFromIndexDB(id);
        handleFetchAllTemplates();
    };

    const renderTemplates = (
        target: string,
        templates: TemplateRefinedType[],
        activeIndex: number
    ) => {
        if (templates.length === 0)
            return (
                <p className="text-gray-800 rounded-sm italic font-bold">
                    Empty : No templates saved
                </p>
            );
        else
            return (
                <div className="flex gap-2 flex-wrap">
                    {templates.map((item) => (
                        <div
                            key={`template-${item.id}`}
                            className={`${
                                activeIndex === item.id
                                    ? "bg-green-500 hover:bg-green-600"
                                    : "bg-yellow-300 hover:bg-yellow-400"
                            } relative p-5 border-2 border-blue-800 hover:cursor-pointer rounded-lg`}
                            onClick={() => handleTemplateClick(item.id)}
                        >
                            {target === "User" && (
                                <button
                                    className="absolute top-0 right-0 w-5 h-5 text-white bg-red-500 rounded-md flex items-center justify-center hover:bg-red-600 focus:outline-none"
                                    onClick={(e) =>
                                        handleTemplateDelete(e, item.id)
                                    }
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                            )}

                            <span>
                                {target} Template {item.id + 1}
                            </span>
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
                          "Application",
                          applicationTemplateArr,
                          templatesState.activeAppTemplateIndex
                      )
                    : renderTemplates(
                          "User",
                          indexDBTemplatesArr,
                          templatesState.activeUserTemplateIndex
                      )}
            </div>
        </div>
    );
};
