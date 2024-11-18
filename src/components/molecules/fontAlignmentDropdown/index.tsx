import { Dropdown } from "../../atoms/dropdown";

export interface FontAlignmentDropDownPropsType {
    value: string;
    onChange: (newAlignment: string) => void;
}

const fontAlignmentOptions = {
    title: "Alignment",
    options: {
        label: ["left", "right", "center", "justify"],
        value: ["left", "right", "center", "justify"],
    },
};

export const FontAlignmentDropDown = ({
    value,
    onChange,
}: FontAlignmentDropDownPropsType) => {
    return (
        <Dropdown
            data={fontAlignmentOptions}
            value={value}
            handleChange={onChange}
        />
    );
};
