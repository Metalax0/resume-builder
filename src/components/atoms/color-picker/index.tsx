interface ColorPickerPropsType {
    title: string;
    color: string;
    handleChange: (value: string) => void;
}

export const ColorPicker = ({
    title,
    color,
    handleChange,
}: ColorPickerPropsType) => {
    return (
        <div className="flex flex-col gap-1">
            <p className="text-gray-800 font-bold">{title}</p>
            <input
                type="color"
                id="favcolor"
                value={color}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};
