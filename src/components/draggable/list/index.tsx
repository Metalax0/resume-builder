import "./style.css";

interface ListPropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const List = ({ drag }: ListPropsType) => {
    return (
        <ul
            draggable
            data-category="list"
            onDragStart={(e) => drag(e)}
            className="draggable-element w-full px-3 space-y-1 bg-white list-inside list-disc text-black"
        >
            <li className="flex w-full items-center">
                <span className="mr-2">•</span>
                <textarea
                    rows={1}
                    className="w-full max-w-full max-h-full p-2.5 text-inherit bg-gray-50 focus:outline-0"
                    placeholder="Item 1"
                ></textarea>
            </li>
            <li className="flex w-full items-center">
                <span className="mr-2">•</span>
                <textarea
                    rows={1}
                    className="w-full max-w-full max-h-full p-2.5 text-inherit bg-gray-50 focus:outline-0"
                    placeholder="Item 2"
                ></textarea>
            </li>
            <li className="flex w-full items-center">
                <span className="mr-2">•</span>
                <textarea
                    rows={1}
                    className="w-full max-w-full max-h-full p-2.5 text-inherit bg-gray-50 focus:outline-0"
                    placeholder="Item 3"
                ></textarea>
            </li>
        </ul>
    );
};
