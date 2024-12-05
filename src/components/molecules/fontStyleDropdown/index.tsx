import { Dropdown } from "../../atoms/dropdown";

export interface FontStyleDropDownPropsType {
    value: string;
    onChange: (newFont: string) => void;
}

const fontStyleOptions = {
    title: "Style",
    options: {
        label: ["normal", "italic"],
        value: ["normal", "italic"],
    },
};

export const FontStyleDropDown = ({
    value,
    onChange,
}: FontStyleDropDownPropsType) => {
    return (
        <Dropdown
            data={fontStyleOptions}
            value={value}
            handleChange={onChange}
        />
    );
};
