export interface BlocksPropsType {
    drop: (e: React.DragEvent<HTMLElement>) => void;
    orientation: "horizontal" | "vertical";
}

// Renders either 1x2 or 2x1 empty blocks (droppable)
export const Blocks = ({ drop, orientation }: BlocksPropsType) => {
    const getBlocksClassName = () => {
        if (orientation === "vertical") return "flex-col";
        else return "";
    };

    return (
        <div
            draggable
            data-category="blocks"
            onDrop={(e) => e.stopPropagation()}
            className={`draggable-element flex flex-1 gap-1 justify-center items-center ${getBlocksClassName()} w-full h-full text-gray-900`}
        >
            <div
                className="flex-1 w-full h-full section-col flex justify-center items-center border-[1px] border-gray-500"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => drop(e)}
            ></div>
            <div
                className="flex-1 w-full h-full section-col flex justify-center items-center border-[1px] border-gray-500"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    drop(e);
                    e.stopPropagation();
                }}
            ></div>
        </div>
    );
};
