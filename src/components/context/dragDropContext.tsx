import { createContext, useContext, ReactNode, useRef } from "react";

interface DragDropProviderPropsType {
    children: ReactNode;
}

const DragDropContext = createContext<{
    draggedElementRef: React.RefObject<HTMLElement | null>;
    setDraggedElement: (element: HTMLElement | null) => void;
} | null>(null);

export const DragDropProvider = ({ children }: DragDropProviderPropsType) => {
    const draggedElementRef = useRef<HTMLElement | null>(null);

    const setDraggedElement = (element: HTMLElement | null) => {
        draggedElementRef.current = element;
    };

    return (
        <DragDropContext.Provider
            value={{
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
