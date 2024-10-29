import { createContext, useContext, ReactNode, useRef } from "react";

interface StageContextProviderPropsType {
    children: ReactNode;
}

const StageContext = createContext<{
    rowRef: React.RefObject<HTMLElement | null>;
    colRef: React.RefObject<HTMLElement | null>;
    rowArrRef: React.RefObject<HTMLElement[]>;
    draggedElementRef: React.RefObject<HTMLElement | null>;
    setRowRef: (element: HTMLElement | null) => void;
    setColRef: (element: HTMLElement | null) => void;
    setRowArrRef: (element: HTMLElement[]) => void;
    setDraggedElement: (element: HTMLElement | null) => void;
} | null>(null);

export const StageProvider = ({ children }: StageContextProviderPropsType) => {
    const rowRef = useRef<null | HTMLElement>(null);
    const rowArrRef = useRef<HTMLElement[]>([]);
    const colRef = useRef<null | HTMLElement>(null);
    const draggedElementRef = useRef<HTMLElement | null>(null);

    const setRowRef = (element: HTMLElement | null) => {
        rowRef.current = element;
    };

    const setColRef = (element: HTMLElement | null) => {
        colRef.current = element;
    };

    const setDraggedElement = (element: HTMLElement | null) => {
        draggedElementRef.current = element;
    };

    const setRowArrRef = (element: HTMLElement[]) => {
        rowArrRef.current = element;
    };

    return (
        <StageContext.Provider
            value={{
                rowRef,
                colRef,
                rowArrRef,
                draggedElementRef,
                setRowRef,
                setColRef,
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
