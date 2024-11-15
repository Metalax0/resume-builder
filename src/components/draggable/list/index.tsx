import "./style.css";

interface ListPropsType {
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const List = ({ drag }: ListPropsType) => {
    // const { propertiesState } = usePropertiesContext();
    // const { listBulletVariation, listCount } = propertiesState.element;

    // const renderLists = () => {
    //     const elemArr = Array.from({ length: listCount }, (_, index) => (
    //         <ListItem key={index} symbol={activeSymbol} />
    //     ));
    //     return elemArr;
    // };

    // style="list-style-type:disc;"

    return (
        <ul
            draggable
            data-category="list"
            onDragStart={(e) => drag(e)}
            className="draggable-element w-full max-w-md space-y-1 text-gray-500 bg-white list-inside list-disc dark:text-gray-400"
        >
            <li className="flex w-full items-center">
                <textarea
                    rows={1}
                    className="w-full max-w-full max-h-full p-2.5 text-inherit bg-gray-50 focus:outline-0"
                    placeholder="Item 1"
                ></textarea>
            </li>
        </ul>
    );
};
