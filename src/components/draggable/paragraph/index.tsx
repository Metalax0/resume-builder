interface ParagraphPropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const Paragraph = ({ drag }: ParagraphPropsType) => {
    return (
        <textarea
            draggable
            data-category="paragraph"
            onDragStart={(e) => drag(e)}
            rows={5}
            className="draggable-element w-full h-full max-w-full max-h-full resize block p-2.5 text-[14px] text-gray-900 bg-gray-50 focus:outline-0"
            placeholder="Write a paragraph text here..."
        ></textarea>
    );
};
