export enum InputTextVarient {
    draggable,
    nonDraggable,
}

export interface InputTextPropsType {
    varient: InputTextVarient;
    placeholder: string;
    text?: string;
    title?: string;
    maxLength?: number;
    onChange?: (value: string) => void;
}

export const InputText = ({
    varient,
    title,
    text,
    maxLength = 255,
    onChange = () => {},
    placeholder,
}: InputTextPropsType) => {
    const handleRenderLogic = () => {
        if (varient === InputTextVarient.nonDraggable)
            return (
                <div className="mb-3 flex flex-col gap-1">
                    {title && (
                        <p className="text-gray-800 font-bold">{title}</p>
                    )}

                    <input
                        maxLength={maxLength}
                        value={text}
                        onChange={(e) => onChange(e.target.value)}
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={placeholder}
                        required
                    />
                </div>
            );
        else
            return (
                <input
                    type="text"
                    className="w-full h-full text-center max-w-full max-h-full resize block text-inherit bg-inherit focus:outline-0"
                    style={{ textAlign: "inherit" }}
                    placeholder={placeholder}
                    required
                />
            );
    };

    return <>{handleRenderLogic()}</>;
};
