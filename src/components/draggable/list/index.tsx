import { ListItem } from "./listItem";

interface ListPropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const List = ({ drag }: ListPropsType) => {
    const symbolList = [
        <>&#10033;</>,
        <>&#10032;</>,
        <>&#10033;</>,
        <>&#10004;</>,
        <>&#9900;</>,
        <>&diams;</>,
    ];

    const activeSymbol = symbolList[0];

    return (
        <div
            draggable
            onDragStart={(e) => drag(e)}
            className="draggable-element flex flex-col gap-2 w-full h-full max-w-full max-h-full p-2.5 text-sm text-gray-900 bg-gray-50"
        >
            <ListItem symbol={activeSymbol} />
            <ListItem symbol={activeSymbol} />
            <ListItem symbol={activeSymbol} />
        </div>
    );
};
