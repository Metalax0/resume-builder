import { useState } from "react";

export interface ToggleSwitchPropsType {
    id: string;
}

export const ToggleSwitch = ({ id }: ToggleSwitchPropsType) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="relative w-12 h-6 m-5 select-none">
            <input
                type="checkbox"
                id={id}
                className="sr-only"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <label
                htmlFor={id}
                className={`absolute top-0 left-0 w-full h-full rounded-full cursor-pointer transition-all duration-300 ease-in-out
            ${isChecked ? "bg-green-500" : "bg-gray-300"}
          `}
            />
            <span
                className={`absolute top-[1px] left-[1px] w-[23px] h-[23px] rounded-full bg-white shadow-md transition-all duration-300 ease-in-out pointer-events-none
            ${isChecked ? "translate-x-[25px]" : ""}
          `}
            />
        </div>
    );
};
