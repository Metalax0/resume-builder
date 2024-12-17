import { useEffect } from "react";
import { hasGrandchildren } from "../util/hasGrandchildrenElement";

export const useDraggableElements = (
    drag: (e: React.DragEvent<HTMLElement>) => void,
    setDraggedElement: (elem: HTMLElement | null) => void,
    setSelectedRef: (elem: HTMLElement) => void
) => {
    useEffect(() => {
        const draggables = document.querySelectorAll(".draggable-element");

        const handleDragStart = (e: Event) => {
            e.stopPropagation();
            const dragEvent = e as unknown as React.DragEvent<HTMLElement>;
            drag(dragEvent);
            setDraggedElement(dragEvent.currentTarget as HTMLElement);
        };

        const handleDragEnd = () => {
            setDraggedElement(null);
        };

        const handleElementClick = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLElement;
            const category = target.getAttribute("data-category");

            if (category === "blocks" && hasGrandchildren(target)) return;
            setSelectedRef(target);
        };

        draggables.forEach((draggable) => {
            const element = draggable as HTMLElement;
            element.addEventListener("dragstart", handleDragStart);
            element.addEventListener("dragend", handleDragEnd);
            element.addEventListener("click", handleElementClick);
        });

        return () => {
            draggables.forEach((draggable) => {
                const element = draggable as HTMLElement;
                element.removeEventListener("dragstart", handleDragStart);
                element.removeEventListener("dragend", handleDragEnd);
                element.removeEventListener("click", handleElementClick);
            });
        };
    }, [drag, setDraggedElement, setSelectedRef]);
};
