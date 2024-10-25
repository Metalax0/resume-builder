import { createContext, useContext, ReactNode, useRef } from "react";

interface DragDropProviderPropsType {
    children: ReactNode;
}

const DragDropContext = createContext<{
    draggedElementRef: React.RefObject<HTMLElement | null>;
    setDraggedElement: (element: HTMLElement | null) => void;
    rowRef: React.RefObject<HTMLElement | null>;
} | null>(null);

export const DragDropProvider = ({ children }: DragDropProviderPropsType) => {
    const rowRef = useRef<null | HTMLDivElement>(null);
    const draggedElementRef = useRef<HTMLElement | null>(null);

    const setDraggedElement = (element: HTMLElement | null) => {
        draggedElementRef.current = element;
    };

    // const setRowRef

    return (
        <DragDropContext.Provider
            value={{
                rowRef,
                draggedElementRef,
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
