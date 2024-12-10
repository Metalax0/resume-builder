import { ReactNode } from "react";

export interface TemplateType {
    attributes: {
        [key: string]: string;
    };
    children: Array<TemplateType | { text: string } | []>;
    tag: string;
}

/*
showAppTemplate:
    true = show app templates, 
    false = show user templates
 */
export interface TemplatesStateType {
    activeAppTemplateIndex: number;
    activeUserTemplateIndex: number;
    showAppTemplate: boolean;
    arr: TemplateType[];
}

export type TemplatesActionType = {
    value: Partial<TemplatesStateType>;
};

// Provider Props Type
export interface TemplatesProviderPropsType {
    children: ReactNode;
}

// Context Type
export interface TemplatesContextType {
    templatesState: TemplatesStateType;
    templatesDispatch: React.Dispatch<TemplatesActionType>;
}
