import { createContext, useState, ReactNode, useContext } from "react";

interface AccordionContextProps {
    accordionStates: Record<string, boolean>;
    setAccordionState: (title: string, state: boolean) => void;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(
    undefined
);

// Context provider component
export const AccordionProvider = ({ children }: { children: ReactNode }) => {
    const [accordionStates, setAccordionStates] = useState<
        Record<string, boolean>
    >({});

    const setAccordionState = (title: string, state: boolean) => {
        setAccordionStates((prev) => ({ ...prev, [title]: state }));
    };

    return (
        <AccordionContext.Provider
            value={{ accordionStates, setAccordionState }}
        >
            {children}
        </AccordionContext.Provider>
    );
};

// Custom hook to use the Accordion context
export const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error(
            "useAccordion must be used within an AccordionProvider"
        );
    }
    return context;
};
