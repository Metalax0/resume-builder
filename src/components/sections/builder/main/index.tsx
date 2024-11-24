import { useEffect, useRef } from "react";
import { useSettingsContext } from "../../../context/settingsContext";

export const Main = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const { settingsState, settingsDispatch } = useSettingsContext();

    useEffect(() => {
        settingsDispatch({
            value: { pdfRef: contentRef },
        });
    }, [settingsDispatch, settingsState.pdfRef]);

    useEffect(() => {
        const zoomValue = settingsState.builderZoom / 100;
        if (contentRef.current) {
            contentRef.current.style.transform = `scale(${zoomValue})`;
            contentRef.current.style.transformOrigin = "top center";
        }
    }, [settingsState.builderZoom]);

    return <div ref={contentRef} className="" id="cv-main" />;
};
