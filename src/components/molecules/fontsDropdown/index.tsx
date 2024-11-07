import { Dropdown } from "../../atoms/dropdown";

export interface FontsDropDownPropsType {
    value: string;
    onChange: (newFont: string) => void;
}

const fontFamilyOptions = {
    title: "Font Family",
    options: [
        "Arial, sans-serif",
        "Verdana, sans-serif",
        "Tahoma, sans-serif",
        "'Trebuchet MS', sans-serif",
        "'Times New Roman', serif",
        "Georgia, serif",
        "Garamond, serif",
        "'Courier New', monospace",
        "'Brush Script MT', cursive",
    ],
    styles: [
        { fontFamily: "Arial, sans-serif" },
        { fontFamily: "Verdana, sans-serif" },
        { fontFamily: "Tahoma, sans-serif" },
        { fontFamily: "'Trebuchet MS', sans-serif" },
        { fontFamily: "'Times New Roman', serif" },
        { fontFamily: "Georgia, serif" },
        { fontFamily: "Garamond, serif" },
        { fontFamily: "'Courier New', monospace" },
        { fontFamily: "'Brush Script MT', cursive" },
    ],
};

export const FontsDropDown = ({ value, onChange }: FontsDropDownPropsType) => {
    return (
        <Dropdown
            data={fontFamilyOptions}
            value={value}
            handleChange={onChange}
        />
    );
};
