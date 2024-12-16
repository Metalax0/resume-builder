import { useEffect, useState, useCallback } from "react";
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
import { TemplateList } from "../../../molecules/templateList";

export const TemplatesTab = () => {
    const { templatesState, templatesDispatch } = useTemplatesContext();
    const { settingsState, settingsDispatch } = useSettingsContext();
    const [userTemplates, setUserTemplates] = useState<TemplateRefinedType[]>(
        []
    );

    const currentStage = settingsState.pdfRef.current as HTMLElement;

    // Fetch all user templates from IndexedDB
    const fetchUserTemplates = useCallback(async () => {
        try {
            const templates = await fetchAllTemplatesFromIndexDB();
            setUserTemplates(templates as TemplateRefinedType[]);
        } catch (error) {
            console.error("Error fetching templates:", error);
        }
    }, []);

    useEffect(() => {
        fetchUserTemplates();
    }, [
        fetchUserTemplates,
        settingsState.pdfRef,
        templatesState.showAppTemplate,
    ]);

    const updatePdfRef = (newStage: HTMLElement) => {
        settingsDispatch({
            value: {
                pdfRef: { current: newStage } as React.RefObject<HTMLElement>,
            },
        });
        currentStage.replaceWith(newStage);
    };

    const handleToggleTemplateType = () => {
        templatesDispatch({
            value: { showAppTemplate: !templatesState.showAppTemplate },
        });
    };

    const handleResetTemplate = () => {
        const newStage = recreateDOM(
            defaultInitialTemplate.data
        ) as HTMLElement;
        updatePdfRef(newStage);
    };

    const handleSaveTemplate = async () => {
        try {
            const serializedDOM = serializeDOM(currentStage);
            await saveTemplatetoIndexDB(serializedDOM);
            fetchUserTemplates();
        } catch (error) {
            console.error("Error saving template:", error);
        }
    };

    const handleLoadTemplate = async (id: number, isAppTemplate: boolean) => {
        let newStage: HTMLElement | null = null;

        if (isAppTemplate) {
            const template = applicationTemplateArr.find(
                (item) => item.id === id
            );
            if (template) newStage = recreateDOM(template.data) as HTMLElement;
        } else {
            const templateFromIndexDB = await fetchTemplateFromIndexDB(id);
            if (templateFromIndexDB)
                newStage = recreateDOM(templateFromIndexDB) as HTMLElement;
        }

        if (newStage && newStage !== currentStage) {
            updatePdfRef(newStage);
        }
    };

    const handleClickTemplate = (id: number) => {
        const isAppTemplate = templatesState.showAppTemplate;
        const activeIndexKey = isAppTemplate
            ? "activeAppTemplateIndex"
            : "activeUserTemplateIndex";
        const inactiveIndexKey = isAppTemplate
            ? "activeUserTemplateIndex"
            : "activeAppTemplateIndex";

        templatesDispatch({
            value: {
                [activeIndexKey]: id,
                [inactiveIndexKey]: -1,
            },
        });
        handleLoadTemplate(id, isAppTemplate);
    };

    const handleDeleteTemplate = async (
        e: React.MouseEvent<HTMLButtonElement>,
        id: number
    ) => {
        e.stopPropagation();
        try {
            await deleteTemplateFromIndexDB(id);
            fetchUserTemplates();
        } catch (error) {
            console.error("Error deleting template:", error);
        }
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
                    action={handleToggleTemplateType}
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
                        bttnAction={handleSaveTemplate}
                    />
                    <Button
                        bttnName="Reset"
                        bttnType={BttnTypeEnum.tersary}
                        bttnAction={handleResetTemplate}
                    />
                </div>
            </div>

            <div className="flex flex-col items-start gap-2">
                <p className="font-bold">Available Templates</p>
                <small className="mb-2 italic">
                    Click the cards below to load template
                </small>
                <TemplateList
                    target={
                        templatesState.showAppTemplate ? "Application" : "User"
                    }
                    templates={
                        templatesState.showAppTemplate
                            ? applicationTemplateArr
                            : userTemplates
                    }
                    activeIndex={
                        templatesState.showAppTemplate
                            ? templatesState.activeAppTemplateIndex
                            : templatesState.activeUserTemplateIndex
                    }
                    onClickTemplate={handleClickTemplate}
                    onDeleteTemplate={handleDeleteTemplate}
                />
            </div>
        </div>
    );
};
