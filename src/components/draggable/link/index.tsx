import { InputText, InputTextVarient } from "../../atoms/input-text";

export const Link = () => {
    return (
        <a
            draggable
            target="_blank"
            data-category="link"
            data-link={"#"}
            className="draggable-element w-full h-full max-w-full resize block p-2 text-[14px] text-gray-900 bg-gray-50 focus:outline-0"
            style={{ textAlign: "center" }}
        >
            <InputText
                varient={InputTextVarient.draggable}
                placeholder="Enter Display Text"
            />
        </a>
    );
};
