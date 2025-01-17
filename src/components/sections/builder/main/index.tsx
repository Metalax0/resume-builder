import { useEffect, useRef } from "react";
import { useSettingsContext } from "../../../context/settingsContext";

export const Main = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const { settingsState, settingsDispatch } = useSettingsContext();

    useEffect(() => {
        settingsDispatch({
            value: { pdfRef: contentRef },
        });
    }, [settingsDispatch, contentRef.current]);

    useEffect(() => {
        const zoomValue = 0.5;
        const mainRef = settingsState.pdfRef.current;

        if (mainRef) {
            mainRef.style.transform = `scale(${zoomValue})`;
            mainRef.style.transformOrigin = "top center";
        }
    }, [settingsState.builderZoom, settingsState.pdfRef]);

    return <div ref={contentRef} id="cv-main" />;
};
