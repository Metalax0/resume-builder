import { BttnTypeEnum, ButtonPropsType } from "../../../types/button";

export const Button = ({
    bttnName,
    bttnType,
    isDisabled = false,
    bttnAction,
}: ButtonPropsType) => {
    let bttnClassName = "";
    switch (bttnType) {
        case BttnTypeEnum.primary:
            bttnClassName =
                "bg-green-500 py-2 px-7 rounded-md hover:bg-green-600 disabled:bg-gray-500 disabled:cursor-not-allowed";
            break;

        case BttnTypeEnum.secondary:
            bttnClassName =
                "bg-red-500 py-2 px-7 rounded-md hover:bg-red-600 disabled:bg-gray-500 disabled:cursor-not-allowed";
            break;

        default:
            break;
    }

    return (
        <button
            className={bttnClassName}
            onClick={bttnAction}
            disabled={isDisabled}
        >
            {bttnName}
        </button>
    );
};
