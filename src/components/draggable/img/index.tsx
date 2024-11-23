import imgPlaceholder from "../../../assets/image-placeholder.jpg";

export const Img = () => {
    return (
        <img
            draggable
            data-category="img"
            className="draggable-element h-full max-w-full max-h-[500px] object-contain"
            src={imgPlaceholder}
            alt="image description"
        />
    );
};
