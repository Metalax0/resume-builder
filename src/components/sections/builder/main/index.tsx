import { useEffect, useRef } from "react";
import { useSettingsContext } from "../../../context/settingsContext";
import { updateMinHeightOnDrop } from "../../../../util/interceptDropEvent";

export const Main = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const { settingsState, settingsDispatch } = useSettingsContext();

    // used to control min height of col (checks on every drop event)
    useEffect(() => {
        const handleDrop = (e: DragEvent) => {
            e.preventDefault();
            updateMinHeightOnDrop();
        };

        document.addEventListener("drop", handleDrop);

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("drop", handleDrop);
        };
    }, []);

    useEffect(() => {
        settingsDispatch({
            value: { pdfRef: contentRef },
        });
    }, [settingsDispatch, settingsState.pdfRef]);

    useEffect(() => {
        const zoomValue = settingsState.builderZoom / 100;
        contentRef.current!.style.transform = `scale(${zoomValue})`;
        contentRef.current!.style.transformOrigin = "top center";
    }, [settingsState.builderZoom]);

    return <div ref={contentRef} className="" id="cv-main" />;
};
