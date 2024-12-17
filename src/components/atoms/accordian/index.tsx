import { ReactNode } from "react";

export interface AccordionProps {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

export const Accordion = ({
    title,
    children,
    isOpen,
    onToggle,
}: AccordionProps) => {
    return (
        <div className="border-2 border-gray-600 bg-orange-300 rounded-sm shadow-xl">
            <h5>
                <button
                    type="button"
                    className="flex items-center justify-between w-full px-3 py-2 font-semibold bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors gap-3"
                    onClick={onToggle}
                    aria-expanded={isOpen}
                >
                    <span>{title}</span>
                    <svg
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h5>
            {children && (
                <div
                    className={`flex flex-col gap-3 p-3 bg-transparent text-gray-300 transition-all duration-300 ${
                        isOpen
                            ? "max-h-screen opacity-100"
                            : "max-h-0 opacity-0 py-0"
                    } overflow-hidden`}
                >
                    {children}
                </div>
            )}
        </div>
    );
};
