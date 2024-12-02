import { useEffect, useRef } from "react";

export const HeadingPrimary = () => {
    const editableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (editableRef.current) {
            editableRef.current.innerHTML = "Heading 1";
        }
    }, []);

    return (
        <div
            draggable
            contentEditable
            ref={editableRef}
            data-category="heading"
            className="draggable-element text-center w-full h-full max-w-full max-h-full resize-none text-[30px] text-gray-900 bg-gray-50 focus:outline-0"
        ></div>
    );
};
