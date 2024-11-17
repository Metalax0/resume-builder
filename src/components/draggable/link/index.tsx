import { InputText, InputTextVarient } from "../../atoms/input-text";
import { usePropertiesContext } from "../../context/propertiesContext";

export interface LinkPropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const Link = ({ drag }: LinkPropsType) => {
    const { propertiesState } = usePropertiesContext();

    return (
        <a
            draggable
            href={propertiesState.element.redirectURL}
            target="_blank"
            data-category="link"
            onDragStart={(e) => drag(e)}
            onClick={(e) => e.preventDefault()}
        >
            <InputText
                varient={InputTextVarient.draggable}
                placeholder="Enter Display Text"
            />
        </a>
    );
};
