import { useEffect, useRef } from "react";

export const Paragraph = () => {
    const editableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (editableRef.current) {
            editableRef.current.innerHTML = "Paragraph";
        }
    }, []);

    return (
        <div
            draggable
            contentEditable
            ref={editableRef}
            data-category="paragraph"
            className="draggable-element w-full h-full max-w-full max-h-full min-h-[37px] resize block p-2 text-[14px] text-gray-900 bg-gray-50 focus:outline-0"
        ></div>
    );
};
