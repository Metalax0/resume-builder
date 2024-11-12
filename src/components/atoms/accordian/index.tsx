import { useState, ReactNode } from "react";

export interface AccordionProps {
    title: string;
    children: ReactNode;
}

export const Accordion = ({ title, children }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-2 border-gray-600 bg-orange-300 rounded-sm shadow-xl">
            <h2>
                <button
                    type="button"
                    className="flex items-center justify-between w-full px-3 py-2 font-semibold bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors gap-3"
                    onClick={toggleAccordion}
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
            </h2>
            {isOpen && (
                <div className="p-3 bg-transparent text-gray-300 transition-colors">
                    {children}
                </div>
            )}
        </div>
    );
};
