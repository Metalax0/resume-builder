import { BttnTypeEnum, ButtonPropsType } from "../../../types/button";

export const Button = ({ bttnName, bttnType, bttnAction }: ButtonPropsType) => {
    let bttnClassName = "";
    switch (bttnType) {
        case BttnTypeEnum.primary:
            bttnClassName =
                "bg-green-500 py-2 px-7 rounded-md hover:bg-green-600";
            break;

        case BttnTypeEnum.secondary:
            bttnClassName = "bg-red-500 py-2 px-7 rounded-md hover:bg-red-600";
            break;

        default:
            break;
    }

    return (
        <button className={bttnClassName} onClick={bttnAction}>
            {bttnName}
        </button>
    );
};
