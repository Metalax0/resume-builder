export enum BttnTypeEnum {
    primary,
    secondary,
    tersary,
}

export interface ButtonPropsType {
    bttnName: string;
    bttnType: BttnTypeEnum;
    isDisabled?: boolean;
    isCircular?: boolean;
    bttnAction: () => void;
}
