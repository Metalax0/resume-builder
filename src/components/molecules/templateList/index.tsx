import React, { memo, useEffect, useState } from "react";
import {
    TemplateListProps,
    TemplateRefinedType,
} from "../../../types/templates";
import imgPlaceholder from "../../../assets/image-placeholder.jpg";
import { processTemplates } from "../../../util/templatesHelper";

export const TemplateList: React.FC<TemplateListProps> = memo(
    ({ target, templates, activeIndex, onClickTemplate, onDeleteTemplate }) => {
        const [imgDataArr, setimgDataArr] = useState<string[]>([]);

        useEffect(() => {
            getTemplatesThumbArr();
        }, []);

        const getTemplatesThumbArr = async () => {
            const templatesArr = await processTemplates(templates);
        };

        if (templates.length === 0) {
            return (
                <p className="text-gray-800 rounded-sm italic font-bold">
                    Empty: No templates saved
                </p>
            );
        }

        console.log(imgDataArr);

        return (
            <div className="flex gap-2 flex-wrap">
                {templates.map((item: TemplateRefinedType, index: number) => (
                    <div
                        key={`template-${item.id}`}
                        className={`${
                            activeIndex === item.id
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-yellow-300 hover:bg-yellow-400"
                        } template-preview relative p-5 border-2 border-blue-800 hover:cursor-pointer rounded-lg`}
                        onClick={() => onClickTemplate(item.id)}
                    >
                        {target === "User" && (
                            <button
                                className="absolute top-0 right-0 w-5 h-5 text-white bg-red-500 rounded-md flex items-center justify-center hover:bg-red-600 focus:outline-none"
                                onClick={(e) => onDeleteTemplate(e, item.id)}
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        )}
                        <img
                            src={imgDataArr[index] ?? imgPlaceholder}
                            className="h-full w-full rounded-lg"
                            alt={"template-thumbail-" + { target } + item.id}
                        ></img>
                        <span>
                            {target} Template {item.id + 1}
                        </span>
                    </div>
                ))}
            </div>
        );
    }
);

TemplateList.displayName = "TemplateList";
