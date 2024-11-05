interface SliderPropsType {
    title: string;
    value: number;
    handleChange: (value: number) => void;
    min?: number;
    max?: number;
}

export const Slider = ({
    title,
    value,
    handleChange,
    min = 100,
    max = 1000,
}: SliderPropsType) => {
    return (
        <div className="my-5">
            <p className="text-gray-800 font-bold">{title}</p>
            <div className="flex gap-3 items-center justify-center">
                <input
                    id={"range-" + title}
                    type="range"
                    min={min}
                    max={max}
                    step={1}
                    value={value}
                    onChange={(e) => handleChange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                ></input>
                <p className="text-gray-800 font-bold">{value}</p>
            </div>
        </div>
    );
};
