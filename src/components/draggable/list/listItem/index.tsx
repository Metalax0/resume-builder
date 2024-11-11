interface ListItemPropsType {
    symbol: JSX.Element;
}

export const ListItem = ({ symbol }: ListItemPropsType) => {
    return (
        <div className="flex items-center gap-2 w-full h-auto max-w-full max-h-full">
            <span className="list-symbol"> {symbol} </span>
            <textarea
                rows={1}
                className="w-full max-w-full max-h-full p-2.5 text-inherit bg-gray-50 focus:outline-0"
                placeholder="Item 1"
            ></textarea>
        </div>
    );
};
