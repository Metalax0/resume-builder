import { HeadingPropsType } from "../../../../types/draggableComponents";

export const HeadingPrimary = ({ drag }: HeadingPropsType) => {
    return (
        <input
            draggable
            onDragStart={(e) => drag(e)}
            className="draggable-element text-center w-full h-full max-w-full max-h-full resize-none text-3xl text-gray-900 bg-gray-50  focus:outline-0"
            placeholder="Primary Heading"
        ></input>
    );
};
