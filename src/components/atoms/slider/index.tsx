interface SliderPropsType {
    title: string;
    value: number;
    handleChange: (value: number) => void;
    min?: number;
    max?: number;
    orientation?: "vertical" | "horizontal";
}

export const Slider = ({
    title,
    value,
    handleChange,
    min = 100,
    max = 1000,
    orientation = "horizontal",
}: SliderPropsType) => {
    const className =
        orientation === "horizontal"
            ? "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            : "h-full";

    return (
        <div className={`${orientation} mb-3`}>
            <p className="text-gray-800 font-bold">{title}</p>
            <div className="flex gap-3 items-center justify-center h-full">
                <input
                    id={"range-" + title}
                    type="range"
                    min={min}
                    max={max}
                    step={1}
                    value={value}
                    onChange={(e) => handleChange(Number(e.target.value))}
                    className={className}
                ></input>
                {orientation === "horizontal" && (
                    <p className="text-gray-800 font-bold">{value}</p>
                )}
            </div>
        </div>
    );
};
