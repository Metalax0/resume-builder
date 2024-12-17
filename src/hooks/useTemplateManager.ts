import { useEffect, useState, useCallback } from "react";
import { SettingsActionType } from "../types/settings";
import {
    TemplateRefinedType,
    TemplatesActionType,
    TemplatesStateType,
} from "../types/templates";
import { useNotification } from "../components/context/notificationContext";
import {
    deleteTemplateFromIndexDB,
    fetchAllTemplatesFromIndexDB,
    fetchTemplateFromIndexDB,
    saveTemplatetoIndexDB,
} from "../index-db/db";
import { recreateDOM, serializeDOM } from "../util/JsonAndDomConversion";
import { defaultInitialTemplate } from "../data/templateData";

interface UseTemplateManagerParams {
    currentStage: HTMLElement;
    settingsDispatch: React.Dispatch<SettingsActionType>;
    templatesDispatch: React.Dispatch<TemplatesActionType>;
    templatesState: TemplatesStateType;
    applicationTemplateArr: TemplateRefinedType[];
}

export const useTemplateManager = ({
    currentStage,
    settingsDispatch,
    templatesDispatch,
    templatesState,
    applicationTemplateArr,
}: UseTemplateManagerParams) => {
    const [userTemplates, setUserTemplates] = useState<TemplateRefinedType[]>(
        []
    );
    const { addNotification } = useNotification();

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
    }, [fetchUserTemplates]);

    // Update pdfRef and replace the DOM
    const updatePdfRef = (newStage: HTMLElement) => {
        settingsDispatch({
            value: {
                pdfRef: { current: newStage } as React.RefObject<HTMLElement>,
            },
        });
        currentStage.replaceWith(newStage);
    };

    // Save template
    const saveTemplate = async () => {
        try {
            const serializedDOM = serializeDOM(currentStage);
            await saveTemplatetoIndexDB(serializedDOM);
            addNotification("success", "User Template Saved!");
            fetchUserTemplates();
        } catch (error) {
            console.error("Error saving template:", error);
            addNotification("error", "Error Saving User Template!");
        }
    };

    // Reset to default template
    const resetTemplate = () => {
        try {
            const newStage = recreateDOM(
                defaultInitialTemplate.data
            ) as HTMLElement;
            updatePdfRef(newStage);
            addNotification("success", "Template Reset Successful!");
        } catch (error) {
            console.error("Error resetting template", error);
            addNotification("error", "Error Resetting Template!");
        }
    };

    // Load template
    const loadTemplate = async (id: number, isAppTemplate: boolean) => {
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

    // Handle clicking a template
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
        loadTemplate(id, isAppTemplate);
    };

    // Delete a template
    const deleteTemplate = async (id: number) => {
        try {
            await deleteTemplateFromIndexDB(id);
            addNotification("success", "User Template Deleted!");
            fetchUserTemplates();
        } catch (error) {
            console.error("Error deleting template:", error);
            addNotification("error", "Error Deleting User Template!");
        }
    };

    return {
        userTemplates,
        saveTemplate,
        resetTemplate,
        handleClickTemplate,
        deleteTemplate,
    };
};
