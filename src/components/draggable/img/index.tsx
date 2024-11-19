import imgPlaceholder from "../../../assets/image-placeholder.jpg";

interface ImagePropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const Img = ({ drag }: ImagePropsType) => {
    return (
        <img
            draggable
            data-category="img"
            onDragStart={(e) => drag(e)}
            className="draggable-element h-auto max-w-full max-h-[500px]"
            src={imgPlaceholder}
            alt="image description"
        />
    );
};
