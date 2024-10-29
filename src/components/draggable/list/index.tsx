interface ListPropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const List = ({ drag }: ListPropsType) => {
    return (
        <div
            draggable
            onDragStart={(e) => drag(e)}
            className="draggable-element w-full h-full max-w-full max-h-full block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-0 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        >
            List (Work in progress)
        </div>
    );
};
