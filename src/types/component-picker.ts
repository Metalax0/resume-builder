export interface ComponentPickerType {
    drag: (e: React.DragEvent<HTMLDivElement>) => void;
    drop: (e: React.DragEvent<HTMLDivElement>) => void;
}
