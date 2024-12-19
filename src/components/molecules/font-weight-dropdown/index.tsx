import { Dropdown } from "../../atoms/dropdown";

export interface FontWeightDropDownPropsType {
    value: string;
    onChange: (newFont: string) => void;
}

const fontWeightOptions = {
    title: "Weight",
    options: {
        label: ["normal", "semibold", "bold", "bolder"],
        value: ["normal", "semibold", "bold", "bolder"],
    },
};

export const FontWeightDropDown = ({
    value,
    onChange,
}: FontWeightDropDownPropsType) => {
    return (
        <Dropdown
            data={fontWeightOptions}
            value={value}
            handleChange={onChange}
        />
    );
};
