import { useEffect, useRef } from "react";

export const HeadingTertiary = () => {
    const editableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (editableRef.current) {
            editableRef.current.innerHTML = "Heading 3";
        }
    }, []);

    return (
        <div
            draggable
            contentEditable
            ref={editableRef}
            data-category="heading"
            className="draggable-element flex items-center justify-center text-center w-full h-full max-w-full max-h-full resize-none text-[18px] text-gray-900 bg-gray-50  focus:outline-0"
        ></div>
    );
};
