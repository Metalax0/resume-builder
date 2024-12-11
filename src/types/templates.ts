import { ReactNode } from "react";

export interface TemplateRefinedType {
    id: number;
    data: TemplateRawType | null;
}

export interface TemplateRawType {
    attributes: {
        [key: string]: string;
    };
    children: Array<TemplateRawType | { text: string } | []>;
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
    arr: TemplateRawType[];
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
