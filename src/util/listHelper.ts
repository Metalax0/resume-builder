export const addListItem = (selected: HTMLElement) => {
    // Create a new list item element
    const newItem = document.createElement("li");
    newItem.className = "flex flex-1 w-full items-center list-disc";

    // Add the bullet point span
    const bullet = document.createElement("span");
    bullet.className = "mr-2";
    //
    bullet.textContent = selected?.firstChild?.firstChild?.textContent || "*";
    newItem.appendChild(bullet);

    // Create the textarea
    const div = document.createElement("div");
    div.contentEditable = "true";
    div.className =
        "w-full max-w-full max-h-full p-1 text-inherit bg-gray-50 focus:outline-0";
    div.style.textAlign = "inherit";
    div.textContent = `Item ${selected.children.length + 1}`;
    newItem.appendChild(div);

    newItem.appendChild(div);

    // Append the new list item to the selected list
    selected.appendChild(newItem);
};

export const removeListItem = (selected: HTMLElement) => {
    // Check if there are any items in the list
    if (selected.lastElementChild) {
        selected.removeChild(selected.lastElementChild);
    }
};

export const updateListSymbol = (selected: HTMLElement, newSymbol: string) => {
    const listItems = selected.querySelectorAll("li");
    listItems.forEach((item) => {
        const span = item.querySelector("span");
        if (span) {
            span.textContent = newSymbol;
        }
    });
};
