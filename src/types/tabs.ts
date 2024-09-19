export enum TabsEnum {
    settings,
    picker,
    properties,
}

export interface PickerTabType {
    drag: (e: React.DragEvent<HTMLDivElement>) => void;
    drop: (e: React.DragEvent<HTMLDivElement>) => void;
}
