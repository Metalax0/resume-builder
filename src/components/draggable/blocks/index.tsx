export interface BlocksPropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
    drop: (e: React.DragEvent<HTMLElement>) => void;
    orientation: "horizontal" | "vertical";
}

// Renders either 1x2 or 2x1 empty blocks (droppable)
export const Blocks = ({ drag, drop, orientation }: BlocksPropsType) => {
    const getBlocksClassName = () => {
        if (orientation === "vertical") return "flex-col";
        else return "";
    };

    return (
        <div
            draggable
            data-category="blocks"
            onDragStart={(e) => drag(e)}
            onDrop={(e) => e.stopPropagation()}
            className={`draggable-element flex justify-center items-center ${getBlocksClassName()} w-full h-full bg-white text-gray-900`}
        >
            <div
                className="w-full h-full section-col flex justify-center items-center border-2 border-gray-500"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => drop(e)}
            ></div>
            <div
                className="w-full h-full section-col flex justify-center items-center border-2 border-gray-500"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    drop(e);
                    e.stopPropagation();
                }}
            ></div>
        </div>
    );
};
