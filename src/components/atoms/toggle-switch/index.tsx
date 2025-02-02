export interface ToggleSwitchPropsType {
    id: string;
    labelOn: string;
    labelOff: string;
    isToggled: boolean;
    action: () => void;
}

export const ToggleSwitch = ({
    id,
    labelOn,
    labelOff,
    isToggled,
    action,
}: ToggleSwitchPropsType) => {
    return (
        <div className="relative flex items-center gap-1 space-x-2 m-0 select-non">
            <span className="text-black">{labelOff}</span>

            <div className="relative w-12 h-6 mx-10">
                <input
                    type="checkbox"
                    id={id}
                    className="sr-only"
                    checked={isToggled}
                    onChange={action}
                />
                <label
                    htmlFor={id}
                    className={`absolute top-0 left-0 w-full h-full rounded-full cursor-pointer transition-all duration-300 ease-in-out
                    ${isToggled ? "bg-green-500" : "bg-gray-600"}`}
                />
                <span
                    className={`absolute top-[1px] left-[1px] w-[23px] h-[23px] rounded-full bg-white shadow-md transition-all duration-300 ease-in-out pointer-events-none
                    ${isToggled ? "translate-x-[25px]" : ""}`}
                />
            </div>

            <span className="text-black">{labelOn}</span>
        </div>
    );
};
