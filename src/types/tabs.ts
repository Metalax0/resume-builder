export enum TabsEnum {
    settings,
    picker,
    properties,
    templates,
}

export interface PickerTabType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
    drop: (e: React.DragEvent<HTMLElement>) => void;
}
