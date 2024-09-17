export enum BttnTypeEnum {
    primary,
    secondary,
}

export interface ButtonPropsType {
    bttnName: string;
    bttnType: BttnTypeEnum;
    bttnAction: () => void;
}
