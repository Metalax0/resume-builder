import { createContext, useContext, ReactNode, useRef } from "react";

interface DragDropProviderPropsType {
    children: ReactNode;
}

const DragDropContext = createContext<{
    rowRef: React.RefObject<HTMLDivElement | null>;
    rowArrRef: React.RefObject<HTMLDivElement[]>;
    draggedElementRef: React.RefObject<HTMLElement | null>;
    setRowRef: (element: HTMLDivElement | null) => void;
    setRowArrRef: (element: HTMLDivElement[]) => void;
    setDraggedElement: (element: HTMLElement | null) => void;
} | null>(null);

export const DragDropProvider = ({ children }: DragDropProviderPropsType) => {
    const rowRef = useRef<null | HTMLDivElement>(null);
    const rowArrRef = useRef<HTMLDivElement[]>([]);
    const draggedElementRef = useRef<HTMLElement | null>(null);

    const setRowRef = (element: HTMLDivElement | null) => {
        rowRef.current = element;
    };

    const setDraggedElement = (element: HTMLElement | null) => {
        draggedElementRef.current = element;
    };

    const setRowArrRef = (element: HTMLDivElement[]) => {
        rowArrRef.current = element;
    };

    return (
        <DragDropContext.Provider
            value={{
                rowRef,
                rowArrRef,
                draggedElementRef,
                setRowRef,
                setRowArrRef,
                setDraggedElement,
            }}
        >
            {children}
        </DragDropContext.Provider>
    );
};

export const useDragDrop = () => {
    const context = useContext(DragDropContext);
    if (!context) {
        throw new Error("useDragDrop must be used within a DragDropProvider");
    }
    return context;
};
