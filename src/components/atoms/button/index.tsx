import { BttnTypeEnum, ButtonPropsType } from "../../../types/button";

export const Button = ({
    bttnName,
    bttnType,
    isDisabled = false,
    isCircular = false,
    bttnAction,
}: ButtonPropsType) => {
    let bttnClassName = "";
    const bttnClassNameRounded = `${
        isCircular ? "rounded-full px-6" : "rounded-md px-7"
    }`;

    switch (bttnType) {
        case BttnTypeEnum.primary:
            bttnClassName =
                "bg-green-500 hover:bg-green-600 disabled:bg-gray-500 ";
            break;

        case BttnTypeEnum.secondary:
            bttnClassName = "bg-red-800 hover:bg-red-600 disabled:bg-gray-500";
            break;

        case BttnTypeEnum.tersary:
            bttnClassName =
                "text-gray-300 rounded-lg text-sm bg-gray-800 hover:bg-gray-700 border-gray-700";
            break;

        default:
            break;
    }

    return (
        <button
            className={`py-2 global-transition disabled:cursor-not-allowed ${bttnClassName} ${bttnClassNameRounded}`}
            onClick={bttnAction}
            disabled={isDisabled}
        >
            {bttnName}
        </button>
    );
};
