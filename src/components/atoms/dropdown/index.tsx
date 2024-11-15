import { ChangeEvent } from "react";

export interface DropDownPropsType {
    data: {
        title: string;
        options: { value: string[]; label: string[] };
        styles?: any;
    };
    value: string;
    handleChange: (value: string) => void;
}

export const Dropdown = ({ data, value, handleChange }: DropDownPropsType) => {
    const { title, options, styles } = data;

    const handleDropDownChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleChange(e.target.value);
    };

    return (
        <div>
            <form className="max-w-sm mx-auto">
                <p className="my-2  text-gray-800 font-bold">{title}</p>

                <select
                    id="countries"
                    className="bg-gray-700 border border-gray-300 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    onChange={(e) => handleDropDownChange(e)}
                    value={value}
                >
                    {options.value.map((value: string, index: number) => (
                        <option
                            key={value}
                            value={value}
                            style={styles ? styles[index] : {}}
                        >
                            {options.label[index]}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
};
