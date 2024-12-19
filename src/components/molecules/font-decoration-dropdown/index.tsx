import { Dropdown } from "../../atoms/dropdown";

export interface FontDecorationDropDownPropsType {
    value: string;
    onChange: (newFont: string) => void;
}

const fontDecorationOptions = {
    title: "Decoration",
    options: {
        label: ["none", "overline", "line-through", "underline"],
        value: ["none", "overline", "line-through", "underline"],
    },
};

export const FontDecorationDropDown = ({
    value,
    onChange,
}: FontDecorationDropDownPropsType) => {
    return (
        <Dropdown
            data={fontDecorationOptions}
            value={value}
            handleChange={onChange}
        />
    );
};
