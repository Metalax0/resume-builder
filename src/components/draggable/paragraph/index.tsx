interface ParagraphPropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const Paragraph = ({ drag }: ParagraphPropsType) => {
    return (
        <textarea
            draggable
            onDragStart={(e) => drag(e)}
            rows={5}
            className="draggable-element w-full h-full max-w-full max-h-full resize block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-0 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Write a paragraph text here..."
        ></textarea>
    );
};
