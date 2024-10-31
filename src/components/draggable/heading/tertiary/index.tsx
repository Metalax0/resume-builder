import { HeadingPropsType } from "../../../../types/draggableComponents";

export const HeadingTertiary = ({ drag }: HeadingPropsType) => {
    return (
        <input
            draggable
            onDragStart={(e) => drag(e)}
            className="draggable-element text-center w-full h-full max-w-full max-h-full resize-none block text-lg p-2 text-gray-900 bg-gray-50 rounded-lg border focus:outline-0 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Tertiary Heading"
        ></input>
    );
};
