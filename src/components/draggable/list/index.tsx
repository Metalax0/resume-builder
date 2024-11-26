import { useEffect, useRef } from "react";

export const List = () => {
    const listItemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        listItemRefs.current.forEach((itemRef, index) => {
            if (itemRef) {
                itemRef.innerHTML = `Item ${index + 1}`;
            }
        });
    }, []);

    return (
        <ul
            draggable
            data-category="list"
            className="draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900"
        >
            {["Item 1", "Item 2", "Item 3"].map((item, index) => (
                <li key={index} className="flex flex-1 w-full items-center">
                    <span className="mr-2">•</span>
                    <div
                        ref={(el) => (listItemRefs.current[index] = el)}
                        contentEditable
                        className="w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0"
                        style={{ textAlign: "inherit" }}
                    ></div>
                </li>
            ))}
        </ul>
    );
};
