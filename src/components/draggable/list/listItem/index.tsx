interface ListItemPropsType {
    symbol: JSX.Element;
}

export const ListItem = () => {
    return (
        <ol className="list-decimal pl-5">
            <li className="flex items-center gap-2 w-full h-auto max-w-full max-h-full">
                <textarea
                    rows={1}
                    className="w-full max-w-full max-h-full p-2.5 text-inherit bg-gray-50 focus:outline-0"
                    placeholder={"Write Here"}
                ></textarea>
            </li>
        </ol>
    );
};
