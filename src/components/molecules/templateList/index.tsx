import React, { memo, useEffect, useState } from "react";
import {
    TemplateListProps,
    TemplateRefinedType,
} from "../../../types/templates";
import imgPlaceholder from "../../../assets/image-placeholder.jpg";
import { processTemplates } from "../../../util/templatesHelper";
import html2canvas from "html2canvas";

export const TemplateList: React.FC<TemplateListProps> = memo(
    ({ target, templates, activeIndex, onClickTemplate, onDeleteTemplate }) => {
        const [imgDataArr, setimgDataArr] = useState<string[]>([]);

        useEffect(() => {
            getTemplatesThumbArr();
        }, [target]);

        const getTemplatesThumbArr = async () => {
            const dataUrlArr: string[] = [];
            const templatesArr = await processTemplates(templates);

            // Create hidden container for rendering (used to generate template thumbnails)
            const hiddenContainer = document.createElement("div");
            hiddenContainer.id = "hidden-container";
            hiddenContainer.style.position = "absolute";
            hiddenContainer.style.top = "-9999px";
            hiddenContainer.style.left = "-9999px";
            hiddenContainer.style.opacity = "0";
            document.body.appendChild(hiddenContainer);

            try {
                for (const element of templatesArr) {
                    const clonedTemplate = element.cloneNode(
                        true
                    ) as HTMLElement;
                    clonedTemplate.style.height = "100%";
                    hiddenContainer.appendChild(clonedTemplate);
                    const canvas = await html2canvas(clonedTemplate, {
                        scale: 2,
                    });
                    const dataURL = canvas.toDataURL();
                    dataUrlArr.push(dataURL);
                    hiddenContainer.removeChild(clonedTemplate);
                }

                setimgDataArr(dataUrlArr);
            } catch (error) {
                console.error(
                    "Error converting element to an image [components/molecules/templateList]",
                    error
                );
            } finally {
                // Cleanup hidden container
                document.body.removeChild(hiddenContainer);
            }
        };

        if (templates.length === 0) {
            return (
                <p className="text-gray-800 rounded-sm italic font-bold">
                    Empty: No templates saved
                </p>
            );
        }

        return (
            <div className="flex gap-2 flex-wrap">
                {templates.map((item: TemplateRefinedType, index: number) => (
                    <div
                        key={`template-${item.id}`}
                        className={`${
                            activeIndex === item.id
                                ? "border-green-500 hover:border-green-600"
                                : "border-blue-600 hover:border-blue-700"
                        } template-preview relative p-0 border-4 hover:cursor-pointer rounded-xl`}
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
                            className="h-auto w-auto rounded-lg"
                            alt={"template-thumbnail-" + { target } + item.id}
                        ></img>
                    </div>
                ))}
            </div>
        );
    }
);

TemplateList.displayName = "TemplateList";
