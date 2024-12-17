import { useSettingsContext } from "../../../context/settingsContext";
import { useTemplatesContext } from "../../../context/templatesContext";
import { Button } from "../../../atoms/button";
import { ToggleSwitch } from "../../../atoms/toggle-switch";
import { TemplateList } from "../../../molecules/templateList";
import { BttnTypeEnum } from "../../../../types/button";
import { applicationTemplateArr } from "../../../../data/templateData";
import { useTemplateManager } from "../../../../hooks/useTemplateManager";

export const TemplatesTab = () => {
    const { templatesState, templatesDispatch } = useTemplatesContext();
    const { settingsState, settingsDispatch } = useSettingsContext();
    const currentStage = settingsState.pdfRef.current as HTMLElement;

    const {
        userTemplates,
        saveTemplate,
        resetTemplate,
        handleClickTemplate,
        deleteTemplate,
    } = useTemplateManager({
        currentStage,
        settingsDispatch,
        templatesDispatch,
        templatesState,
        applicationTemplateArr,
    });

    return (
        <div className="flex flex-col gap-6">
            <div>
                <p className="font-bold">Template Type</p>
                <ToggleSwitch
                    id="template-toggle"
                    labelOn="Application"
                    labelOff="User"
                    isToggled={templatesState.showAppTemplate}
                    action={() =>
                        templatesDispatch({
                            value: {
                                showAppTemplate:
                                    !templatesState.showAppTemplate,
                            },
                        })
                    }
                />
            </div>

            <div className="flex gap-2">
                <Button
                    bttnName="Save"
                    bttnType={BttnTypeEnum.primary}
                    bttnAction={saveTemplate}
                />
                <Button
                    bttnName="Reset"
                    bttnType={BttnTypeEnum.tersary}
                    bttnAction={resetTemplate}
                />
            </div>

            <TemplateList
                target={templatesState.showAppTemplate ? "Application" : "User"}
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
                onDeleteTemplate={(e, id) => {
                    e.stopPropagation();
                    deleteTemplate(id);
                }}
            />
        </div>
    );
};
