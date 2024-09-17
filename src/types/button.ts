export enum BttnTypeEnum {
    primary,
    secondary,
}

export interface ButtonPropsType {
    bttnName: string;
    bttnType: BttnTypeEnum;
    isDisabled?: boolean;
    bttnAction: () => void;
}
