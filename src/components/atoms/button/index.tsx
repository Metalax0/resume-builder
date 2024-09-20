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
                "bg-green-500 hover:bg-green-600 disabled:bg-gray-500 ";
            break;

        case BttnTypeEnum.secondary:
            bttnClassName = "bg-red-500 hover:bg-red-600 disabled:bg-gray-500";
            break;

        default:
            break;
    }

    return (
        <button
            className={`py-2 px-7 rounded-md global-transition disabled:cursor-not-allowed ${bttnClassName}`}
            onClick={bttnAction}
            disabled={isDisabled}
        >
            {bttnName}
        </button>
    );
};
