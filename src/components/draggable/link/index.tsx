import { InputText, InputTextVarient } from "../../atoms/input-text";

export interface LinkPropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const Link = ({ drag }: LinkPropsType) => {
    return (
        <a
            draggable
            target="_blank"
            data-category="link"
            data-link={"#"}
            className="draggable-element w-full h-full max-w-full resize block p-2 text-[14px] text-gray-900 bg-gray-50 focus:outline-0"
            onDragStart={(e) => drag(e)}
        >
            <InputText
                varient={InputTextVarient.draggable}
                placeholder="Enter Display Text"
            />
        </a>
    );
};
