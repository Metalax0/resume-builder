import { BttnTypeEnum, ButtonPropsType } from "../../../types/button";

export const Button = ({ bttnName, bttnType, bttnAction }: ButtonPropsType) => {
    let bttnClassName = "";
    switch (bttnType) {
        case BttnTypeEnum.primary:
            bttnClassName = "bg-blue-500 py-3 px-10 rounded-md";
            break;

        case BttnTypeEnum.secondary:
            bttnClassName = "bg-green-500 py-3 px-10 rounded-md";
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
