// contains static templates (application provided) stored in JSON format.
import { TemplateRefinedType } from "../types/templates";

export const defaultInitialTemplate: TemplateRefinedType = {
    id: 0,
    data: {
        tag: "DIV",
        attributes: {
            class: "",
            id: "cv-main",
            "data-events-initialized": "true",
            style: "transform: scale(0.7); transform-origin: center top;",
        },
        children: [
            {
                tag: "DIV",
                attributes: {
                    class: "section-row section-grid grid-visible",
                    "data-events-initialized": "true",
                },
                children: [
                    {
                        tag: "DIV",
                        attributes: {
                            class: "section-col section-grid grid-visible",
                            "data-events-initialized": "true",
                        },
                        children: [],
                    },
                ],
            },
            {
                tag: "DIV",
                attributes: {
                    class: "section-row section-grid grid-visible",
                    "data-events-initialized": "true",
                },
                children: [
                    {
                        tag: "DIV",
                        attributes: {
                            class: "section-col section-grid grid-visible",
                            "data-events-initialized": "true",
                        },
                        children: [],
                    },
                ],
            },
            {
                tag: "DIV",
                attributes: {
                    class: "section-row section-grid grid-visible",
                    "data-events-initialized": "true",
                },
                children: [
                    {
                        tag: "DIV",
                        attributes: {
                            class: "section-col section-grid grid-visible",
                            "data-events-initialized": "true",
                        },
                        children: [],
                    },
                ],
            },
            {
                tag: "DIV",
                attributes: {
                    class: "section-row section-grid grid-visible",
                    "data-events-initialized": "true",
                },
                children: [
                    {
                        tag: "DIV",
                        attributes: {
                            class: "section-col section-grid grid-visible",
                            "data-events-initialized": "true",
                        },
                        children: [],
                    },
                ],
            },
            {
                tag: "DIV",
                attributes: {
                    class: "section-row section-grid grid-visible active-cell",
                    "data-events-initialized": "true",
                },
                children: [
                    {
                        tag: "DIV",
                        attributes: {
                            class: "section-col section-grid grid-visible",
                            "data-events-initialized": "true",
                        },
                        children: [],
                    },
                ],
            },
        ],
    },
};

export const applicationTemplateArr: TemplateRefinedType[] = [
    {
        id: 0,
        data: {
            tag: "DIV",
            attributes: {
                class: "",
                id: "cv-main",
                style: "transform: scale(1); transform-origin: center top;",
            },
            children: [
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element flex items-center justify-center text-center w-full h-full max-w-full max-h-full resize-none text-[30px] text-gray-900 bg-gray-50 focus:outline-0",
                                        style: "font-family: Arial, sans-serif; text-align: center; font-size: 30px; color: rgb(17, 24, 39); font-style: normal; font-weight: 400; text-decoration: none;",
                                    },
                                    children: [
                                        {
                                            text: "Your Name",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "UL",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "list",
                                        class: "draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900",
                                        style: "font-family: Arial, sans-serif; text-align: left; font-size: 16px; color: rgb(17, 24, 39); font-style: normal; font-weight: 400; text-decoration: none;",
                                    },
                                    children: [
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "address",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "email",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "phone",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "paragraph",
                                        class: "draggable-element w-full h-full max-w-full max-h-full min-h-[37px] resize block p-2 text-[14px] text-gray-900 bg-gray-50 focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "About Me",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element text-center w-full h-full max-w-full max-h-full resize-none text-[20px] text-gray-900 bg-gray-50  focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "Experience",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element text-center w-full h-full max-w-full max-h-full resize-none text-[20px] text-gray-900 bg-gray-50  focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "Skills",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "UL",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "list",
                                        class: "draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900",
                                    },
                                    children: [
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "experience 1",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "experience",
                                                        },
                                                        {
                                                            text: " 2",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "experience ",
                                                        },
                                                        {
                                                            text: "3",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "UL",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "list",
                                        class: "draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900",
                                    },
                                    children: [
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "skills 1",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit; width: 302px; height: 32px;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "skills ",
                                                        },
                                                        {
                                                            text: "2",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "skills ",
                                                        },
                                                        {
                                                            text: "3",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element text-center w-full h-full max-w-full max-h-full resize-none text-[20px] text-gray-900 bg-gray-50  focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "Education",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element text-center w-full h-full max-w-full max-h-full resize-none text-[20px] text-gray-900 bg-gray-50  focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "Achievement/Certificates",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible active-cell",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "UL",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "list",
                                        class: "draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900",
                                    },
                                    children: [
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "education 1",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "education ",
                                                        },
                                                        {
                                                            text: " 2",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "education ",
                                                        },
                                                        {
                                                            text: "3",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "UL",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "list",
                                        class: "draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900",
                                    },
                                    children: [
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 1",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 2",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 3",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 1,
        data: {
            tag: "DIV",
            attributes: {
                class: "",
                id: "cv-main",
                "data-events-initialized": "true",
                style: "transform: scale(1); transform-origin: center top;",
            },
            children: [
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                        "data-events-initialized": "true",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                "data-events-initialized": "true",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "IMG",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "img",
                                        class: "draggable-element h-full max-w-full max-h-[500px] object-contain",
                                        src: "/src/assets/image-placeholder.jpg",
                                        alt: "image description",
                                    },
                                    children: [],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element flex items-center justify-center text-center w-full h-full max-w-full max-h-full resize-none text-[30px] text-gray-900 bg-gray-50 focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "Name",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                        "data-events-initialized": "true",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                "data-events-initialized": "true",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "paragraph",
                                        class: "draggable-element flex items-center justify-center w-full h-full max-w-full max-h-full min-h-[37px] resize p-2 text-[14px] text-gray-900 bg-gray-50 focus:outline-0",
                                        style: "font-family: Arial, sans-serif; text-align: center; font-size: 14px; color: rgb(17, 24, 39); font-style: normal; font-weight: 400; text-decoration: none;",
                                    },
                                    children: [
                                        {
                                            text: "About Me",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                        "data-events-initialized": "true",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                "data-events-initialized": "true",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element flex items-center justify-center text-center w-full h-full max-w-full max-h-full resize-none text-[20px] text-gray-900 bg-gray-50  focus:outline-0",
                                        style: "font-family: Arial, sans-serif; text-align: center; font-size: 20px; color: rgb(17, 24, 39); font-style: normal; font-weight: 400; text-decoration: none;",
                                    },
                                    children: [
                                        {
                                            text: "Skils",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element flex items-center justify-center text-center w-full h-full max-w-full max-h-full resize-none text-[20px] text-gray-900 bg-gray-50  focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "Experience",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                        "data-events-initialized": "true",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                "data-events-initialized": "true",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "UL",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "list",
                                        class: "draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900",
                                    },
                                    children: [
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 1",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 2",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 3",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "UL",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "list",
                                        class: "draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900",
                                    },
                                    children: [
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 1",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 2",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 3",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible active-cell",
                        "data-events-initialized": "true",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                "data-events-initialized": "true",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "A",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        target: "_blank",
                                        "data-category": "link",
                                        "data-link": "#",
                                        class: "draggable-element flex items-center justify-center w-full h-full max-w-full resize p-2 text-[14px] text-gray-900 bg-gray-50 focus:outline-0",
                                        style: "text-align: center;",
                                    },
                                    children: [
                                        {
                                            text: "Link",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "A",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        target: "_blank",
                                        "data-category": "link",
                                        "data-link": "#",
                                        class: "draggable-element flex items-center justify-center w-full h-full max-w-full resize p-2 text-[14px] text-gray-900 bg-gray-50 focus:outline-0",
                                        style: "text-align: center;",
                                    },
                                    children: [
                                        {
                                            text: "Link",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "A",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        target: "_blank",
                                        "data-category": "link",
                                        "data-link": "#",
                                        class: "draggable-element flex items-center justify-center w-full h-full max-w-full resize p-2 text-[14px] text-gray-900 bg-gray-50 focus:outline-0",
                                        style: "text-align: center;",
                                    },
                                    children: [
                                        {
                                            text: "Link",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 2,
        data: {
            tag: "DIV",
            attributes: {
                class: "",
                id: "cv-main",
                "data-events-initialized": "true",
                style: "transform: scale(0.7); transform-origin: center top;",
            },
            children: [
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                        "data-events-initialized": "true",
                        style: "height: 239px; width: 742px;",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                "data-events-initialized": "true",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "IMG",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "img",
                                        class: "draggable-element h-full max-w-full max-h-[500px] object-contain",
                                        src: "/src/assets/image-placeholder.jpg",
                                        alt: "image description",
                                    },
                                    children: [],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element flex items-center justify-center text-center w-full h-full max-w-full max-h-full resize-none text-[30px] text-gray-900 bg-gray-50 focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "Name",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                        "data-events-initialized": "true",
                        style: "width: 753px; height: 120px;",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                "data-events-initialized": "true",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element flex items-center justify-center text-center w-full h-full max-w-full max-h-full resize-none text-[20px] text-gray-900 bg-gray-50  focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "About Me",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "paragraph",
                                        class: "draggable-element flex items-center justify-center w-full h-full max-w-full max-h-full min-h-[37px] resize p-2 text-[14px] text-gray-900 bg-gray-50 focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "write here",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                        "data-events-initialized": "true",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                "data-events-initialized": "true",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element flex items-center justify-center text-center w-full h-full max-w-full max-h-full resize-none text-[20px] text-gray-900 bg-gray-50  focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "Experience",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "UL",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "list",
                                        class: "draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900",
                                    },
                                    children: [
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 1",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 2",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 3",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible",
                        "data-events-initialized": "true",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                "data-events-initialized": "true",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element flex items-center justify-center text-center w-full h-full max-w-full max-h-full resize-none text-[20px] text-gray-900 bg-gray-50  focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "Education",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "UL",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "list",
                                        class: "draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900",
                                    },
                                    children: [
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 1",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 2",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 3",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: "DIV",
                    attributes: {
                        class: "section-row section-grid grid-visible active-cell",
                        "data-events-initialized": "true",
                    },
                    children: [
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                "data-events-initialized": "true",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "DIV",
                                    attributes: {
                                        draggable: "true",
                                        contenteditable: "true",
                                        "data-category": "heading",
                                        class: "draggable-element flex items-center justify-center text-center w-full h-full max-w-full max-h-full resize-none text-[20px] text-gray-900 bg-gray-50  focus:outline-0",
                                    },
                                    children: [
                                        {
                                            text: "Skills",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: "DIV",
                            attributes: {
                                class: "section-col section-grid grid-visible",
                                style: "min-height: 30px;",
                            },
                            children: [
                                {
                                    tag: "UL",
                                    attributes: {
                                        draggable: "true",
                                        "data-category": "list",
                                        class: "draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900",
                                    },
                                    children: [
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 1",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 2",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            tag: "LI",
                                            attributes: {
                                                class: "flex flex-1 w-full items-center",
                                            },
                                            children: [
                                                {
                                                    tag: "SPAN",
                                                    attributes: {
                                                        class: "mr-2",
                                                    },
                                                    children: [
                                                        {
                                                            text: "•",
                                                        },
                                                    ],
                                                },
                                                {
                                                    tag: "DIV",
                                                    attributes: {
                                                        contenteditable: "true",
                                                        class: "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0",
                                                        style: "text-align: inherit;",
                                                    },
                                                    children: [
                                                        {
                                                            text: "Item 3",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
];
