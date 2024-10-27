interface ParagraphPropsType {
    text: string;
    drag: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const Paragraph = ({ text, drag }: ParagraphPropsType) => {
    return (
        <p
            draggable
            onDragStart={(e) => drag(e)}
            className="draggable-element flex justify-center items-center flex-[1] bg-green-400 text-center w-full h-full text-black"
        >
            {text}
        </p>
    );
};
