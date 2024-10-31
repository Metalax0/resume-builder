interface ListItemPropsType {
    symbol: JSX.Element;
}

export const ListItem = ({ symbol }: ListItemPropsType) => {
    return (
        <div className="flex items-center gap-2 w-full h-auto max-w-full max-h-full">
            <span> {symbol} </span>
            <textarea
                rows={1}
                className="w-full h-auto max-w-full max-h-full resize-none block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-0 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Item 1"
            ></textarea>
        </div>
    );
};
