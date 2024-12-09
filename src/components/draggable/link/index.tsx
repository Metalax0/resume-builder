import { useEffect, useRef } from "react";

export const Link = () => {
    const editableRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (editableRef.current) {
            editableRef.current.innerHTML = "Link";
        }
    }, []);

    return (
        <a
            draggable
            contentEditable
            ref={editableRef}
            target="_blank"
            data-category="link"
            data-link={"#"}
            className="draggable-element flex items-center justify-center w-full h-full max-w-full resize p-2 text-[14px] text-gray-900 bg-gray-50 focus:outline-0"
            style={{ textAlign: "center" }}
        ></a>
    );
};
