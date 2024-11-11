interface SubHeadingPropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const HeadingSecondary = ({ drag }: SubHeadingPropsType) => {
    return (
        <input
            draggable
            data-category="heading"
            onDragStart={(e) => drag(e)}
            className="draggable-element text-center w-full h-full max-w-full max-h-full resize-none text-[20px] text-gray-900 bg-gray-50  focus:outline-0"
            placeholder="Heading 2"
        ></input>
    );
};
