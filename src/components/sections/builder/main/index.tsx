import { useEffect, useRef } from "react";
import { useSettingsContext } from "../../../context/settingsContext";
import { SettingsReducerActions } from "../../../../types/settings";

export const Main = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const { settingsState, settingsDispatch } = useSettingsContext();

    useEffect(() => {
        settingsDispatch({
            type: SettingsReducerActions.setPdfRef,
            value: contentRef,
        });
    }, [settingsDispatch, settingsState.pdfRef]);

    return (
        <div ref={contentRef} className="max-w-[800px] flex-[2]" id="cv-main" />
    );
};
