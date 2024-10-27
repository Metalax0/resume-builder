import { createContext, useContext, ReactNode, useRef } from "react";

interface StageContextProviderPropsType {
    children: ReactNode;
}

const StageContext = createContext<{
    rowRef: React.RefObject<HTMLDivElement | null>;
    rowArrRef: React.RefObject<HTMLDivElement[]>;
    draggedElementRef: React.RefObject<HTMLElement | null>;
    setRowRef: (element: HTMLDivElement | null) => void;
    setRowArrRef: (element: HTMLDivElement[]) => void;
    setDraggedElement: (element: HTMLElement | null) => void;
} | null>(null);

export const StageProvider = ({ children }: StageContextProviderPropsType) => {
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
        <StageContext.Provider
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
        </StageContext.Provider>
    );
};

export const useStageContext = () => {
    const context = useContext(StageContext);
    if (!context) {
        throw new Error("StageContext must be used within a StageProvider");
    }
    return context;
};
