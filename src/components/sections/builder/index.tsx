import { useRef, useEffect, useState } from "react";
import "./style.css";
import BuilderLayout from "./layout";
import { MenuBar } from "./menubar";
import { AnimatedLoadingBar } from "@/components/molecules/animated-loading-bar";
import { useRowsAndColumns } from "@/hooks/useRowsAndColumns";
import { executeNTimes } from "@/util/executeNTimes";
import { useSettingsContext } from "@/components/context/settingsContext";
import { Main } from "./main";
import { useDraggableElements } from "@/hooks/useDraggableElements";
import { useSelectionHighlight } from "@/hooks/useSelectionHighlight";
import { useGridsAndOutlines } from "@/hooks/useGridsAndOutlines";
import { useStageContext } from "@/components/context/stageContext";
import { useSettings } from "@/hooks/useSettings";

export const Builder = () => {
    const { handleAddRow } = useRowsAndColumns();
    const { settingsState } = useSettingsContext();
    const { manageSelectionHighlight, manageGridsAndOutlines } = useSettings();
    const { drag } = useRowsAndColumns();
    const { setDraggedElement, setSelectedRef } = useStageContext();

    useDraggableElements(drag, setDraggedElement, setSelectedRef);
    useSelectionHighlight(
        manageSelectionHighlight,
        settingsState.showSelections
    );
    useGridsAndOutlines(manageGridsAndOutlines, settingsState.showOutlines);

    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [zoom, setZoom] = useState(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    useEffect(() => {
        executeNTimes(9, handleAddRow);
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.transform = `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`;
            contentRef.current.style.transformOrigin = "top left";
        }
    }, [zoom, offset]);

    const handleWheel = (event: React.WheelEvent) => {
        const zoomFactor = event.deltaY < 0 ? 1.1 : 0.9;
        setZoom((prevZoom) => Math.max(0.1, prevZoom * zoomFactor));
    };

    const handleMouseDown = (event: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart({
            x: event.clientX - offset.x,
            y: event.clientY - offset.y,
        });
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!isDragging) return;
        setOffset({
            x: event.clientX - dragStart.x,
            y: event.clientY - dragStart.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="flex flex-col h-screen bg-zinc-400 dark:bg-zinc-800 overflow-hidden">
            <AnimatedLoadingBar duration={900}>
                <div className="flex flex-col h-screen">
                    <MenuBar />
                    <BuilderLayout>
                        <div
                            ref={containerRef}
                            className="relative flex justify-center w-full h-full p-2 overflow-hidden"
                            onWheel={handleWheel}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >
                            <canvas className="absolute top-0 left-0 w-full h-full bg-zinc-400 dark:bg-zinc-800" />
                            <div
                                ref={contentRef}
                                id="canvas-content"
                                className="absolute top-0 left-0"
                            >
                                <Main />
                            </div>
                        </div>
                    </BuilderLayout>
                </div>
            </AnimatedLoadingBar>
        </div>
    );
};
