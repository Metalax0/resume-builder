import { TemplateRefinedType } from "../types/templates";
import { recreateDOM } from "./JsonAndDomConversion";

export const processTemplates = async (
    templates: TemplateRefinedType[]
): Promise<HTMLElement[]> => {
    try {
        // Deserialize templates to recreate DOM elements
        const deserializedTemplates = templates
            .map((template) => {
                if (template.data) {
                    return recreateDOM(template.data);
                }
                return null;
            })
            .filter((template) => template !== null) as HTMLElement[];

        return deserializedTemplates;
    } catch (error) {
        console.error("Error processing templates:", error);
        return [];
    }
};
