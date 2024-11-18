interface ListPropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const List = ({ drag }: ListPropsType) => {
    return (
        <ul
            draggable
            data-category="list"
            onDragStart={(e) => drag(e)}
            className="draggable-element text-left flex flex-col w-full h-full px-3 space-y-1 bg-gray-50 list-inside list-disc text-gray-900"
        >
            <li className="flex flex-1 w-full items-center">
                <span className="mr-2">•</span>
                <textarea
                    rows={1}
                    className="w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0"
                    style={{ textAlign: "inherit" }}
                    placeholder="Item 1"
                ></textarea>
            </li>
            <li className="flex flex-1 w-full items-center">
                <span className="mr-2">•</span>
                <textarea
                    rows={1}
                    className="w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0"
                    style={{ textAlign: "inherit" }}
                    placeholder="Item 2"
                ></textarea>
            </li>
            <li className="flex flex-1 w-full items-center">
                <span className="mr-2">•</span>
                <textarea
                    rows={1}
                    className="w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0"
                    style={{ textAlign: "inherit" }}
                    placeholder="Item 3"
                ></textarea>
            </li>
        </ul>
    );
};
